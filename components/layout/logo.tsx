import React from 'react';

import classes from './logo.module.css';

interface Props {}

const Logo = (props: Props) => {
  return <div className={classes.logo}>Hiro's Blog</div>;
};

export default Logo;
