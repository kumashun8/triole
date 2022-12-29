const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
const defaultImageUrl = "http://placehold.jp/200x200.png";

export const defaultImage = { url: defaultImageUrl };

export default image => ({
  file: image,
  url: createObjectURL(image)
});