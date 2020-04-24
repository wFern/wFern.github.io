import React, {Component} from 'react'
import * as d3 from "d3"
import { geoPath } from "d3-geo"
import { mesh } from "topojson-client"
import trackData1 from "../../data/track1"
import trackData2 from "../../data/track2"
import classes from "./index.module.scss"

const CITIES_DATA1 = [
  {
    label: 'Калининград',
    lat: 54.7,
    long: 20.5
  },
  {
    label: 'Мальборк',
    lat: 54.03,
    long: 19.03
  },
  {
    label: 'Валч',
    lat: 53.27,
    long: 16.48
  },
  {
    label: 'Берлин',
    lat: 52.52,
    long: 13.41
  },
  {
    label: 'Магдебург',
    lat: 52.14,
    long: 11.62
  },
  {
    label: 'Ганновер',
    lat: 52.38,
    long: 9.72
  },
  {
    label: 'Амстердам',
    lat: 52.37,
    long: 4.9
  },
];

const CITIES_DATA2 = [
  {
    label: 'Копенгаген',
    lat: 55.68,
    long: 12.57
  },
  {
    label: 'Хельсингборг',
    lat: 56.07,
    long: 12.69
  },
  {
    label: 'Йёнчёпинг',
    lat: 57.77,
    long: 14.16
  },
  {
    label: 'Норрчёпинг',
    lat: 58.6,
    long: 16.18
  },
  {
    label: 'Стокгольм',
    lat: 59.30,
    long: 17.98
  },
];

  class RouteScroller extends Component {

  state = {
    track: null,
    trackData: [],
    trackPosition: null,
    totalLength: 0,
    calcTrackPosition: 0,
    citiesData: [],
  };

  setTrackRef = element => {
    this.track = element;
  };

  projection1(){
    return d3.geoMercator()
      .scale(this.props.width * 5)
      .translate([this.props.width / 2, this.props.height / 2])
      .center([-39.5, 38.5])
      .rotate([0, 0, 50])
  }
  projection2(){
    return d3.geoMercator()
      .scale(this.props.width * 7)
      .translate([this.props.width / 2, this.props.height / 2])
      .center([-27.6, 53.5])
      .rotate([0, 0, 30])
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    let totalLength = d3.select(this.track).node().getTotalLength();
    if(this.state.track !== this.props.track || prevProps.width !== this.props.width){
      let trackData = null;
      let citiesData = null;
      let path = null;
      switch (this.props.track) {
        case 1:
          trackData = trackData1;
          citiesData = CITIES_DATA1;
          path = geoPath().projection(this.projection1());
          break;
        case 2:
          trackData = trackData2;
          citiesData = CITIES_DATA2;
          path = geoPath().projection(this.projection2());
          break;
        default:
          trackData = [];
      }

      const d = path(mesh(trackData, trackData.objects[`track${this.props.track}`]));
      this.setState({
        track: this.props.track,
        trackData: d,
        citiesData: citiesData,
      });
    }
    if(this.props.trackPosition !== this.state.trackPosition || this.state.totalLength !== totalLength){
      this.setState({
        totalLength: totalLength,
        calcTrackPosition: totalLength - (totalLength / 100) * this.props.trackPosition,
        trackPosition: this.props.trackPosition,
      });
    }
  }

  render(){
    return (
      <svg
        id="routeScroller"
        width={this.props.width}
        height={this.props.height}
      >
        <path
          ref={this.setTrackRef}
          d={this.state.trackData}
          className={classes.track}
          strokeDasharray={this.state.totalLength}
          strokeDashoffset={this.state.calcTrackPosition}
        />
        {
          this.state.citiesData.map((d,i) => {
            let projectionVal = (this.state.track === 1 ? this.projection1() : this.projection2())([d.long, d.lat]);
            let projectionValForLabelX = (this.state.track === 1 ? this.projection1() : this.projection2())([d.long - 0.2, d.lat]);
            let projectionValForLabelY = (this.state.track === 1 ? this.projection1() : this.projection2())([d.long, d.lat + 0.2]);
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
                  dx={ projectionValForLabelX[0] }
                  dy={ projectionValForLabelY[1] }
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