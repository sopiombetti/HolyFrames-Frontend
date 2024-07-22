import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Detail from '../routes/Detail';
import Home from '../routes/Home';
import Admin from '../routes/Admin';
import Recomendations from '../routes/Recomendations';



const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
          {
            path: "/",
            element: <Home />
          },
          {
            path: "/detail/:id",
            element: <Detail />,
          },
          {
            path: "/recomendations",
            element: <Recomendations />,
          },
          {
            path: "/admin",
            element: <Admin />
          }
      ],
    },
  ]);

  export default router;