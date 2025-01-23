import Header from "./components/User/Header/Header"
import Footer from "./components/User/Footer/Footer";
import Home from "./pages/Home";
import "./App.css";


import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./pages/About.tsx";
import SignUp from "./pages/auth/SignUp.tsx";
import PrivacyPol from "./pages/PrivacyPol.tsx";
import Contact from "./pages/Contact.tsx";
import Dashboard from "./pages/Dashboard.tsx";
import HowItWorks from "./pages/HowItWorks.tsx";
import Profile from "./pages/Profile.tsx";
const Layout = () => {
  
  return (
    <div className="app ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
    
      {
        path: "/about",
        element: <About />,
      },
    
      {
        path: "/signup",
        element: <SignUp />,
      },
    
      {
        path: "/privacy",
        element: <PrivacyPol />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/howitworks",
        element: <HowItWorks />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    
    ],
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;