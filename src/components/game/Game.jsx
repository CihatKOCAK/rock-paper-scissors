import React from 'react'
import Bottom from './bottom/Bottom';
import Container from './container/Container';
import "./game.scss";
import Head from './head/Head';

export default function game() {
  return (
    <div>
      <Head />
      <br />
      <Container />
      <Bottom />
    </div>
  )
}
