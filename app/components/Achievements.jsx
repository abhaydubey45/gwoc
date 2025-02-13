import React from "react";
import { AchievementCard } from "./AchievementCard";
import { Achievements } from "@/constants";

const Achievement = () => {
  return (
    <section
      className="px-6 lg:px-20 min-h-screen flex justify-center items-center"
      id="Achievements">
      <div>
        <h1 className="md:text-3xl text-2xl font-bold text-text-800 my-8">
          Achievements
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {Achievements.map((achievement, index) => (
            <AchievementCard key={index} index={index} {...achievement} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
