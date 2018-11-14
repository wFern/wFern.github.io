import React from 'react'
import PropTypes from 'prop-types'

import { geoMercator, geoPath } from "d3-geo"
import { feature, mesh } from "topojson-client"

import { Link } from "react-scroll"

import mapData from "../../data/route_map"
import trackData1 from "../../data/track1"
import trackData2 from "../../data/track2"

import classes from './index.module.scss'

class RouteMap extends React.Component {

  state = {
    mapData: [],
    trackData1: [],
    trackData2: [],
    citiesData: [
      {
        label: <Link to="kaliningrad" smooth={true} offset={-20} className={classes.link}>Калининград</Link>,
        lat: 54.7,
        long: 20.5
      },
      {
        label: <Link to="malbork" smooth={true} offset={-20} className={classes.link}>Мальборк</Link>,
        lat: 54.03,
        long: 19.03
      },
      {
        label: <Link to="walcz" smooth={true} offset={-20} className={classes.link}>Валч</Link>,
        lat: 53.27,
        long: 16.48
      },
      {
        label: <Link to="berlin" smooth={true} offset={-20} className={classes.link}>Берлин</Link>,
        lat: 52.52,
        long: 13.41
      },
      {
        label: <Link to="amsterdam" smooth={true} offset={-20} className={classes.link}>Амстердам</Link>,
        lat: 52.37,
        long: 4.9
      },
      {
        label: <Link to="copenhagen" smooth={true} offset={-20} className={classes.link}>Копенгаген</Link>,
        lat: 55.68,
        long: 12.57
      },
      {
        label: <Link to="jonkoping" smooth={true} offset={-20} className={classes.link}>Йёнчёпинг</Link>,
        lat: 57.77,
        long: 14.16
      },
      {
        label: <Link to="norrkoping" smooth={true} offset={-20} className={classes.link}>Норрчёпинг</Link>,
        lat: 58.6,
        long: 16.18
      },
      {
        label: <Link to="stockholm" smooth={true} offset={-20} className={classes.link}>Стокгольм</Link>,
        lat: 59.30,
        long: 18.02
      },
    ]
  };

  projection(){
    if (typeof window !== 'undefined'){
      if(window.innerHeight > window.innerWidth){
        return geoMercator()
          .scale(this.props.width * 2.5)
          .translate([ this.props.width/2.1, this.props.height*0.4 ])
          .center([14.2, 56.88]);
      } else {
        return geoMercator()
          .scale(this.props.height * 3.6)
          .translate([ this.props.width/2, this.props.height*0.4 ])
          .center([13.06, 56.88]);
      }
    }
  }

  componentDidMount(){
    this.setState({
      mapData: feature(mapData, mapData.objects.route_map).features,
      trackData1: mesh(trackData1, trackData1.objects.track1),
      trackData2: mesh(trackData2, trackData2.objects.track2),
    })
  }

  render() {
    return (
      <svg width={ this.props.width } height={ this.props.height }>
        <g className="countries">
          {
            this.state.mapData.map((d,i) => (
              <path
                key={ `path-${ i }` }
                d={ geoPath().projection(this.projection())(d) }
                className={classes.land}
              />
            ))
          }
        </g>
        <path
          d={geoPath().projection(this.projection())(this.state.trackData1)}
          className={classes.track}
          fill="none"
        />
        <path
          d={geoPath().projection(this.projection())(this.state.trackData2)}
          className={classes.track}
          fill="none"
        />
        {
          this.state.citiesData.map((d,i) => {
            if (typeof this.projection() === 'function') {
              let projectionVal = this.projection()([d.long, d.lat]);
              let projectionValForLabel1 = this.projection()([d.long - 0.85, d.lat]);
              let projectionValForLabel2 = this.projection()([d.long, d.lat + 0.15]);
              return (
                <g className="city" key={ `g-${ i }` }>
                  <circle
                    cx={ projectionVal[0] }
                    cy={ projectionVal[1] }
                    r={ 4 }
                    className={classes.cityMarkOuter}
                  />
                  <circle
                    cx={ projectionVal[0] }
                    cy={ projectionVal[1] }
                    r={ 2 }
                    className={classes.cityMarkInner}
                  />
                  <text
                    dx={ projectionValForLabel1[0] }
                    dy={ projectionValForLabel2[1] }
                    className={classes.cityLabel}
                  >
                    {d.label}
                  </text>
                </g>
              )
            }
            return null;
          })
        }
      </svg>
    )
  }
}

RouteMap.propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
};

export default RouteMap;