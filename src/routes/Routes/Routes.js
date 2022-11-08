import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layouts/Main';
import Home from '../../Pages/Home/Home';

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
    ],
  },
]);

export default routes;
