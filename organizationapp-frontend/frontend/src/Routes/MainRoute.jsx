import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import ServiceDetails from '../Pages/ServiceDetails/ServiceDetails';
import MySelection from '../Pages/MySelection/MySelection';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Blog from '../Pages/Blog/Blog';
import AllReview from '../Pages/AllReview/AllReview';

const MainRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/data.json')
            }, {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/service/:id',
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/mySelection',
                element: <PrivateRoute>
                    <MySelection></MySelection>
                </PrivateRoute>
            }, {
                path: '/reviews',
                element: <PrivateRoute>
                    <AllReview></AllReview>
                </PrivateRoute>
            }
        ],


    },
])

export default MainRoute;