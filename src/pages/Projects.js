import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import projectsData from '../resources/projects'
import AOS from 'aos'

AOS.init()

const Projects = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Layout>
      <div className='mt-20'>
        <div className='h-screen'>
          <div className='h-3/4' data-aos='zoom-in'>
            <lottie-player
              src='https://assets9.lottiefiles.com/packages/lf20_ygiuluqn.json'
              background='transparent'
              speed='1'
              loop
              autoplay
            ></lottie-player>
          </div>

          <p className='text-xl font-semibold text-center'>
            Good ideas are not adopted automatically. They must be driven into
            practice with courageous patience.
          </p>

          <h1 className='text-4xl text-center font-bold mt-5'>Because</h1>

        </div>

        <div className='font-bold text-center bg-red-500 mx-20 p-20 text-white rounded-tl-full rounded-br-full md:mx-5'>
          <h1 className='text-8xl md:text-4xl'>The Game Is...</h1>
          <h1 className='text-8xl md:text-4xl'>Consistancy</h1>
        </div>

        <div className='grid mt-20 md:grid-cols-1 grid-cols-3 items-center justify-center gap-10 mx-20 md:mx-5'>
          {projectsData.map((project, index) => {
            return (
              <div data-aos='zoom-in'>
                <div className='relative p-10 border-2 text-center rounded-tr-3xl rounded-bl-3xl border-gray-400'>
                  <img src={project.image} alt='index' className='w-full h-52 text-center' />
                  <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 bg-black hover:opacity-80'>
                    <h1 className='text-4xl font-semibold text-white'>{project.title}</h1>
                    <button className='border-2 rounded border-white py-2 hover:bg-green-500 px-5 mt-5 text-white'>DEMO</button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </Layout>
  )
}

export default Projects
