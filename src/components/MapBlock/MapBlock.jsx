import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import lookup from 'country-code-lookup';
import toast from 'react-hot-toast';
import "./MapBlock.scss";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.onload = () => {
            resolve(fileReader.result);
        };
        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

export default function MapBlock() {
    const [selectedCountry, setSelectedCountry] = useState(null);

    const [visitedCountries, setVisitedCountries] = useState(() =>
        JSON.parse(localStorage.getItem("visitedCountries")) || []
    );
    const [memories, setMemories] = useState(() =>
        JSON.parse(localStorage.getItem("travelMemories")) || {}
    );

    useEffect(() => {
        localStorage.setItem("visitedCountries", JSON.stringify(visitedCountries));
        window.dispatchEvent(new Event("memoriesUpdated"));
    }, [visitedCountries]);

    useEffect(() => {
        try {
            localStorage.setItem("travelMemories", JSON.stringify(memories));
            window.dispatchEvent(new Event("memoriesUpdated"));
        } catch (e) {
            if (e.name === 'QuotaExceededError') {
                toast.error("Storage limit exceeded! Try smaller photos.");
            }
        }
    }, [memories]);

    const [isAddingMode, setIsAddingMode] = useState(false);
    const [memoryText, setMemoryText] = useState("");
    const [memoryPhotos, setMemoryPhotos] = useState([]);

    const handleCountryClick = (geo) => {
        const countryName = geo.properties.name;
        setSelectedCountry(geo.properties);

        if (memories[countryName]) {
            setMemoryText(memories[countryName].text || "");
            setMemoryPhotos(memories[countryName].photos || []);
            setIsAddingMode(false);
        } else {
            setMemoryText("");
            setMemoryPhotos([]);
            setIsAddingMode(false);
        }
    };

    const handleCloseModal = () => {
        setSelectedCountry(null);
        setIsAddingMode(false);
    };

    const handlePhotoUpload = async (e) => {
        const files = Array.from(e.target.files);

        const base64Files = await Promise.all(files.map(file => convertToBase64(file)));

        setMemoryPhotos([...memoryPhotos, ...base64Files]);
    };

    const handleSaveMemory = () => {
        if (!selectedCountry) return;
        const countryName = selectedCountry.name;

        setMemories({
            ...memories,
            [countryName]: {
                text: memoryText,
                photos: memoryPhotos
            }
        });

        setIsAddingMode(false);
        toast.success("Memory saved successfully!", {
            duration: 3000,
            style: {
                borderRadius: '10px',
                background: '#333',
                color: '#fff',
            },
        });
    };

    const getFlagUrl = (countryName) => {
        if (!countryName) return null;
        if (countryName === "United States of America") return "https://flagcdn.com/w80/us.png";

        const countryData = lookup.byCountry(countryName);
        if (countryData && countryData.iso2) {
            return `https://flagcdn.com/w80/${countryData.iso2.toLowerCase()}.png`;
        }
        return null;
    };

    const toggleVisited = () => {
        if (!selectedCountry) return;
        const countryName = selectedCountry.name;

        if (visitedCountries.includes(countryName)) {
            setVisitedCountries(visitedCountries.filter(name => name !== countryName));
        } else {
            setVisitedCountries([...visitedCountries, countryName]);
        }
    };

    const flagUrl = selectedCountry ? getFlagUrl(selectedCountry.name) : null;
    const isCurrentCountryVisited = selectedCountry && visitedCountries.includes(selectedCountry.name);

    const currentMemory = selectedCountry ? memories[selectedCountry.name] : null;

    return (
        <section className="map-block">
            <div className="map-block__container">
                <ComposableMap
                    width={800} height={400}
                    projectionConfig={{ scale: 145, center: [0, 0] }}
                    style={{ width: "100%", height: "auto" }}
                >
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map((geo) => {
                                const isVisited = visitedCountries.includes(geo.properties.name);

                                return (
                                    <Geography
                                        key={geo.rsmKey}
                                        geography={geo}
                                        style={{
                                            default: {
                                                fill: isVisited ? "#27ae60" : "#D6D6DA",
                                                outline: "none",
                                                stroke: "#ffffff",
                                                strokeWidth: 0.5
                                            },
                                            hover: { fill: "#21354A", outline: "none", cursor: "pointer" },
                                            pressed: { fill: "#4f7cff", outline: "none" }
                                        }}
                                        onClick={() => handleCountryClick(geo)}
                                    />
                                );
                            })
                        }
                    </Geographies>
                </ComposableMap>

                {selectedCountry && (
                    <div className="map-modal">
                        <button className="map-modal__close" onClick={handleCloseModal}>×</button>

                        {!isAddingMode ? (
                            <div className="map-modal__content">
                                <div className="map-modal__header">
                                    {flagUrl ? (
                                        <img src={flagUrl} alt={selectedCountry.name} className="map-modal__flag" />
                                    ) : (
                                        <span className="map-modal__icon">📍</span>
                                    )}
                                    <h3 className="map-modal__country-name">{selectedCountry.name}</h3>
                                </div>

                                <div className="map-modal__status">
                                    <label className="switch">
                                        <input
                                            type="checkbox"
                                            checked={isCurrentCountryVisited}
                                            onChange={toggleVisited}
                                        />
                                        <span className="slider round"></span>
                                    </label>
                                    <span className="status-text">
                                        {isCurrentCountryVisited ? "Visited" : "Not visited"}
                                    </span>
                                </div>

                                {isCurrentCountryVisited && currentMemory && (
                                    <div className="saved-memories-preview" style={{ marginTop: '20px', textAlign: 'left' }}>
                                        <p>{currentMemory.text}</p>
                                        <div className="form-previews" style={{ marginTop: '10px' }}>
                                            {currentMemory.photos && currentMemory.photos.map((photo, index) => (
                                                <img key={index} src={photo} alt="memory" className="preview-img" style={{ width: '60px', height: '60px', objectFit: 'cover', marginRight: '5px', borderRadius: '4px' }} />
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <button
                                    className={`map-modal__btn-add ${!isCurrentCountryVisited ? 'disabled' : ''}`}
                                    disabled={!isCurrentCountryVisited}
                                    onClick={() => setIsAddingMode(true)}
                                >
                                    {currentMemory ? "✎ Edit Memory" : "+ Add Memory"}
                                </button>
                            </div>
                        ) : (
                            <div className="map-modal__form">
                                <h4 className="form-title">ADD MEMORY</h4>

                                <textarea
                                    className="form-textarea"
                                    placeholder="Write your story here..."
                                    value={memoryText}
                                    onChange={(e) => setMemoryText(e.target.value)}
                                />

                                <div className="form-uploads">
                                    <label htmlFor="file-upload" className="custom-file-upload">
                                        Add Photos
                                    </label>
                                    <input id="file-upload" type="file" multiple onChange={handlePhotoUpload} />
                                </div>

                                <div className="form-previews">
                                    {memoryPhotos.map((photo, index) => (
                                        <img key={index} src={photo} alt="memory" className="preview-img" />
                                    ))}
                                </div>

                                <div className="form-actions">
                                    <button className="btn-cancel" onClick={() => setIsAddingMode(false)}>Cancel</button>
                                    <button className="btn-save" onClick={handleSaveMemory}>Save</button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}