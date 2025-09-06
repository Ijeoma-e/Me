import React, { useEffect, useState } from "react";

interface Stat {
  label: string;
  value: number;
  icon: string;
}

const statsData: Stat[] = [
  { label: "Years Experience", value: 2, icon: "counter-1.png" },
  { label: "Projects Tested", value: 12, icon: "counter-2.png" },
  { label: "Tools Mastered", value: 8, icon: "counter-3.png" },
  { label: "Certifications", value: 2, icon: "counter-4.png" },
];

const Highlights: React.FC = () => {
  const [counts, setCounts] = useState<number[]>(statsData.map(() => 0));

  useEffect(() => {
    const intervals = statsData.map((stat, index) => {
      const increment = Math.ceil(stat.value / 50);
      const interval = setInterval(() => {
        setCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          newCounts[index] = Math.min(newCounts[index] + increment, stat.value);
          return newCounts;
        });
      }, 40);
      return interval;
    });

    return () => {
      intervals.forEach(clearInterval);
    };
  }, []);

  return (
    <div className="fh5co-counter counters">
      <div className="counter-inner site-container">
        {statsData.map((stat, i) => (
          <div className="single-count" key={i}>
            <span className="count">{counts[i]}</span>
            <div className="single-count__text">
              <img src={`/images/${stat.icon}`} alt={stat.label} />
              <p>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
