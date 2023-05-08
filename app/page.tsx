import {AiFillLinkedin, AiFillYoutube, AiFillFacebook} from "react-icons/ai"
import Image from "next/image";
import next from "../public/next.svg"

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Andre's portfolio website</h1>
          <ul className="flex items-center">
            <li>
              
            </li>
            <li>
              <a className="bg-gradient-to-r from-cyan-500 to-teal-200 text-white px-4 rounded-md" 
              href="#"
              >
                resume CV
                </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Andre Suarez Schou</h2>
          <h3 className="text-2xl py-2">web developer</h3>
          <p className="text-md py-5 leading-8 text-gray-700">
            I enjoy npm run dev
            </p>
        </div>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillFacebook />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className="mx-auto">
          <Image src={next} alt={"image of me"}/>
        </div>
      </section>
    </main>
  )
}
