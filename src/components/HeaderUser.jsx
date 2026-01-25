import "./HeaderUser.css";
import UserIcon from "../assets/images/icons/user.svg";
import { LoginForm } from "./LoginForm";
import { useState } from "react";

export function HeaderUser() {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const handleClose = () => {
    setClicked(false);
  };

  return (
    <>
      <div className="user-icon-box" onClick={handleClick}>
        <img className="user-icon" src={UserIcon} alt="User" />
      </div>

      <LoginForm
        isOpen={isClicked}
        onClose={handleClose}
      />
    </>
  );
}
