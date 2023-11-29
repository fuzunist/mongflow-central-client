import { createBrowserRouter } from 'react-router-dom'
// import Root from './Root'
import NotFound from '../pages/not-found'
import Root from './Root'

//layouts
import AuthLayout from '../layouts/AuthLayout'

import Welcome from '../pages/Welcome'
import Login from '../pages/Login'
// import Register from '../pages/Register'
// import ForgetPassword from "../pages/ForgetPassword"
// import LogOut from '@/pages/LogOut'
// import ForgetPassword from '@/pages/ForgetPassword'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <AuthLayout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                path: "auth/login",
                element: <Login />,
                errorElement: <NotFound />
            }
        ]
    },
    // {
    //     path: '*',
    //     element: <AuthLayout />,
    //     children: [
    //         {
    //             path: 'auth/login',
    //             element: <Login />,
    //             errorElement: <NotFound />
    //         },
    //         // {
    //         //     path: 'register',
    //         //     element: <Register />,
    //         //     errorElement: <NotFound />
    //         // },
    //         // {
    //         //     path: 'forget-password',
    //         //     element: <ForgetPassword />,
    //         //     errorElement: <NotFound />
    //         // },
    //         // {
    //         //     path: 'logout',
    //         //     element: <LogOut />,
    //         //     errorElement: <NotFound />
    //         // }
    //     ]
    // }
])

export default routes
