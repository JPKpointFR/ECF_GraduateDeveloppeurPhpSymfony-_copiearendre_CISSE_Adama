import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Cars } from './pages/Cars';
import { CarDetail } from './pages/CarDetail';
import { Home } from './pages/Home';
import { Testimonys } from './pages/Testimonys';
import { CreateUser } from './pages/CreateUser';
import { Login } from './pages/Login';
import { EditService } from "./pages/EditService";
import { EditCar } from "./pages/EditCar";
import { CreateCar } from "./pages/CreateCar";
import { Users } from './pages/Users';
import { UpdateUser } from './pages/UpdateUser';
import { PageNotFound } from './pages/PageNotFound'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Register } from './pages/Register';


const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};


const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/home/service",
        element: <EditService />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/users/create",
        element: <CreateUser />,
      },
      {
        path: "/users/update/:id",
        element: <UpdateUser />,
      },
      {
        path: "/cars/create",
        element: <CreateCar />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/cars/:id",
        element: <CarDetail />,
      },
      {
        path: "/cars/update/:id",
        element: <EditCar />,
      },
      {
        path: "/testimonys",
        element: <Testimonys />,
      },
    ]
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}






export default App;



