import axios from "axios";
import { create } from "zustand";

const loadData = async (url) => {
  try {
    const username = url.split("instagram.com/")[1];
    const { data } = await axios.post(
      "https://flytant.azurewebsites.net/instagramsearch",
      { username }
    );
    data.username = `@${username}`;
    return data;
  } catch (error) {
    return null;
  }
};

const loadImage = async (id, url) => {
  try {
    const {
      data: { image },
    } = await axios.post("https://flytant.azurewebsites.net/getimage", { url });
    return { id, image };
  } catch (error) {
    return { id, image: "" };
  }
};

const useInstagram = create((set) => ({
  data: null,
  error: false,
  loading: false,
  getData: async (url) => {
    try {
      set({ loading: true });
      const user = await loadData(url);
      const promises = [];
      if (user?.profile_pic_url) {
        promises.push(loadImage("profileImage", user.profile_pic_url));
      }
      if (Array.isArray(user?.edge_owner_to_timeline_media?.edges)) {
        user.edge_owner_to_timeline_media.edges.forEach(({ node }) => {
          promises.push(loadImage(node.id, node.thumbnail_src));
        });
      }
      const images = {};
      const result = await Promise.allSettled(promises);
      result.forEach((item) => {
        if (item.status === "fulfilled") {
          images[item.value.id] = item.value.image;
        }
      });
      user.images = images;
      set({ data: user, error: false, loading: false });
    } catch (error) {
      set({ data: null, error: true, loading: false });
    }
  },
}));

export default useInstagram;
