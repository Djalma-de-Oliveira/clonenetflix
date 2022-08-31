import React, { useState } from "react";
import './MovieRow.css'

export default ({ title, items }) => {
    const [scrollx, setScrolx] = useState(0);

    const handLeftArrow = () => {
        let x = scrollx + Math.round(window.innerWidth / 2)
        if (x > 0) {
            x = 0
        }
        setScrolx(x)
    }

    const handRightArrow = () => {
        let x = scrollx - Math.round(window.innerWidth / 2)
        let listW = items.results.length * 150
        if ((window.innerWidth - listW) > x) {
            x = (window.innerWidth - listW) - 60
        }
        setScrolx(x)
    }
    return (
        <div className="=movieRow">
            <h2>{title}</h2>
            <div className="movieRow--left" onClick={handLeftArrow}>
                <span style={{ fontSize: 50 }}> L </span>
            </div>
            <div className="movieRow--listarea">
                <div className="movieRow--list" style={{
                    marginLeft: scrollx,
                    width: items.results.length * 150
                }}>
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div className="movieRow--item" key={key}>
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                                alt={item.original_title} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

