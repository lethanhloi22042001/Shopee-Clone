import { blogImageUrl, userImageUrl } from "../constants/image";

const getBlogImg = (imgName) => blogImageUrl + imgName;

const getUserImg = (imgName) => userImageUrl + imgName;

export { blogImageUrl, getBlogImg, getUserImg };
