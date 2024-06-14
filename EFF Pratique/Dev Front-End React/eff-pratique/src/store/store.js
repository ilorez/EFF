// actions types
const ADD_LIVRE = "ADD_LIVRE";
const REMOVE_LIVRE = "REMOVE_LIVRE";
const UPDATE_LIVRE = "UPDATE_LIVRE";

// actions
export const add_livre = (livre) => {
  return {
    type: ADD_LIVRE,
    livre:livre,
  };
};

export const remove_livre = (livre_id) => {
  return {
    type: REMOVE_LIVRE,
    livre_id:livre_id,
  };
};

export const update_livre = (newlivre) => {
  return {
    type: UPDATE_LIVRE,
    newlivre:newlivre,
  };
};

const inisialState = {
  livres: [
    {
      id: 1,
      title: "livre 1",
      price: 5000,
    },
    {
      id: 2,
      title: "livre 2",
      price: 4000,
    },
    {
      id: 3,
      title: "livre 3",
      price: 7000,
    },
  ],
};

const reducer = (state=inisialState,action)=>{
    switch (action.type){
        case ADD_LIVRE:
            return {
                state,
                livres: [...state.livres,action.livre]
            }
        case REMOVE_LIVRE:
            return {
                state,
                livres : state.livres.filter((livre)=>livre.id !== action.livre_id)
            }
        case UPDATE_LIVRE:
            // eslint-disable-next-line no-case-declarations
            let mylivres = state.livres.filter((livre)=>livre.id !== action.newlivre.id);
            return {
                state,
                livres: [...mylivres,action.newlivre]
            }
        default:
            return state
    }
};

export default reducer;
