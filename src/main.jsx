import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Global } from '@emotion/react';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
    <Global
        styles={`
          body {
            overflow-y: scroll;
          }

          body::-webkit-scrollbar {
            width: 2px;
          }

          body::-webkit-scrollbar-track {
            background: #f1f1f1;
          }

          body::-webkit-scrollbar-thumb {
            background: #888;
            border-radius: 2px;
            transition: background 0.3s ease-in-out;
          }

          body::-webkit-scrollbar-thumb:hover {
            background: #555;
          }

          @keyframes scrollThumb {
            0% {
              background: #888;
            }
            50% {
              background: #555;
            }
            100% {
              background: #888;
            }
          }

          body::-webkit-scrollbar-thumb {
            animation: scrollThumb 1.5s infinite;
          }
        `}
      />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
