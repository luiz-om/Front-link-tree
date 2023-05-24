import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import { Login } from './views/Login';
import { Cadastro } from './views/Cadastro';
import { Home } from './views/Home';
import { NotLoggedArea } from './pages/NotLoggedArea';
import { DashboardArea } from './pages/DashboardArea';
import { RecuperarSenhaTelaEmail } from './views/RecuperarSenhaTelaEmail';
import { CadastroNovaSenha } from './views/CadastroNovaSenha';

const routerNotLogged = createBrowserRouter([
  {
    path: '/',
    element: <NotLoggedArea />,
    children: [
      {
        path: "/login", //ok
        element: <Login />,
      },
      {
        path: '/cadastro',
        element: <Cadastro />
      },
      {
        path: '/recuperar-senha',
        element: <RecuperarSenhaTelaEmail />
      },
      {
        path: '/nova-senha',
        element: <CadastroNovaSenha />
      }
    ]
  }
]);

const routerLogged = createBrowserRouter([
  {
    path: '/',
    element: <DashboardArea />,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  }
], {basename: '/dashboard'})

const root = ReactDOM.createRoot(document.getElementById('root'));

const isLogged = false

root.render(
  <React.StrictMode>
    {
      isLogged ? 
      <RouterProvider router={routerLogged} />
      :
      <RouterProvider router={routerNotLogged} />
    }
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
