import { getCredentials } from "pages/api/login";
import { useCallback, useEffect, useState } from "react";

const Login = ({ setIsLogged }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [incorrectCred, setIncorrectCred] = useState(false);
  const handleUserInput = useCallback((e) => {
    setUser(e.target.value);
    setIncorrectCred(false);
  }, []);

  const handlePasswordInput = useCallback((e) => {
    setPassword(e.target.value);
    setIncorrectCred(false);
  }, []);

  useEffect(() => {
    getCredentials().then((cred) => {
      setCredentials(cred[0]);
    });
  }, []);

  const loginButton = useCallback(() => {
    if (credentials.username === user && credentials.password === password) {
      setIsLogged(true);
    } else {
      setIncorrectCred(true);
    }
  }, [password, user, setIsLogged, credentials]);
  return (
    <div className="flex items-center justify-center h-screen text-white bg-gray-950 flex-col">
      <p className="text-xl">Bienvenido al panel de admin</p>
      <div className="space-y-5 mt-5 text-black-900">
        <input value={user} placeholder="usuario" onChange={handleUserInput} />
        <input
          type="password"
          value={password}
          placeholder="constraseña"
          onChange={handlePasswordInput}
        />
        <button
          type="button"
          className="bg-orange-950 w-full py-3 rounded text-white"
          onClick={loginButton}
        >
          Ingresar
        </button>
        {incorrectCred && (
          <p className="text-black-950 font-bold text-sm">
            Usuario o constraseña incorrectos. Si no te acordas, preguntale a
            Lucho
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
