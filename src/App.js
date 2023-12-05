import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage.js';

const MyRouter = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router={MyRouter} />
    </div>
  );
}

export default App;
