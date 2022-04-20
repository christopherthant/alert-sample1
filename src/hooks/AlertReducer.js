import { useReducer } from "react";

export const AlertReducer = () => {
    const initialState = [];

    const reducer = (state = initialState, action) => {
        const uniqueId = 
            Math.floor(Math.random() * 100) + 
            "unique" + 
            Math.ceil(Math.random() * 10);

        switch (action.type) {
            case "ADD":
                return [{ ...action.payload, id: uniqueId}, ...state];
            case "REMOVE":
                return [...state.filter((alert) => alert.id !== action.payload.id)];
            default:
                return "No Action Created";
        }
    };

    const [alerts, dispatch] = useReducer(reducer, initialState);

    const addAlert = (payload) => {
        dispatch({ type: "ADD", payload});
    }

    const removeAlert = (id) => {
        dispatch({ type: "REMOVE", payload: { id } });
    }
  return [alerts, { addAlert, removeAlert }];
}