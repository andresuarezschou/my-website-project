'use client'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import Image from "next/image";
import Lottie from "lottie-react"
import animationData from "../public/64110-web-development.json"
import React from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/theme/mode-toggle";

export default function Home() {
  return (
  <>
    <nav className="py-10 flex initial items-center px-12">
      <div className="flex-1 text-7xl flex justify-center space-x-5 py-5 text-blue-600">
        <a href="https://www.github.com/andresuarezschou"><AiFillGithub /></a>
        <a href="https://www.linkedin.com/in/andre-suarez-schou/"><AiFillLinkedin /></a>
      </div>
    </nav>

    <div className="flex justify-center text-yellow-800">
        <ModeToggle />
    </div>
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
              <ol className="text-left text-lg list-disc list-inside">
                <li>
                  Web developer coding responsive web applications.
                </li>
                <li>
                  Seeking opportunities to contribute to web projects.
                </li>
                <li>
                  UX through intuitive design and functionality.
                </li>
                
              </ol>
              

        <div className="flex justify-center">
          <Lottie animationData={animationData} />
        </div>
            </ul>
          </CardContent>
        </Card>

      </div>
      <h3 className="text-2xl font-bold text-primary mb-6 text-center">
        Projects
      </h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-5">
        {[
          {
            title: "Webshop example",
            description: "I am utilizing these tools: Strapi CMS, Neon serverless database, Render for cloud deployment of strapi backend and Cloudinary for image storage and persistence",
            link:"https://andresuarezschou-webshop.netlify.app/",
          },
          {
            title: "Pokemon finder",
            description: "using pokeAPI REST",
            link: "https://pokemon-data-find.netlify.app/",
          },
          {
            title: "Image AI remove and replace background",
            description: "Cloudinary",
            link: "https://shiny-licorice-d30b8d.netlify.app/",
          },
          {
            title: "Size Guide Application",
            description: "Internship project",
            link: "https://musical-twilight-75b4a5.netlify.app/",
          },
        ].map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <Button asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
     )
}
