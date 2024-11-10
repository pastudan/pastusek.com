import * as React from 'react'

import content from '../../content/main-site-copy.yml'
import publications from '../../content/publications.yml'
import trainingCourses from '../../content/workshops.yml'

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

      <section className="px-8 mt-4 pt-4 container mx-auto">
        <a href="/" className="text-xs mb-6 block">
          &laquo; Back to main page
        </a>
        <h1 className="text-3xl font-bold">Training Courses</h1>
        {content.training.split('\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <ol className="list-decimal ml-10 mt-5">
          {trainingCourses.map((course, index) => (
            <li key={index} className="pl-2">
              <a
                href={`#${course.title
                  .toLowerCase()
                  .replace(' ', '-')
                  .replace(/[^a-z0-9-]/g, '')}`}
                className="mt-10 text-blue-500"
              >
                {course.title}
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section id="home" className="px-8 mt-10 p-4 container mx-auto">
        {trainingCourses.map((course, index) => (
          <div key={index} className="mr-10  pt-4 mt-4 border-t pb-8">
            <h2
              className="mt-10 text-2xl font-bold"
              id={course.title
                .toLowerCase()
                .replace(' ', '-')
                .replace(/[^a-z0-9-]/g, '')}
            >
              {course.title}
            </h2>
            <p className="mt-2 text-sm text-gray-500">{course.duration}</p>
            <p>{course.description}</p>
            <ul className="ml-4">
              {course.topics.map((topic, i) => (
                <li key={i} className="list-disc ml-4">
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        ))}
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
