import React from 'react'
import Layout from '../components/layouts/index/index'
import { List } from 'semantic-ui-react'
import classes from './index.module.scss'
import resume from '../data/Andrei Tarasov. Front-end Developer Resume.pdf'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <h1 className={classes.title}>Andrei Tarasov</h1>
    <h2 className={classes.subTitle}>Frontend&mdash;developer from Bryansk, Russia</h2>
    <p>
      I've been working in different fields of web developing for 5 years.<br/>
      Last two years my passions are front-end developing and data visualization.
    </p>
    <div className={classes.List}>
      <span>I worked with</span>
      <List>
        <List.Item><a rel="noopener noreferrer" target="_blank" href="https://advertise.ru/">advertise.ru</a></List.Item>
        <List.Item><a rel="noopener noreferrer" target="_blank" href="https://crex24.com/">crex24.com</a></List.Item>
        <List.Item><a rel="noopener noreferrer" target="_blank" href="https://doslovno.com/">doslovno.com</a></List.Item>
        <List.Item><a rel="noopener noreferrer" target="_blank" href="https://heavyfair.com/">heavyfair.com</a></List.Item>
      </List>
    </div>
    <p>
      Currently, I'm unemployed and looking for interesting projects. If you have something for me, feel free to contact me via social networks below.
      There is <a rel="noopener noreferrer" target="_blank" href={resume}>my resume.</a>
    </p>
    <h4 className={classes.heading}>My skills</h4>
    <p>
      HTML, CSS, JS, React, Redux, Gatsby.js, D3.js.
    </p>
    <p>
      Sometimes I close my code editor and go to take <a rel="noopener noreferrer" target="_blank" href="https://500px.com/salad_nights">photos on film,</a>
      make <a rel="noopener noreferrer" target="_blank" href="https://www.mixcloud.com/andrey-ivanov19/">mixtapes for my wife</a> or go on a weird journey and then <a rel="noopener noreferrer" target="_blank" href="https://journal.tinkoff.ru/work_exchange/">write about it.</a>
      {/*Formerly I played punk in different bands and we even recorded something. One day I'll share it.*/}
    </p>
  </Layout>
);

export default IndexPage