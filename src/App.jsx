import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion } from 'framer-motion';
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";
import "./App.css";
// Ye imports kafi hain, niche dobara banaye ki zaroorat nahi
import Openings from "./pages/Openings";
import Directory from "./pages/Directory";
import Philosophy from "./pages/Philosophy";

function App() {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={
          <>
            <header className="page-header">
             <motion.div initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 1, ease: 'easeOut' }}>Premium Opportunities</motion.div>

              {/* <div className="badge-top">Premium Opportunities</div> */}
              <motion.h1 
  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 1, ease: 'easeOut' }}
>
  Luxury Job Board
</motion.h1>
              <motion.h1 
  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 1, ease: 'easeOut' }}
>
  Find your next <br /><span>Executive Move.</span>
</motion.h1>
               <motion.p
  initial={{ opacity: 0, y: 50 }} 
  animate={{ opacity: 1, y: 0 }} 
  transition={{ duration: 1, ease: 'easeOut' }}
>
  A curated list of high-impact roles for industry leaders.
</motion.p>
            </header>

            <div className="parent">
              <Cards img='https://companieslogo.com/img/orig/AMZN.D-13fddc58.png?t=1740113564' h6='Amazon' p='5 days ago' h3='Senior UI/UX Designer' button1='Part-time' button2='Senior level' h4='$120/hr' p2='San Francisco, NA'/>
              <Cards img='https://cdn2.hubspot.net/hubfs/53/image8-2.jpg' h6='Google' p='30 days ago' h3='Graphic Designer' button1='Full-time' button2='Flexible Schedule' h4='$100/hr' p2='San Francisco, CA'/>
              <Cards img='https://cdn.freebiesupply.com/logos/large/2x/dribbble-icon-1-logo-png-transparent.png' h6='Dribbble' p='18 days ago' h3='Senior Motion Designer' button1='Contract' button2='Remote' h4='$85/hr' p2='San Francisco, CA'/>
              <Cards img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAel73XxRrOwTx8yGLTOvVpoqkLUELbaRSLg&s' h6='Meta' p='3 months ago' h3='UX Designer' button1='Full-time' button2='In Office' h4='$200-250k' p2='New York, NY'/>
              <Cards img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-0sgMITwNqzwWbNZfDxjhGmmje755YgLHQ&s' h6='Airbnb' p='1 day ago' h3='Junior UI/UX Designer' button1='Contract' button2='Remote' h4='$100/hr' p2='San Francisco, CA'/>
              <Cards img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj_mFGAjCi0_8r4Rtf2vW90lhPYm7rdR1RoQ&s' h6='Apple' p='6 day ago' h3='Graphic Designer' button1='Full-time' button2='Flexible Schedule' h4='$85-120k' p2='Cupertino, CA'/>
            </div>
          </>
        } />
         
        <Route path="/openings" element={<Openings />} />
        <Route path="/directory" element={<Directory />} />
        <Route path="/philosophy" element={<Philosophy />} />
      </Routes>
    </Router>
  );
}

export default App;