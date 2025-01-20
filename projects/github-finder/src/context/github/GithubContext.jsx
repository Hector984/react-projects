import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {

  const initialState = {
    users: [],
    loading: false
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  const fetchUsers = async () => {

    setLoading();
    const results = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await results.json();

    dispatch({
      type: "GET_USERS",
      payload: data,
    })

  }

  const setLoading = () => {
    dispatch({
      type: "SET_LOADING",
    })
  }

  return <GithubContext.Provider value={ {users: state.users, loading: state.loading, fetchUsers }}>
    {children}
  </GithubContext.Provider>
};

export default GithubContext;