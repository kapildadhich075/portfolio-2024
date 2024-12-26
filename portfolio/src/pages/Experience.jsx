const DataofExperience = [
  {
    id: 3,
    designation: "Full Stack Developer - (FE focused)",
    company: "Freelancer",
    date: "Feb 2024 - Present",
    place: "Remote",
    imgSrc: "",
    description:
      "Developed advanced trip planning features that boosted user satisfaction by 25% and integrated seamless payment solutions like PhonePe, improving transaction success rates by 10%. Built a React Native food delivery app with Expo and Google APIs, enabling real-time rider tracking and enhancing delivery accuracy by 20%. Delivered scalable frontend solutions for job boards and delivery platforms using Next.js, PostgreSQL, Chakra UI, and React Native. Spearheaded the development of Trekykart's website and admin panel with React.js, Next.js, and Node.js, reducing page load times by 20% and increasing user engagement by 15%.",
  },
  {
    id: 2,
    designation: "Software Developer",
    company: "Spacedust Agency",
    date: "Jan 2022 - Jan 2024",
    place: "Remote",
    imgSrc: "",
    description:
      "Developed advanced trip planning features that boosted user satisfaction by 25% and integrated seamless payment solutions like PhonePe, improving transaction success rates by 10%. Built a React Native food delivery app with Expo and Google APIs, enabling real-time rider tracking and enhancing delivery accuracy by 20%. Delivered scalable frontend solutions for job boards and delivery platforms using Next.js, PostgreSQL, Chakra UI, and React Native. Spearheaded the development of Trekykart's website and admin panel with React.js, Next.js, and Node.js, reducing page load times by 20% and increasing user engagement by 15%.",
  },
  {
    id: 1,
    designation: "Software Developer - Frontend",
    company: "One Percent",
    date: "Jul 2021 - Aug 2021",
    place: "Remote",
    imgSrc:
      "https://ik.imagekit.io/umdiwr6ma/portfolio/onepercent_software_logo%20(1).jpeg?updatedAt=1734985433801",
    description:
      "Developed a high-performance, cross-platform camera app using Flutter and Dart, delivering a responsive and intuitive UI. Integrated Redux for state management, reducing app crashes by 15% and ensuring a seamless user experience. Added advanced features like a document scanner and photo editor, enhancing functionality and boosting user engagement.",
  },
];

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
            {DataofExperience.map((experience) => {
              return (
                <li
                  role="school"
                  className="relative pl-12"
                  key={experience.id}
                >
                  <div className="flex flex-col flex-1 gap-2">
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
