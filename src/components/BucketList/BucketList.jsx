import React, { useState } from "react";
import lookup from 'country-code-lookup';
import toast from 'react-hot-toast';
import "./BucketList.scss";

export default function BucketList() {
    const [wishes, setWishes] = useState([
        { id: 1, name: "Ukraine", isDone: true, flag: "https://flagcdn.com/w80/ua.png" },
    ]);
    const [inputValue, setInputValue] = useState("");

    const findFlag = (name) => {
        if (name === "United States") return "https://flagcdn.com/w80/us.png";
        const data = lookup.byCountry(name);
        return data ? `https://flagcdn.com/w80/${data.iso2.toLowerCase()}.png` : null;
    };

    const handleAdd = (e) => {
        e.preventDefault();
        if (!inputValue.trim()) return;

        const flagUrl = findFlag(inputValue);

        const newWish = {
            id: Date.now(),
            name: inputValue,
            isDone: false,
            flag: flagUrl || "https://flagcdn.com/w80/un.png"
        };

        setWishes([newWish, ...wishes]);
        setInputValue("");
        toast.success("New dream added! ");
    };

    const toggleDone = (id) => {
        setWishes(wishes.map(wish =>
            wish.id === id ? { ...wish, isDone: !wish.isDone } : wish
        ));
    };

    const handleDelete = (id) => {
        setWishes(wishes.filter(wish => wish.id !== id));
        toast("Removed from list", { icon: '🗑️' });
    };

    const completedCount = wishes.filter(w => w.isDone).length;
    const progress = wishes.length > 0 ? Math.round((completedCount / wishes.length) * 100) : 0;

    return (
        <section className="bucket-list">
            <h2 className="bucket-list__title">MY TRAVEL BUCKET LIST</h2>

            <div className="progress-container">
                <div className="progress-info">
                    <span>Dreams fulfilled: {completedCount}/{wishes.length}</span>
                    <span>{progress}%</span>
                </div>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
            </div>

            <form className="add-form" onSubmit={handleAdd}>
                <input
                    type="text"
                    placeholder="Where do you want to go next?"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit">Add Wish</button>
            </form>

            <div className="list-container">
                {wishes.map((wish) => (
                    <div
                        key={wish.id}
                        className={`wish-item ${wish.isDone ? 'done' : ''}`}
                    >
                        <div className="wish-left" onClick={() => toggleDone(wish.id)}>
                            <div className="checkbox">
                                {wish.isDone && <span>✔</span>}
                            </div>

                            <img src={wish.flag} alt="flag" className="wish-flag" />
                            <span className="wish-name">{wish.name}</span>
                        </div>

                        <button className="delete-btn" onClick={() => handleDelete(wish.id)}>
                            ×
                        </button>
                    </div>
                ))}

                {wishes.length === 0 && (
                    <p className="empty-msg">Your list is empty. Start dreaming!</p>
                )}
            </div>
        </section>
    );
}