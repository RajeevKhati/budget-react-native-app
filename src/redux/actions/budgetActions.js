import AsyncStorage from "@react-native-async-storage/async-storage";
import { ADD_BUDGET, FETCH_BUDGET_LIST } from "../actionTypes";

export const addBudget = (budgetDetails) => async (dispatch, getState) => {
  try {
    const newBudgetArray = getState().budget
      ? [...getState().budget, budgetDetails]
      : [...[budgetDetails]];

    await AsyncStorage.setItem("budgets", JSON.stringify(newBudgetArray));
    dispatch({
      type: ADD_BUDGET,
      payload: newBudgetArray,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchBudgetList = () => async (dispatch) => {
  try {
    const budgetListInString = await AsyncStorage.getItem("budgets");
    const budgetInArray = JSON.parse(budgetListInString);
    dispatch({
      type: FETCH_BUDGET_LIST,
      payload: budgetInArray,
    });
  } catch (error) {
    console.log(error.message);
  }
};
