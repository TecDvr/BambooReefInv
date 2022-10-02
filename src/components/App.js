import { Container } from "react-bootstrap";
import Signup from "./auth/Signup";
import Dashboard from "./Dashboard";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword"
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateProfile from "./auth/UpdateProfile";
import PrivateRoute from "./auth/PrivateRoute";

const App = () => {
  return (
    

        
          <Router>
            <AuthProvider>
              <Routes>
                <Route exact path="/" element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }/>
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/update-profile" element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }/>
              </Routes> 
            </AuthProvider>
          </Router>
         
       
        

    
  )
}

export default App;
 