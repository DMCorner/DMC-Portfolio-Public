import SideBar from '../components/SideBar'
import TopNavigation from "../components/TopNav.jsx"
import React, { PureComponent } from "react"
import BottomBar from '../components/BottomBar'

const CVContainer = () => {
  return (
  <div className="bg-white dark:bg-gray-800 ">
      <div className="bg-gray-300 dark:bg-gray-700 px-4 transition-all duration-300 ease-linear">
        <div className="pt-20 grid grid-cols-1 text-center content-center">
          <div>
            <div>
                <iframe src="DanielCornerCVWD.pdf" className='inline-flex h-screen w-9/12' />
            </div>
          </div>
          <div className="w-full">
            <div className="flex flex-row flex-wrap"> 
            <div className='h-1/2 w-96'>
                </div>
            </div>
            <div className='h-10 w-full'></div>
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
      <CVContainer/>
      <BottomBar/>
    </div>
  );
}
