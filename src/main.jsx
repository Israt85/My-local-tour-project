import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Dashboard from './Pages/Dashboard';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Provider/AuthProvider';
import AllService from './Pages/AllService';
import SingleService from './Components/SingleService';
import AddService from './Pages/AddService';
import MyService from './Pages/MyService';
import ErrorPage from './Pages/ErrorPage';
import Update from './Pages/Update';
import MySchedule from './Pages/MySchedule';
import Private from './Provider/Private';
import FeedBackForm from './Components/FeedBackForm/FeedBackForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        
  
      {
        path: '/',
        element: <Home></Home>
      },{
        path:'/services',
        element: <Services></Services>
      },
      {
         path : '/service',
         element: <AllService></AllService>
      },
      {
        path:'/feedback',
        element: <Private><FeedBackForm></FeedBackForm></Private>
      },
      {
        path: '/details/:id',
        element: <Private><SingleService></SingleService></Private>,
        loader: ({params}) =>{return fetch(`https://my-local-tour-project-server.vercel.app/service/${params.id}`)}
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path : '/addservice',
        element: <Private><AddService></AddService></Private>
      },
      {
        path: '/myservice',
        element:<Private><MyService></MyService></Private>
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader:({params})=>fetch(`https://my-local-tour-project-server.vercel.app/service/${params.id}`)
      },
      {
        path: '/myschedule',
        element: <Private><MySchedule></MySchedule></Private>
      }
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
