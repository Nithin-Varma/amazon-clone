import Image from "next/image";
import { MagnifyingGlassIcon, ShoppingCartIcon, Bars3Icon } from "@heroicons/react/20/solid";
// import { signIn, signOut, useSession } from "next-auth/react" 
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {

  const {data: session} = useSession();
  const router = useRouter();
  const items = useSelector(selectItems)


  return (
    <header className="sticky top-0 z-50">
      <div className="flex space-x-2 items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 p-1 flex items-center flex-grow sm:flex-grow-0 rounder-md">
          <Image src="/logo.png" 
          alt="logo" 
          height={60} 
          width={70} 
          objectFit="contain"
          className="cursor-pointer"
          onClick={() => router.push("/")}
          />
        </div>

        {/* searchbar */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow bg-yellow-400 hover:bg-yellow-500 cursor-pointer">
          <input  type="text" className="p-1 h-full w-6 flex-grow flex-shrink rounded-l-md" />
          <MagnifyingGlassIcon  className="h-12 p-4" />
        </div>

        {/* Right side text/buttons */}
        <div className="text-white flex items-center text-xs space-x-6 px-6">
          <div onClick={!session ? signIn : signOut} className=" cursor-pointer link" >
            <p>
              {session ? `Hello ${session.user.name}` : "Sign In"}
            </p>
            <p className="font-extrabold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
          <p>Returns</p>
          <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          <div 
            className="relative link flex items-center"
            onClick={() => router.push("/checkout")}
            >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold"> 
            {items.length}
            </span>
            <ShoppingCartIcon  
              className="h-10"
              />
            <p className="hidden md:flex font-extrabold md:text-sm mt-2 ">Basket</p>
          </div>
        </div>
      </div>

      {/* bottom nav */}
      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center">
          <Bars3Icon  className="h-6" />
          All</p>
        <p className="link">Prime Video</p>
        <p className="link">Amazon Business</p>
        <p className="link">Today's Deals</p>
        <p className="link hidden lg:inline-flex">Electronics</p>
        <p className="link hidden lg:inline-flex">Food & Grocery</p>
        <p className="link hidden lg:inline-flex">Buy Again</p>
        <p className="link hidden lg:inline-flex">Shopper ToolKit</p>
        <p className="link hidden lg:inline-flex">Health & Personal Care</p>
      </div>
    </header>
  );
}

export default Header;
