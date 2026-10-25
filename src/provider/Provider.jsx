import { useState } from "react";

import {
  UserContext,
  ThemeContext,
  AuthContext
} from "../context/Context";

function UserProvider({ children }) {

  // TASK 1: User Information
  const user = {
    name: "Bala",
    role: "Developer"
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}

function ThemeProvider({ children }) {

  // TASK 2: Theme Switcher
  const [theme, setTheme] = useState("Light");

  function toggleTheme() {
    setTheme(theme === "Light" ? "Dark" : "Light");
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function AuthProvider({ children }) {

  // TASK 3: Login Context
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const username = "Bala";

  function toggleLogin() {
    setIsLoggedIn(!isLoggedIn);
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, username, toggleLogin }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Combine all Providers
function Provider({ children }) {
  return (
    <UserProvider>
      <ThemeProvider>
        <AuthProvider>
          {children}
        </AuthProvider>
      </ThemeProvider>
    </UserProvider>
  );
}

export default Provider;