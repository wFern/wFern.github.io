import React from 'react';
import PropTypes from 'prop-types';

import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";

import mapData from "../../data/route_map.json";
import trackData from "../../data/tracks.json";
import trackData2 from "../../data/tracks2.json";

import './index.scss';

class RouteMap extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            mapData: [],
            trackData: [],
            trackData2: [],
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
                    label: 'Gorzów Wielkopolski',
                    lat: 52.73,
                    long: 15.23
                },
                {
                    label: 'Berlin',
                    lat: 52.52,
                    long: 13.41
                },
                {
                    label: 'Magdeburg',
                    lat: 52.14,
                    long: 11.62
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
                {
                    label: 'Copenhagen',
                    lat: 55.68,
                    long: 12.57
                },
                {
                    label: 'Helsingborg',
                    lat: 56.06,
                    long: 12.71
                },
                {
                    label: 'Jönköping',
                    lat: 57.77,
                    long: 14.16
                },
                {
                    label: 'Norrköping',
                    lat: 58.6,
                    long: 16.18
                },
                {
                    label: 'Stockholm',
                    lat: 59.32,
                    long: 18.07
                },
            ]
        }
    }

    projection() {
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
                                className="country"
                                // fill={ `rgba(38,50,56,${1 / this.state.mapData.length * i})` }
                                fill="rgb(104, 190, 222)"
                                stroke="#FFFFFF"
                                strokeWidth={ 0.5 }
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
                                className="track"
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
                                className="track"
                                fill="none"
                            />
                        ))
                    }
                </g>
                {
                    this.state.citiesData.map((d,i) => (
                        <g className="city" key={ `g-${ i }` }>
                            <circle
                                cx={ this.projection()([d.long, d.lat])[0] }
                                cy={ this.projection()([d.long, d.lat])[1] }
                                r={ 4 }
                                fill="#ffff66"
                                className="city__marker"
                            />
                            <text
                                dx={ this.projection()([d.long - 0.85, d.lat])[0] }
                                dy={ this.projection()([d.long, d.lat + 0.15])[1] }
                                fill="#000"
                                className="city__lable"
                            >
                                {d.label}
                            </text>
                        </g>
                    ))
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