import React from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup, signOut } from "firebase/auth";

const Logout = ({ setIsAuth }) => {
  // ログイン後にHomeへリダイレクト
  const navigate = useNavigate();

  const logout = () => {
    // ログアウト
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div>
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  );
};

export default Logout;
