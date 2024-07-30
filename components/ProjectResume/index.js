import React from "react";

const ProjectResume = ({ dates, type, position, bullets }) => {
  const [bulletsLocal, setBulletsLocal] = React.useState(bullets.split(","));

  return (
    <div className="mt-5 ml-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="w-3/5">
        <h2 className="text-lg">{position}</h2>
        <div className="text-sm ml-3 opacity-50 w-2/5">
          <h2>{dates}, {type}</h2>
        </div>
        {bulletsLocal && bulletsLocal.length > 0 && (
          <ul className="list-disc">
            {bulletsLocal.map((bullet, index) => (
              <li key={index} className="text-sm ml-6 my-1 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectResume;
