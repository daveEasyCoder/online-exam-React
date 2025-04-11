import React,{useState} from "react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "./GlobalContext/Context";
import UserInfo from "./UserInfo";
import { FaBars } from 'react-icons/fa'; 
import { useNavigate } from "react-router-dom";
import { course } from "../../data/course";
import { Link } from "react-router-dom";
const Header = () => {

  const {user,setShowSidebar,setUser} = useGlobalContext()
  const [showUserInfo,setUserInfo] = useState(false)

  const navigate = useNavigate()
     //  logout function
     const handleLogout =() => {
      setUser(null)
      localStorage.removeItem('user')
      navigate('/')
    }

    const [query,setQuery] = useState('')
    const [filterdTitle,setFilteredTitle] = useState([])
    const [showSearchSuggestion,setShowSearchSuggestion] = useState(false)
    const courseTitle = course.map(c => c.title)

    const handleSearch = (e) => {
      const inputValue = e.target.value
      setQuery(inputValue)
      const searchedItem = courseTitle.filter(title => title.toLowerCase().startsWith(query.toLowerCase()))
      setFilteredTitle(searchedItem)
      setShowSearchSuggestion(true)
    }
   
    const handleClick = (e) => {
      setQuery(e.target.innerText)
      setShowSearchSuggestion(prev => !prev)
    }

    const handleSubmit = (e) => {
      e.preventDefault() 
      if(query){
        navigate(`/search/${query}`)
        setQuery('')
      }
    }
    
  return (
    <div className="bg-white py-4 px-5 mb-4 left-0 sm:left-44 top-0 z-10 fixed right-0">
      <div className="flex items-center gap-2 justify-between">
        <div onClick={() => setShowSidebar(true)}  className="sm:hidden">
            <FaBars className="text-gray-700 cursor-pointer" size={20} />
        </div>
        <form onSubmit={handleSubmit} className="w-1/2 relative">
            <input onChange={handleSearch} value={query} className="bg-gray-100 py-2 text-gray-900 text-sm px-4 rounded-3xl w-full outline-none" type="text" name="" placeholder="Search course..." />
            <FaSearch onClick={handleSubmit} className="absolute text-gray-500 right-4 top-3 cursor-pointer" size={15} />
            {
              showSearchSuggestion &&
                <div className="absolute top-10 left-0 w-full bg-gray-200 rounded-sm">
                  {
                    filterdTitle && setFilteredTitle.length &&
                    filterdTitle.map((title,index) => (
                      <li onClick={handleClick} className="list-none text-sm py-1 hover:bg-black/5 px-3 cursor-pointer " key={index}>{title}</li>
                    ))
                  }
              </div>
            }
        </form>
       <div className="flex items-center gap-4">
           {user ? 
             <div className="relative flex items-center gap-4">
                 <button onClick={handleLogout} className="border-1 px-4 text-sm py-1 rounded-sm cursor-pointer hover:bg-blue-500 hover:text-white duration-200 font-semibold text-blue-700">Logout</button>
                <div onClick={() => setUserInfo(prev => !prev)} className="font-bold text-xl text-gray-700 cursor-pointer border-1 border-gray-600 w-8 h-8 flex items-center justify-center rounded-full">{user.username[0].toUpperCase()}</div>
                {showUserInfo && <UserInfo />}
             </div>
            : <Link to="/signup"><button className="border-1 px-4 text-sm py-1 rounded-sm cursor-pointer hover:bg-blue-500 hover:text-white duration-200">SignUp</button></Link> }
         
       </div>
      </div>
    </div>
  );
};

export default Header;
