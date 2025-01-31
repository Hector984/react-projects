const GITHUB_TOKEN = import.meta.env.VITE_REACT_APP_GITHUB_TOKEN;
const GITHUB_URL = import.meta.env.VITE_REACT_APP_GITHUB_URL;

export const searchUsers = async (text) => {

    const params = new URLSearchParams({
      q: text,
    });

    const results = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = await results.json();

    return items;
};

export const getUser = async (login) => {

    const results = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (results.status === 404) {
      window.location.href = "/notfound";
    } else {
      const data = await results.json();

      return data;
    }
  };

