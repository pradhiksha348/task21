import { useContext } from "react";

import {
  UserContext,
  ThemeContext,
  AuthContext
} from "./context/Context";

import Provider from "./provider/Provider";

// TASK 1: User Context
function Profile() {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>Task 1</h2>

      <h3>Name: {user.name}</h3>
      <h3>Role: {user.role}</h3>
    </div>
  );
}

// TASK 2: Theme Switcher
function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Task 2</h2>

      <h3>Current Theme: {theme}</h3>

      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
}

// TASK 3: Login Context
function Login() {
  const { isLoggedIn, username, toggleLogin } =
    useContext(AuthContext);

  return (
    <div>
      <h2>Task 3</h2>

      <h3>
        {isLoggedIn ? `Welcome ${username}` : "Please Login"}
      </h3>

      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}

// MAIN COMPONENT
function App() {
  return (
    <Provider>
      <div>

        

        <Profile />

        <hr />

        <ThemeSwitcher />

        <hr />

        <Login />
      </div>
    </Provider>
  );
}

export default App;