import { client } from ".";

export const getAboutDetails = async () => {
  try {
    const response = await client.getEntries({
      content_type: "about",
    });

    const aboutData = response.items.map((item) => {
      return {
        aboutDetails: item.fields.aboutDetail,
        aboutVideos: item.fields.aboutVideos.map((video) => {
          return {
            video,
          };
        }),
      };
    });

    return aboutData;
  } catch (error) {
    console.error(error);
  }
};

export const getExperienceDetails = async () => {
  try {
    const response = await client.getEntries({
      content_type: "experience",
    });

    const experienceData = response.items.map((item) => {
      return item.fields;
    });

    return experienceData;
  } catch (error) {
    console.error(error);
  }
};

export const getEducationDetails = async () => {
  try {
    const response = await client.getEntries({
      content_type: "education",
    });

    const educationData = response.items.map((item) => {
      return item.fields;
    });

    return educationData;
  } catch (error) {
    console.error(error);
  }
};

export const getProjectsDetails = async () => {
  try {
    const response = await client.getEntries({
      content_type: "projects",
    });

    const projectsData = response.items.map((item) => {
      return item.fields;
    });

    return projectsData;
  } catch (error) {
    console.error(error);
  }
};
