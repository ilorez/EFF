// Action type
const ADD_LIVRE = "ADD_LIVRE";
const REMOVE_LIVRE = "REMOVE_LIVRE";
const UPDATE_LIVRE = "UPDATE_LIVRE";

// actions

export const add_livre = (livre) => {
  return {
    type: ADD_LIVRE,
    livre,
  };
};

export const remove_livre = (livre_id) => {
  return {
    type: REMOVE_LIVRE,
    livre_id,
  };
};

export const update_Livre = (newlivre) => {
  return {
    type: UPDATE_LIVRE,
    newlivre,
  };
};

const inisialState = {
  livres: [
    {
      id: 1,
      title: "Livre 1 titile",
      price: 600,
    },
    {
      id: 2,
      title: "Livre 2 titile",
      price: 700,
    },
  ],
};

const reducer = (state = inisialState, action) => {
  switch (action.type) {
    case ADD_LIVRE:
      return {
        state,
        livres: [...state.livres, action.livre],
      };
    case UPDATE_LIVRE:
      state.livres.filter((livre) => livre.id !== action.newlivre.id);
      return {
        state,
        livres: [...state.livres, action.newlivre],
      };
    case REMOVE_LIVRE:
      console.log("i workdked", action);
      return {
        state,
        livres: state.livres.filter((l) => l.id !== action.livre_id),
      };
  }
  return state;
};

export default reducer;
