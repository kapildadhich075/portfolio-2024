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
