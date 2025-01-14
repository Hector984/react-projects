import { createContext, useState } from "react";

const GithubContext = createContext();

const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;

export const GithubProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    const results = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const data = await results.json();

    setUsers(data);
    setLoading(false);
  }

  return <GithubContext.Provider value={{ users, loading, fetchUsers }}>
    {children}
  </GithubContext.Provider>
};

export default GithubContext;