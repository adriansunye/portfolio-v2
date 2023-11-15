// src/components/Home.tsx
import React, { useState, useEffect } from 'react'
import LogoTitle from '@assets/images/logo-a.png'
import { Link } from 'react-router-dom'
import './index.scss'
import AnimatedLetters from '@utils/AnimatedLetters'
import Logo from '@components/Logo'
import Loader from 'react-loaders'

const Home: React.FC = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['d', 'r', 'i', 'a', 'n', 's', 'u', 'n', 'y', 'e']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => {
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <React.Fragment>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer / Backend Developer</h2>
          <Link to="contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" active={true} />;
    </React.Fragment>
  )
}

export default Home
