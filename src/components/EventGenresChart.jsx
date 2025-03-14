import React, { useState, useEffect } from "react";
import {
    PieChart,
    Pie,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

const EventGenresChart = ({ events }) => {
    const [data, setData] = useState([]);

    const genres = ["React", "JavaScript", "Node", "jQuery", "Angular"];

    const getData = () => {
        return genres.map((genre) => {
            const filteredEvents = events.filter((event) =>
                event.summary.includes(genre)
            );
            return { name: genre, value: filteredEvents.length };
        });
    };

    useEffect(() => {
        setData(getData());
    }, [events]);

    const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
        const RADIAN = Math.PI / 180;
        const radius = outerRadius * 1.35; // Increased distance from the pie chart
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return percent ? (
            <text
                x={x}
                y={y}
                fill="#8884d8"
                fontSize="16px" // Further increased font size
                fontWeight="bold"
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
            </text>
        ) : null;
    };

    return (
        <ResponsiveContainer width="99%" height={400}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    fill="#8884d8"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    outerRadius={140} // Slightly reduced pie size to accommodate labels
                />
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default EventGenresChart;
