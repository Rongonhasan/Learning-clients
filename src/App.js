
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { routes } from './Components/Style/Route';
// import { Route, RouterProvider } from 'react-router-dom';




function App() {
  return (
    <div>
         <RouterProvider router={routes}>

         </RouterProvider>
      
    </div>
  );
}

export default App;
