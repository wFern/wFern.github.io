import React from 'react'
import PropTypes from 'prop-types'

import { geoMercator, geoPath } from "d3-geo"
import { feature } from "topojson-client"

import { Link } from "react-scroll"

import mapData from "../../data/route_map.json"
import trackData from "../../data/tracks.json"
import trackData2 from "../../data/tracks2.json"

import classes from './index.module.scss'

class RouteMap extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
          mapData: [],
          trackData: [],
          trackData2: [],
          citiesData: [
            {
                label: <Link to="kaliningrad" smooth={true} offset={-20} className={classes.link}>Kaliningrad</Link>,
                lat: 54.7,
                long: 20.5
            },
            {
              label: <Link to="malbork" smooth={true} offset={-20} className={classes.link}>Malbork</Link>,
                lat: 54.03,
                long: 19.03
            },
            {
              label: <Link to="walcz" smooth={true} offset={-20} className={classes.link}>Wałcz</Link>,
                lat: 53.27,
                long: 16.48
            },
            {
              label: <Link to="berlin" smooth={true} offset={-20} className={classes.link}>Berlin</Link>,
                lat: 52.52,
                long: 13.41
            },
            {
              label: <Link to="amsterdam" smooth={true} offset={-20} className={classes.link}>Amsterdam</Link>,
                lat: 52.37,
                long: 4.9
            },
            {
              label: <Link to="copenhagen" smooth={true} offset={-20} className={classes.link}>Copenhagen</Link>,
                lat: 55.68,
                long: 12.57
            },
            {
                label: <Link to="jonkoping" smooth={true} offset={-20} className={classes.link}>Jönköping</Link>,
                lat: 57.77,
                long: 14.16
            },
            {
                label: <Link to="norrkoping" smooth={true} offset={-20} className={classes.link}>Norrköping</Link>,
                lat: 58.6,
                long: 16.18
            },
            {
              label: <Link to="stockholm" smooth={true} offset={-20} className={classes.link}>Stockholm</Link>,
                lat: 59.30,
                long: 18.02
            },
          ]
      };

      this.projection = this.projection.bind(this);
    }

    projection(){
      if (typeof window !== 'undefined'){
        if(window.innerHeight > window.innerWidth){
          return geoMercator()
            .translate([ this.props.width/2.1, this.props.height*0.4 ])
            .scale(this.props.width * 2.7)
            .center([13.06, 56.88]);
        } else {
          return geoMercator()
            .translate([ this.props.width/2, this.props.height*0.4 ])
            .scale(this.props.height * 3.6)
            .center([13.06, 56.88]);
        }
      }
    }

    componentDidMount(){
        if(mapData){
            this.setState({
                mapData: feature(mapData, mapData.objects.route_map).features,
            })
        }
        if(trackData){
            this.setState({
                trackData: feature(trackData, trackData.objects.episode1).features,
            })
        }
        if(trackData2){
            this.setState({
                trackData2: feature(trackData2, trackData2.objects.episode2).features,
            })
        }
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
                <g className="tracks">
                    {
                        this.state.trackData.map((d,i) => (
                            <path
                                key={ `path-${ i }` }
                                d={ geoPath().projection(this.projection())(d) }
                                className={classes.track}
                                fill="none"
                            />
                        ))
                    }
                </g>
                <g className="tracks">
                    {
                        this.state.trackData2.map((d,i) => (
                            <path
                                key={ `path-${ i }` }
                                d={ geoPath().projection(this.projection())(d) }
                                className={classes.track}
                                fill="none"
                            />
                        ))
                    }
                </g>
                {
                  this.state.citiesData.map((d,i) => {
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