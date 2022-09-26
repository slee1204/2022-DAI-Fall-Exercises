import 'semantic-ui-css/semantic.min.css'
import Head from 'next/head'
import * as React from "react";

function MyApp({ Component, pageProps }) {
<<<<<<< HEAD
  return  <Component {...pageProps} />

    /*{ <Head>
=======
  return <>
    <Head>
>>>>>>> ca89010a9398cc137b8c0043783297224760477f
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <link
      rel="stylesheet"
      href="path/to/node_modules/normalize.css/normalize.css"
      />


<<<<<<< HEAD
    </Head> }*/
    

    
 
=======
    </Head>
    

    <Component {...pageProps} />
 </>
>>>>>>> ca89010a9398cc137b8c0043783297224760477f
 }

export default MyApp
