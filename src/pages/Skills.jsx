import { Skill } from "../constants/data";

function Skills() {
  return (
    <>
      <div className=" mx-auto p-5 justify-center max-w-5xl">
        <h1 className="text-9xl  font-[anzo4]">Skills</h1>
        {/* // Add a Badge Component here to display all the skills. */}
        <div
          className="
          grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5
        py-5"
        >
          {Skill.map((skill) => {
            return (
              <div
                key={skill.name}
                className={`flex items-center justify-center w-20 h-20 text-white rounded-full font-[anzo1]
                  mx-auto text-center
                    bg-black
                  `}
              >
                {skill.name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Skills;
