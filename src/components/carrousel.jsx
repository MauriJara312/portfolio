
import {motion} from "framer-motion ";
import {useRef, useEffect, useState } from "react";

 import{
  FaHandshake,
  FaRegLightbulb,
  FaUserGraduate
 } from "react-icons/fa"

 import{
    RiTeamFill
 } from "react-icons/ri"

 import{
    SiTheconversation
 } from "react-icons/si"

 
 
 

function Carrusel( )  {
    
    const [width, setWidt] = useState(0);
    const carrusel = useRef();

    useEffect(()=>{

        setWidt(carrusel.current.scrollWidth - carrusel.current.offsetWidth)

    }, [])

    return (
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

            <motion.h3 className=' text-myColor max-sm:text-base max-sm:block max-sm:text-center justify-center flex my-9 text-2xl border-b-2 p-1 hover:scale-105 transition-all  '>Arrastra para saber un poco más de mi 🤠</motion.h3>


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

                    <motion.div className="bg-darkColor rounded-xl w-40  max-sm:w-32 max-sm:h-56 flex flex-col dark:bg-myColor text-day ">

                    <FaHandshake className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor text-myColor overflow-hidden rounded-full hover:animate-pulse w-16  h-16  dark:text-darkColor '/>
                    
                    <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor font-semibold" >Trabajador de grupo y empático</h3>

                    </motion.div>

                    <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-myColor ">

                    <SiTheconversation className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor text-myColor overflow-hidden rounded-full hover:animate-pulse w-16  h-16  dark:text-darkColor '/>
                    <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor font-semibold" >Inglés conversacional</h3>

                    </motion.div>

                    <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-myColor  ">

                    <FaRegLightbulb className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor text-myColor overflow-hidden rounded-full hover:animate-pulse w-16  h-16  dark:text-darkColor '/>
                    <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor font-semibold" >Diseño responsive</h3>

                    </motion.div>

                    <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-myColor  ">

                    <FaRegLightbulb className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor text-myColor overflow-hidden rounded-full hover:animate-pulse w-16  h-16  dark:text-darkColor '/>
                    <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor font-semibold" >Orientado a objetivos</h3>

                    </motion.div>

                    <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-myColor ">

                    <RiTeamFill className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor text-myColor overflow-hidden rounded-full hover:animate-pulse w-16  h-16  dark:text-darkColor '/>
                    <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor font-semibold" >Metodologías ágiles</h3>

                    </motion.div>

                    <motion.div className="bg-darkColor max-sm:w-32 max-sm:h-56 rounded-xl w-40 flex flex-col dark:bg-myColor ">

                    <FaUserGraduate className='self-center my-3 p-3 dark:mybg-myColordayColor bg-dayColor text-myColor overflow-hidden rounded-full hover:animate-pulse w-16  h-16  dark:text-darkColor '/>
                    <h3 className="flex justify-center text-center px-8 pb-8 text-dayColor font-semibold" >Aprendizaje rapido</h3>

                    </motion.div>





                </motion.div>



            </motion.div> 

            {/* <motion.div 

            

            transition={{
                type:"sping",
                duration:3
            }}

            animate={{
                x:360,
                y:-70
            }}
            
            >

            <FaArrowsAltH className="text-6xl text-dayColor shadow-myColor" />

            </motion.div> */}

        </motion.div>
        )
}


export default Carrusel