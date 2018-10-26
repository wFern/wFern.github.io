import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { navigate } from "gatsby-link"
import { Icon, Grid, Container, Menu, Dropdown } from 'semantic-ui-react'
import { getCurrentLangKey, getUrlForLang, getLangs } from 'ptz-i18n'
import 'semantic-ui-css/semantic.min.css'
import classes from './index.module.scss'

const languages = require('../../data/languages');

const Header = (props) => {
  const langOptions = props.langs.map(lang => {
    let active = false;
    if(lang.selected){
      active = true
    }
    return ({
      text: lang.langKey,
      value: lang.langKey,
      active: active
    });
  });
  const langs = (
    <span className={classes.CustomDropdown}>
      <Icon name='language' size='large'/>{' '}
      <Dropdown
        inline
        options={langOptions}
        defaultValue={props.langKey}
        onChange={(e, data) => {navigate(`/${data.value}/`)}}
      />
    </span>
  );

  return (
    <header className={classes.Header}>
      <Container>
        <Grid centered divided='vertically'>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Link
                to={`/${props.langKey}/`}
                className={classes.Logo}
              >
                salad_nights
              </Link>
            </Grid.Column>
            <Grid.Column>
              <Menu secondary size='large'>
                {/*<Menu.Item>*/}
                    {/*<Link exact to={`/${props.langKey}/`} activeClassName="active">Blog</Link>*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item>*/}
                    {/*<Link to={`/${props.langKey}/summerside`} activeClassName="active">Summerside</Link>*/}
                {/*</Menu.Item>*/}
                {/*<Menu.Item>*/}
                    {/*<Link to={`/${props.langKey}/about`} activeClassName="active">About</Link>*/}
                {/*</Menu.Item>*/}
                <Menu.Menu position='right' size='small'>
                    {langs}
                </Menu.Menu>
              </Menu>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </header>
  )
};

const Footer = () => (
  <footer
    style={{
        padding: '1em 1rem'
    }}
  >
    <Container>
      <Grid centered divided='vertically'>
        <Grid.Row>
          <a href="https://www.facebook.com/salad.nights" target="_blank" rel="noopener noreferrer">
            <Icon circular link name='facebook' size="large"/>
          </a>
          <a href="https://twitter.com/salad_nights" target="_blank" rel="noopener noreferrer">
            <Icon circular link name='twitter' size="large"/>
          </a>
          <a href="https://www.linkedin.com/in/andrei-tarasov" target="_blank" rel="noopener noreferrer">
            <Icon circular link name='linkedin' size="large"/>
          </a>
          <a href="https://github.com/saladNights" target="_blank" rel="noopener noreferrer">
            <Icon circular link name='github' size="large"/>
          </a>
          <a href="https://codepen.io/salad_nights/" target="_blank" rel="noopener noreferrer">
            <Icon circular link name='codepen' size="large"/>
          </a>
          <a href="https://bandcamp.com/salad_nights/" target="_blank" rel="noopener noreferrer">
            <Icon circular link name='bandcamp' size="large"/>
          </a>
          <a href="https://www.mixcloud.com/andrey-ivanov19/" target="_blank" rel="noopener noreferrer">
            <Icon circular link name='mixcloud' size="large"/>
          </a>
          <a href="https://500px.com/salad_nights" target="_blank" rel="noopener noreferrer">
            <Icon circular link name='500px' size="large"/>
          </a>
          <a href="https://www.strava.com/athletes/salad_nights" target="_blank">
            <Icon circular link name='strava' size="large"/>
          </a>
        </Grid.Row>
      </Grid>
    </Container>
  </footer>
);

const Layout = ({ children, location, data }) => {
  const url = location.pathname;
  const {langs, defaultLangKey} = languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <div className={classes.Wrapper}>
      <Helmet
        title="salad_nights"
        meta={[
          {name: 'description', content: 'Personal website about programing, music, travels, photo etc'},
          {name: 'keywords', content: 'salad_nights, programing, cycling, music, photo'},
          {name: 'google-site-verification', content: `${data.site.siteMetadata.googleVerificationCode}`}
        ]}
      />
      <Header langs={langsMenu} langKey={langKey}/>
      <main className={classes.ContentContainer}>
        <Container>
          {children}
        </Container>
      </main>
      <Footer/>
    </div>
  )
};

export default props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site{
          siteMetadata{
            googleVerificationCode
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props}/>}
  />
)

Layout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object
};

Header.propTypes = {
  langs: PropTypes.array,
  langKey: PropTypes.string,
};