const Skill = [
  {
    name: "HTML",
  },
  {
    name: "CSS",
  },
  {
    name: "JavaScript",
  },
  {
    name: "React",
  },
  {
    name: "Node",
  },
  {
    name: "Express",
  },
  {
    name: "MongoDB",
  },
  {
    name: "Python",
  },
  {
    name: "Django",
  },
  {
    name: "Flask",
  },
  {
    name: "Java",
  },
  {
    name: "C++",
  },
  {
    name: "C",
  },
  {
    name: "Git",
  },
  {
    name: "GitHub",
  },
  {
    name: "Heroku",
  },
  {
    name: "Netlify",
  },
  {
    name: "Vercel",
  },
  {
    name: "Firebase",
  },
  {
    name: "SQL",
  },
  {
    name: "NoSQL",
  },
  {
    name: "REST API",
  },
  {
    name: "GraphQL",
  },
  {
    name: "Postman",
  },
];

function Skills() {
  return (
    <>
      <div className=" mx-auto p-5 justify-center max-w-5xl">
        <h1 className="text-9xl  font-[anzo4]">Skills</h1>
        {/* // Add a Badge Component here to display all the skills. */}
        <div className="flex flex-wrap gap-5 py-5">
          {Skill.map((skill) => {
            return (
              <div
                key={skill.name}
                className={`flex items-center justify-center w-20 h-20 text-white rounded-full font-[anzo1]
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
