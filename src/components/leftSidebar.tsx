import Link from "next/link";
import {BiHomeCircle, BiUser} from 'react-icons/bi';
import{HiOutlineHashtag} from 'react-icons/hi';
import{HiEnvelope} from 'react-icons/hi2';
import{
  BsBell, 
  BsBookmark, 
  BsTwitter,
  BsEnvelope,
  BsThreeDots,
} from 'react-icons/bs';

const NAVIGATION_ITEMS = [
    {
        title: "Twitter",
        icon: BsTwitter,
    },
    {
        title:'Home',
        icon:BiHomeCircle
    },
    {
        title: "Explore",
        icon: HiOutlineHashtag,
    },
    {
        title: "Notifications",
        icon: BsBell,
    },
    {
        title: "Messages",
        icon: BsEnvelope,
    },
    {
        title: "Bookmarks",
        icon: BsBookmark,
    },
    {
        title: "Profile",
        icon: BiUser,
    }
];

const leftSidebar = () => {
  return (
    <section className="w-[23%] sticky top-0 xl:flex flex-col items-stretch h-screen">
          <div className="flex flex-col items-stretch h-full space-y-4 mt-4">
            {NAVIGATION_ITEMS.map((item) => (
              <Link 
                href={"/${item.title.toLowerCase()}"} 
                className="py-2 px-6 text-2xl hover:bg-white/10 transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl"
                key={item.title}
                >
                  <div>
                    <item.icon />
                  </div>
                  {item.title !== "Twitter" && <div>{item.title}</div>}
              </Link>
            ))}
            <button className="rounded-full m-4 bg-primary p-4 text-2xl text-center hover:bg-opacity-70 transition duration-200">
              Tweet
            </button>
          </div>
          <button className="justify-between w-full rounded-full flex items-center space-x-2 m-4 bg-transparent p-4 text-center hover:bg-white/10 transition duration-200">
            <div className="flex items-center space-x-2">
              <div className="rounded-full bg-slate-400 w-12 h-12"></div>
              <div className="text-left text-sm">
                <div className="font-semibold"> Trishir Singh </div>
                <div>@trishir</div>
              </div>
            </div>
            <div>
              <BsThreeDots />
            </div>
          </button>
        </section>
  )
}

export default leftSidebar;