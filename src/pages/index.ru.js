import React from 'react'
import Link from 'gatsby-link'
import { Grid, Image } from 'semantic-ui-react'
import PersonalPic from '../assets/img/personal-pic.jpg'

const IndexPage = () => (
    <div>
        <Grid columns={2} verticalAlign='middle' centered>
            <Grid.Row>
                <Grid.Column textAlign={'right'}>
                    <h1>Привет</h1>
                    <p>Меня зовут Андрей и в основном я web-разработчик.</p>
                </Grid.Column>
                <Grid.Column>
                    <Image src={PersonalPic} size='small' circular/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

export default IndexPage
