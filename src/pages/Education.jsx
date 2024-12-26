import { DataofEducation } from "../constants/data";

function Education() {
  return (
    <>
      {/*<!-- Component: Education --> */}
      <div className="mx-auto max-w-5xl p-5">
        <h1 className="text-9xl font-bold text-slate-900 font-[anzo4]">
          Education
        </h1>
        <div className=" py-5">
          <ul
            aria-label="Education"
            role="list"
            className="relative flex flex-col gap-12 py-12 pl-6 before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200"
          >
            {DataofEducation.map((education) => {
              return (
                <li role="school" className="relative pl-12" key={education.id}>
                  <div className="flex flex-col flex-1 gap-2 text-justify">
                    <a
                      href="#"
                      className="absolute z-10 inline-flex items-center justify-center w-14 h-14 text-white rounded-full -left-7 ring-2 ring-white"
                    >
                      <img
                        src={education.imgSrc}
                        alt={education.school}
                        title={education.school}
                        width="64"
                        height="64"
                        className="max-w-full rounded-full"
                      />
                    </a>
                    <h4 className="flex flex-col items-start text-base font-medium leading-6 text-slate-700 md:flex-row lg:items-center">
                      <span className="flex-1">
                        {education.school}
                        <span className="text-sm font-normal text-slate-500">
                          {" "}
                          - {education.grade}
                        </span>
                      </span>
                      <span className="text-xs font-normal text-slate-400">
                        {" "}
                        {education.date}
                      </span>
                    </h4>
                    <p className="text-sm text-slate-500">
                      {education.description}
                    </p>
                    <p className="text-sm text-slate-500">
                      Coursework: {education.coursework}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/*<!-- End User Education --> */}
    </>
  );
}

export default Education;
