import { getCredentials } from "pages/api/login";
import { useCallback, useEffect, useState } from "react";

type LoginProps = {
  setIsLogged: (isLogged: boolean) => void;
};

const Login = ({ setIsLogged }: LoginProps) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [incorrectCred, setIncorrectCred] = useState(false);

  const handleUserInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUser(e.target.value);
      setIncorrectCred(false);
    },
    []
  );

  const handlePasswordInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value);
      setIncorrectCred(false);
    },
    []
  );

  useEffect(() => {
    getCredentials().then((cred) => {
      setCredentials({
        username: cred[0].username || "",
        password: cred[0].password || "",
      });
    });
  }, []);

  const loginButton = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (credentials.username === user && credentials.password === password) {
        setIsLogged(true);
      } else {
        setIncorrectCred(true);
      }
    },
    [password, user, setIsLogged, credentials]
  );
  return (
    <div className="flex items-center justify-center h-screen text-white bg-gray-950 flex-col">
      <p className="text-xl">Bienvenido al panel de admin</p>
      <form className="space-y-5 mt-5 text-black-900" onSubmit={loginButton}>
        <input value={user} placeholder="usuario" onChange={handleUserInput} />
        <input
          type="password"
          value={password}
          placeholder="constraseña"
          onChange={handlePasswordInput}
        />
        <button
          type="submit"
          className="bg-orange-950 w-full py-3 rounded text-white font-bold"
        >
          Ingresar
        </button>
        {incorrectCred && (
          <p className="text-black-950 font-bold text-sm">
            Usuario o constraseña incorrectos. Si no te acordas, preguntale a
            Lucho
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
