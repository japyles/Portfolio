import React, { useEffect } from 'react'
import Layout from '../components/Layout'
import {
  FaReact,
  FaBootstrap,
  FaPython,
  FaCss3,
  FaHtml5,
  FaNodeJs,
  FaJsSquare,
} from 'react-icons/fa'
import {
  SiExpo,
  SiPostgresql,
  SiNextdotjs,
  SiLinux,
  SiTailwindcss,
} from 'react-icons/si'
import AOS from 'aos'

AOS.init({
  duration: 1000
})

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <Layout>
      <div>
        {/* Intro Section */}
        <div className='h-screen bg-theme'>
          <div className='grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 border-white transform rotate-12 md:rotate-0 md:border-0 mx-10 z-10 bg-theme'>
            <div className='h-1/2' data-aos='zoom-in'>
              <lottie-player
                src='https://assets3.lottiefiles.com/packages/lf20_kyu7xb1v.json'
                background='transparent'
                speed='1'
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className='text-bold text-white md:px-5 border-l-4 border-white md:border-0'>
              <h1 className='text-7xl md:text-4xl mb-5 ml-5 md:mb-5' data-aos='slide-right'>
                Hi, I am <b className='text-yellow-500'>John</b>
              </h1>
              <h1 className='text-4xl md:text-xl ml-5 md:mb-10' data-aos='slide-left'>
                Full Stack <b className='text-red-500'>Developer</b>
              </h1>
            </div>
          </div>
        </div>

        {/* Technologies Section */}
        <div className='mt-20'>
          <h1 className='text-4xl text-blue-800 font-bold text-center my-8' data-aos='slide-up'>
            Technologies I Use
          </h1>
          <div className='grid sm:grid-cols-3 md:grid-cols-4 grid-cols-12'>
            <FaReact
              size={124}
              color='cyan'
              className='w-full text-center mt-20'
            />
            <SiExpo
              size={124}
              color='black'
              className='w-full text-center mt-20'
            />
            <FaPython
              size={124}
              color='green'
              className='w-full text-center mt-20'
            />
            <FaNodeJs
              size={124}
              color='green'
              className='w-full text-center mt-20'
            />
            <FaBootstrap
              size={124}
              color='blue'
              className='w-full text-center mt-20'
            />
            <FaJsSquare
              size={124}
              color='green'
              className='w-full text-center mt-20'
            />
            <FaHtml5
              size={124}
              color='orange'
              className='w-full text-center mt-20'
            />
            <FaCss3
              size={124}
              color='blue'
              className='w-full text-center mt-20'
            />
            <SiPostgresql
              size={124}
              color='blue'
              className='w-full text-center mt-20'
            />
            <SiNextdotjs
              size={124}
              color='black'
              className='w-full text-center mt-20'
            />
            <SiLinux
              size={124}
              color='black'
              className='w-full text-center mt-20'
            />
            <SiTailwindcss
              size={124}
              color='black'
              className='w-full text-center mt-20'
            />
          </div>
        </div>

        {/* Javascript Section */}
        <div className='my-20'>
          <div className='text-center h-52 bg-primary'>
            <h1 className='text-white font-bolc text-4xl py-10'>
              Yes, You Are Right... I am a React Buff
            </h1>
          </div>

          <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white'>
            <div className='h-96' data-aos='zoom-in'>
              <lottie-player
                src='https://assets8.lottiefiles.com/packages/lf20_sSF6EG.json'
                background='transparent'
                speed='1'
                loop
                autoplay
              ></lottie-player>
            </div>

            <p className='text-xl text-center my-5 font-semibold md:px-5 px-14 py-10'>
              React is a declarative, efficient, and flexible JavaScript library
              for building user interfaces. It lets you compose complex UIs from
              small and isolated pieces of code called “components”. We use
              components to tell React what we want to see on the screen.
            </p>
          </div>
        </div>

        {/* DevStack Section */}
        <div className='my-20'>
          <div className='text-center h-52 bg-red-500'>
            <h1 className='text-white font-bolc text-4xl py-10'>
              My Dev Stack
            </h1>
          </div>

          <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 -mt-20 rounded-lg hover:bg-gray-700 hover:text-white'>
            <div className='h-96' data-aos='zoom-in'>
              <lottie-player
                src='https://assets4.lottiefiles.com/packages/lf20_pwohahvd.json'
                background='transparent'
                speed='1'
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className='grid grid-cols-3 md:grid-cols-1 p-5'>
              <div>
                <h2 className='text-xl font-bold my-5 text-center'>FrontEnd</h2>
                <hr />
                <ul className='text-center font-semibold mt-2'>
                  <li>HTML</li>
                  <li className='mt-5'>CSS</li>
                  <li className='mt-5'>JavaScript</li>
                  <li className='my-5'>React</li>
                </ul>
              </div>
              <div>
                <h2 className='text-xl font-bold my-5 text-center my-5'>UI / UX</h2>
                <hr />
                <ul className='text-center font-semibold mt-2'>
                  <li>Bootstrap</li>
                  <li className='my-5'>Tailwind</li>
                </ul>
              </div>
              <div>
                <h2 className='text-xl font-bold text-center my-5'>Backend</h2>
                <hr />
                <ul className='text-center font-semibold mt-2'>
                  <li>Node JS</li>
                  <li className='mt-5'>Express JS</li>
                  <li className='mt-5'>PostgreSQL</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Dev Info */}
        <div className=''>
          <h1 className='text-4xl text-gray-5500 text-center font-bold'>
            Who is John?
          </h1>
        </div>

        <div className='h-screen relative text-gray-800'>
          <div className='h-full'>
            <lottie-player
              src='https://assets5.lottiefiles.com/packages/lf20_dcatp5cr.json'
              background='transparent'
              speed='1'
              loop
              autoplay
            ></lottie-player>
          </div>

          <div className='absolute inset-0 flex flex-col items-center justify-center'>
            <h1 className='text-2xl font-bold'>
              Hello...
              <hr />
              <pre className='text-xl md:text-sm my-5 font-mont font-semibold'>
                {JSON.stringify({
                  name: 'John Pyles',
                  hobbies: [
                    'Mountain Biking',
                    'Scuba Diving',
                    'Disc Golf',
                  ],
                  country: 'United States',
                }, null, 2)}
              </pre>
            </h1>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Home
