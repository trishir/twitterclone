import LeftSidebar from "@/components/leftSidebar";
import {BsChat, BsDot, BsThreeDots } from "react-icons/bs";
import {AiOutlineRetweet, AiOutlineHeart} from "react-icons/ai";
import {IoStatsChart, IoShareOutline} from "react-icons/io5";

const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/*left sidebar for navigation/header*/}
        <LeftSidebar />
        <main className ="ml-[275px] flex w-[600px] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600">
          <h1 className="text-xl font-bold p-6 backdrop-blur bg-black/10 sticky top-0"> Home</h1>
          <div className="border-t-[0.5px] px-4 border-b-[0.5px] flex items-stretch py-4 space-x-2 border-gray-600 relative">
            <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
            <div className="flex flex-col w-full h-full">
                <input 
                  type="text" 
                  placeholder="What's happening?" 
                  className="w-full h-full placeholder:text-gray-600 text-2xl bg-transparent border-b-[0.5px] p-4 outline-none border-none"/>
              <div className="w-full justify-between items-center flex">
                <div>

                </div>
                <div className="w-full max-w-[100px]">
                  <button className="rounded-full bg-primary px-4 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200">
                    Tweet
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            {
              Array.from({length:5}).map((_,i)=>(
                <div 
                  key={i} 
                  className="border-b-[0.5px] border-gray-600 p-4 flex space-x-4">
                  <div>
                    <div className="w-10 h-10 bg-slate-200 rounded-full"/>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center w-full justify-between">
                      <div className="flex items-center space-x-1 w-full">
                        <div className="font-bold">Trishir Singh</div>
                        <div className="text-gray-500">@trishir</div>
                        <div className="text-gray-500"><BsDot/></div>
                        <div className="text-gray-500">1 hour ago</div>
                      </div>
                      <div><BsThreeDots/></div>
                    </div>
                    <div className="text-white text-base">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum id voluptatum perspiciatis consectetur odio asperiores cumque qui, eos reprehenderit necessitatibus repellat laboriosam aspernatur dolor harum quidem voluptatibus ullam sed alias!
                    </div>
                    <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2">

                    </div>
                    <div className="flex items-center justify-start space-x-20 mt-2 w-full">
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                        <BsChat/>
                      </div >
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                        <AiOutlineRetweet/>
                      </div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                        <AiOutlineHeart/>
                      </div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                        <IoStatsChart/>
                      </div>
                      <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
                        <IoShareOutline/>
                      </div>
                    </div >
                  </div>
                </div>
              ))}
          </div>
        </main>
        {/* <section>right section</section> */}
      </div>
    </div>
  )
}

export default Home;