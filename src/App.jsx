import './App.css'
import { useState,useRef, useEffect } from 'react';
import spanish from "./assets/spanish.png"
import english from "./assets/english.png"
import proyecto1 from "./assets/proyecto1.jpeg"
import proyecto2 from "./assets/proyecto2.png"
import proyecto3 from "./assets/proyecto3.png"
import muiIcon from "./assets/muiIcon.png"
import logo from "./assets/logo.jpeg"
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from './Hooks/size';
import {Link} from "react-scroll"
import{
  FaHandshake,
  FaRegLightbulb,
  FaUserGraduate
 } from "react-icons/fa"

 import{
    RiTeamFill
 } from "react-icons/ri"
 
 import{
    ImShrink2
 } from "react-icons/im"
 
 import{
    SiTheconversation
 } from "react-icons/si"
import {
  FaBars,
}from "react-icons/fa";
import { 
    BsFillMoonStarsFill,
    BsLinkedin,
    BsInstagram,
    BsGithub
   } from "react-icons/bs";

import { 
    GiSunglasses,
   } from "react-icons/gi";
import { 
  AiOutlineArrowDown,
   } from "react-icons/ai";
import { 
  DiGit,
   } from "react-icons/di";

import { 
  SiRedux,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiCss3,
  SiRailway,
  SiVercel,
  SiJavascript,
 } from "react-icons/si";

import { 
  IoLogoNodejs,
  IoLogoJavascript,
  IoLogoHtml5,
  IoMdMail,
 } from "react-icons/io";

import { 
  IoLogoReact,
 } from "react-icons/io5";
 


function App() {

  const [width, setWidt] = useState(0);
  const carrusel = useRef();
  const useIsSmall = () => useMediaQuery('(min-width: 480px)');
  const [pIsOpen, setPIsOpen] = useState(false);
  const isSmall = useIsSmall()
  const [isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const [darkMode, setdarkMode] =  useState(localStorage.getItem('dark')||false);
  const [leng, setleng] = useState(localStorage.getItem('leng')||false);
  const animation = useAnimation();
  const {ref, inView} = useInView();

  
  const dark = () =>{

    
    setdarkMode(!darkMode)
    localStorage.setItem("dark",!darkMode)

  }

  
  function lengg (){ 

   
    setleng(!leng)
    localStorage.setItem("leng",!leng)
  }

  useEffect(()=>{

    

    if(localStorage){

      if(localStorage.getItem("dark")===true){
        setdarkMode(true)
      }
      if(localStorage.getItem("dark")===false){
        setdarkMode(false)
      }

    }else{
      setdarkMode("true");
      setleng(true)
    }

  },[]);
  
  
  useEffect(()=>{

    setWidt(carrusel.current.scrollWidth - carrusel.current.offsetWidth)

}, [])

  useEffect(()=>{

    

    if(localStorage){

      if(localStorage.getItem("leng")===true){
        setleng(true)
      }
      if(localStorage.getItem("leng")===false){
        setleng(false)
      }

    }else{
      setdarkMode("true");
      setleng(true)
    }

  },[]);


  
  useEffect(()=>{

    if(inView){
      animation.start({
        x:0,
        transition:{
          type: "spring",
          duration: 3.5
        }
      })
    }

    if(!inView){
      animation.start({
        x:"-100vw",
      })
    }

  },[inView]);

  return (

    <motion.div layout className={darkMode ? "dark" : ""}>

      {
        leng ?
        
                
      
        /////////////////////////////////////////////////////////english////////////////////////////////////////////////////////////////////////

        <div 

        id='/'
        
        className='bg-dayColor min-h-screen sm:max-w-full pt-14 transition-colors duration-500 dark:transition-colors dark:duration-500 just columns-1 dark:bg-darkColor overflow-hidden'> 
        




        {/* navbar */}

        {

          isSmall?
        
          <motion.nav 
        
          initial={{
            opacity:0
          }}
      
          transition={{
            duration:0.5,
            delay:3.25
          }}
          
          animate={{ 
          opacity: 1,
        }}
      
          className='flex fixed top-0 right-0 mb-0 backdrop-contrast-75 backdrop-blur-sm rounded-md z-10 h-12 max-sm:h-10 p-3 mt-0 text-opacity-95 font-semibolds text-base'>
  
              <Link 
  
              to="/" spy={true} smooth={true} offset={-5} duration={500}
  
              className=' hover:drop-shadow-xl text-sm  shadow-darkColor hover:scale-125 transition-all mr-12 max-sm:mr-4 hover:cursor-pointer rounded-lg h-10  text-darkColor dark:text-dayColor'>Home</Link>
              <Link 
  
              to="about" spy={true} smooth={true} offset={-5} duration={500}
  
              className=' hover:drop-shadow-xl text-sm  shadow-darkColor hover:scale-125 transition-all mr-12 max-sm:mr-4 hover:cursor-pointer rounded-lg h-10  text-darkColor dark:text-dayColor'>About</Link>
              <Link 
  
              to="proyectos" spy={true} smooth={true} offset={-5} duration={500}
  
              className=' hover:drop-shadow-xl text-sm  shadow-darkColor hover:scale-125 transition-all mr-12 max-sm:mr-4 hover:cursor-pointer rounded-lg h-10  text-darkColor dark:text-dayColor'>Proyects</Link>
  
              <Link 
  
              to="contacto" spy={true} smooth={true} offset={-5} duration={500}
  
              className=' hover:drop-shadow-xl text-sm  shadow-darkColor hover:scale-125 transition-all mr-12 max-sm:mr-16 hover:cursor-pointer rounded-lg h-10  text-darkColor dark:text-dayColor'>Contact</Link>
            
              
              <a onClick={dark} className='hover:scale-105 max-sm:absolute mt max-sm:top-2 max-sm:right-9 transition-all dark:text-dayColor  hover:cursor-pointer  max-sm:h-6 max-sm:w-6 w-8 h-8 p-2  max-sm:p-1.5 max-sm:text-xs rounded-sm hover:text-darkColor hover:drop-shadow-xl border-t-2 border-l-2 text-darkColor shadow-md hover:shadow-lg   '>
              <BsFillMoonStarsFill/>
              </a>
      
      
      {/* IDIOMA------------------------- */}
      
          {
            leng ? 
                    <button >
              <img src={spanish} onClick={lengg} alt="spanish" className='max-sm:absolute max-sm:top-2 max-sm:right-2 hover:scale-105 hover:cursor-pointer transition-all dark:text-dayColor hover:drop-shadow-xl shadow-md hover:shadow-lg  p-1 mx-2 w-8 h-8 max-sm:mr-0 max-sm:h-6 max-sm:w-6 justify-center rounded-sm border-b-2 border-r-2 text-darkColor hover:text-darkColor dark:hover:text-dayColor ' />
              </button>
            :
            <a >
            <img src={english} onClick={lengg} alt="english" className='max-sm:absolute max-sm:top-2 max-sm:right-2 hover:scale-105 hover:cursor-pointer transition-all dark:text-dayColor hover:drop-shadow-xl shadow-md hover:shadow-lg  p-1 mx-2 w-8 h-8 max-sm:mr-0 max-sm:h-6 max-sm:w-6 justify-center rounded-sm border-b-2 border-r-2 text-darkColor hover:text-darkColor dark:hover:text-dayColor ' />
            </a>
          }
      
      
      
      
      {/* IDIOMA------------------------- */}
      
      
             
            
            
          </motion.nav>

          :
          
          // mobile

          <motion.div >

          <motion.div

          layout transition={{layout:{duration:0.5,type:"spring"},
          
          delay:3
          
        
        }}

          initial={{
            opacity:0
          }}



          animate={{
            opacity:1
          }}

          className="backdrop-contrast-75 flex flex-col gap-3  dark:shadow-dayColor backdrop-blur-md brightness-150 shadow-darkColor shadow-md rounded-md border-l-2 z-10 fixed top-0 right-0 text-4xl text-darkColor dark:text-dayColor"

          >

          <FaBars  className=  "w-auto fixed top-1 right-1" onClick={toggle}/>

          {
            isOpen &&(


         <motion.div className='gap-6 m-4'>

          <motion.h1 className="text-xl mb-5" >Menu</motion.h1>

          <motion.div  className='flex flex-col justify-center text-center gap-2'>
          <Link

          onClick={()=>setIsOpen(false)}
          to="/" spy={true} smooth={true} offset={-50} duration={500}
          className='text-lg border-b-2'>
          Home
          </Link>


          <Link 

          onClick={()=>setIsOpen(false)}
          to="about" spy={true} smooth={true} offset={-0} duration={500}
          className='text-lg border-b-2'>
          About
          </Link>


          <Link

          onClick={()=>setIsOpen(false)}
          to="proyectos" spy={true} smooth={true} offset={-50} duration={500}
          className='text-lg border-b-2'>
          Projects
          </Link>


          <Link

          onClick={()=>setIsOpen(false)}
          to="contacto" spy={true} smooth={true} offset={-50} duration={500}
          className='text-lg border-b-2'>
          Contact
          </Link>
          </motion.div>



          <ul className='mt-4 p-0 flex justify-center' >

                <a onClick={()=> setdarkMode(!darkMode)} className='hover:scale-105 mx-5 transition-all   hover:cursor-pointer  max-sm:h-8 max-sm:w-8 w-8 h-8 p-2  max-sm:p-1.5 max-sm:text-xs rounded-sm hover:text-darkColor hover:drop-shadow-xl border-t-2 border-l-2 dark:text-dayColor shadow-md hover:shadow-lg  dark:hover:text-dayColor '>
                  <BsFillMoonStarsFill/>
                </a>


                {
                      leng ? 

                      <a >
                      <img src={spanish} onClick={lengg} alt="spanish"  className='  hover:scale-105 hover:cursor-pointer transition-all  hover:drop-shadow-xl shadow-md hover:shadow-lg  p-1 mx-5 w-8 h-8  max-sm:h-8 max-sm:w-8 justify-center rounded-sm border-b-2 border-r-2 text-darkColor hover:text-darkColor dark:text-dayColor ' />
                      </a>

                      :

                      <a >
                      <img src={english} onClick={lengg} alt="english"  className='  hover:scale-105 hover:cursor-pointer transition-all  hover:drop-shadow-xl shadow-md hover:shadow-lg  p-1 mx-5 w-8 h-8  max-sm:h-8 max-sm:w-8 justify-center rounded-sm border-b-2 border-r-2 text-darkColor hover:text-darkColor dark:text-dayColor ' />
                      </a>
                }

          </ul>

          </motion.div>
          
            )} 

          </motion.div>

          </motion.div>


        }


        


        {/* titulo */}
    
        <div className='w-screen flex flex-col max-sm:mt-1 mb-16 '>

    
        <motion.div 

        initial={{opacity:0}}

        transition={{
          duration:0.3,
          delay:0
        }}
        
        animate={{
          opacity:1
          }}
          
        

        className='bg-fixed shadow-2xl shadow-darkColor flex flex-col bg-cover bg-[url("https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>

        

        <motion.h1
          
          animate={isSmall?
            {
            y:-35,
            x: -450,
            }
          :
          {
            x:-90,
            y:-55
          }
          }

            transition={{
              duration:2,
              delay:0.5
            }}
          
          className=' mt-16 px-16 max-sm:text-2xl border-t-4 text-6xl rounded-md border-r-4 font-semibolds w-auto text-center p-5 text-dayColor' >Mauricio Jara</motion.h1>
    
            <motion.h3 
            initial={{
              scale:0
            }}

            transition={{
              type: "spring",
              bounce:0.3,
              duration:0.5,
              delay:2.25,
              
            }}
            
            animate={{ 
            scale: 1,


          }}
            className=' text-center max-sm:text-base text-4xl text-dayColor ' >Keep it simple</motion.h3>

           <motion.h1 
           
           animate={isSmall?
            {
            x: 300,
            y:35
            }
          :
            {
              x:70,
              y:55
            }
        }

            transition={{
              duration:2,
              delay:0.5
            }}
           
           className='mb-16 border-b-4 max-sm:text-base border-l-4 text-5xl rounded-md font-semibolds text-center w-auto  p-5 text-dayColor justify-end'>
            Full Stack Web Developer
           </motion.h1>
   

        </motion.div>


            {/* imagen */}

            <motion.div

className='flex justify-center mt-20 bg-darkColor dark:bg-dayColor rounded-full w-48 h-48 '

initial={{
  scale:0
}}

transition={{
  type: "spring",
  bounce:0.3,
  duration:2,
  delay:4,
  
}}

animate={isSmall?
  { 
  x:600,
  y:-50,
scale: 1,
  }
  :
  {
    x:110,
    y:-50,
    scale: 1
  }
}
>

<GiSunglasses className='text-9xl mt-5 text-dayColor dark:text-darkColor '/>

</motion.div>

             

        </div>



       {/* about y skills */}

      <motion.div 
      
      id='about'
      
      className='w-screen mb-6'
      
            animate={animation}

      >

          <h1 className='hover:scale-105 transition-all flex text-4xl font-semibold  border-b-2 m-0 pb-0 w-screen text-darkColor dark:text-dayColor  justify-center hover:drop-shadow-xl shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor  b-8' >About</h1>

            <div ref={ref} className='max-sm:p-0 max-sm:flex-col  w-auto flex'>

                <div className='w-7/12 rounded-3xl p-3 max-sm:w-auto max-sm:flex flex-wrap'>

                  <div className='   hover:scale-110 transition-all max-sm:m-0 m-5 pt-3 mb-11 mt-0 rounded-xl'>

                      <h1 className='max-sm:text-sm flex justify-center pt-0 p-7 rounded-lg text-darkColor dark:text-dayColor'>Hi! I'm Mauricio</h1>

                      <p className='max-sm:text-sm text-sm  block text-center  text-darkColor dark:text-dayColor'>The Developer you need</p>

                      <p className=' max-sm:text-sm text-sm inline-block text-center px-7 pt-7 text-darkColor dark:text-dayColor '>I have always been curious about the IT world and after several years of self-taught learning I graduated from soyHenry's full stack web developer bootcamp.

                      </p>

                      <p className=' max-sm:text-sm text-sm inline-block text-center px-7 pt-7 text-darkColor dark:text-dayColor '>With a great ability to integrate teams and with a high level of English, I am ready for any challenge you want to propose me. Always ready for my next experience😁</p>

                </div>

                      {/* carrousel */}

                      <motion.div 

className=" max-sm:w-screen   "

initial={{
    x:0
}}

transition={{
    type:"sping",
    duration:3
    
}}

animate={{
    x:0,
    
}}

>

    <motion.h3 className=' text-darkColor dark:text-dayColor  max-sm:text-base max-sm:block max-sm:text-center justify-center flex my-9 text-xl border-y-2 p-1 hover:scale-105 transition-all  '>Drag to know more about me 🤠</motion.h3>


    <motion.div 
    
    ref={carrusel}
    
    whileTap={{cursor : "grabbing"}}

    className=' hover:scale-105 mr-5 w-auto transition-all px-14 flex rounded-xl overflow-hidden '>

    
    <motion.div   
    
    className=' hover:scale-110 transition-all p-0 w-auto gap-20 max-sm:gap-11 px-14 inline-flex ml-0 rounded-xl m-5  ' 

    

    drag="x"
    dragConstraints={{right:-50, left:-width}}
    dragTransition={{ bounceStiffness: 100, bounceDamping: 60 }}
    dragElastic={0}
    
    >

            <motion.div className="bg-darkColor rounded-xl w-40  max-sm:w-32 max-sm:h-56 flex flex-col dark:bg-dayColor">

            <FaHandshake className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor dark:text-dayColor dark:bg-darkColor  overflow-hidden rounded-full hover:animate-pulse w-16  h-16 '/>
            
            <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor dark:text-darkColor font-semibold" >Team Player</h3>

            </motion.div>

            <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-dayColor ">

            <SiTheconversation className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor dark:text-dayColor dark:bg-darkColor  overflow-hidden rounded-full hover:animate-pulse w-16  h-16 '/>
            <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor dark:text-darkColor font-semibold" >High english level</h3>

            </motion.div>

            <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-dayColor  ">

            <ImShrink2 className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor dark:text-dayColor dark:bg-darkColor  overflow-hidden rounded-full hover:animate-pulse w-16  h-16 '/>
            <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor dark:text-darkColor font-semibold" >Responsive design</h3>

            </motion.div>

            <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-dayColor  ">

            <FaRegLightbulb className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor dark:text-dayColor dark:bg-darkColor  overflow-hidden rounded-full hover:animate-pulse w-16  h-16 '/>
            <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor dark:text-darkColor font-semibold" >Goal-oriented</h3>

            </motion.div>

            <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-dayColor ">

            <RiTeamFill className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor dark:text-dayColor dark:bg-darkColor  overflow-hidden rounded-full hover:animate-pulse w-16  h-16 '/>
            <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor dark:text-darkColor font-semibold" >Agile methodologies</h3>

            </motion.div>

            <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-dayColor ">

            <FaUserGraduate className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor dark:text-dayColor dark:bg-darkColor  overflow-hidden rounded-full hover:animate-pulse w-16  h-16 '/>
            <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor dark:text-darkColor font-semibold" >Fast learning</h3>

            </motion.div>





        </motion.div>



    </motion.div> 


                      </motion.div>



                </div>



                  {/* skillset */}

                  <div className=' flex flex-wrap justify-center w-auto text-darkColor pt-3 gap-5 border-l-4 mx-4 px-4' >

                    <h2 className='flex w-4/5 text-3xl justify-center hover:scale-105 transition-all rounded-lg  text-darkColor dark:text-dayColor '>My SkillSet</h2>

                      <IoLogoJavascript className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor' />
                      <DiGit className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor' />
                      <IoLogoReact className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                      <IoLogoNodejs className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                      <IoLogoHtml5 className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                      <SiCss3 className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                      <SiRedux className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                      <SiTailwindcss className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                      <SiPostgresql className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                      <SiExpress className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                      <SiRailway className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                      <SiVercel className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor ' />

                  </div>

            </div>


      </motion.div>

        {/* proyectos */}

        <motion.div 
        
        id='proyectos'

        className='flex flex-col w-screen'
      
       

        >

        <h1 className='hover:scale-105 max-sm:flex-col max-sm:text-center transition-all flex text-4xl font-semibold justify border-b-2 pb-0  text-darkColor dark:text-dayColor justify-center hover:drop-shadow-xl shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor mb-8' >Projects</h1>

        {/* //cards proyectos// */}

        <div className='mb-32 flex max-sm:flex-col flex-wrap justify-center w-auto gap-10 p-14 '>

                <motion.div 


                transition={{layout:{duration:1,type:"spring"}}}

                layout
                
                onClick={()=>(setPIsOpen(!pIsOpen))}      
                
                
                className='flex max-sm:flex-col hover:cursor-pointer text-dayColor dark:text-darkColor dark:bg-dayColor bg-darkColor  shadow-lg shadow-darkColor dark:shadow-dayColor  p-2 m-2 w-auto max-sm:w-64  rounded-lg'>

                  <div className='max-sm:flex-col'>

                   <motion.h2 layout="position"className='text-lg  p-3  text-dayColor dark:text-darkColor'>Find me a Home</motion.h2>
                  <motion.img layout="position" className='rounded-3xl p-4 h-64 w-72 max-sm:w-52 max-sm:h-48 shadow-md shadow-dayColor max-sm:w dark:shadow-darkColor  m-4' src={proyecto1}  />

                  </div>



                  {
                    pIsOpen && (
                      <div>
                      <motion.div 
                      
                      initial={{
                        opacity:0
                      }}  

                      transition={{
                        duration:1
                      }}

                      animate={{
                        opacity:1
                      }}
                      
                      className=' p-5 mt-5 flex flex-col max-sm:flex-col text-center '>
                        <p className='m-1 text-dayColor dark:text-darkColor'>Application made through scrum methodology with 8 developers.</p>

                        <p className='m-1 text-dayColor dark:text-darkColor'>Its objective is to act as an intermediary between animal shelters and people.</p>

                        <p className='m-1 text-dayColor dark:text-darkColor'>It also has an e-commerce function oriented to pets</p>


                      </motion.div>

                      <div className='flex justify-center flex-wrap j gap-5 m-7 '>
                        <IoLogoJavascript className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1  rounded-md bg-dayColor dark:bg-darkColor'/> 
                        <IoLogoReact className='text-darkColor hover:scale-110 dark:text-dayColor  h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
                        <DiGit className='text-darkColor hover:scale-110 dark:text-dayColor  h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
                        <IoLogoNodejs className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
                        <SiPostgresql className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
                        <SiRedux className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/>                                          
                        <IoLogoHtml5 className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
                        <SiExpress className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
                        <SiCss3 className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/>
                      </div>



                      <div className='flex flex-row justify-evenly p-6 m-3 '>
                      <a className='rounded-md bg-dayColor dark:bg-darkColor text-darkColor dark:text-dayColor text-lg p-1' href="https://proyecto-final-6jxzmv8cc-carolinambb.vercel.app/"> Deploy</a>
                      <a className='rounded-md bg-dayColor dark:bg-darkColor text-darkColor dark:text-dayColor text-lg p-1' href="https://github.com/Carolinambb/proyecto-final">Code</a>
                      </div>

                      </div>


                      


                    )
                  } 

                


                </motion.div>

                <motion.div 


transition={{layout:{duration:1,type:"spring"}}}

layout

onClick={()=>(setPIsOpen(!pIsOpen))}      


className='flex max-sm:flex-col hover:cursor-pointer text-dayColor dark:text-darkColor dark:bg-dayColor bg-darkColor  shadow-lg shadow-darkColor dark:shadow-dayColor  p-2 m-2 w-auto max-sm:w-64  rounded-lg'>

  <div className='max-sm:flex-col'>

   <motion.h2 layout="position"className='text-lg  p-3  text-dayColor dark:text-darkColor'>Artist Web Page</motion.h2>
  <motion.img layout="position" className='rounded-3xl p-4 h-64 w-72 max-sm:w-52 max-sm:h-48 shadow-md shadow-dayColor max-sm:w dark:shadow-darkColor  m-4' src={proyecto2}  />

  </div>



  {
    pIsOpen && (
      <div>
      <motion.div 
      
      initial={{
        opacity:0
      }}  

      transition={{
        duration:1
      }}

      animate={{
        opacity:1
      }}
      
      className=' p-5 mt-5 flex flex-col max-sm:flex-col text-center '>

        <p className='m-1 text-dayColor dark:text-darkColor'>Its objective is to give the user access to the artist's work.</p>

        <p className='m-1 text-dayColor dark:text-darkColor'>And for the artist to manage her sellings in a comfortable way.</p>


      </motion.div>

      <div className='flex justify-center flex-wrap j gap-5 m-7 '>
        <img className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1  rounded-md bg-dayColor dark:bg-darkColor' src={muiIcon} alt="" />
        <IoLogoJavascript className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1  rounded-md bg-dayColor dark:bg-darkColor'/> 
        <IoLogoReact className='text-darkColor hover:scale-110 dark:text-dayColor  h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <DiGit className='text-darkColor hover:scale-110 dark:text-dayColor  h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <IoLogoHtml5 className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
      </div>



      <div className='flex flex-row justify-evenly p-6 m-3 '>
      <a target="_blank" rel="noopener noreferrer" className='rounded-md rel="noopener noreferrer" bg-dayColor dark:bg-darkColor text-darkColor dark:text-dayColor text-lg p-1' href="https://fre-manen.vercel.app/"> Deploy</a>
      <a target="_blank" rel="noopener noreferrer" className='rounded-md bg-dayColor dark:bg-darkColor text-darkColor dark:text-dayColor text-lg p-1' href="https://github.com/MauriJara312/artistPortfolio">Code</a>
      </div>

      </div>


      


    )
  } 




                </motion.div>

                <motion.div 


transition={{layout:{duration:1,type:"spring"}}}

layout

onClick={()=>(setPIsOpen(!pIsOpen))}      


className='flex max-sm:flex-col hover:cursor-pointer text-dayColor dark:text-darkColor dark:bg-dayColor bg-darkColor  shadow-lg shadow-darkColor dark:shadow-dayColor  p-2 m-2 w-auto max-sm:w-64  rounded-lg'>

  <div className='max-sm:flex-col'>

   <motion.h2 layout="position"className='text-lg  p-3  text-dayColor dark:text-darkColor'>Gamepedia</motion.h2>
  <motion.img layout="position" className='rounded-3xl p-4 h-64 w-72 max-sm:w-52 max-sm:h-48 shadow-md shadow-dayColor max-sm:w dark:shadow-darkColor  m-4' src={proyecto3}  />

  </div>



  {
    pIsOpen && (
      <div>
      <motion.div 
      
      initial={{
        opacity:0
      }}  

      transition={{
        duration:1
      }}

      animate={{
        opacity:1
      }}
      
      className=' p-5 mt-5 flex flex-col max-sm:flex-col text-center '>

        <p className='m-1 text-dayColor dark:text-darkColor'>Its objective is to give the user control over a data base of videogmes. Consuming the RAWG videogames API.</p>

        <p className='m-1 text-dayColor dark:text-darkColor'>The user can sort, search or create a new videogame.</p>


      </motion.div>

      <div className='flex justify-center flex-wrap j gap-5 m-7 '>
        <IoLogoJavascript className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1  rounded-md bg-dayColor dark:bg-darkColor'/> 
        <IoLogoReact className='text-darkColor hover:scale-110 dark:text-dayColor  h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <DiGit className='text-darkColor hover:scale-110 dark:text-dayColor  h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <IoLogoNodejs className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <SiPostgresql className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <SiRedux className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/>                                          
        <IoLogoHtml5 className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <SiExpress className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <SiCss3 className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/>
      </div>



      <div className='flex flex-row justify-evenly p-6 m-3 '>
      <a target="_blank" rel="noopener noreferrer" className='rounded-md bg-dayColor dark:bg-darkColor text-darkColor dark:text-dayColor text-lg p-1' href="https://github.com/MauriJara312/Proyect-VideogamesApp">Code</a>
      </div>

      </div>


      


    )
  } 




                </motion.div>



        </div>

        </motion.div>


        {/* contacto */}

      <div
      
      id='contacto'
      className='flex flex-col justify-center w-screen shadow-xl shadow-dakColor dark:shadow-dayColor'>

      <h1 className='hover:scale-105 max-sm:flex-col max-sm:text-center transition-all flex text-4xl font-semibold justify border-b-2 pb-0  text-darkColor dark:text-dayColor justify-center hover:drop-shadow-xl shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor mb-8' >Contact</h1>
                    
      <h3 className='text-center m-5 text-3xl text-darkColor dark:text-dayColor'>If you have any idea, proposal or just want to contact me, do not hesitate to contact me</h3>
      <h3 className='text-center m-5 text-3xl text-darkColor dark:text-dayColor pb-8 border-b-2'>I will be more than happy to answer your messages as soon as I can!</h3>
      <h3 className='text-center m-5 text-3xl text-darkColor dark:text-dayColor'>You can reach me through</h3>
      <AiOutlineArrowDown className="self-center animate-bounce transition-all m-5 text-6xl text-darkColor dark:text-dayColor"/>

                    <div className='flex flex-row m-8 justify-evenly'>

                  <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mauricio-jara-web/">
                                      <BsLinkedin className='shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor'/>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="mailto:mauri13jarita@gmail.com">
                                      <IoMdMail className='shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor'/>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/MauriJara312">
                                      <BsGithub className='shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor'/>
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mauri_jara312/">
                                      <BsInstagram className='shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor'/>
                  </a>

                  </div>

        


      </div>


      {/* footer */}

      <div className='w-screen flex-col text-center flex bg-darkColor p-10 dark:bg-dayColor'>
                  

                 

                  <div className='w-auto p-9 flex justify-center  text-center gap-5'>
                    


                  <Link 
  
                    to="/" spy={true} smooth={true} offset={-5} duration={500}

                    className=' text-lg border-b-2  shadow-darkColor hover:cursor-pointer   dark:text-darkColor text-dayColor'>Home</Link>
                    <Link 

                    to="about" spy={true} smooth={true} offset={-5} duration={500}

                    className=' text-lg border-b-2  shadow-darkColor hover:cursor-pointer   dark:text-darkColor text-dayColor'>About</Link>
                    <Link 

                    to="proyectos" spy={true} smooth={true} offset={-5} duration={500}

                    className=' text-lg border-b-2  shadow-darkColor hover:cursor-pointer dark:text-darkColor text-dayColor'>Proyects</Link>    
                    
                    

                  </div>

                  <div className='justify-center flex'>

                  <GiSunglasses className=' flex  w-14 h-14 text-darkColor p-1 dark:text-dayColor dark:bg-darkColor rounded-full bg-dayColor  hover:scale-110 transition-all'/>

                  </div>
   


      </div>
    
        </div> 

        :
       ///////////////////////////////////////////////////spanish///////////////////////////////////////////////////////////////////////////

       <div 

       id='/'
       
       className='bg-dayColor min-h-screen sm:max-w-full pt-14 transition-colors duration-500 dark:transition-colors dark:duration-500 just columns-1 dark:bg-darkColor overflow-hidden'> 
       




       {/* navbar */}

       {

         isSmall?
       
         <motion.nav 
       
         initial={{
           opacity:0
         }}
     
         transition={{
           duration:0.5,
           delay:3.25
         }}
         
         animate={{ 
         opacity: 1,
       }}
     
         className='flex fixed top-0 right-0 mb-0 backdrop-contrast-75 backdrop-blur-sm rounded-md z-10 h-12 max-sm:h-10 p-3 mt-0 text-opacity-95 font-semibolds text-base'>
 
             <Link 
 
             to="/" spy={true} smooth={true} offset={-5} duration={500}
 
             className=' hover:drop-shadow-xl text-sm  shadow-darkColor hover:scale-125 transition-all mr-12 max-sm:mr-4 hover:cursor-pointer rounded-lg h-10  text-darkColor dark:text-dayColor'>Home</Link>
             <Link 
 
             to="about" spy={true} smooth={true} offset={-5} duration={500}
 
             className=' hover:drop-shadow-xl text-sm  shadow-darkColor hover:scale-125 transition-all mr-12 max-sm:mr-4 hover:cursor-pointer rounded-lg h-10  text-darkColor dark:text-dayColor'>Información</Link>
             <Link 
 
             to="proyectos" spy={true} smooth={true} offset={-5} duration={500}
 
             className=' hover:drop-shadow-xl text-sm  shadow-darkColor hover:scale-125 transition-all mr-12 max-sm:mr-4 hover:cursor-pointer rounded-lg h-10  text-darkColor dark:text-dayColor'>Proyectos</Link>
 
             <Link 
 
             to="contacto" spy={true} smooth={true} offset={-5} duration={500}
 
             className=' hover:drop-shadow-xl text-sm  shadow-darkColor hover:scale-125 transition-all mr-12 max-sm:mr-16 hover:cursor-pointer rounded-lg h-10  text-darkColor dark:text-dayColor'>Contacto</Link>
             
     
             {/* <button className=' hover:drop-shadow-xl  hover:shadow-lg shadow-myColor hover:scale-105 transition-all mx-5 px-4 border-t-4 border-l-4 mr-24 rounded-lg  text-myColor h-10  '>
               Download Resume 📥
             </button>              */}
     
           
             
                 <a onClick={dark} className='hover:scale-105 max-sm:absolute mt max-sm:top-2 max-sm:right-9 transition-all dark:text-dayColor  hover:cursor-pointer  max-sm:h-6 max-sm:w-6 w-8 h-8 p-2  max-sm:p-1.5 max-sm:text-xs rounded-sm hover:text-darkColor hover:drop-shadow-xl border-t-2 border-l-2 text-darkColor shadow-md hover:shadow-lg   '>
             <BsFillMoonStarsFill/>
             </a>
     
     
     {/* IDIOMA------------------------- */}
     
         {
           leng ? 
                   <button >
             <img src={spanish} alt="spanish" onClick={lengg} className='max-sm:absolute max-sm:top-2 max-sm:right-2 hover:scale-105 hover:cursor-pointer transition-all dark:text-dayColor hover:drop-shadow-xl shadow-md hover:shadow-lg  p-1 mx-2 w-8 h-8 max-sm:mr-0 max-sm:h-6 max-sm:w-6 justify-center rounded-sm border-b-2 border-r-2 text-darkColor hover:text-darkColor dark:hover:text-dayColor ' />
             </button>
           :
           <a >
           <img src={english} alt="english" onClick={lengg} className='max-sm:absolute max-sm:top-2 max-sm:right-2 hover:scale-105 hover:cursor-pointer transition-all dark:text-dayColor hover:drop-shadow-xl shadow-md hover:shadow-lg  p-1 mx-2 w-8 h-8 max-sm:mr-0 max-sm:h-6 max-sm:w-6 justify-center rounded-sm border-b-2 border-r-2 text-darkColor hover:text-darkColor dark:hover:text-dayColor ' />
           </a>
         }
     
     
     
     
     {/* IDIOMA------------------------- */}
     
     
            
           
           
         </motion.nav>

         :
         
         // mobile

         <motion.div >

         <motion.div

         layout transition={{layout:{duration:0.5,type:"spring"},
         
         delay:3
         
       
       }}

         initial={{
           opacity:0
         }}



         animate={{
           opacity:1
         }}

         className="backdrop-contrast-75 flex flex-col gap-3  dark:shadow-dayColor backdrop-blur-md brightness-150 shadow-darkColor shadow-md rounded-md border-l-2 z-10 fixed top-0 right-0 text-4xl text-darkColor dark:text-dayColor"

         >

         <FaBars  className=  "w-auto fixed top-1 right-1" onClick={toggle}/>

         {
           isOpen &&(


        <motion.div className='gap-6 m-4'>

         <motion.h1 className="text-xl mb-5" >Menu</motion.h1>

         <motion.div  className='flex flex-col justify-center text-center gap-2'>
         <Link

         onClick={()=>setIsOpen(false)}
         to="/" spy={true} smooth={true} offset={-50} duration={500}
         className=' text-lg border-b-2'>
         Home
         </Link>


         <Link 

         onClick={()=>setIsOpen(false)}
         to="about" spy={true} smooth={true} offset={-0} duration={500}
         className='text-lg border-b-2'>
         Información
         </Link>


         <Link

         onClick={()=>setIsOpen(false)}
         to="proyectos" spy={true} smooth={true} offset={-50} duration={500}
         className='text-lg border-b-2'>
         Proyectos
         </Link>


         <Link

         onClick={()=>setIsOpen(false)}
         to="contacto" spy={true} smooth={true} offset={-50} duration={500}
         className='text-lg border-b-2'>
         Contacto
         </Link>
         </motion.div>



         <ul className='mt-4 p-0 flex justify-center' >

               <a onClick={()=> setdarkMode(!darkMode)} className='hover:scale-105 mx-5 transition-all   hover:cursor-pointer  max-sm:h-8 max-sm:w-8 w-8 h-8 p-2  max-sm:p-1.5 max-sm:text-xs rounded-sm hover:text-darkColor hover:drop-shadow-xl border-t-2 border-l-2 dark:text-dayColor shadow-md hover:shadow-lg  dark:hover:text-dayColor '>
                 <BsFillMoonStarsFill/>
               </a>


               {
                     leng ? 

                     <a >
                     <img src={spanish} alt="spanish" onClick={()=> setleng(!leng)} className='  hover:scale-105 hover:cursor-pointer transition-all  hover:drop-shadow-xl shadow-md hover:shadow-lg  p-1 mx-5 w-8 h-8  max-sm:h-8 max-sm:w-8 justify-center rounded-sm border-b-2 border-r-2 text-darkColor hover:text-darkColor dark:text-dayColor ' />
                     </a>

                     :

                     <a >
                     <img src={english} alt="english" onClick={()=> setleng(!leng)} className='  hover:scale-105 hover:cursor-pointer transition-all  hover:drop-shadow-xl shadow-md hover:shadow-lg  p-1 mx-5 w-8 h-8  max-sm:h-8 max-sm:w-8 justify-center rounded-sm border-b-2 border-r-2 text-darkColor hover:text-darkColor dark:text-dayColor ' />
                     </a>
               }

         </ul>

         </motion.div>
         
           )} 

         </motion.div>

         </motion.div>


       }


       


       {/* titulo */}
   
       <div className='w-screen flex flex-col max-sm:mt-1 mb-16 '>

   
       <motion.div 

       initial={{opacity:0}}

       transition={{
         duration:0.3,
         delay:0
       }}
       
       animate={{
         opacity:1
         }}
         
       

       className='bg-fixed shadow-2xl shadow-darkColor flex flex-col bg-cover bg-[url("https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")]'>

       

       <motion.h1
         
         animate={isSmall?
           {
           y:-35,
           x: -450,
           }
         :
         {
           x:-90,
           y:-55
         }
         }

           transition={{
             duration:2,
             delay:0.5
           }}
         
         className=' mt-16 px-16 max-sm:text-2xl border-t-4 text-6xl rounded-md border-r-4 font-semibolds w-auto text-center p-5 text-dayColor' >Mauricio Jara</motion.h1>
   
           <motion.h3 
           initial={{
             scale:0
           }}

           transition={{
             type: "spring",
             bounce:0.3,
             duration:0.5,
             delay:2.25,
             
           }}
           
           animate={{ 
           scale: 1,


         }}
           className=' text-center max-sm:text-base text-4xl text-dayColor ' >Mantenlo simple</motion.h3>

          <motion.h1 
          
          animate={isSmall?
           {
           x: 300,
           y:35
           }
         :
           {
             x:70,
             y:55
           }
       }

           transition={{
             duration:2,
             delay:0.5
           }}
          
          className='mb-16 border-b-4 max-sm:text-base border-l-4 text-5xl rounded-md font-semibolds text-center w-auto  p-5 text-dayColor justify-end'>
          Desarrollador Full Stack 
          </motion.h1>
  

       </motion.div>


           {/* imagen */}

           <motion.div

           className='flex justify-center mt-20 bg-darkColor dark:bg-dayColor rounded-full w-48 h-48 '

           initial={{
             scale:0
           }}

           transition={{
             type: "spring",
             bounce:0.3,
             duration:2,
             delay:4,
             
           }}

           animate={isSmall?
             { 
             x:600,
             y:-50,
           scale: 1,
             }
             :
             {
               x:110,
               y:-50,
               scale: 1
             }
           }
           >

           <GiSunglasses className='text-9xl mt-5 text-dayColor dark:text-darkColor '/>

           </motion.div>

            

       </div>



      {/* about y skills */}

     <motion.div 
     
     id='about'
     
     className='w-screen mb-6'
     
           animate={animation}

     >

         <h1 className='hover:scale-105 transition-all flex text-4xl font-semibold  border-b-2 m-0 pb-0 w-screen text-darkColor dark:text-dayColor  justify-center hover:drop-shadow-xl shadow-md hover:shadow-lg shadow-darkColor   dark:shadow-dayColor  b-8' >Información</h1>

           <div ref={ref} className='max-sm:p-0 max-sm:flex-col  w-auto flex'>

               <div className='w-7/12 rounded-3xl p-3 max-sm:w-auto max-sm:flex flex-wrap'>

                 <div className='   hover:scale-110 transition-all max-sm:m-0 m-5 pt-3 mb-11 mt-0 rounded-xl'>

                     <h1 className='max-sm:text-sm flex justify-center pt-0 p-7 rounded-lg text-darkColor dark:text-dayColor'>Hola! Soy Mauricio</h1>

                     <p className='max-sm:text-sm text-sm  block text-center  text-darkColor dark:text-dayColor'>Desarrollador web full stack</p>

                     <p className=' max-sm:text-sm text-sm inline-block text-center px-7 pt-7 text-darkColor dark:text-dayColor '>Siempre sentí curiosisdad por el mundo IT y tras varios años de aprendizaje autodidacta me gradué del bootcamp full stack web developer de soyHenry.

                     </p>

                     <p className=' max-sm:text-sm text-sm inline-block text-center px-7 pt-7 text-darkColor dark:text-dayColor '>
                     Con mucha capacidad para integrar equipos y con alto nivel de inglés estoy listo para cualquier desafío que quieras proponerme. Siempre listo para mi proxima experiencia 😁</p>

               </div>

                     {/* carrousel */}

                     <motion.div 

className=" max-sm:w-screen   "

initial={{
    x:0
}}

transition={{
    type:"sping",
    duration:3
    
}}

animate={{
    x:0,
    
}}

>

    <motion.h3 className=' text-darkColor dark:text-dayColor  max-sm:text-base max-sm:block max-sm:text-center justify-center flex my-9 text-xl border-y-2 p-1 hover:scale-105 transition-all  '>Arrastra para saber más de mi 🤠</motion.h3>


    <motion.div 
    
    ref={carrusel}
    
    whileTap={{cursor : "grabbing"}}

    className=' hover:scale-105 mr-5 w-auto transition-all px-14 flex rounded-xl overflow-hidden '>

    
    <motion.div   
    
    className=' hover:scale-110 transition-all p-0 w-auto gap-20 max-sm:gap-11 px-14 inline-flex ml-0 rounded-xl m-5  ' 

    

    drag="x"
    dragConstraints={{right:-50, left:-width}}
    dragTransition={{ bounceStiffness: 100, bounceDamping: 60 }}
    dragElastic={0}
    
    >

            <motion.div className="bg-darkColor rounded-xl w-40  max-sm:w-32 max-sm:h-56 flex flex-col dark:bg-dayColor">

            <FaHandshake className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor dark:text-dayColor dark:bg-darkColor  overflow-hidden rounded-full hover:animate-pulse w-16  h-16 '/>
            
            <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor dark:text-darkColor font-semibold" >Trabajo en equipo</h3>

            </motion.div>

            <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-dayColor ">

            <SiTheconversation className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor dark:text-dayColor dark:bg-darkColor  overflow-hidden rounded-full hover:animate-pulse w-16  h-16 '/>
            <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor dark:text-darkColor font-semibold" >Alto nivel de inglés</h3>

            </motion.div>

            <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-dayColor  ">

            <ImShrink2 className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor dark:text-dayColor dark:bg-darkColor  overflow-hidden rounded-full hover:animate-pulse w-16  h-16 '/>
            <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor dark:text-darkColor font-semibold" >Diseño responsive</h3>

            </motion.div>

            <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-dayColor  ">

            <FaRegLightbulb className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor dark:text-dayColor dark:bg-darkColor  overflow-hidden rounded-full hover:animate-pulse w-16  h-16 '/>
            <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor dark:text-darkColor font-semibold" >Orientado a objetivos</h3>

            </motion.div>

            <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-dayColor ">

            <RiTeamFill className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor dark:text-dayColor dark:bg-darkColor  overflow-hidden rounded-full hover:animate-pulse w-16  h-16 '/>
            <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor dark:text-darkColor font-semibold" >Metodologías ágiles</h3>

            </motion.div>

            <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-dayColor ">

            <FaUserGraduate className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor dark:text-dayColor dark:bg-darkColor  overflow-hidden rounded-full hover:animate-pulse w-16  h-16 '/>
            <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor dark:text-darkColor font-semibold" >Aprendizaje rápido</h3>

            </motion.div>





        </motion.div>



    </motion.div> 


                      </motion.div>



               </div>



                 {/* skillset */}

                 <div className=' flex flex-wrap justify-center w-auto text-darkColor pt-3 gap-5 border-l-4 mx-4 px-4' >

                   <h2 className='flex w-4/5 text-3xl justify-center hover:scale-105 transition-all rounded-lg  text-darkColor dark:text-dayColor '>Habilidades</h2>

                     <IoLogoJavascript className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor' />
                     <DiGit className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor' />
                     <IoLogoReact className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                     <IoLogoNodejs className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                     <IoLogoHtml5 className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                     <SiCss3 className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                     <SiRedux className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                     <SiTailwindcss className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                     <SiPostgresql className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                     <SiExpress className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                     <SiRailway className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor '/>
                     <SiVercel className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor ' />

                 </div>

           </div>


     </motion.div>

       {/* proyectos */}

       <motion.div 
       
       id='proyectos'

       className='flex flex-col w-screen'
     
      

       >

       <h1 className='hover:scale-105 max-sm:flex-col max-sm:text-center transition-all flex text-4xl font-semibold justify border-b-2 pb-0  text-darkColor dark:text-dayColor justify-center hover:drop-shadow-xl shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor mb-8' >Proyectos</h1>

       {/* //cards proyectos// */}

       <div className='mb-32 flex max-sm:flex-col flex-wrap justify-center w-auto gap-10 p-14 '>

               <motion.div 


               transition={{layout:{duration:1,type:"spring"}}}

               layout
               
               onClick={()=>(setPIsOpen(!pIsOpen))}      
               
               
               className='flex max-sm:flex-col hover:cursor-pointer  text-dayColor dark:text-darkColor dark:bg-dayColor bg-darkColor  shadow-lg shadow-darkColor dark:shadow-dayColor  p-2 m-2 w-auto max-sm:w-64  rounded-lg'>

                 <div className='max-sm:flex-col'>

                  <motion.h2 layout="position"className='text-lg  p-3  text-dayColor dark:text-darkColor'>Find me a Home</motion.h2>
                 <motion.img layout="position" className='rounded-3xl p-4 h-64 w-72 max-sm:w-52 max-sm:h-48 shadow-md shadow-dayColor max-sm:w dark:shadow-darkColor  m-4' src={proyecto1}  />

                 </div>



                 {
                   pIsOpen && (
                     <div>
                     <motion.div 
                     
                     initial={{
                       opacity:0
                     }}  

                     transition={{
                       duration:1
                     }}

                     animate={{
                       opacity:1
                     }}
                     
                     className=' p-5 mt-5 flex flex-col max-sm:flex-col text-center '>
                       <p className='m-1 text-dayColor dark:text-darkColor'>Aplicación desarrollada econ metodología SCRUM junto a otros 8 desarrolladores.</p>

                       <p className='m-1 text-dayColor dark:text-darkColor'>Su objetivo es el de conectar a personas con refugios de animales.</p>

                       <p className='m-1 text-dayColor dark:text-darkColor'>También cuenta con un apartado e-commerce orientado a los animales</p>


                     </motion.div>

                     <div className='flex justify-center flex-wrap j gap-5 m-7 '>
                       <IoLogoJavascript className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1  rounded-md bg-dayColor dark:bg-darkColor'/> 
                       <IoLogoReact className='text-darkColor hover:scale-110 dark:text-dayColor  h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
                       <DiGit className='text-darkColor hover:scale-110 dark:text-dayColor  h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
                       <IoLogoNodejs className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
                       <SiPostgresql className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
                       <SiRedux className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/>                                          
                       <IoLogoHtml5 className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
                       <SiExpress className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
                       <SiCss3 className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/>
                     </div>



                     <div className='flex flex-row justify-evenly p-6 m-3 '>
                     <a className='rounded-md bg-dayColor dark:bg-darkColor text-darkColor dark:text-dayColor text-lg p-1' href="https://proyecto-final-6jxzmv8cc-carolinambb.vercel.app/">Deploy</a>
                     <a className='rounded-md bg-dayColor dark:bg-darkColor text-darkColor dark:text-dayColor text-lg p-1' href="https://github.com/Carolinambb/proyecto-final">Codigo</a>
                     </div>

                     </div>


                     


                   )
                 } 

               


               </motion.div>

               <motion.div 


transition={{layout:{duration:1,type:"spring"}}}

layout

onClick={()=>(setPIsOpen(!pIsOpen))}      


className='flex max-sm:flex-col hover:cursor-pointer text-dayColor dark:text-darkColor dark:bg-dayColor bg-darkColor  shadow-lg shadow-darkColor dark:shadow-dayColor  p-2 m-2 w-auto max-sm:w-64  rounded-lg'>

  <div className='max-sm:flex-col'>

   <motion.h2 layout="position"className='text-lg  p-3  text-dayColor dark:text-darkColor'>Artist Web Page</motion.h2>
  <motion.img layout="position" className='rounded-3xl p-4 h-64 w-72 max-sm:w-52 max-sm:h-48 shadow-md shadow-dayColor max-sm:w dark:shadow-darkColor  m-4' src={proyecto2}  />

  </div>



  {
    pIsOpen && (
      <div>
      <motion.div 
      
      initial={{
        opacity:0
      }}  

      transition={{
        duration:1
      }}

      animate={{
        opacity:1
      }}
      
      className=' p-5 mt-5 flex flex-col max-sm:flex-col text-center '>

        <p className='m-1 text-dayColor dark:text-darkColor'>Su objetivo es mostrar al usuario el trabajo del artista.</p>

        <p className='m-1 text-dayColor dark:text-darkColor'>Y darle al artista una manera mas comoda de manejar sus ventas.</p>


      </motion.div>

      <div className='flex justify-center flex-wrap j gap-5 m-7 '>
        <img className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1  rounded-md bg-dayColor dark:bg-darkColor' src={muiIcon} alt="" />
        <IoLogoJavascript className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1  rounded-md bg-dayColor dark:bg-darkColor'/> 
        <IoLogoReact className='text-darkColor hover:scale-110 dark:text-dayColor  h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <DiGit className='text-darkColor hover:scale-110 dark:text-dayColor  h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <IoLogoHtml5 className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
      </div>



      <div className='flex flex-row justify-evenly p-6 m-3 '>
      <a target="_blank" rel="noopener noreferrer" className='rounded-md rel="noopener noreferrer" bg-dayColor dark:bg-darkColor text-darkColor dark:text-dayColor text-lg p-1' href="https://fre-manen.vercel.app/"> Deploy</a>
      <a target="_blank" rel="noopener noreferrer" className='rounded-md bg-dayColor dark:bg-darkColor text-darkColor dark:text-dayColor text-lg p-1' href="https://github.com/MauriJara312/artistPortfolio">Code</a>
      </div>

      </div>


      


    )
  } 




                </motion.div>

                <motion.div 


transition={{layout:{duration:1,type:"spring"}}}

layout

onClick={()=>(setPIsOpen(!pIsOpen))}      


className='flex max-sm:flex-col hover:cursor-pointer text-dayColor dark:text-darkColor dark:bg-dayColor bg-darkColor  shadow-lg shadow-darkColor dark:shadow-dayColor  p-2 m-2 w-auto max-sm:w-64  rounded-lg'>

  <div className='max-sm:flex-col'>

   <motion.h2 layout="position"className='text-lg  p-3  text-dayColor dark:text-darkColor'>Gamepedia</motion.h2>
  <motion.img layout="position" className='rounded-3xl p-4 h-64 w-72 max-sm:w-52 max-sm:h-48 shadow-md shadow-dayColor max-sm:w dark:shadow-darkColor  m-4' src={proyecto3}  />

  </div>



  {
    pIsOpen && (
      <div>
      <motion.div 
      
      initial={{
        opacity:0
      }}  

      transition={{
        duration:1
      }}

      animate={{
        opacity:1
      }}
      
      className=' p-5 mt-5 flex flex-col max-sm:flex-col text-center '>

        <p className='m-1 text-dayColor dark:text-darkColor'>Tiene por objetivo brindarle al usuario el poder de navegar por una base dedatos de videojuegos. Consumiendo la RAWG videogames API.</p>

        <p className='m-1 text-dayColor dark:text-darkColor'>El usuario puede ordenar, filtrar o crear nuevos videojuegos.</p>


      </motion.div>

      <div className='flex justify-center flex-wrap j gap-5 m-7 '>
        <IoLogoJavascript className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1  rounded-md bg-dayColor dark:bg-darkColor'/> 
        <IoLogoReact className='text-darkColor hover:scale-110 dark:text-dayColor  h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <DiGit className='text-darkColor hover:scale-110 dark:text-dayColor  h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <IoLogoNodejs className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <SiPostgresql className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <SiRedux className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/>                                          
        <IoLogoHtml5 className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <SiExpress className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/> 
        <SiCss3 className='text-darkColor hover:scale-110 dark:text-dayColor h-9 w-9 p-1 rounded-md bg-dayColor dark:bg-darkColor'/>
      </div>



      <div className='flex flex-row justify-evenly p-6 m-3 '>
      <a target="_blank" rel="noopener noreferrer" className='rounded-md bg-dayColor dark:bg-darkColor text-darkColor dark:text-dayColor text-lg p-1' href="https://github.com/MauriJara312/Proyect-VideogamesApp">Code</a>
      </div>

      </div>


      


    )
  } 




                </motion.div>


       </div>

       </motion.div>


       {/* contacto */}

     <div
     
     id='contacto'
     className='flex flex-col justify-center w-screen shadow-xl shadow-dakColor dark:shadow-dayColor'>

     <h1 className='hover:scale-105 max-sm:flex-col max-sm:text-center transition-all flex text-4xl font-semibold justify border-b-2 pb-0  text-darkColor dark:text-dayColor justify-center hover:drop-shadow-xl shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor mb-8' >Contacto</h1>
                   
     <h3 className='text-center m-5 text-3xl text-darkColor dark:text-dayColor'>Si tenés alguna idea, propuesta o siemplemente querés contactarme, no lo dudes y escribime</h3>
     <h3 className='text-center m-5 text-3xl text-darkColor dark:text-dayColor pb-8 border-b-2'>estaré mas que feliz de contestarte tan pronto como me sea posible!</h3>
     <h3 className='text-center m-5 text-3xl text-darkColor dark:text-dayColor'>Podés contactarme a través de</h3>
     <AiOutlineArrowDown className="self-center animate-bounce transition-all m-5 text-6xl text-darkColor dark:text-dayColor"/>

                   <div className='flex flex-row m-8 justify-evenly'>

                 <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/mauricio-jara-web/">
                                     <BsLinkedin className='shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor'/>
                 </a>
                 <a target="_blank" rel="noopener noreferrer" href="mailto:mauri13jarita@gmail.com">
                                     <IoMdMail className='shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor'/>
                 </a>
                 <a target="_blank" rel="noopener noreferrer" href="https://github.com/MauriJara312">
                                     <BsGithub className='shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor'/>
                 </a>
                 <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mauri_jara312/">
                                     <BsInstagram className='shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor'/>
                 </a>

                 </div>

       


     </div>


     {/* footer */}

     <div className='w-screen flex-col text-center flex bg-darkColor p-10 dark:bg-dayColor'>
                 

                

                 <div className='w-auto p-9 flex justify-center  text-center gap-5'>
                   


                 <Link 
 
                   to="/" spy={true} smooth={true} offset={-5} duration={500}

                   className=' text-lg border-b-2  shadow-darkColor hover:cursor-pointer   dark:text-darkColor text-dayColor'>Home</Link>
                   <Link 

                   to="about" spy={true} smooth={true} offset={-5} duration={500}

                   className=' text-lg border-b-2  shadow-darkColor hover:cursor-pointer   dark:text-darkColor text-dayColor'>Información</Link>
                   <Link 

                   to="proyectos" spy={true} smooth={true} offset={-5} duration={500}

                   className=' text-lg border-b-2  shadow-darkColor hover:cursor-pointer dark:text-darkColor text-dayColor'>Proyectos</Link>    
                   
                   

                 </div>

                 <div className='justify-center flex'>

                 <GiSunglasses className=' flex  w-14 h-14 text-darkColor p-1 dark:text-dayColor dark:bg-darkColor rounded-full bg-dayColor  hover:scale-110 transition-all'/>

                 </div>
  


     </div>
   
       </div>

     
      }

  

    </motion.div>
  



  )
}

export default App
