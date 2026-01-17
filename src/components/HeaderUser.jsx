import "./HeaderUser.css";
import UserIcon from "../assets/images/icons/user.svg";

export function HeaderUser() {
  return (
    <>
      <div className="user-icon-box">
        <img className="user-icon" src={UserIcon} />
      </div>

      <div className="overlay">
        <div className="form-container">
            hello
        </div>
      </div>
    </>
  );
}