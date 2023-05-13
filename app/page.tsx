import {AiFillLinkedin, AiFillYoutube, AiFillFacebook, AiFillGithub} from "react-icons/ai"
import Image from "next/image";
import logo from "../public/logo.svg"


export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Andre's portfolio website</h1>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Andre Suarez Schou</h2>
          <h3 className="text-2xl py-2">web developer</h3>
          <p className="text-md py-5 leading-8 text-gray-700">
            I code applications in react js and tailwind css.
          </p>
        </div>
        <div className="text-3xl flex justify-center text-purple-800 p-10">
          <a href="https://musical-twilight-75b4a5.netlify.app/">size guide application</a>
        </div>
        <div className="text-5xl flex justify-between py-5 text-blue-600">
          <a href="https://www.facebook.com/suarezschou"><AiFillFacebook /></a>
          <a href="https://www.linkedin.com/in/andre-suarez-schou/"><AiFillLinkedin /></a>
          <a href="https://www.youtube.com/suarezschou"><AiFillYoutube /></a>
          <a href="https://www.github.com/suarezschou"><AiFillGithub /></a>
        </div>
        <div className="mx-auto flex justify-center ">
          <Image src={logo} alt={"image of my logo"}/>
        </div>
      </section>
    </main>
  )
}
