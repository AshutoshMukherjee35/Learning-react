import Home from './Home';
import About from './About';
import Contact from './Contact';
import SignUp from './SignUp';
import {  Routes, Route } from 'react-router-dom';



const Layout = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/signup' element={<SignUp />} />
      </Routes>
    
        

    </div>
  );
};
export default Layout;

//  const appRouter = createBrowserRouter([
//     {
//         path: '/',
//         element: <Layout />,
//         children: [
//             {
//                 path: '/',
//                 element: <Home />
//             },
//             {
//                 path: '/about',
//                 element: <About />
//             },
//             {
//                 path: '/contact',
//                 element: <Contact />
//             },
//             {
//                 path: '/sign-up',
//                 element: <SignUp />
//             }
//     ]
//     }
// ])

// export default Layout;


// Layout.js
// import { createBrowserRouter, Outlet } from 'react-router-dom';
// import Home from './Home'; 
// import About from './About';
// import Contact from './Contact';
// import SignUp from './SignUp';


// const Layout = () => {
//   return (
//     <div>
//       <Outlet /> 
//     </div>
//   );
// };

// export const appRouter = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />, 
//     children: [
//       { path: '/', element: <Home /> },
//       { path: '/about', element: <About /> },
//       { path: '/contact', element: <Contact /> },
//       { path: '/sign-up', element: <SignUp /> },
//     ],
//   },
// ]);

// export default Layout;



