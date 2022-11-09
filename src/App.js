import { RouterProvider } from 'react-router-dom';
import './App.css';
import routes from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
}

export default App;
