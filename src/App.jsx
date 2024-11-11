import { useEffect } from "react";
import Experience from "./components/Experience"
import "./index.css"
import LocomotiveScroll from 'locomotive-scroll';

function App() {
 
  useEffect(()=>{
    const locomotiveScroll = new LocomotiveScroll();  //For smooth scrolling
  }, [])

  return (
    <>
      <div className="flex justify-center items-center bg-pink-100 text-purple-800  text-xl font-bold"> Vite React Tailwind CSS and 3D Enabled react app Starter</div>
      <div className="h-[100vh] bg-gradient-to-t from-purple-200 to-pink-100">
      <Experience/>
      </div>
    </>
  )
}

export default App
