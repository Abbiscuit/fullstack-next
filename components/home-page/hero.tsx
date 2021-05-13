import React from 'react';
import Image from 'next/image';

import classes from './hero.module.css';

interface Props {}

const Hero = (props: Props) => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/profile.jpeg"
          alt="An image showing Hiro"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Hiro</h1>
      <p>
        I blog about web development - especially frontend frameworks /
        liblaries like React and Next.js!
      </p>
    </section>
  );
};

export default Hero;
