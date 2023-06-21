import React from 'react'

export const Cars = () => {
    const cars = [
        { name: "ferara" },
        { name: "ferara" },
        { name: "ferara" },
        { name: "ferara" },
        { name: "ferara" },
    ]
    return (
        <div>
            <div className="cars">
                {cars.map((car) =>
                    <div className="post">{car.name}</div>)}
            </div>
        </div>
    )
}
