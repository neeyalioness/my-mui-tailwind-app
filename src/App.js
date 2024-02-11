import React from "react";
import LoginPage from "./pages/LoginPage";
import AdminConsolePage from "./pages/AdminConsolePage";
import DashboardPage from "./pages/DashboardPage";
import "./index.css"

const App = () => {
  // Retrieve user information from sessionStorage
  const user = JSON.parse(sessionStorage.getItem("user"));

  // Determine the user's role
  const userRole = user ? user.role : null;

  return (
    <>
      {/* If user is not logged in, show the login page */}
      {!user && <LoginPage />}

      {/* If user is logged in, show the appropriate page based on the role */}
      {user && (
        <>
          {userRole === "admin" && <AdminConsolePage />}
          {userRole === "employee" && <DashboardPage />}
          {userRole !== "admin" && userRole !== "employee" && <LoginPage />}
        </>
      )}
    </>
  );
};

export default App;
