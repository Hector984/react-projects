import { useEffect, useState } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";

const githubToken = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;
const githubURL = import.meta.env.VITE_REACT_APP_GITHUB_URL;

const UserResults = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const results = await fetch(`${githubURL}/users`, {
      headers: {
        Authorization: `token ${githubToken}`,
      },
    });

    const data = await results.json();

    setUsers(data);
    setLoading(false);
  };

  if (!loading) {
    return (
      <div
        className="grid grid-cols-1 gap-8 xl:grid-cols-4 
            ld:grid-cols-3 md:grid-cols-2"
      >
        {users.map((user) => (
          <UserItem key={user.id} user={user}/>
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
};

export default UserResults;
