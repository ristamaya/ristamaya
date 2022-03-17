import { Form } from "remix";
import { useState } from "react";
import { Button } from "~/application/uicomponents/button";
import { Input } from "~/application/uicomponents/input";
import * as LoginAction from "~/application/actions/auth/login";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="relative w-fit h-fit top-8 items-center justify-center bg-theme-muted m-auto px-3 py-5 rounded-md drop-shadow-md border border-theme-border">
      <h1 className="text-center mb-10 text-4xl font-semibold">Login</h1>
      <Form
        method="post"
        className="relative h-fit w-fit items-center justify-center"
      >
        <Input
          type="email"
          label="User Name"
          onChange={(event: React.FormEvent<HTMLInputElement>) => {
            setUserName(event.currentTarget.value);
          }}
          value={username}
          name="username"
          // required={true}
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
          // required={true}
          className="w-full"
        />
        <Button type="submit" label="Login" className="h-8 w-28 right-0" />
      </Form>
    </div>
  );
}

export default Login;
