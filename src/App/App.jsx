import React from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { About } from "../About/About";
import { Blog } from "../Blog/Blog";
import { BlogDetails } from "../BlogDetails/BlogDetails";
import { Cars } from "../Cars/Cars";
import { CarDetail } from "../Car_Detail/CarDetail";
import { Home } from "../Home/Home";
import { Contact } from "../Contact/Contact";
import { Faq } from "../Faq/Faq";
import { Team } from "../Team/Team";
import { Terms } from "../Terms/Terms";
import { Testimonials } from "../Testimonials/Testimonials";
import { Routers } from "../router/Routers";





export const App = () => {



    return(
        <div className="wrapper">
        <div id="container">
            <Header/>
            <Routers/>
            <Footer/>
        </div>
        </div>
    );
};