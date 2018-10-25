import React from 'react'
import Layout from '../components/layouts/index'
import { Grid, Image, Responsive } from 'semantic-ui-react'
import PersonalPic from '../assets/img/personal-pic.jpg'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <Grid columns={1} centered verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column>
          <h1>Привет</h1>
          <Responsive minWidth={480}>
            <Image src={PersonalPic} size='small' rounded floated='right'/>
          </Responsive>
          <p>Меня зовут Андрей и в основном я web-разработчик.</p>
          <Responsive as="p" maxWidth={479}>
            <Image src={PersonalPic} size='small' rounded centered bordered/>
          </Responsive>
          <p>
            На последних курсах университета я заинтересовался программированием.
            С тех пор, около 5 лет, я работаю в разных сферах веб-разработки.
            Последние два года мой главный интерес - фронт-энд и визуализация данных.
          </p>
          <p>
            Иногда я закрываю редактор и иду <a rel="noopener noreferrer" target="_blank" href="https://500px.com/salad_nights">фотографировать на пленку</a>,
            делать <a rel="noopener noreferrer" target="_blank" href="https://www.mixcloud.com/andrey-ivanov19/">микстейпы для жены</a> или кататься на велосипеде.
            Отправляюсь в странные путешествия и потом <a rel="noopener noreferrer" target="_blank" href="https://journal.tinkoff.ru/work_exchange/">пишу об этом</a>.
            <br/>А раньше играл панк в нескольких группах и даже что-то записывал. Когда-нибудь поделюсь этим.
          </p>
          <p>
            Сейчас в поиске интересных проектов. Так что, если у вас есть что-то для меня, пишите в социалки внизу.
          </p>
          <h4>Мои навыки и с чем интересно работать сейчас:</h4>
          <p>
            HTML, CSS, JS, React, Redux, Gatsby.js, D3.js.
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Layout>
);

export default IndexPage