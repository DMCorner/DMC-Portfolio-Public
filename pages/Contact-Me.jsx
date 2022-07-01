import GoogleMap from '../components/GoogleMap'
import SideBar from '../components/SideBar'
import TopNavigation from "../components/TopNav.jsx"
import BottomBar from '../components/BottomBar'
import emailjs from '@emailjs/browser';

const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('hidden-code', 'hidden-code', e.target, 'hidden-code')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };   

const Projects = () => {
    return (
    <div className="bg-white dark:bg-gray-800 ">
      <div className="bg-gray-300 dark:bg-gray-700 px-4 transition-all duration-300 ease-linear">
        <div className="pt-20 grid grid-cols-3 max-w-1/4 mx-auto gap-y-20 gap-x-16 text-center content-center">
            <div></div>
          <div>
            <div className='space-y-2'>
              <h1 className=" inline-grid w-3/4 text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center content-center">
                I'd Love To Hear From You
              </h1>
                  <form onSubmit={sendEmail} >
                    <div className="grid grid-cols-2 grid-rows-1">
                    <div><label className='contact-me-form'>Name: </label> <br></br>
                      <input type="name" name="subject" placeholder="Enter name" className='rounded-3xl p-2'/><br></br>
                    <label className='contact-me-form'>Number: </label><br></br>
                      <input type="subject" name="name" placeholder="Enter number" className='rounded-3xl p-2'/><br></br>
                      </div>
                      <div>
                    <label className='contact-me-form'>Email: </label><br></br>
                      <input type="email" name="email" placeholder="Enter email" className='rounded-3xl p-2'/><br></br>
                    <label className='contact-me-form'>Message: </label><br></br>
                  <textarea name="message" rows="5" cols="30" placeholder="Enter message" className='rounded-2xl p-2'/><br></br>
                  </div>
                  <div className='row-span-2 grid grid-cols-3'>
               </div>
               </div>
               <input type="submit" value="Send"  className='contact-me-form hover:cursor-pointer'/>
              </form>
            </div>
          </div>
        </div>
        <div className="pt-20 grid grid-cols-3 max-w-1/4 mx-auto gap-y-20 gap-x-16 text-center content-center">
            <div></div>
          <div >
            <div className='space-y-2'>
              <h1 className=" inline-grid w-3/4 text-xl font-semibold bg-gray-700 dark:bg-gray-800 rounded-3xl text-white text-center content-center p-2">
                Thank you for viewing my portfolio
              </h1>
              <div className="text-lg text-gray-900 dark:text-gray-300 w-full text-center transition-all duration-300 ease-linear">
                 I look forward to reading your message. Until then, I shall be coding in my "office" in Hemel Hempstead.
                </div>
            </div>
          </div>
        </div>
      </div>
      </div> 
    )
}

const Projects2 = () => {

    return (
    <section className="bg-white dark:bg-gray-800 ">
      <div className="bg-gray-300 dark:bg-gray-700 px-4 transition-all duration-300 ease-linear">
        <div className="pt-20 grid grid-cols-3 md:grid-cols-4 max-w-1/4 mx-auto gap-y-20 gap-x-16 ">
          <GoogleMap />
        </div>
      </div>
      </section> 
    )
}

const Projects3 = () => {

    return (
    <section className="bg-white dark:bg-gray-800 ">
      <div className="bg-gray-300 dark:bg-gray-700 px-4 transition-all duration-300 ease-linear">
        <div className="pt-20 grid grid-cols-2 max-w-1/4 mx-auto gap-y-20 gap-x-16">
            <div className='h-96 w-full'></div>
          <div className="h-96"></div>
          <div className="w-full ">
            <div className="flex flex-row flex-wrap"> 
            <div className='h-20 w-96'>
                </div>
            </div>
            <div className='h-10 w-full'></div> 
          </div>
        </div>
      </div>
      </section> 
    )
}


export default function Home() {
  return (
    <div>
      <TopNavigation />
      <SideBar className="z-10"/>
      <Projects/>
      <Projects2/>
      <Projects3/>
      <BottomBar/>
    </div>
  );
}



