import { useState } from "react";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h1>{isLogin ? "Login" : "Signup"}</h1>

      <form>
        {!isLogin && (
          <input type="text" placeholder="Enter Name" />
        )}

        <input type="email" placeholder="Enter Email" />
        <input type="password" placeholder="Enter Password" />

        <button type="submit">
          {isLogin ? "Login" : "Signup"}
        </button>
      </form>

      <p>
        {isLogin
          ? "Don't have an account?"
          : "Already have an account?"}
      </p>

      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Signup" : "Login"}
      </button>
    </div>
  );
}