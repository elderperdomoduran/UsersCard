import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import "./index.css";

export default function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const rs = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonRs = await rs.json();
    setData(jsonRs);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <ul className="user-list">
        {data &&
          data.map((user, index) => (
            <UserCard
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
              image={`https://picsum.photos/200?random=${index + 1}`}
            />
          ))}
      </ul>
    </div>
  );
}

