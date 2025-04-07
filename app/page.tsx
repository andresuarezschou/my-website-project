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
      <div className="flex-1 text-9xl flex justify-center space-x-5 py-5 text-blue-600">
        <a href="https://www.github.com/suarezschou"><AiFillGithub /></a>
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
                  Web developer coding dynamic and responsive web applications.
                </li>
                <li>
                  Seeking opportunities to contribute to impactful web projects.
                </li>
                <li>
                  with a drive for creating seamless user experiences through intuitive design and functionality.
                </li>
                <li>
                  Currently immersed in learning the intricacies of building a complete e-commerce platform.
                </li>
              </ol>
              

        <div className="flex justify-center">
          <Lottie animationData={animationData} />
        </div>
            </ul>
          </CardContent>
        </Card>

      </div><h3 className="text-2xl font-bold text-primary mb-6 text-center">Projects</h3><div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Webshop test example with commercetools",
            description: "API and SDK from commercetools",
            link: "https://my-commerce-test-app.netlify.app/",
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
          {
            title: "React Food Recipe Application",
            description: "API assignment",
            link: "https://reliable-tulumba-787b60.netlify.app",
          },
          {
            title: "Pong game",
            description: "Small browser game",
            link: "https://relaxed-kitten-f8ddbb.netlify.app/",
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
