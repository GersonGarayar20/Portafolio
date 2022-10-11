import { useState } from 'react'
import Boton from './Boton'


export default function Nav() {

  const [active, setActive] = useState(false)

  const handleToggle = () => setActive(!active)
  const handleClick = () => setActive(false)


  return (
    <>
      <nav
        className={
        `${active ? "" : "hidden"}
        md:h-10 md:block 
        fixed w-full h-full 
        flex justify-center z-40`}
      >
        <ul className='w-full flex flex-col gap-2 md:flex-row justify-center md:bg-slate-900/75'>
          <li><a onClick={handleClick} className={a} href="#home">Home</a></li>
          <li><a onClick={handleClick} className={a} href="#about">About</a></li>
          <li><a onClick={handleClick} className={a} href="#skills">Skills</a></li>
          <li><a onClick={handleClick} className={a} href="#projects">Projects</a></li>
        </ul>
      </nav>
      <Boton click={handleToggle} active={active}></Boton>
    </>
  )
}

const a = "block text-lg text-center p-2 hover:text-sky-400 transition-all text-slate-200"
