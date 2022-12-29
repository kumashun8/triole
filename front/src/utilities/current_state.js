export default state => {
  const length = state.length;
  return state[length - 1];
};