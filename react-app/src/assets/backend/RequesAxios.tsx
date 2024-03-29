import React, { useEffect, useState } from "react";
import { CanceledError } from "../../services/api-client";
import userService, { User } from "../../services/user-services";
import useUsers from "../../hooks/useUsers";

const RequesAxios = () => {
  // here
  const { users, error, isLoading, stack, setUsers, setError, setStack } =
    useUsers();

  const deleteUser = (user: User) => {
    const newStack = [...stack, user];
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    setStack(newStack);
    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
      setStack(stack); // Reset the stack to its original state
    });
    console.log(stack);
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Orel" };
    const originalUsers = [...users];

    setUsers([newUser, ...users]);
    userService
      .create(newUser)
      .then((res) => {
        setUsers([res.data, ...users]);
        console.log("hey i am res ", res.data);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };
  const reverseAct = () => {
    if (stack.length > 0) {
      const [newUser, ...restStack] = stack;
      const originalUsers = [...users];

      setStack(restStack);
      setUsers([...users, newUser]);

      // Note: It's not clear why you're making another POST request here, you might want to adjust this part accordingly
      userService
        .reverseAct(newUser)
        .then((res) => setUsers([res.data, ...users]))
        .catch((err) => {
          setError(err);
          setUsers(originalUsers);
        });
    }
  };

  const updateUser = (user: User) => {
    const updatedUser = { ...user, name: user.name + "!" };
    const originalUsers = [...users];
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));
    userService.update(updatedUser).catch((err) => {
      setError(err);
      setUsers(originalUsers);
    });
  };

  return (
    <div>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb3 my-2 mx-2" onClick={addUser}>
        Add
      </button>
      <button
        className={`btn btn-secondary mb3 ${
          stack.length === 0 ? "disabled" : ""
        }`}
        onClick={reverseAct}
      >
        Return Losts
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}{" "}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequesAxios;
