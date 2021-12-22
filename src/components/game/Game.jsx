import React from 'react'
import Bottom from './bottom/Bottom';
import Container from './container/Container';
import "./game.scss";
import Head from './head/Head';

export default function Game({setLoggined, data}) {
  return (
    <div className='game'>
      <Head setLoggined = {setLoggined} />
      <br />
      <Container credit = {data['credit']} />
      <Bottom />
    </div>
  )
}
