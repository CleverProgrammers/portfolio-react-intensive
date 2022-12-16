import React from 'react'
import HeaderTwo from "../Components/headerTwo";
import Footer from "../Components/footer";
export default function Index(props) {
    return (
        <>      
        <HeaderTwo />
          {props.children}
         <Footer />
        </>
    )
}
