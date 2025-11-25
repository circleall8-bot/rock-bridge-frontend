// utils/getFullUrl.js
export function getFullUrl(imgPath) {
    if (!imgPath) return "";
    if (/^https?:\/\//i.test(imgPath)) return imgPath; // already absolute
    const origin = 'https://rockbridge.store/api';
    return `${origin}${imgPath.startsWith("/") ? "" : "/"}${imgPath}`;
  }
  