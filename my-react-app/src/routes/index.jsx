import { Navigate } from 'react-router-dom';
import App from '../App';

export const routes = [
  {
    path: '/',
    element: <App />,
    children: [{}],
  },
];
