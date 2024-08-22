import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './pages/Login/index.tsx';
import Signup from './pages/Signup/index.tsx';
import HomePage from './pages/Home/index.tsx';
import Error from './components/Error.tsx';
import Admin from './pages/Admin/index.tsx';
import AddShow from './pages/Admin/AddShow.tsx';
import Showpage from './pages/ShowPage/index.tsx';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store.ts';
import { PersistGate } from 'redux-persist/integration/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/showpage',
        element: <Showpage />,
      },
      {
        path: '/signin',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/admin',
        element: <Admin />,
      },
      {
        path: '/addshow',
        element: <AddShow />,
      },
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
