 
import React from 'react'
 
const SkillsCard = ({title,image,percent}) => {
  return (
    <div className='app-card p-4 sm:p-6 rounded-[18px] sm:rounded-lg border-l-[2px] mb-4 sm:mb-6 border-l-[var(--accent)] hover:shadow-[0px_10px_20px_0px_rgba(0,0,0,0.12)] transform ease-in-out md:hover:translate-x-2 hover:translate-y-2 duration-300 transition-all cursor-pointer text-center'>
        <img src={`${image}`} alt={title} width={72} height={72} className='object-cover mx-auto'/>
        <h1 className='text-[18px] sm:text-[18px] leading-[1.35] mt-3 sm:mt-[1rem] app-text-primary font-[600] ' >{title}</h1>
        <div className="app-card-soft mt-3 sm:mt-[1rem] rounded-lg p-2 text-[13px] sm:text-sm app-text-secondary">{percent}</div>
    </div>
  )
}

export default SkillsCard
