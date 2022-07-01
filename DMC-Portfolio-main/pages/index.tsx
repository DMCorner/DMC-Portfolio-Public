import SideBar from '../components/SideBar';
import TopNavigation from "../components/TopNav.jsx";
import { SiHtml5 , SiJavascript , SiReact , SiCss3 , SiRedux , SiNextdotjs , SiTailwindcss , SiGithub } from "react-icons/si";
import BottomBar from '../components/BottomBar';

const HomePage = ({}) => {
    return (
      <div className="bg-gray-300 dark:bg-gray-700 px-4 transition-all duration-300 ease-linear">
        <div className="pt-20 grid grid-rows-2 grid-cols-4 grid-flow-col gap-4 mx-auto gap-y-20 gap-x-16">
          <div></div>
          <div></div>
            <div className="inline-flex"> 
            <div className='h-1/2 w-96'>
              <img src='ItsDan.png' className='z-0 translate-x-4 translate-y-4  hover:transform hover:translate-x-4 hover:translate-y-4 rounded-full hover:rounded-full
                transition-all duration-300 ease-linear border-4 hover:border-red-500 dark:hover:border-green-600'>
                </img>
                </div>
            </div>
            <div>
              <h1 className="w-3/4 text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
                My Tech Stack So Far
              </h1>
              <div className='h-10'></div>
                <div className="text-lg text-gray-900 dark:text-gray-300 w-3/4 text-left transition-all duration-300 ease-linear">
                Starting with HTML, CSS and JavaScript I learned the foundations of webdev. So far I also have experience with React, Redux, Next and Tailwind.
                I look forward to learning more languages and frameworks that will make fine additions to my collection.
                </div>
            </div>
            <div>
              <div className='h-28'></div>
              <h1 className="w-3/4 text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center transition-all duration-300 ease-linear">
                Hello There!
              </h1>
              <div className='h-10'></div>
                <div className="text-lg text-gray-900 dark:text-gray-300 w-3/4 text-left transition-all duration-300 ease-linear">
                I'm Daniel. I am a math graduate turned software developer. This is my portfolio website.
                Ideally this website will display my skills, previous achievements and convince you to offer me a job. 
                </div>
            </div>
            <div>
              <div className='h-14'></div>
            <div className='grid grid-rows-3 grid-cols-3 w-64  place-content-center text-blue-400 dark:text-green-500'>
              < SiHtml5 className="h-16 w-16 px-2 transition-all duration-300 ease-linear"/>
              < SiCss3 className="h-16 w-16 px-2 transition-all duration-300 ease-linear"/>
              < SiJavascript className="h-16 w-16 px-2 transition-all duration-300 ease-linear"/>
              < SiReact className="h-16 w-16 px-2 transition-all duration-300 ease-linear"/>
              < SiRedux className="h-16 w-16 px-2 transition-all duration-300 ease-linear"/>
              < SiNextdotjs className="h-16 w-16 px-2 transition-all duration-300 ease-linear"/>
              <div></div>
              < SiTailwindcss className="h-16 w-16 px-2 transition-all duration-300 ease-linear"/>
            </div>
              </div>
        </div>
      </div>
            )
        }


export default function Home() {

  return (
    <div>
      <TopNavigation />
      <SideBar />
      <HomePage/>
      <BottomBar/>
    </div>
  );
}
