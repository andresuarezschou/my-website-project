'use client'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import Image from "next/image";
import Lottie from "lottie-react"
import animationData from "../public/64110-web-development.json"
import React from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/theme/mode-toggle";
import Link from 'next/link';

export default function Home() {
  return (
  <>


    <div className="flex justify-center text-yellow-900 pt-10">
        <ModeToggle />
    </div>

<section className="text-center py-10 px-4">
    <h1 className="text-5xl font-extrabold text-primary mb-2">
        André Suarez Schou
    </h1>
    <p className="text-2xl text-muted-foreground mb-6">
       Front-End Web Developer 
    </p>
    <div className="max-w-xl mx-auto mb-8 text-xl">
        <p>
            Building elegant and high-performance web applications. Expertise in the React ecosystem (Next.js, state management) and a passion for intuitive UX/UI. Seeking challenging front-end roles.
        </p>
    </div>
    <div className="flex justify-center w-48 md:w-64 mx-auto pb-10">
      <Lottie animationData={animationData} />
    </div>

    {/* Primary CTA */}
  <div className="flex justify-center space-x-4">
   <Button
          size="lg"
          onClick={() => {
            const projectSection = document.getElementById('projects-section');
            if (projectSection) {
              projectSection.scrollIntoView({ behavior: 'smooth' });
          }
      }}
  >
      View Projects
    </Button>      
    <Button variant="outline" size="lg" asChild>
          <a href="/multimedia design cvresume web dev.pdf" download>Download Resume</a>
    </Button>
    </div>
</section>
    <nav className="py-10 flex initial items-center px-12">
      <div className="flex-1 text-7xl flex justify-center space-x-5 text-blue-600">
        <a href="https://www.github.com/andresuarezschou"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/andre-suarez-schou/"><AiFillLinkedin /></a>
      </div>
    </nav>


      <div className="text-center flex justify-center m-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              Skills
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col items-center gap-5">
              <Image
                src="/javascript.svg"
                alt="javascript-logo"
                width={200}
                height={200} />
              <Image
                src="/react.svg"
                alt="react-logo"
                width={200}
                height={200} />
              <Image
                src="/html.svg"
                alt="html-logo"
                width={200}
                height={200} />
              <Image
                src="/css.svg"
                alt="css-logo"
                width={200}
                height={200} />
              
            </ul>
          </CardContent>
        </Card>

      </div>
      <h3 id="projects-section" className="text-2xl font-bold text-primary mb-6 text-center">
        Projects
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-5">
        {[
          {
            title: "Webshop example",
            description: "I am utilizing these tools: Strapi CMS, Neon serverless database, Render for cloud deployment of strapi backend and Cloudinary for image storage and persistence. This application is hosted on Render's free plan. The server may take a few seconds to start up due to inactivity.",
            link:"https://andresuarezschou-webshop.netlify.app/",
            github: 'https://github.com/andresuarezschou/my-webshop-app',

          },
          {
            title: "Pokemon finder",
            description: "using pokeAPI REST",
            link: "https://pokemon-data-find.netlify.app/",
            github: 'https://github.com/andresuarezschou/pokemon-finder',

          },
          {
            title: "Image AI remove and replace background",
            description: "Cloudinary AI API, Zod schema validation + Zustand state management",
            link: "https://shiny-licorice-d30b8d.netlify.app/",
            github: 'https://github.com/andresuarezschou/photoai',

          },
          {
            title: "Size Guide Application",
            description: "Internship project",
            link: "https://musical-twilight-75b4a5.netlify.app/",           
            github: 'https://github.com/suarezschou/my-sizeguide-application',
          },
        ].map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>

            <div className="space-x-5">
              <Button asChild>
                <Link href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </Link>
              </Button>

              <Button asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    GitHub repo
                </Link>
              </Button>
            </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
     )
}
