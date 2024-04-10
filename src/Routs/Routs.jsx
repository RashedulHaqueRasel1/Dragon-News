import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import LogIn from "../Pages/LogIn/LogIn";
import Registration from "../Pages/Registration/Registration";
import News from "../Pages/News/News";
import PrivetRoute from "./PrivetRoute/PrivetRoute";
 

 

const router = createBrowserRouter([ 
    { 
    path: "/", 
    element: <Root></Root>, 
    children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/news.json')
        },
        {
            path: '/news/:id',
            element: <PrivetRoute><News></News></PrivetRoute>,
        },
        {
            path: '/login',
            element: <LogIn></LogIn>
        },
        {
            path: '/registration',
            element: <Registration></Registration>
        },
         
    ]
    }, 
]); 

export default router;

