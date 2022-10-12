import { useState } from 'react'

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
        <ul className='w-full flex flex-col gap-2 md:flex-row justify-center bg-slate-900/90'>
          <li><a onClick={handleClick} className={a} href="#home">Home</a></li>
          <li><a onClick={handleClick} className={a} href="#about">About</a></li>
          <li><a onClick={handleClick} className={a} href="#skills">Skills</a></li>
          <li><a onClick={handleClick} className={a} href="#projects">Projects</a></li>
        </ul>
      </nav>
      <button 
        className="fixed bottom-4 right-4 z-50 w-12 h-12 md:hidden rounded-full bg-slate-700"
        onClick={handleToggle}
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

const a = "block text-lg text-center text-neutral-300 p-2 hover:text-white transition-all text-slate-200"
