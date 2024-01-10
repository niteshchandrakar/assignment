import { CHANGE_DATA } from "./Actiontype";
import { data } from "./data";


  
  
const initialState = {
  data:{
    emmissions:[1690, 2108, 2251, 1601, 3456,3234,3543,5445,4343,3434,3464,2324],
    revenue:   [1780, 2205, 2345, 1503, 4634,4645,3487,5282,4524,3332,3535,2452]
  },
  pie_data:data
};

export const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
       case CHANGE_DATA: 
       return { ...state, data:payload };
    default:
      return state;
  }
};