const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;

export default image => ({
  file: image,
  url: createObjectURL(image)
});