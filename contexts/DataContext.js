import { createContext, useEffect, useState } from "react";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const registerUser = async (user) => {
    const emailCheck = await emailExist(user.email);
    const usernameCheck = await emailExist(user.username);
    if (usernameCheck || emailCheck)
      return { status: "E-Mail oder Username bereits vorhanden..." };

    const regUs = await fetch("/api/userEndpoint/registerUser", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
      }),
    });
    const response = await regUs.json();
    return response;
  };

  const login = () => {};
  const logoutUser = () => {};
  const addMoney = () => {};

  //Helper functions
  const emailExist = async (email) => {
    const emailEx = await fetch("/api/userEndpoint/emailExist", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    const response = await emailEx.json();
    if (response.length) {
      return true;
    } else {
      return false;
    }
  };

  const usernameExist = async (username) => {
    const emailEx = await fetch("/api/userEndpoint/emailExist", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
      }),
    });
    const response = await emailEx.json();
    if (response.length) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <DataContext.Provider value={{ registerUser, login, logoutUser, addMoney }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataProvider, DataContext };
