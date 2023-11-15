import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '@utils/AnimatedLetters';
import './index.scss';

const Skills: React.FC = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

 
  return (
    <>
      <div className="container skills-page">
        <h1 className="page-title">
          <AnimatedLetters letterClass={letterClass} strArray={'Skills'.split('')} idx={15} />
        </h1>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default Skills;
