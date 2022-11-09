import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import MyReviews from '../../Pages/MyReviews/MyReviews';
import Register from '../../Pages/Register/Register';
import Service from '../../Pages/Service/Service';
import Services from '../../Pages/Services/Services';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch(`${process.env.REACT_APP_API_ROOT}/services?size=3`),
      },
      {
        path: '/services',
        element: <Services></Services>,
        loader: () => fetch(`${process.env.REACT_APP_API_ROOT}/services`),
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/services/:id',
        element: <Service></Service>,
        loader: ({ params }) => fetch(`${process.env.REACT_APP_API_ROOT}/services/${params.id}`),
      },
      {
        path: '/reviews',
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default routes;
