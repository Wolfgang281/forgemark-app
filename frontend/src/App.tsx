import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components/auth/ProtectedRoute";
import { PageLoader } from "./components/layout/PageLoader";
import { useGetCurrentUser } from "./hooks/useGetCurrentUser";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Partner from "./pages/Partner";
import type { RootState } from "./redux/store";

function App() {
  useGetCurrentUser();
  const { loading } = useSelector((state: RootState) => state.user);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/partner"
        element={
          <ProtectedRoute>
            <Partner />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute requiredRole="admin">
            <Admin />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
