// must return something other than undefined
export default (state = [], action) => {
  switch (action.type) {
    // case 0
    case "FETCH_POSTS":
      return action.payload;

    // default for we don't have a match for any case
    default:
      return state;
  }
};
