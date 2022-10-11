import { motion } from 'framer-motion';


export default function Boton({click, active}) {
  return (
    <>
      <motion.div 
        className='fixed bottom-2 right-2 w-12 h-12 bg-slate-700 z-20 md:hidden shadow-lg rounded-full'
        animate={active ? {scale:50} : {scale:1}}
        transition={{duration: 0.5}}>
      </motion.div >

      <button 
        className="fixed bottom-2 right-2 z-50 w-12 h-12 md:hidden rounded-full"
        onClick={click}
      >
          {
            active
            ? <i className="fa-solid fa-xmark text-slate-200"></i>
            : <i className="fa-solid fa-bars text-slate-200"></i>
          }
      </button>
    </>
  )
}

