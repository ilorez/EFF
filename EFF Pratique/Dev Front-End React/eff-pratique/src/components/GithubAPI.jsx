import { useEffect, useState } from "react";
import axios from "axios"

export default function GithubAPI() {
  const [user, setUser] = useState(null);
  const [username,setUsername] = useState("wahmane-hamza")
  useEffect(() => {
    // fetch("https://api.github.com/users/nmirach")
    //   .then((result) => result.json())
    //   .then((data) => setUser(data))
    //   .catch((error) => console.log(error));
    axios.get(`https://api.github.com/users/${username}`)
    .then((result)=>setUser(result.data))
    .catch((error) => console.log(error));
  }, [username]);
  return (
    <div>
      <h2>Github Info</h2>
      Username : <input type="text" onChange={(e)=>setUsername(e.target.value)} />
      {user ? (
        <div>
          <img src={user.avatar_url} alt={"logo"} />
          <p>{user.name}</p>
        </div>
      ) : null}
      
    </div>
  );
}
