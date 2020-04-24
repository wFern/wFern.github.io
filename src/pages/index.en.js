import React from 'react'
import Layout from '../components/layouts/index/index'
import { List } from 'semantic-ui-react'
import classes from './index.module.scss'
import commonClasses from '../styles/elements.module.scss'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <h1 className={classes.title}>Andrei Tarasov</h1>
    <h2 className={classes.subTitle}>Frontend-developer from Bryansk, Russia</h2>
    <p>
      I've been working in different fields of web developing for 6 years.<br/>
      Last three years my passions are front-end developing and JavaScript ecosystem.
    </p>
    <div className={classes.List}>
      <span>I worked with</span>
      <List>
        <List.Item><a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href="https://advertise.ru/">advertise.ru</a></List.Item>
        <List.Item><a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href="https://crex24.com/">crex24.com</a></List.Item>
        <List.Item><a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href="https://doslovno.com/">doslovno.com</a></List.Item>
        <List.Item><a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href="https://heavyfair.com/">heavyfair.com</a></List.Item>
      </List>
    </div>
    <p>
      There is <a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href='https://docs.google.com/document/d/1bSdHMs7TLtpMZ18yZWrbEL9nMA8UrQdqwRym9ezrQuM/edit?usp=sharing'>my&nbsp;resume</a>
    </p>
    <h4 className={classes.heading}>My skills</h4>
    <p>
      HTML, CSS, JavaScript, TypeScript, React, Redux, Gatsby.js, D3.js.
    </p>
    <p>
      Sometimes I close my code editor and go to take <a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href="https://500px.com/salad_nights">photos</a>  on film, make <a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href="https://www.mixcloud.com/andrey-ivanov19/">mixtapes</a> for my wife or go on weird journeys and then <a className={commonClasses.Link} rel="noopener noreferrer" target="_blank" href="https://journal.tinkoff.ru/work_exchange/">write&nbsp;about&nbsp;it.</a>
      {/*Formerly I played punk in different bands and we even recorded something. One day I'll share it.*/}
    </p>
  </Layout>
);

export default IndexPage
