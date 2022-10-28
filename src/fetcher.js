const url = "https://www.globalcyclingnetwork.com/api/videos?limit=10&offset=";
const corsProxy = "https://misty-shape-2852.fly.dev/";

export const fetchPages = async (offset = 0) => {
  const res = await fetch(corsProxy + url + offset);
  if (res.ok) {
    const ficl = await res.json();
    const { videos } = ficl;

    return videos;
  }
};
