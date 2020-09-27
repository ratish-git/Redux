export default function (state = null, action) {
  switch (action.type) {
    case "ENQUIRY_LIST":
      return action.payload;
    default:
      return state;
  }
}
