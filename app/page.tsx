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
    
      <div>
        <nav className="py-10 flex justify-between items-center px-12">

          <a href="#">      
          <Image className="rounded-full"
            src="/logo.webp"
            width={100}
            height={100}
            alt="Picture of the author"
            /></a>
          <div className="text-7xl flex justify-center py-5 text-blue-600">
            <a href="https://www.linkedin.com/in/andre-suarez-schou/"><AiFillLinkedin /></a>
            <a href="https://www.github.com/suarezschou"><AiFillGithub /></a>
          </div>

          <Button>about</Button>
        </nav>
        
        <div className="flex justify-center">
        <ModeToggle/>
        </div> 
        
      </section>
      <div className="text-center flex justify-center m-8">
<Card>
  <CardHeader>
    <CardTitle className="text-2xl">Skills</CardTitle>
  </CardHeader>
  <CardContent>
    <ul className="flex flex-col items-center gap-5">
      <Image
        src="/javascript.svg"
        alt="javascript-logo"
        width={200}
        height={200}
      />
      <Image
        src="/react.svg"
        alt="react-logo"
        width={200}
        height={200}
      />
      <Image
        src="/html.svg"
        alt="html-logo"
        width={200}
        height={200}
      />
      <Image
        src="/css.svg"
        alt="css-logo"
        width={200}
        height={200}
      />
    </ul>
  </CardContent>
</Card>

                <div className="flex justify-center">
                  <Lottie animationData={animationData} />
                </div>
              </CardContent>
            </Card>
      </div>
        <section className="m-8">
          <h3 className="text-2xl font-bold text-primary mb-6 text-center">Projects</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[   
              {
                title: "Pokemon finder",
                description: "using pokeAPI REST",
                link: "https://pokemon-data-find.netlify.app/",
              },  
              {
                title: "Webshop test example with commercetools",
                description: "API and SDK from commercetools",
                link: "https://my-commerce-test-app.netlify.app/",
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
        </div>    
     )
}
