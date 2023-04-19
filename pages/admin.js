import { useEffect, useState } from "react";
import { getCredentials } from "./api/login";
import Login from "components/admin/login/Login";
import ControlPanel from "components/admin";

const Admin = () => {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      {!isLogged && <Login setIsLogged={setIsLogged} />}
      {isLogged && <ControlPanel />}
    </>
  );
};

export default Admin;
