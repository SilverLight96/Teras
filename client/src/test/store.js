<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from "react";
import { legacy_createStore as createStore } from "redux";
import { Provider, useSelector, useDispatch, connect } from "react-redux";

const Store = (currentState, action) => {
=======
import React, { useState } from "react";
import { legacy_createStore as createStore } from "redux";

const store = createStore((currentState, action) => {
>>>>>>> ab2d848 (test)
  if (currentState === undefined) {
    return {
      number: 1,
    };
  }
  const newState = { ...currentState };
  if (action.type === "PLUS") {
    newState.number++;
  }
  return newState;
<<<<<<< HEAD
};

const store = createStore((currentState,) => {

}));

=======
import { createStore } from "redux";
import rootReducer from "../reducers/index";
const store = createStore(rootReducer);
>>>>>>> baffca6 ([FE] getUser error solve)
export default store;
=======
});

const s = createStore((currentState, action) => {
    const newState = { ...currentState };
    
});

export default { store, s };
>>>>>>> ab2d848 (test)
