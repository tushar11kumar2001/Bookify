import React, { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth } from "../context/Firebase";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const [show,setShow] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
        setShow(false);
      } else {
        navigate("/login");
        setShow(true);
      }
    });
  }, []);
  return (
    <div>
      {show&&<h1>Header</h1>}
    </div>
  );
};

export default Header;
