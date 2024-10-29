

export default function About() {
    return (
      <section>
        <div   className="relative border-[0.1rem] border-black rounded-md mt-10 sm:mt-0  bg-white max-h-xl sm:max-h-2xl max-w-sm sm:max-w-md shadow-md mb-28 sm:mb-40">
          <div className='border-b border-black p-1 flex bg-[#0304FC] text-white'>
            <h2 className="ml-4">about me </h2>
            <button aria-label='Learn more' className="absolute top-0.5 right-2 text-black border border-black bg-[#FCC6E7] rounded-md w-6 h-4.5 flex items-left justify-center hover:bg-white hover:text-black transition duration-300 focus:outline-none focus:ring focus:ring-offset-2">
              ?
            </button>
          </div>

          <div className='font-sans p-4  space-y-4 leading-7 text-justify'>
            
            <p>To be a <span className="font-bold">full-stack developer</span> is my ultimate goal, which drives me to explore a vast array of programming languages and tools. Courses in <span className="font-bold">Front-end development and React</span> led me to enroll on an <span className="font-bold">intensive Python course</span>, immersing myself in <span className="font-bold">back-end development</span> and testing out my <span className="font-bold">Scrum master</span> skills. Earning a distinction was a moment of pride that fueled me even more.
            </p>
            <p>
            During a break to travel the Americas, I built personal projects for friends and family. Now with <span className="font-bold">Next.js</span> catching my attention I'm broadening my knowledge further with personal study in <span className="font-bold">DevOps & Cloud computing</span>, as well as <span className="font-bold">web design & accessibility.</span>
            </p>
            <p>
             
            </p>
          </div>
        </div>
        </section>
    )
  }




