import { Routes, Route } from "react-router";

import Landing from "./pages/Landing";
import SignUp from "./pages/Auth/SignUp";
import LogIn from "./pages/Auth/LogIn";

import Layout from "./Layout";

import Dashboard from "./pages/Dashboard";


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='auth/signup' element={<SignUp />} />
      <Route path='auth/login' element={<LogIn />} />
      <Route path='app' element={<Layout />} >
        <Route index element={<Dashboard />} />
      </Route>
    </Routes>
  )
}

export default App