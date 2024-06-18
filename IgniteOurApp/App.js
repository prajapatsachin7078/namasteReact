import { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import {Header} from "./Components/Header"
import Body from "./Components/Body"
import Footer from "./Components/Footer";
import Restaurant from "./Components/Restaurant";
import ShimmerLoader from "./Components/ShimmerLoader";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import SearchCityContextProvider from "./utils/context/SearchCityContextProvider";


// import Grocery from "./Components/Grocery";

const Grocery = lazy(()=>import("./Components/Grocery"));
const AppLayout = () => {
    return (
        <div className="container-fluid">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

// const appRouter = createBrowserRouter([
//     {
//         path: "/",
//         element: <AppLayout/>,
//         children:[
//             {
//                 path: "/",
//                 element: <Body />,
//             },
//             {
//                 path: "/about",
//                 element: <About/>,
//             },
//             {
//                 path: "/contact",
//                 element: <Contact/>,
//             }
//         ],
//         errorElement: <Error/>,
//     },
// ]);

const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element ={<AppLayout/>} errorElement ={<Error/>}>
            <Route path="" element ={<Body />}/>
            <Route path="/about" element ={<About />}/>
            <Route path="/contact" element ={<Contact />}/>
            <Route path="/restaurant/:resId" element ={<Restaurant />}/>
            <Route path="/grocery" element = {<Suspense fallback={<ShimmerLoader/>}>
                <Grocery/>
            </Suspense>}/>
        </Route>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SearchCityContextProvider>
        <RouterProvider router={appRouter} />
    </SearchCityContextProvider>
);