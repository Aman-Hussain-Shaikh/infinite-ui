import { Link } from "react-router-dom"
import DarkModeToggle from "../DarkMode/DarkMode"
import github from '../../assets/Icons/github-square.svg'
const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-16 bg-blue-600 transition-opacity rounded-3xl mt-2 mr-10 ml-10 shadow-lg px-6">
      <Link to='/'>
      <h1
        title="DEV's One Piece UI TRESSURE"
        className="cursor-pointer text-2xl flex justify-center items-center ml-10 font-black text-white"
      >
        Infinite UI
      </h1>
      </Link>

      <ul className="flex justify-center items-center space-x-6">

        <Link to='/'>
        <li className="px-4 py-2 bg-blue-800 transition-colors rounded-md hover:bg-blue-500 hover:shadow-lg text-white cursor-pointer">
          Home
        </li>
        </Link>
        <Link to='/docs/components/:componentName?'>

        <li className="px-4 py-2 bg-blue-800 transition-colors rounded-md hover:bg-blue-500 hover:shadow-lg text-white cursor-pointer">
          Components
        </li>
        </Link>

        <Link to='/blog'>
        <li className="px-4 py-2 bg-blue-800 transition-colors rounded-md hover:bg-blue-500 hover:shadow-lg text-white cursor-pointer">
          Blog
        </li>
        </Link>

        <Link to='/future-roadmap'>
        <li className="px-4 py-2 bg-blue-800 transition-colors rounded-md hover:bg-blue-500 hover:shadow-lg text-white cursor-pointer">
          Future
        </li>
        </Link>

        <hr className="w-px h-10 bg-white border-0 mx-auto" />

        <DarkModeToggle />

        <Link to='https://github.com/Aman-Hussain-Shaikh/infinite-ui'>
          
            <img src={github} alt="Github Logo" className="w-10 " />
        
        </Link>

      </ul>
    </div>
  )
}

export default Navbar