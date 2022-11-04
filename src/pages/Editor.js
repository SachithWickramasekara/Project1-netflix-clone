import React from 'react'
import '../styles/Editor.css'
const Editor = () => {
  return (
    <>
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-col">
  <div class="lg:w-4/6 mx-auto">
  <div class="lg:w-4/5 mx-auto flex flex-wrap justify-center">
      <img alt="main" class="lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded" src="../images/sachith.jpg"/>
</div>
      <div className="flex flex-col sm:flex-row mt-10">
        <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
          <div className="flex flex-col items-center text-center justify-center">
            <h2 className="font-bold title-font mt-4 text-pink-900 text-3xl ">Sachith Wickramasekara</h2>
            <h2 className="font-bold title-font mt-4 text-blue-500 text-2xl ">- Full Stack Developer -</h2>
          </div>
        </div>
        <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
          <p className="leading-relaxed text-lg mb-4 text-gray-300" >This is the first project that I have done as a full-stack developer.I have created the front-end using React-js, Tailwind-CSS, and the backend was developed by using the firebase . Also I have used TMDb API to get movie details.After this project I got a good knowledge of how to handle the reactjs and tailwind-css.</p>
            <div className='flex flex-row justify-center gap-[50px] mt-[30px]'>
            <img  src='../logo192.png'alt='react'className='w-[30px] h-[30px]'/>
            <img  src='../images\html-5.png' alt='html' className='w-[30px] h-[30px]'/>
            <img  src='..\images\tailwindcss.png' alt='tailwind-css' className='w-[30px] h-[30px]'/>
            <img alt='firebase' src='https://www.gstatic.com/devrel-devsite/prod/v99fd0c828fa12c8e4ac5a683d534aa207353ab3b49583792c0a838c031276d00/firebase/images/lockup.svg' className='w-[100px] '/>
            </div>
        </div>
      </div>
    </div>
    </div>
</section>
    </>
  )
}

export default Editor;