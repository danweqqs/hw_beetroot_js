import React, { useState, useEffect } from "react";
import "./Profile.scss";

export default function Profile() {
    const [stats, setStats] = useState({
        visitedCount: 0,
        memoriesCount: 0,
        percentage: 0,
        level: 1,
        rank: "Tourist"
    });

    const calculateStats = () => {
        const visited = JSON.parse(localStorage.getItem("visitedCountries")) || [];
        const memories = JSON.parse(localStorage.getItem("travelMemories")) || {};

        const vCount = visited.length;
        const mCount = Object.keys(memories).length;

        const worldPercent = Math.round((vCount / 195) * 100);
        const lvl = Math.floor(vCount / 3) + 1;

        let rankName = "Tourist";
        if (vCount >= 3) rankName = "Explorer";
        if (vCount >= 10) rankName = "Voyager";
        if (vCount >= 20) rankName = "Globetrotter";
        if (vCount >= 50) rankName = "Legend";

        setStats({
            visitedCount: vCount,
            memoriesCount: mCount,
            percentage: worldPercent,
            level: lvl,
            rank: rankName
        });
    };

    useEffect(() => {
        calculateStats();
        window.addEventListener("memoriesUpdated", calculateStats);
        return () => window.removeEventListener("memoriesUpdated", calculateStats);
    }, []);

    return (
        <section className="profile">
            <h2 className="profile__title">PROFILE</h2>
            
            <div className="profile__grid">
                <div className="profile__card">
                    <span className="profile__count">{stats.visitedCount}</span>
                    <span className="profile__label">visited countries</span>
                </div>

                <div className="profile__card">
                    <span className="profile__count">{stats.memoriesCount}</span>
                    <span className="profile__label">Memories</span>
                </div>

                <div className="profile__card">
                    <span className="profile__count">{stats.percentage}%</span>
                    <span className="profile__label">of the world</span>
                </div>

                <div className="profile__card profile__card--level">
                    <span className="profile__count" style={{ color: "#4f7cff" }}>
                        Lvl {stats.level}
                    </span>
                    <span className="profile__label">{stats.rank}</span>
                </div>
            </div>
        </section>
    );
}