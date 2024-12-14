import React from 'react';
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';

import './styles.css';
import VideoBg from '../src/assets/video.mp4'
const App = () => {
  return (
  <section className='page'>
    <div className='overlay'></div>
    <video src={VideoBg} autoPlay loop muted></video>
    <div className='page_content'>
      <h1>Coming Soon </h1>
      <h1>MS Enterprises India</h1>
      <h3>Leave your email and we'all let you know once the site goes live</h3>
      <FlipClockCountdown
       className='flip-clock'
        to={new Date().getTime() + 86 * 4600 * 1000 + 5000}
        labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
        duration={0.5}
      >
        Finished
      </FlipClockCountdown>
      <button className='btn'>Notify Me</button>
    </div>
  </section>);
};

export default App;
