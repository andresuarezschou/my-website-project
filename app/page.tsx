'use client'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import Image from "next/image";
import logo from "../public/logo.svg"
import Lottie from "lottie-react"
import animationData from "../public/64110-web-development.json"


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
          <p className="text-lg py-10 leading-8 text-gray-700">
            I build web applications.
            I was introduced to HTML, CSS, and the JavaScript library React by my school. 
            I use Next.js React framework and tailwind CSS.
            I want to keep improving and develop applications in the future.
            I am fascinated in how with the help of APIs we are able to build applications more efficiently.
            
          </p>
          <div className="flex justify-center">
              <Lottie animationData={animationData} />
          </div>
        </div>
        <div className="text-3xl flex-col flex justify-center text-purple-800 p-10">
          <a href="https://musical-twilight-75b4a5.netlify.app/">size guide application</a>
          <a href="https://reliable-tulumba-787b60.netlify.app">food recipe application</a>
          <a href="https://glittering-faloodeh-0f2668.netlify.app/">storefront commercejs</a>
        </div>
        <div className="text-5xl flex justify-between py-5 text-blue-600">
          <a href="https://www.linkedin.com/in/andre-suarez-schou/"><AiFillLinkedin /></a>
          <a href="https://www.github.com/suarezschou"><AiFillGithub /></a>
        </div>
        <div className="mx-auto flex justify-center mb-20">
          <Image src={logo} alt={"image of my logo"}/>
        </div>
      </section>
    </main>
  )
}
