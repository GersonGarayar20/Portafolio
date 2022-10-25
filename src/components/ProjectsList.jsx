import React, { useState } from 'react'
import ProjectCard from "./ProjectCard";
import { myProjects } from './myProjects';

export default function ProjectsList() {

  const [data, setData] = useState(myProjects)
  const [active, setActive] = useState(false)
  const handleClick = () => setActive(true)

  return (
    <>
      <div className="grid gap-8 lg:grid-cols-3 md:grid-cols-2">
        {
          data.map(({id, url, img, title, github})=>{
            if (active) return (<ProjectCard key={id} href={url} image={img} title={title} git={github} />)
            if (id < 4) return (<ProjectCard key={id} href={url} image={img} title={title} git={github} />)
          })
        }
      </div>

      <div className="flex justify-center">
        {
          !active && myProjects.length > 3
          ? <Buton click={handleClick} text="ver mas"/>
          : null
        }
      </div>
    </>
  )
}


function Buton({text, click}) {

  return (
    <button
    onClick={click}
    className="border-2 border-transparent bg-neutral-700 hover:bg-neutral-900 hover:border-orange-400 rounded text-white px-4 py-2 transition-all"
    >{text}</button>
  )
  
}