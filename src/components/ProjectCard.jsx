import React from 'react'

export default function ProjectCard({href, image, title, git}) {
  return (
    <div>
      <a href={href} className="block" target="_blank" rel="noopener noreferrer">
        <div className="rounded-lg md:hover:scale-105 transition-all duration-200 ease-linear overflow-hidden">
          <img src={image} className="w-full h-full object-cover object-top aspect-video" alt={title} />
        </div>
      </a>

      <div className="p-4 flex justify-between">
        <a href={href} title="Ver proyecto" className="block text-xl hover:text-sky-500 text-neutral-300 transition-all hover:underline" target="_blank" rel="noopener noreferrer">{title}</a>
        <a href={git} title="Ver codigo" className="block text-2xl hover:text-sky-500 text-neutral-300 transition-all" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
      </div>
    </div>
  )
}
