
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";         
import { FaGraduationCap } from "react-icons/fa";  
import { FaInfoCircle } from "react-icons/fa"; 
import { useGlobalContext } from './GlobalContext/Context';
const Sidebar = () => {
    const navbar = [
        { name: "Home", icon: <FaHome size={20} color="blue" />,to:"home" },
        { name: "About", icon: <FaInfoCircle size={20} color="#FFA500" />,to:"about" },
      ];

      const { showSidebar,setShowSidebar} = useGlobalContext()

  return (
    <div className=''>
         <aside className={`fixed z-30 sm:z-0 -left-45 sm:left-0 top-0 w-44 h-screen bg-white shadow-sm ${showSidebar ? "left-0" : "-left-45"}`}>
            <div className='pl-2.5 py-4 font-bold text-xl text-black flex items-center gap-2'>
              <FaGraduationCap size={32} color="#673AB7" />
              <span>DT-Exam</span>
            </div>
            <nav>
                <ul className='flex flex-col  mt-3'>
                    {
                        navbar.map((item) => (
                            <li onClick={() => setShowSidebar(false)} className='px-3 text-gray-600 text-sm  cursor-pointer' key={item.name}>
                                <NavLink style={({isActive}) => ({background:isActive ? 'rgba(120,120,120,0.1)' : ''})} className="flex items-center gap-1.5 py-2.5 px-2 rounded-sm hover:bg-gray-100" to={`/${item.to}`}>
                                    {item.icon}
                                    <span>  {item.name}</span> 
                                </NavLink>
                            </li>
                        ))
                    }

                </ul>
            </nav>
            <div onClick={() => setShowSidebar(prev => !prev)} className='sm:hidden absolute bg-gray-100 text-sm tracking-wide text-gray-900 bottom-0 py-3 w-full text-center cursor-pointer'>Exit</div>
        </aside>
    </div>
  )
}

export default Sidebar