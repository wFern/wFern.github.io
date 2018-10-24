import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { push } from "gatsby-link"
import { Icon, Grid, Container, Menu, Dropdown } from 'semantic-ui-react'
import { getCurrentLangKey, getUrlForLang, getLangs } from 'ptz-i18n'
import 'semantic-ui-css/semantic.min.css'
import classes from './index.module.scss'

const languages = require('../../data/languages');

const Header = (props) => {

    // const langs = props.langs.map(lang => {
    //     return (
    //         <Menu.Item>
    //             <Link key={lang.link} to={lang.link} className={classes.LangSelectorItem + ' ' + (lang.selected ? classes.active : '')}>
    //                 <span>{lang.langKey}</span>
    //             </Link>
    //         </Menu.Item>
    //     )
    // });
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
      <span>
        <Icon name='language' size='large'/>{' '}
        <Dropdown
          inline
          options={langOptions}
          defaultValue={langOptions[0].value}
          onChange={(e, data) => {push(`/${data.value}/`)}}
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
                    <a href="https://www.facebook.com/andrey.wrd.frn" target="_blank">
                        <Icon circular link name='facebook square'/>
                    </a>
                    <a href="https://500px.com/witheredfern" target="_blank">
                        <Icon circular link name='500px'/>
                    </a>
                    <a href="https://codepen.io/wFern/" target="_blank">
                        <Icon circular link name='codepen'/>
                    </a>
                    <a href="https://github.com/wFern" target="_blank">
                        <Icon circular link name='github'/>
                    </a>
                    <a href="https://bandcamp.com/w_fern/" target="_blank">
                        <Icon circular link name='bandcamp'/>
                    </a>
                    <a href="https://www.mixcloud.com/andrey-ivanov19/" target="_blank">
                        <Icon circular link name='mixcloud'/>
                    </a>
                    <a href="https://www.strava.com/athletes/brn_fern" target="_blank">
                        <Icon circular link name='strava'/>
                    </a>
                </Grid.Row>
            </Grid>
        </Container>
    </footer>
);

const Layout = ({ children, location }) => {

    const url = location.pathname;
    const {langs, defaultLangKey} = languages;
    const langKey = getCurrentLangKey(langs, defaultLangKey, url);
    const homeLink = `/${langKey}/`;
    const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

    return (
        <div className={classes.Wrapper}>
            <Helmet
                title="wFern"
                meta={[
                    {name: 'description', content: 'Personal website about programing, music, photo etc'},
                    {name: 'keywords', content: 'wfern, programing, music, photo'},
                ]}
            />
            <Header langs={langsMenu} langKey={langKey}/>
            <div
                style={{
                    padding: '1.45rem 1.0875rem',
                    flex: 1,
                    color: '#000',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Container>
                    {children}
                </Container>
            </div>
            <Footer/>
        </div>
    )
}

Layout.propTypes = {
  children: PropTypes.object,
  location: PropTypes.object
};

Header.propTypes = {
    langs: PropTypes.array,
    langKey: PropTypes.string,
};

export default Layout;