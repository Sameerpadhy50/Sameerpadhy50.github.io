import React from 'react'
import GithubCalendar from 'react-github-calendar'
export const Github = () => {
  return (
    <div name="github" className="w-full md:h-screen text-gray-300">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="md: text-center">
          <p
            className="text-4xl font-bold inline border-b-4 border-pink-600 
                    "
          >
            GITHUB STATISTICS
          </p>
        </div>
        <div className='mt-10 hover:scale-110 duration-500'> 
        <GithubCalendar
            username="Sameerpadhy50"
            blockSize={20}
            fontSize={15}
            blockRadius={2}
          >
          </GithubCalendar>
        </div>
        <div className='flex flex-col gap-4 m-auto mt-4 md:flex-row hover:scale-110 duration-500 '>
            
                <img id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=Sameerpadhy50&theme=tokyonight" alt="" />
            
            
                <img id="github-stats-card"  src="https://github-readme-stats.vercel.app/api?username=Sameerpadhy50&show_icons=true&locale=en&theme=prussian" alt="" />
            
        </div>
        <div className='m-auto mt-4 hover:scale-110 duration-500'>
                <img  id="github-top-langs" src="https://github-readme-stats.vercel.app/api/top-langs/?username=Sameerpadhy50&layout=compact" alt="" />
            </div>
        </div>
    </div>
  )
}
