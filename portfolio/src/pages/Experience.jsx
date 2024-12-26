import { DataofExperience } from "../constants/data";

function Experience() {
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  return (
    <>
      {/*<!-- Component: Experience --> */}
      <div className="mx-auto justify-center max-w-5xl p-5">
        <h1 className="text-9xl font-bold text-slate-900 font-[anzo4]">
          Experience
        </h1>
        <div className="py-5">
          <ul
            aria-label="Experience"
            role="list"
            className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200"
          >
            {DataofExperience.map((experience, index) => {
              return (
                <li role="school" className="relative pl-12" key={index}>
                  <div className="flex flex-col flex-1 gap-2 text-justify">
                    <a
                      href="#"
                      className="absolute z-10 inline-flex items-center justify-center w-14 h-14 text-white rounded-full -left-7 ring-2 ring-white"
                    >
                      {experience.imgSrc ? (
                        <img
                          src={experience.imgSrc}
                          alt={experience.company}
                          title={experience.company}
                          width="64"
                          height="64"
                          className="max-w-full rounded-lg"
                        />
                      ) : (
                        <div
                          className="flex items-center justify-center w-14 h-14 text-white rounded-lg font-[anzo1 ]"
                          title={experience.company}
                          style={{ backgroundColor: getRandomColor() }}
                        >
                          {experience.company
                            .split(" ")
                            .map((word) => word[0])
                            .join("")}
                        </div>
                      )}
                    </a>
                    <h4 className="flex flex-col items-start text-base font-medium leading-6 text-slate-700 md:flex-row lg:items-center">
                      <span className="flex-1">
                        {experience.company}
                        <span className="text-sm font-normal text-slate-500">
                          {" "}
                          - {experience.place}
                        </span>
                      </span>
                      <span className="text-xs font-normal text-slate-400">
                        {" "}
                        {experience.date}
                      </span>
                    </h4>
                    <p className="text-sm text-slate-500">
                      {experience.designation}
                    </p>
                    <p className="text-sm text-slate-500">
                      {experience.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/*<!-- End User Experience --> */}
    </>
  );
}

export default Experience;
