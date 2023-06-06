import Image from "next/image";
import { MagnifyingGlassIcon, ShoppingCartIcon, MenuIcon  } from "@heroicons/react/20/solid";

function Header() {
  return (
    <header>
      <div className="flex space-x-2 items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 p-1 flex items-center flex-grow sm:flex-grow-0 rounder-md">
          <Image src="/logo.png" 
          alt="logo" 
          height={60} 
          width={70} 
          objectFit="contain"
          className="cursor-pointer"
          />
        </div>

        {/* searchbar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <input  type="text" className="p-1 h-full w-6 flex-grow flex-shrink rounded-l-md" />
          <MagnifyingGlassIcon  className="h-12 p-4" />
        </div>

        {/* Right side text/buttons */}
        <div className="text-white flex items-center text-xs space-x-6 px-6">
          <div className="link">
            <p>Hello Nithin</p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
          <p>Returns</p>
          <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div className="relative link flex items-center">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold"> 0</span>
            <ShoppingCartIcon  className="h-10"/>
            <p className="hidden md:flex font-extrabold md:text-sm mt-2 ">Basket</p>
          </div>
        </div>
      </div>



      {/* bottom nav */}
      <div >
        <p className="link flex items-center">
          <MenuIcon className="h-6" />
          All</p>
      </div>
    </header>
  );
}

export default Header;
