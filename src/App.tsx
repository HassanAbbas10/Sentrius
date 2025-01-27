import Header from "./components/User/Header/Header";
import Footer from "./components/User/Footer/Footer";
import Home from "./pages/Home";
import "./App.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./pages/About.tsx";

import PrivacyPol from "./pages/PrivacyPol.tsx";
import Contact from "./pages/Contact.tsx";
import Dashboard from "./pages/Dashboard.tsx";

import Profile from "./pages/Profile.tsx";
import Sidebar from "./components/Dashboard/Sidebar/Sidebar.tsx";

import { SidebarProvider } from "./components/ui/sidebar.tsx";
import AuthPage from "./pages/auth/AuthPage.tsx";
const Layout = () => {
  return (
    <div className="app ">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const AuthLayout = () =>{
  return(
    <Outlet/>
  )
}

const DashboardLayout = () => {
  return (
    <div className="app bg-background-primary">
      <SidebarProvider>
        <div className="app flex h-screen bg-background-primary text-text-primary">
          <Sidebar />
        </div>
        <div className="flex-1">
          <Outlet />
        </div>
      </SidebarProvider>
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
        element: <Home />,
      },

      {
        path: "/about",
        element: <About />,
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
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <AuthPage />,
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
