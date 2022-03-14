import { useState } from "react";
import { Button } from "~/application/uicomponents/button";
import { Input } from "~/application/uicomponents/input";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  const [effect, setEffect] = useState(false);

  async function loginHandler(event: React.FormEvent) {
    event.preventDefault();
    //call api
  }

  return (
    <div className="relative block w-80 h-fit top-8 bg-theme-muted m-auto px-3 py-5 rounded-md drop-shadow-md border border-theme-border">
      <h1 className="relative text-center mb-10 text-4xl font-semibold">
        Login
      </h1>
      <form onSubmit={loginHandler}>
        <Input
          type="text"
          label="User Name"
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            setUserName(event.currentTarget.value);
          }}
          value={username}
          name="username"
          className="w-full"
        />
        <Input
          type="password"
          label="Password"
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            setPassword(event.currentTarget.value);
          }}
          value={password}
          name="password"
          className="w-full"
        />
        <Button type="submit" label="Login" className="" />
        {loginMessage && (
          <p className="text-rose-600 text-opacity-40">{loginMessage}</p>
        )}
      </form>
    </div>
  );
}

export default Login;
