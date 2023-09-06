import { useContext } from "react";
import { UserContext } from "../context/user-context";

const Header = () => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <h1>NC-News</h1>
      <h2>Bringing you the news northcoders loves</h2>
      <h5 className="login">Logged in as {user}</h5>
    </header>
  );
};

export default Header;