import { useState } from "react";
import Input from "./input";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    postLoginData(email, password);
    console.log("Clicked button");
  };

  async function postLoginData(email: string, password: string) {
    const url = "http://localhost:3001/auth/login";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      localStorage.setItem("authToken", json.token);
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-blue-800 border-solid border-2 p-2 space-y-2">
        <div>
          <label>Email:</label>
          <Input
            placeholder="Email@example.com"
            value={email}
            type="email"
            onChange={(value) => setEmail(value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <Input
            placeholder="Examplepassword123"
            value={password}
            type="password"
            onChange={(value) => setPassword(value)}
          />
        </div>
        <div className="flex justify-center">
          <button
            className="p-1  border-2 rounded-lg"
            type="submit"
            onClick={handleSubmit}
          >
            Ingresar
          </button>
        </div>
      </div>
    </form>
  );
}
