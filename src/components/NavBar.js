import { Link } from 'react-scroll/modules'

export default function NavBar({ onOpenModal }) {
    return(
<nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center border-b border-gray-200 dark:border-gray-600">
  <div className="-xl flex flex-wrap items-center justify-between mx-auto p-3 ">
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" >
  <ul className="flex flex-col p- md:p-0 mt-4 font-medium border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 text-center">
      <li>
      <Link to="about-me" 
        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-500 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}    
        >About Me</Link>
      </li>
      <li>
        <Link to="projects" 
        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-cyan-500 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}    
        >Projects</Link>
      </li>
      <li>
        <button onClick={onOpenModal} className="block py-2 pl-3 pr-4 md:hover:bg-transparent md:hover:text-cyan-500 md:p-0 md:dark:hover:text-cyan-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Me</button>
      </li>
    </ul>
  </div>
  </div>
</nav>
    )
}
