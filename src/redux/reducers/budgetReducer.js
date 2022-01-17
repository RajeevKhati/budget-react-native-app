import { ADD_BUDGET, FETCH_BUDGET_LIST } from "../actionTypes";

const budgetReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BUDGET:
      return action.payload;
    case FETCH_BUDGET_LIST:
      return action.payload;
    default:
      return state;
  }
};

export default budgetReducer;
