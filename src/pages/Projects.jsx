import { projects } from "../constants/data";

function Projects() {
  return (
    <>
      <div className=" mx-auto p-5 justify-center max-w-5xl">
        <h1 className="text-9xl  font-[anzo4]">Projects</h1>
        <div
          className="
          grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5
        py-5"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg shadow-md overflow-hidden
                transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105
                hover:shadow-xl cursor-pointer  mx-auto
              "
            >
              <img
                src={project.imgSrc}
                alt={project.title}
                className="w-full h-40 object-cover rounded-tl-lg rounded-tr-lg aspect-video"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mt-2">{project.title}</h2>
                <p className="text-gray-600 text-justify">
                  {project.description}
                </p>
                <div className="mt-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      className="text-blue-600 hover:underline
                      bg-blue-100 px-2 py-1 rounded-md"
                    >
                      Github
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="text-blue-600 hover:underline
                      bg-blue-100 px-2 py-1 rounded-md ml-2"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
