import React from 'react';

import RouteMap from '../components/RouteMap';
import Gallery from '../components/Gallery';

class SummersidePage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.containerTop = null;

        this.setContainerTopRef = element => {
            this.containerTop = element;
        };

        this.state = {
            containerTopWidth: 0,
            containerTopHeight: 0,
        }
    }

    componentDidMount(){
        window.addEventListener('resize', this.resizeMap);
        this.resizeMap();
    }
    componentWillUnmount(){
        window.removeEventListener('resize', this.resizeMap);
    }

    resizeMap = () => {
        const containerTopNode = this.containerTop;
        this.setState({
            containerTopWidth: containerTopNode.clientWidth,
            containerTopHeight: containerTopNode.clientHeight,
        });
    };

    render(){
        return (
            <div
                style={{
                    width: '100%',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100vh',
                        overflow: 'hidden'
                    }}
                    ref={this.setContainerTopRef}
                >
                    <div
                        style={{
                            position: 'absolute',
                            top: '10%',
                            left: '5%'
                        }}
                    >
                        <h2>Summerside</h2>
                        <p>
                            Двух этапное велопутешествие по Европе. <br/>
                            2000 км, 24 дня езды, &#8734; впечатлений.
                        </p>
                    </div>
                    <RouteMap
                        width={this.state.containerTopWidth}
                        height={this.state.containerTopHeight}
                    />
                </div>
                <Gallery/>
            </div>

        )
    }
}

export default SummersidePage;