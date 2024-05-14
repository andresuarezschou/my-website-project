'use client'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import Image from "next/image";
import Lottie from "lottie-react"
import animationData from "../public/64110-web-development.json"


export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl">Portfolio website</h1>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Andre Suarez Schou</h2>
          <h3 className="text-2xl py-2">Multimedia Designer with interest in content creation and web development </h3>
          <p className="text-lg py-10 leading-8 text-gray-700">
            
            Multimediadesign International Bussiness Academy Kolding, Denmark. 
            HTML, CSS, Javascript.
            Today I like to use the Next.js React framework and Tailwind CSS to be able to style very effectively and dont have to come up with class names in the CSS stylesheets.
            
          </p>
          <div className="flex justify-center">
              <Lottie animationData={animationData} />
          </div>
        </div>
        <div className="text-3xl flex-col flex justify-center text-purple-800 p-10">
          <a href="https://musical-twilight-75b4a5.netlify.app/"> size guide application internship </a>
          <a href="https://reliable-tulumba-787b60.netlify.app"> food recipe application web dev IBA </a>
          <a href="https://glittering-faloodeh-0f2668.netlify.app/"> storefront example using Commerce.js </a>
        </div>
        <div className="text-5xl flex-col flex justify-center py-5 text-blue-600">
          <a href="https://www.linkedin.com/in/andre-suarez-schou/"><AiFillLinkedin /></a>
          <a href="https://www.github.com/suarezschou"><AiFillGithub /></a>
        </div>
      </section>
    </main>
  )
}
