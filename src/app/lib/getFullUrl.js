// utils/getFullUrl.js
export function getFullUrl(imgPath) {
    if (!imgPath) return "";
    if (/^https?:\/\//i.test(imgPath)) return imgPath; // already absolute
    const origin = process.env.BACK_URL || "http://localhost:5000";
    return `${origin}${imgPath.startsWith("/") ? "" : "/"}${imgPath}`;
  }
  