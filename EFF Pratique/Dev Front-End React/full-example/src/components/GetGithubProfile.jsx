import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

export default function GetGithubProfile() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // fetch("https://api.github.com/users/abdo-nsila")
    //   .then((result) => result.json())
    //   .then((data) => setUser(data))
    //   .catch((error) => console.log(error));
    axios.get("https://api.github.com/users/ilorez")
    .then((result)=> setUser(result.data))
    .catch((error)=>console.log(error))
  }, []);
  return (
    <div>
      Profile
      {user && (
        <div>
          <img src={user.avatar_url} alt={user.login} />
          <p>{user.login}</p>
        </div>
      )}
    </div>
  );
}
