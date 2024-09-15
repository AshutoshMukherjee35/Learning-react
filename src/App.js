import './App.css';
import Header from './Components/Header';
import Layout from './Components/Layout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
      <Header />   
        <Routes>
          <Route path='*' element={<Layout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

// App.js
// import './App.css';
// import Header from './Components/Header'; 
// import { RouterProvider } from 'react-router-dom';
// import { appRouter } from './Components/Layout'; 
// function App() {
//   return (
//     <div>
//       <Header /> 
//       <RouterProvider router={appRouter} /> 
//     </div>
//   );
// }

// export default App;