// App.js
import './App.css';
import Header from './Components/Header'; 
import { RouterProvider } from 'react-router-dom';
import { appRouter } from './Components/Layout'; 
function App() {
  return (
    <div>
      <Header /> 
      <RouterProvider router={appRouter} /> 
    </div>
  );
}

export default App;