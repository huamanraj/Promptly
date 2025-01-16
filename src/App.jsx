import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import LandingPage from './pages/LandingPage';


import ChatPage from './pages/Chat';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/chat',
    element: <ChatPage />,
  },

]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
