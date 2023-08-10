import React from 'react'
import { useNavigate } from "react-router-dom";
import { auth, provider } from '../firebase';
import { signInWithPopup } from "firebase/auth";

const Login = ({ setIsAuth }) => {

  // ログイン後にHomeへリダイレクト
  const navigate = useNavigate();
  
  const loginInWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    })
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInWithGoogle}>Googleでログインして始める</button>
    </div>
  )
}

export default Login