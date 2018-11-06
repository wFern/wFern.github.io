import React, {Component} from 'react'
import ReactDOM from "react-dom"
import { geoMercator, geoPath } from "d3"
import { feature } from "topojson-client"
import trackData from "../../data/tracks.json"
import classes from "./index.module.scss"


class RouteScroller extends Component {

  state = {
    trackData: [],
    citiesData: [
      {
        label: 'Kaliningrad',
        lat: 54.7,
        long: 20.5
      },
      {
        label: 'Malbork',
        lat: 54.03,
        long: 19.03
      },
      {
        label: 'Wałcz',
        lat: 53.27,
        long: 16.48
      },
      {
        label: 'Berlin',
        lat: 52.52,
        long: 13.41
      },
      {
        label: 'Hannover',
        lat: 52.38,
        long: 9.72
      },
      {
        label: 'Amsterdam',
        lat: 52.37,
        long: 4.9
      },
      // {
      //   label: <a href="#" className={classes.link}>Copenhagen</a>,
      //   lat: 55.68,
      //   long: 12.57
      // },
      // {
      //   label: 'Jönköping',
      //   lat: 57.77,
      //   long: 14.16
      // },
      // {
      //   label: 'Norrköping',
      //   lat: 58.6,
      //   long: 16.18
      // },
      // {
      //   label: <a href="#" className={classes.link}>Stockholm</a>,
      //   lat: 59.30,
      //   long: 18.02
      // },
    ]
  };

  projection(){
    console.log(this.props.width, this.props.height);
    return geoMercator()
      .scale(2500)
      .translate([this.props.width / 2, this.props.height / 2])
      .center([-41, 38.5])
      .rotate([0, 0, 50])
  }

  componentDidMount(){
    if(trackData){
      this.setState({
        trackData: feature(trackData, trackData.objects.episode1).features,
      })
    }
  }

  render(){
    return (
      <svg
        id="routeScroller"
        width={this.props.width}
        height={this.props.height}
      >
        <g className="tracks">
          {
            this.state.trackData.map((d,i) => (
              <path
                key={ `path-${ i }` }
                d={ geoPath().projection(this.projection())(d) }
                className={classes.track}
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
    );
  }
}

export default RouteScroller