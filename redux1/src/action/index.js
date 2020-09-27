export function enquiryList() {
  return {
    type: "ENQUIRY_LIST",
    payload: [
      {
        id: 1,
        course: "Java",
      },
      {
        id: 2,
        course: "JavaScript",
      },
      {
        id: 3,
        course: "Python",
      },
    ],
  };
}
