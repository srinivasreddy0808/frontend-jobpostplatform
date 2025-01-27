import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthProvider from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./components/AppLayout";
import Login from "./features/authentication/Login";
import Signup from "./features/authentication/Signup";
import CompanyRegister from "./features/companyRegister/CompanyRegister";
import JobPost from "./features/jobpost/JobPost";
import JobList from "./features/joblist/JobList";

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route index path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route path="company-register" element={<CompanyRegister />} />
            <Route path="job-post" element={<JobPost />} />
            <Route path="job-list" element={<JobList />} />
            <Route index element={<Navigate to="/job-list" replace />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
