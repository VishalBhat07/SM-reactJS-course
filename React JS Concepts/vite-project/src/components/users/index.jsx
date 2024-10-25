import React, { useEffect } from "react";
import { useState } from "react";

const User = () => {
  const [usersList, setUsersList] = useState([]);
  const [pending, setPending] = useState(false);

  const fetchAllUsers = async () => {
    try {
      setPending(true);
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result = await apiResponse.json();

      if (result.users) {
        setUsersList(result.users);
        setPending(false);
      } else {
        setUsersList([]);
        setPending(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   fetchAllUsers();
  // }, []);

  console.log(usersList);

  return (
    <div>
      <button onClick={fetchAllUsers}>Fetch user list</button>
      <h1>All users list : </h1>
      <ul>
        {!pending ? (
          usersList.map((singleItem, index) => {
            return (
              <li key={index} style={{ width: "200px", padding: "10px" }}>
                {singleItem.firstName} {singleItem.lastName} {singleItem.age}{" "}
                {singleItem.gender}
              </li>
            );
          })
        ) : (
          <h1>No users found ! Please try again</h1>
        )}
      </ul>
    </div>
  );
};

export default User;
