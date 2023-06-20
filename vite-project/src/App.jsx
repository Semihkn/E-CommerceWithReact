/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import PopUpModal from "./Components/PopUpModal/PopUpModal";
import NotificationToast from "./Components/NotificationToast/NotificationToast";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Banner from './Components/MainContents/Banner/Banner'
import Category from './Components/MainContents/Category/Category'
import Product from './Components/MainContents/Product/Product'
import Testimonials from './Components/MainContents/Testimonials/Testimonials'
import style from './assets/css/style.css';
import stylePrefix from './assets/css/style-prefix.css';
import Blog from "./Components/MainContents/Blog/bLOG.JSX";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Anon - eCommerce Website</title>

        <link
          rel="shortcut icon"
          href="./assets/images/logo/favicon.ico"
          type="image/x-icon"
        />
        <link rel="stylesheet" href="./assets/css/style-prefix.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <div className="overlay" data-overlay="" />
        {/* <PopUpModal></PopUpModal> 
        <NotificationToast></NotificationToast> */}
        <Header></Header>

        <main>
        <Banner></Banner>
        <Category></Category>
        <Product></Product>    
        <Testimonials></Testimonials> 
        <Blog></Blog>   
        </main>

        <Footer></Footer>
      </body>
    </>
  );
}
export default App;
