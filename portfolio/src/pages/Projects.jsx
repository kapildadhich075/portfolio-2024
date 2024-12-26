const projects = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    imgSrc: "https://via.placeholder.com/150",
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    imgSrc: "https://via.placeholder.com/150",
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
  },
  {
    title: "Project 3",
    description: "Description of Project 3",
    imgSrc: "https://via.placeholder.com/150",
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
  },
  {
    title: "Project 4",
    description: "Description of Project 4",
    imgSrc: "https://via.placeholder.com/150",
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
  },
  {
    title: "Project 5",
    description: "Description of Project 5",
    imgSrc: "https://via.placeholder.com/150",
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
  },
  {
    title: "Project 6",
    description: "Description of Project 6",
    imgSrc: "https://via.placeholder.com/150",
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
  },
  {
    title: "Project 7",
    description: "Description of Project 7",
    imgSrc: "https://via.placeholder.com/150",
    githubLink: "https://github.com",
    demoLink: "https://demo.com",
  },
];

function Projects() {
  return (
    <>
      <div className=" mx-auto p-5 justify-center max-w-5xl">
        <h1 className="text-9xl  font-[anzo4]">Projects</h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-md p-4"
            >
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-40 object-cover"
              />
              <h2 className="text-xl font-bold mt-2">{project.title}</h2>
              <p className="text-gray-600">{project.description}</p>
              <div className="mt-4">
                <a
                  href={project.githubLink}
                  className="text-blue-600 hover:underline"
                >
                  Github
                </a>
                <a
                  href={project.demoLink}
                  className="ml-4 text-blue-600 hover:underline"
                >
                  Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
