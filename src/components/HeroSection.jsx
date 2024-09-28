import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import pic1 from "../assets/hero-1.jpg"
import pic2 from "../assets/hero-2.jpg"
export const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Moderna landing page  
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text"> for your business</span>
      </h1>
      <p className="mt-10 text-lg text-center text-neutral-300 max-w-4xl">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, iure dolores earum magnam vel facilis quaerat odit nemo
      </p>
      <div className="flex justify-center my-10">
        <a href="#" className="bg-gradient-to-r from-orange-600 to-orange-800 py-3 px-4 rounded-md mx-3">Start for free</a>
        <a href="#" className="py-3 px-4 border rounded-md">Documentation</a>
      </div>

      <div className="flex mt-10 justify-center">
        <img src={pic1} 
          className="rounded-lg w-1/2 border border-orange-900 shadow-sm shadow-orange-400 mx-2 my-4"> 
        </img>
        <img src={pic2} 
          className="rounded-lg w-1/2 border border-orange-900 shadow-sm shadow-orange-400 mx-2 my-4"> 
        </img>
      </div>
    </div>
  )
}
 export default HeroSection