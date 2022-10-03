
import Signup from "./auth/Signup";
import Profile from "./auth/Profile";
import Login from "./auth/Login";
import ForgotPassword from "./auth/ForgotPassword"
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UpdateProfile from "./auth/UpdateProfile";
import PrivateRoute from "./auth/PrivateRoute";
import Dashboard from "./InventoryMain/Dashboard";

const App = () => {
  return (
    

        
          <Router>
            <AuthProvider>
              <Routes>
                {/* Inventory */}
                <Route exact path="/" element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }/>

                {/* Profile */}
                <Route exact path="/user" element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }/>
                <Route path="/update-profile" element={
                  <PrivateRoute>
                    <UpdateProfile />
                  </PrivateRoute>
                }/>

                {/* Auth */}
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                
              </Routes> 
            </AuthProvider>
          </Router>
         
       
        

    
  )
}

export default App;
 