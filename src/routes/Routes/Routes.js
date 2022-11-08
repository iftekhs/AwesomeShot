import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main';
import Home from '../../Pages/Home/Home';
import Login from '../../Pages/Login/Login';
import Services from '../../Pages/Services/Services';

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
    ],
  },
]);

export default routes;
