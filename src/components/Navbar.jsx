import {
  ArrowDownToLine,
  Bell,
  CircleUserRound,
  Download,
  House,
} from "lucide-react";
import React from "react";
import { songs } from "../AllSongs/Songs";
import { useDispatch,useSelector } from "react-redux";
import {filterSongArr} from "../features/filterSongSlice"
import {clearQuery} from "../features/filterSongSlice"
import Logout from "./Logout";
import { LogoutFn } from "../features/AuthSlice";

const Navbar = () => {
    let dispatch = useDispatch();
    let {logout}=useSelector((state)=>(state.auth))
  const handleSearch=(e)=>{
    let query =e.target.value.toLowerCase()
   if(!query){
    dispatch(clearQuery())
   }
    let filterSongs= songs.filter((elem)=>{
    return elem.song.toLowerCase().includes(query) //startWith bhi same hi hai
   })
    dispatch(filterSongArr({
      song:filterSongs,
      query,
    }))
  }
  //query ka sidha use hai agar filterarray me koi data nhi hai par kuch na kuch likha hai search bar me jo match nhi kar rha
  //tab aap ui show karwaoge no result found or agar aapne kuch nhi likha hai search bar me to clearQuery kiya hai
  return (
    <nav className="hidden lg:flex h-[10vh] text-gray-500 w-full flex-row justify-between items-center p-8">
      {/* Spotify Logo */}
      <div className="part1 w-full lg:w-[30%]">
        <div className="flex justify-start">
          <svg viewBox="0 0 168 168" className="w-8 h-8 lg:w-10 lg:h-10 fill-white">
            <path d="M84 0a84 84 0 1 0 0 168A84 84 0 0 0 84 0zm38.2 121.3c-1.6 2.6-5 3.4-7.6 1.8-20.8-12.7-47-15.6-77.8-8.6-3 .7-6-1.1-6.7-4.1-.7-3 1.1-6 4.1-6.7 33.7-7.7 63.7-4.3 86.6 9.6 2.6 1.6 3.4 5 1.8 7.6zm10.9-24.2c-2 3.2-6.3 4.2-9.5 2.2-23.8-14.6-60-18.8-88.2-10.2-3.6 1.1-7.4-.9-8.5-4.5-1.1-3.6.9-7.4 4.5-8.5 32.3-9.8 72.4-5.1 100 11.8 3.2 2 4.2 6.3 2.2 9.5zm1-25.2c-28.6-17-75.7-18.6-103-10.3-4.2 1.3-8.7-1.1-10-5.3-1.3-4.2 1.1-8.7 5.3-10 31.4-9.5 83.7-7.7 116.7 12.1 3.8 2.3 5 7.2 2.7 11-2.3 3.8-7.2 5-11 2.7z" />
          </svg>
        </div>
      </div>
      <div className="part2 h-full w-full lg:w-[70%] justify-between items-center flex flex-col lg:flex-row gap-2 lg:gap-10">
        <div className="navcenter ml-30 flex gap-2 lg:gap-5 justify-center items-center w-full lg:w-auto">
          <House
            size={30}
            className="p-2 lg:p-3 rounded-full bg-[#2A2A2A] text-white hover:bg-[#2d2c2c] w-[30px] h-[30px] lg:w-[50px] lg:h-[50px]"
          />
          <input
            className="w-full lg:w-110 bg-[#2A2A2A] p-2 lg:p-3 text-gray-200 text-sm lg:text-lg rounded-full active: border-white hover:bg-[#2d2c2c] "
            type="text"
            name="search"
            id="search"
            placeholder="What do you want to play?"
            onChange={handleSearch}
          />
        </div>
        <div className="navright flex justify-center items-center gap-2 lg:gap-5">
          <h3 className="px-2 py-1 lg:px-4 lg:py-2 text-xs lg:text-base font-semibold bg-white text-black rounded-xl hover:scale-105">
            Explore Premium
          </h3>
          <div className="down hidden lg:flex justify-center items-center gap-1 hover:text-white hover:scale-105 ">
            <Download /> <h2 className="font-semibold">Install App</h2>
          </div>
          <Bell size={24} className="hover:text-white hover:scale-105 lg:w-[30px] lg:h-[30px]" />
          <CircleUserRound size={24} onClick={()=>(dispatch(LogoutFn()))} className="hover:text-white hover:scale-105 lg:w-[30px] lg:h-[30px]" />
          {
            logout?<Logout/>:""
          }
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
