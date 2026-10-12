'use client'
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"
import Image from "next/image";
import Lottie from "lottie-react"
import animationData from "../public/64110-web-development.json"
import React from "react";
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ModeToggle } from "@/components/theme/mode-toggle";
import { LanguageToggle } from "@/components/LanguageToggle"; // <-- Import your toggle
import { useLanguage } from "@/context/LanguageContext";     // <-- Import the hook
import Link from 'next/link';

export default function Home() {
  const { t } = useLanguage(); // <-- Access translations

  return (
    <>
      <div className="flex justify-center items-center gap-4 text-yellow-900 pt-10">
          <LanguageToggle />
          <ModeToggle />
      </div>

      <section className="text-center py-10 px-4">
          <h1 className="text-2xl font-extrabold text-primary mb-2">
              {t.hero.name}
          </h1>
          <p className="text-blue-600">
             {t.hero.bio} 
          </p>
          
          <div className="flex justify-center w-48 md:w-64 mx-auto pb-10">
            <Lottie animationData={animationData} />
          </div>

          {/* Primary CTA */}
          <div className="flex flex-wrap justify-center gap-4 px-4 ">
            <Button
              size="lg"
              onClick={() => {
                const projectSection = document.getElementById('projects-section');
                if (projectSection) {
                  projectSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {t.hero.viewProjects}
            </Button>      
            <Button variant="outline" size="lg" asChild>
              <a href="/cv-jobnet-1.pdf" download>{t.hero.downloadResume}</a>
            </Button>
          </div>
      </section>

      <nav className="py-10 flex initial items-center px-12">
        <div className="flex-1 text-7xl flex justify-center space-x-5 text-blue-600">
          <a href="https://www.github.com/andresuarezschou" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
          <a href="https://www.linkedin.com/in/andresuarezschou/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
        </div>
      </nav>

      <div className="text-center flex justify-center m-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">
              {t.sections.skills}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="flex flex-col items-center gap-5">
              <Image src="/javascript.svg" alt="javascript-logo" width={200} height={200} />
              <Image src="/react.svg" alt="react-logo" width={200} height={200} />
              <Image src="/html.svg" alt="html-logo" width={200} height={200} />
              <Image src="/css.svg" alt="css-logo" width={200} height={200} />
            </ul>
          </CardContent>
        </Card>
      </div>

      <h3 id="projects-section" className="text-2xl font-bold text-primary mb-6 text-center">
        {t.sections.projects}
      </h3>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 p-5">
        {t.projectsList.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-3">
                <Button asChild>
                  <Link href={project.link} target="_blank" rel="noopener noreferrer">
                    {t.buttons.viewProject}
                  </Link>
                </Button>

                <Button asChild>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    {t.buttons.githubRepo}
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
