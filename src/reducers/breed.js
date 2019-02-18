export default function breedReducer(state = "", action) {
  if (action.type === "SET_BREED") {
    return action.payload;
  } else if (action.type === "SET_ANIMAL") {
    // If we're changing the animal, reset breed to empty string
    return "";
  } else {
    return state;
  }
}
