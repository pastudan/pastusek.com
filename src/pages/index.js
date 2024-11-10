import * as React from 'react'

import content from '../../content/main-site-copy.yml'
import publications from '../../content/publications.yml'
import workshops from '../../content/workshops.yml'

import favicon from '../images/favicon.ico'
import logo from '../images/logo.svg'
import introTeaching from '../images/intro-teaching.png'
import socialProof from '../images/social-proof.png'

const IndexPage = () => {
  return (
    <main>
      <header>
        <div className="px-8 p-6 container mx-auto flex flex-col lg:flex-row items-center justify-between">
          <div className="flex justify-center lg:justify-start">
            <div className="border-b border-red-500 mb-5 lg:mb-0  pb-1 w-72">
              <img src={logo} alt="logo" className="border-b border-red-500 pb-2" />
            </div>
          </div>
          <nav className="text-xs lg:text-base">
            <ul className="flex justify-center items-center space-x-4">
              <li>
                <a href="#training" className="hover:text-red-600">
                  Training
                </a>
              </li>
              <li>
                <a href="#consulting" className="hover:text-red-600">
                  Consulting
                </a>
              </li>
              <li>
                <a href="#challenges" className="hover:text-red-600">
                  Industry Challenges
                </a>
              </li>
              <li>
                <a href="#publications" className="hover:text-red-600">
                  Publications
                </a>
              </li>
              <li>
                <a href="#contact" className="bg-black rounded-full text-white py-1 px-4">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="home" className="px-8 mt-10 p-4 container mx-auto flex">
        <div className="mr-10">
          <h1 className="text-3xl font-bold">{content.title}</h1>
          <p>{content.intro_text}</p>
        </div>
        <img src={introTeaching} alt="Teaching a course on Drilling Mechanics" className="w-1/2" />
      </section>

      <section id="social-proof" className="px-8 p-4 container mx-auto flex">
        <img src={socialProof} alt="Social Proof" className="w-full" />
      </section>

      <section id="about" className="px-8 mt-6 p-4 container mx-auto">
        <h2 className="text-3xl font-bold">About Us</h2>
        {content.about_us.split('\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section id="training" className="px-8 mt-6 p-4 container mx-auto">
        <h2 className="text-3xl font-bold">Training</h2>
        {content.training.split('\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section id="consulting" className="px-8 mt-6 p-4 container mx-auto">
        <h2 className="text-3xl font-bold">Consulting and Workshops</h2>
        {content.consulting.split('\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <div className="flex flex-wrap justify-start mt-8">
          {workshops.slice(0, 5).map((course) => (
            <a href={`/training#${course.title.replace(/[^a-z0-9]/, '')}`} className="">
              <div className="border border-gray-200 hover:border-red-500 rounded mt-4 w-72 mx-2">
                <div className="bg-gray-200 p-2 rounded-t">
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="mt-0">{course.duration}</p>
                </div>
                <p className="p-4">
                  {course.description}
                  <ul className="list-disc ml-4">
                    {course.topics.map((topic, i) => (
                      <li key={i}>{topic}</li>
                    ))}
                  </ul>
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section id="challenges" className="px-8 mt-6 p-4 container mx-auto">
        <h2 className="text-3xl font-bold">Industry Challenges and Opportunities</h2>
        {content.challenges.split('\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </section>

      <section id="publications" className="px-8 mt-6 p-4 container mx-auto">
        <h2 className="text-3xl font-bold">Publications</h2>
        <ol className="list-decimal ml-8 mt-4">
          {publications.slice(0, 2).map((pub) => (
            <li className="pl-4">
              <a className="hover:underline" href={pub.link}>
                {pub.title}
              </a>
            </li>
          ))}
        </ol>
      </section>

      <footer className="bg-black text-white mx-auto flex justify-center py-20 mt-12">Copyright 2024, Pastusek and Associates</footer>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <>
    <title>Pastusek and Associates</title>
    <meta name="description" content="Pastusek and Associates - Oilfield consulting" />
    <link rel="icon" type="image/png" sizes="16x16" href={favicon} />
  </>
)
