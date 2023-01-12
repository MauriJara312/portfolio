import './App.css'
import { useState, useEffect } from 'react';
import Carrusel from './components/carrousel';
import spanish from "./assets/spanish.png"
import english from "./assets/english.png"
import proyecto1 from "./assets/proyecto1.jpeg"
import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useMediaQuery } from './Hooks/size';
import {Link} from "react-scroll"
import {
  FaBars,
}from "react-icons/fa";
import { 
    BsFillMoonStarsFill,
   } from "react-icons/bs";

import { 
    GiSunglasses,
   } from "react-icons/gi";

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
 } from "react-icons/io";

import { 
  IoLogoReact,
 } from "react-icons/io5";





function App() {


  const useIsSmall = () => useMediaQuery('(min-width: 480px)');
  const [pIsOpen, setPIsOpen] = useState(false);
  const [id,setId] = useState(0)
  const isSmall = useIsSmall()
  const [isOpen ,setIsOpen] = useState(false);
  const toggle = () => setIsOpen (!isOpen);
  const [darkMode, setdarkMode] = useState(false)
  const [leng, setleng] = useState(false)
  const animation = useAnimation();
  const {ref, inView} = useInView();


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

    <motion.div layout className={darkMode? "dark" : ""}>

      {
        leng?

       ///////////////////////////////////////////////////spanish///////////////////////////////////////////////////////////////////////////

        <div className='bg-dayColor min-h-screen transition-colors duration-500 dark:transition-colors dark:duration-500 just columns-1 dark:bg-darkColor'> 

        {/* navbar */}

        <nav className='flex p-3 justify-evenly text-opacity-95 font-semibolds my text-2xl mt-5'>
          <ul >
    
            <button className='dark:hover:text-dayColor hover:scale-125 transition-all   text-myColor hover:text-darkColor '>
              CV
            </button>
           
          </ul>
          <ul className=' dark:hover:text-dayColor hover:scale-125 transition-all  text-myColor hover:text-darkColor '>
            Skills
          </ul>
          <ul className='dark:hover:text-dayColor hover:scale-125 transition-all  text-myColor hover:text-darkColor'>
            Contacto
          </ul>
          <ul className='ml-8'> 
            <li className='flex'>
                <button onClick={()=> setdarkMode(!darkMode)} className='hover:scale-105 transition-all dark:text-darkColor bg-myColor p-2 m-2 rounded-lg text-dayColor hover:text-darkColor dark:hover:text-dayColor '>
            <BsFillMoonStarsFill/>
            </button>
    
    
    {/* IDIOMA------------------------- */}
    
        {
          leng ? 
                  <button >
            <img src={spanish} alt="spanish" onClick={()=> setleng(!leng)} className='hover:scale-105 transition-all dark:text-darkColor bg-myColor p-2 m-2 w-12 rounded-lg text-dayColor hover:text-darkColor dark:hover:text-dayColor ' />
            </button>
          :
          <button >
          <img src={english} alt="spanish" onClick={()=> setleng(!leng)} className='dark:text-darkColor bg-myColor p-2 m-2 w-12 rounded-lg text-dayColor hover:text-darkColor dark:hover:text-dayColor ' />
          </button>
        }
    
    
    
    
    {/* IDIOMA------------------------- */}
    
    
            </li>
          
          </ul>
        </nav>
    
        {/* titulo */}

        <div className='pt-9 mb-32'>
    
            <h1 className='mb-5 bg-darkColor rounded-lg dark:bg-dayColor  text-6xl font-semibolds w-4/6 text-right p-1 text-myColor' >Mauricio Jara</h1>
    
            {/* <h3 className='text-center p-5 text-4xl text-myColor' >Keep it simple</h3> */}

           <h2 className='bg-darkColor rounded-lg dark:bg-dayColor w-4/6 translate-x-96 delay-300 duration-1000 text-4xl font-semibolds text-center p-2 text-myColor justify-end'>Full Stack Web Developer</h2>


        </div>

        {/* skills */}

        <div>


           <h1 className='text-5xl font-mono flex justify-center py-6 text-myColor bg-darkColor bg-gradient-to-tr from-darkColor to-dayColor dark:bg-gradient-to-tr dark:from-dayColor dark:to-darkColor mb-28' >Habilidades</h1>

            <div className='mb-32 flex flex-wrap justify-center w-auto gap-10 p-14 px-52' >
            <IoLogoJavascript className='hover:scale-105 transition-all dark:text-darkColor bg-myColor w-28 h-40 min-w-min p-7 m-2 rounded-lg text-dayColor hover:text-darkColor dark:hover:text-dayColor' />
            <IoLogoReact className='hover:scale-105 transition-all dark:text-darkColor bg-myColor w-28 h-40 min-w-min p-7 m-2 rounded-lg text-dayColor hover:text-darkColor dark:hover:text-dayColor '/>
            <IoLogoNodejs className='hover:scale-105 transition-all dark:text-darkColor bg-myColor w-28 h-40 min-w-min p-7 m-2 rounded-lg text-dayColor hover:text-darkColor dark:hover:text-dayColor '/>
            <IoLogoHtml5 className='hover:scale-105 transition-all dark:text-darkColor bg-myColor w-28 h-40 min-w-min p-7 m-2 rounded-lg text-dayColor hover:text-darkColor dark:hover:text-dayColor '/>
            <SiCss3 className='hover:scale-105 transition-all dark:text-darkColor bg-myColor w-28 h-40 min-w-min p-7 m-2 rounded-lg text-dayColor hover:text-darkColor dark:hover:text-dayColor '/>
            <SiRedux className='hover:scale-105 transition-all dark:text-darkColor bg-myColor w-28 h-40 min-w-min p-7 m-2 rounded-lg text-dayColor hover:text-darkColor dark:hover:text-dayColor '/>
            <SiTailwindcss className='hover:scale-105 transition-all dark:text-darkColor bg-myColor w-28 h-40 min-w-min p-7 m-2 rounded-lg text-dayColor hover:text-darkColor dark:hover:text-dayColor '/>
            <SiPostgresql className='hover:scale-105 transition-all dark:text-darkColor bg-myColor w-28 h-40 min-w-min p-7 m-2 rounded-lg text-dayColor hover:text-darkColor dark:hover:text-dayColor '/>
            <SiExpress className='hover:scale-105 transition-all dark:text-darkColor bg-myColor w-28 h-40 min-w-min p-7 m-2 rounded-lg text-dayColor hover:text-darkColor dark:hover:text-dayColor '/>
            <SiRailway className='hover:scale-105 transition-all dark:text-darkColor bg-myColor w-28 h-40 min-w-min p-7 m-2 rounded-lg text-dayColor hover:text-darkColor dark:hover:text-dayColor '/>
            <SiVercel className='hover:scale-105 transition-all dark:text-darkColor bg-myColor w-28 h-40 min-w-min p-7 m-2 rounded-lg text-dayColor hover:text-darkColor dark:hover:text-dayColor ' />

            </div>
          
    
        </div>

          {/* proyectos */}
      
        <div>

        <h1 className='text-5xl font-mono flex justify-center py-6 text-myColor bg-darkColor bg-gradient-to-tr from-darkColor to-dayColor dark:bg-gradient-to-tr dark:from-dayColor dark:to-darkColor mb-28' >Proyectos</h1>

        </div>

      
        </div>

        :
      
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
  
              to="proyectos" spy={true} smooth={true} offset={-5} duration={500}
  
              className=' hover:drop-shadow-xl text-sm  shadow-darkColor hover:scale-125 transition-all mr-12 max-sm:mr-16 hover:cursor-pointer rounded-lg h-10  text-darkColor dark:text-dayColor'>Contact</Link>
              
      
              {/* <button className=' hover:drop-shadow-xl  hover:shadow-lg shadow-myColor hover:scale-105 transition-all mx-5 px-4 border-t-4 border-l-4 mr-24 rounded-lg  text-myColor h-10  '>
                Download Resume 📥
              </button>              */}
      
            
              
                  <a onClick={()=> setdarkMode(!darkMode)} className='hover:scale-105 max-sm:absolute mt max-sm:top-2 max-sm:right-9 transition-all dark:text-dayColor  hover:cursor-pointer  max-sm:h-6 max-sm:w-6 w-8 h-8 p-2  max-sm:p-1.5 max-sm:text-xs rounded-sm hover:text-darkColor hover:drop-shadow-xl border-t-2 border-l-2 text-darkColor shadow-md hover:shadow-lg   '>
              <BsFillMoonStarsFill/>
              </a>
      
      
      {/* IDIOMA------------------------- */}
      
          {
            leng ? 
                    <button >
              <img src={spanish} alt="spanish" onClick={()=> setleng(!leng)} className='max-sm:absolute max-sm:top-2 max-sm:right-2 hover:scale-105 hover:cursor-pointer transition-all dark:text-dayColor hover:drop-shadow-xl shadow-md hover:shadow-lg  p-1 mx-2 w-8 h-8 max-sm:mr-0 max-sm:h-6 max-sm:w-6 justify-center rounded-sm border-b-2 border-r-2 text-darkColor hover:text-darkColor dark:hover:text-dayColor ' />
              </button>
            :
            <a >
            <img src={english} alt="english" onClick={()=> setleng(!leng)} className='max-sm:absolute max-sm:top-2 max-sm:right-2 hover:scale-105 hover:cursor-pointer transition-all dark:text-dayColor hover:drop-shadow-xl shadow-md hover:shadow-lg  p-1 mx-2 w-8 h-8 max-sm:mr-0 max-sm:h-6 max-sm:w-6 justify-center rounded-sm border-b-2 border-r-2 text-darkColor hover:text-darkColor dark:hover:text-dayColor ' />
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

          className="backdrop-contrast-75 flex flex-col gap-3  dark:shadow-dayColor backdrop-blur-md shadow-darkColor shadow-md rounded-md border-l-2 z-10 fixed top-0 right-0 text-4xl text-darkColor dark:text-dayColor"

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
          to="contact" spy={true} smooth={true} offset={-50} duration={500}
          className='text-lg border-b-2'>
          Contact
          </Link>
          </motion.div>



          <ul className='mt-4 p-0 flex justify-center' >

                <a onClick={()=> setdarkMode(!darkMode)} className='hover:scale-105 mx-5 transition-all   hover:cursor-pointer  max-sm:h-8 max-sm:w-8 w-8 h-8 p-2  max-sm:p-1.5 max-sm:text-xs rounded-sm hover:text-darkColor hover:drop-shadow-xl border-t-2 border-l-2 dark:text-darkColor shadow-md hover:shadow-lg  dark:hover:text-dayColor '>
                  <BsFillMoonStarsFill/>
                </a>


                {
                      leng ? 

                      <a >
                      <img src={spanish} alt="spanish" onClick={()=> setleng(!leng)} className='hover:scale-105 mx-5 transition-all hover:cursor-pointer  dark:text-darkColor bg-myColor p-2  w-12 rounded-lg text-dayColor hover:drop-shadow-xl shadow-md hover:shadow-lg shadow-myColor hover:text-darkColor dark:hover:text-dayColor ' />
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
    
        <div className=' max-sm:mt-1 mb-16 '>

    
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
              x:90,
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
      
      className='w-screen'
      
            animate={animation}

      >

          <h1 className='hover:scale-105 transition-all flex text-4xl font-semibold  border-b-2 m-0 pb-0 w-screen text-darkColor dark:text-dayColor  justify-center hover:drop-shadow-xl shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor  b-8' >About</h1>

            <div ref={ref} className='max-sm:p-0 max-sm:flex-col  w-auto flex'>

                <div className='w-7/12 rounded-3xl p-3 max-sm:w-auto max-sm:flex flex-wrap'>

                  <div className='   hover:scale-110 transition-all max-sm:m-0 m-5 mb-11 mt-0 rounded-xl'>

                      <h1 className='max-sm:text-sm flex justify-center pt-0 p-7 rounded-lg text-darkColor dark:text-dayColor'>Hola! Soy Mauricio</h1>

                      <p className='max-sm:text-sm text-sm  block text-center  text-darkColor dark:text-dayColor'>Desarrollador web full stack</p>

                      <p className=' max-sm:text-sm text-sm inline-block text-center px-7 pt-7 text-darkColor dark:text-dayColor '>Siempre sentí curiosisdad por el mundo IT y tras varios años de aprendizaje autodidacta me gradué del bootcamp full stack web developer de soyHenry.

                      </p>

                      <p className=' max-sm:text-sm text-sm inline-block text-center px-7 pt-7 text-darkColor dark:text-dayColor '>
                      Con mucha capacidad para integrar equipos y con alto nivel de inglés estoy listo para cualquier desafío que quieras proponerme. Siempre listo para mi proxima experiencia 😁</p>

                </div>

                      {/* carrousel */}

                      <Carrusel/>



                </div>



                  {/* skillset */}

                  <div className=' flex flex-wrap justify-center w-auto text-darkColor gap-5 border-l-4 mx-4 px-4' >

                    <h2 className='flex w-4/5 text-3xl justify-center hover:scale-105 transition-all rounded-lg  text-darkColor dark:text-dayColor '>My skillSet</h2>

                      <IoLogoJavascript className='hover:scale-105 transition-all dark:text-darkColor bg-darkColor w-20 h-20 min-w-min p-4 m-2 rounded-lg text-dayColor hover:text-dayColor dark:bg-dayColor' />
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

        <h1 className='hover:scale-105 max-sm:flex-col max-sm:text-center transition-all flex text-4xl font-semibold justify border-b-2 pb-0  text-darkColor dark:text-dayColor justify-center hover:drop-shadow-xl shadow-md hover:shadow-lg shadow-darkColor dark:shadow-dayColor mb-8' >Proyects</h1>

        {/* //cards proyectos// */}

        <div className='mb-32 flex max-sm:flex-col flex-wrap justify-center w-auto gap-10 p-14 '>

                <motion.div 


                transition={{layout:{duration:1,type:"spring"}}}

                layout
                
                onClick={()=>(setPIsOpen(!pIsOpen))}      
                
                
                className='flex max-sm:flex-col text-dayColor dark:text-darkColor dark:bg-dayColor bg-darkColor  shadow-lg shadow-darkColor dark:shadow-dayColor  p-2 m-2 w-auto max-sm:w-64  rounded-lg'>

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
                
                
                className='flex max-sm:flex-col text-dayColor dark:text-darkColor dark:bg-dayColor bg-darkColor  shadow-lg shadow-darkColor dark:shadow-dayColor  p-2 m-2 w-auto max-sm:w-64  rounded-lg'>

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
                
                
                className='flex max-sm:flex-col text-dayColor dark:text-darkColor dark:bg-dayColor bg-darkColor  shadow-lg shadow-darkColor dark:shadow-dayColor  p-2 m-2 w-auto max-sm:w-64  rounded-lg'>

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

        </div>

        </motion.div>


        {/* contacto */}

      
    
      </div>
      
      
      }

  

    </motion.div>
  



  )
}

export default App