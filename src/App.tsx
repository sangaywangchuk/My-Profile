import React from 'react';
import computer from './assets/computer.gif';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from './pages/landing';
import Main from './pages/main';
import Home from './pages/home';
import Experience from './pages/experience';
import Skills from './pages/skills';
import Contact from './pages/contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
     children: [
      {
        path: '/',
        element: <Landing/>
      },
    //   {
    //     path: '/home',
    //     element: <Home/>
    //   },
    //   {
    //     path: '/experience',
    //     element: <Experience/>
    //   },
    //   {
    //     path: '/skills',
    //     element: <Skills/>
    //   },
    //   {
    //     path: '/contact',
    //     element: <Contact/>
    //   },
    //   {
    //     path: '/about',
    //     element: <Contact/>
    //   }
     ]
  }
]);
function App() {
  return ( 
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
