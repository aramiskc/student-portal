import axios from "axios";
import { useState } from "react";

export function Login() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  return (
    <div id="login">
      <form>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
