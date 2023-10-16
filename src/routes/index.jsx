import { Navigate } from 'react-router-dom';
import App from '../App';
import Homepage from '../pages/public/Homepage/Homepage';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to='/homepage' replace />,
      },
      {
        path: 'homepage',
        element: <Homepage></Homepage>,
        children: [{}],
      },
    ],
  },
];
