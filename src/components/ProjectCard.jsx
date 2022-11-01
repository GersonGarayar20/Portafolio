import React from 'react'

export default function ProjectCard({href, image, title, git}) {
  return (
    <div>
      <a href={href} className="block" target="_blank" rel="noopener">
        <div className="rounded-lg md:hover:scale-105 transition-all duration-200 ease-linear overflow-hidden">
          <img src={image} className="object-cover object-top aspect-video" alt={title} />
        </div>
      </a>

      <div className="p-4 flex justify-between">
        <a href={href} className="block text-xl hover:text-orange-400 text-neutral-300 transition-all hover:underline" target="_blank" rel="noopener">{title}</a>
        <a href={git} className="block text-2xl hover:text-orange-400 text-neutral-300 transition-all" target="_blank" rel="noopener"><i className="fa-brands fa-github"></i></a>
      </div>
    </div>
  )
}
