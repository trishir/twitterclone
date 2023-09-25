import LeftSidebar from "@/components/leftSidebar";
const Home = () => {
  return (
    <div className="w-full h-full flex justify-center items-center relative bg-black">
      <div className="max-w-screen-xl w-full h-full flex relative">
        {/*left sidebar for navigation/header*/}
        <LeftSidebar />
        {/* {<main> Home timeline</main>
        <section>right section</section>} */}
      </div>
    </div>
  )
}

export default Home;