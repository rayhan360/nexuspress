import Image from "next/image";
import logo from "@/assets/nexuspress_logo.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Header = () => {
  return (
    <>
    <div className="navbar text-black h-28">
      <div className="navbar-start hidden lg:block">
        <div className="flex gap-3">
            <h1 className="border rounded-full p-2 text-[#3B5998] border-[#3B5998] cursor-pointer hover:bg-[#3B5998] hover:text-white"><FaFacebookF /></h1>
            <h1 className="border rounded-full p-2 text-[#1DA1F2] border-[#1DA1F2] cursor-pointer hover:bg-[#1DA1F2] hover:text-white"><FaTwitter /> </h1>
            <h1 className="border rounded-full p-2 text-[#E1306C] border-[#E1306C] cursor-pointer hover:bg-[#E1306C] hover:text-white"><FaInstagram /> </h1>
            <h1 className="border rounded-full p-2 text-[#0077b5] border-[#0077b5] cursor-pointer hover:bg-[#0077b5] hover:text-white"><FaLinkedinIn /> </h1>
        </div>
      </div>
      <div className="navbar-center">
        <Image src={logo} alt="this website official logo" height={200} width={200}></Image>
      </div>

      <div className="navbar-end">
        <button className="bg-[#004CFF] text-white px-3 py-2 rounded-lg">
          Subsribe
        </button>
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar lg:ml-5">
        <div className="w-10 rounded-full">
          <Image src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="profile" height={50} width={50}></Image>
        </div>
      </div>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
      </div>
    </div>
    <hr/>
    </>
  );
};

export default Header;
