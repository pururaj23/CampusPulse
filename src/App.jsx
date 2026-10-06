import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Complaint from "./pages/Complaint";

// Only Admin can access Dashboard
function AdminRoute({ children }) {
  const role = localStorage.getItem("campusRole");

  if (role !== "admin") {
    return <Navigate to="/analytics" replace />;
  }

  return children;
}

// Admin + Faculty can access Analytics and Complaint
function AuthRoute({ children }) {
  const role = localStorage.getItem("campusRole");

  if (!role) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function App() {
  return (
    <Routes>

      {/* Default */}
      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />

      {/* Login */}
      <Route
        path="/login"
        element={<Login />}
      />

      {/* DASHBOARD - ADMIN ONLY */}
      <Route
        path="/dashboard"
        element={
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        }
      />

      {/* ANALYTICS - ADMIN + FACULTY */}
      <Route
        path="/analytics"
        element={
          <AuthRoute>
            <Analytics />
          </AuthRoute>
        }
      />

      {/* COMPLAINT - ADMIN + FACULTY */}
      <Route
        path="/complaint"
        element={
          <AuthRoute>
            <Complaint />
          </AuthRoute>
        }
      />

      {/* Unknown URL */}
      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

    </Routes>
  );
}

export default App;