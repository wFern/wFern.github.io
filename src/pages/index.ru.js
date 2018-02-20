import React from 'react'
import Link from 'gatsby-link'
import { Grid, Image } from 'semantic-ui-react'
import PersonalPic from '../assets/img/personal-pic.jpg'

const IndexPage = () => (
    <div>
        <Grid columns={2} verticalAlign='middle' centered>
            <Grid.Row>
                <Grid.Column>
                    <h1>О себе</h1>
                    <p>Привет.</p>
                    <p>Меня зовут Андрей и, в основном, я программист.</p>
                    <p>Так же я интересуюсь музыкой, велосипедами и еще некоторыми вещами.</p>
                </Grid.Column>
                <Grid.Column>
                    <Image src={PersonalPic} size='small' circular/>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </div>
)

export default IndexPage
