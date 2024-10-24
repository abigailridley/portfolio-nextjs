

export default class About {
  render() {
    return (
      <section>
        <div className="relative border-[0.1rem] border-black rounded-md justify-end items-end mt-10 sm:mt-0 sm:ml-10 bg-white max-w-md shadow-md">
          <div className='border-b border-black p-1 flex bg-[#0304FC] text-white'>
            <p>Summary</p>
            <button className="absolute top-0.5 right-2 text-black border border-black bg-[#FBEAEB] rounded-md w-6 h-4.5 flex items-left justify-center hover:bg-white hover:text-black transition duration-300">
              ?
            </button>
          </div>

          <div className='font-sans p-4 max-h-60 overflow-y-scroll space-y-4 scrollbar-track-[#FCC6E7] scrollbar-thumb-[#0304FC] scrollbar-thin'>
            <p className='font-chango text-center text-xl'>Hi, I&apos;m Abigail<br/> aspiring full stack engineer</p>
            <p className='font-bold font-plexmono'>2 years front-end web development experience, with <span className='font-plexmono underline'>Javascript, React & Next.js</span></p>
            <p className='font-bold font-plexmono'>4 month intensive Software Engineering course focused on <span className='underline font-plexmono'>Python</span></p>
            <p>At the end of 2021 I started dabbling in HTML, CSS & Vanilla Javascript which quickly turned into a hyperfixation that has been growing and developing ever since.</p>
            <p>
              Javascript turned into React which turned into Nextjs. Hungry for more, I enrolled on an intensive Python course, I embraced new and complex challenges, testing a different side of my brain. Earning a distinction was a moment of pride that fuelled me even more.
            </p>
            <p>
              Coming from a background in languages at university, I find immense satisfaction in decoding language structures, whether that be Spanish or Javascript. I wanted to find a career that allowed me to use that same interest and skill in problem-solving. Now I’m building my own projects and attending coding events like CodeBar, where I connect with inspiring, like-minded people.
            </p>
            <p>
            Acting as Scrum master in the final team project during my software engineering course showed even more how my organisational skills and adaptability from previous roles can translate to the tech world.
            </p>
            <p>
              After completing my course, I took some time to travel the Americas, knowing my next step would require my full focus. Now, I’m ready to dive into the tech world with fresh energy and dedication.
            </p>
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>
        </section>
    )
  }
}



