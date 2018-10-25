import React from 'react'
import Layout from '../components/layouts/index'
import { Grid, Image, Responsive } from 'semantic-ui-react'
import PersonalPic from '../assets/img/personal-pic.jpg'
import resume from '../data/Andrei Tarasov. Front-end Developer Resume.pdf'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <Grid columns={1} centered verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column>
          <h1>Hello</h1>
          <Responsive minWidth={480}>
            <Image src={PersonalPic} size='small' rounded floated='right'/>
          </Responsive>
          <p>My name is Andrey and mostly I'm a web developer located in Bryansk, Russia.</p>
          <Responsive as="p" maxWidth={479}>
            <Image src={PersonalPic} size='small' rounded centered bordered/>
          </Responsive>
          <p>
            During my last years in university, I became interested in programming.
            I've worked in different fields of web developing for 5 years.
            Last two years my passions are front-end developing and data visualization.
          </p>
          <p>
            Sometimes I close my code editor and go to take <a rel="noopener noreferrer" target="_blank" href="https://500px.com/salad_nights">photos on film</a>,
            make <a rel="noopener noreferrer" target="_blank" href="https://www.mixcloud.com/andrey-ivanov19/">mixtapes for my wife</a> or ride a bicycle.
            Or go on a weird journey and then <a rel="noopener noreferrer" target="_blank" href="https://journal.tinkoff.ru/work_exchange/">write about it</a>.
            Formerly I played punk in different bands and we even recorded something. One day I'll share it.
          </p>
          <p>
            Currently, I'm unemployed and looking for interesting projects. If you have something for me, feel free to contact me via social networks below.
            There is <a rel="noopener noreferrer" target="_blank" href={resume}>my resume</a>.
          </p>
          <h4>My skills and what I like to work with:</h4>
          <p>
            HTML, CSS, JS, React, Redux, Gatsby.js, D3.js.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
);

export default IndexPage
