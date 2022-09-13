// we have sent this reducer to entire application
// through index.js
// it can be accessed anywhere now

const initialstate = [
  {
    id: 0,
    name: "utkarsh gaur",
    number: 523542342,
    email: "utkarsh99@gmail.com",
  },
  {
    id: 1,
    name: "shubham singh",
    number: 432235523,
    email: "shubhamkumarsingh65@gmail.com",
  },
];

const Contactreducer = (state = initialstate, action) => {
  switch (action.type) {
    case "addcontact":
      state = [...state, action.payload];
      return state;

    case "updatecontact":
      const updatestate = state.map((contact) =>
        contact.id === action.payload.id ? action.payload : contact
      );
      state = updatestate;
      return state;

    case "deletecontact":
      const filtercontacts = state.filter(
        (contact) => contact.id !== action.payload && contact
      );
      state = filtercontacts;
      return state;

    default:
      return state;
  }
};

export default Contactreducer;
