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
                    backgroundColor: '#63806C',
                    color: '#FCECC3'
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100vh',
                        overflow: 'hidden',
                        backgroundColor: '#3D5958',
                        boxShadow: 'inset 2px -30px 15px -15px rgba(99,128,108,1)'
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
                            Двухэтапное велопутешествие по Европе. <br/>
                            2000 км, 24 дня езды, &#8734; впечатлений.
                        </p>
                    </div>
                    <RouteMap
                        width={this.state.containerTopWidth}
                        height={this.state.containerTopHeight}
                    />
                </div>
                <section
                  style={{
                    maxWidth: '650px',
                    margin: '0 auto'
                  }}
                >
                  <p>
                    Мы - Алена и Андрей. Летом 2018 мы отправились с велосипедами в Европу.
                    Путешествие заняло 44 дня, 24 из которых - в седле. Заезд разделился на
                    два этапа, Калининград - Амстердам и Копенгаген - Стокгольм.
                    В сумме на велосипедах мы проехали более 2000 км.
                    Здесь наша короткая история с маршрутом, фотографиями и некоторыми комментариями.
                  </p>
                  <p>
                    Идея о длительном велопутешествии возникла давно. Но
                    окончательное решение было принято за несколько недель до старта.
                    По-этому все сборы проходили в короткие сроки.
                  </p>
                  <p>
                    У нас не было какой-то специальной физической подготовки.
                    До отъезда мы катались нерегулярно.
                  </p>
                  <p>
                    Мы плохо представляли, как правильно снаряжать велосипед
                    для длительной поездки. В <a target="_blank" href="https://skjegg.blogspot.com/search/label/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D0%B1%D0%B0%D0%B9%D0%BA%D0%BF%D0%B0%D0%BA%D0%B8%D0%BD%D0%B3">блоге Skjegg</a> мы нашли много
                    местных бюджетных производителей велосипедного снаряжения и
                    какие варианты загрузок бывают. В итоге получилось вот так
                    <img
                      style={{width: '100%', marginTop: '1em'}}
                      src="https://farm2.staticflickr.com/1873/42823039980_276890f97c_h.jpg"
                      alt="bicycle bikepacking"/>
                  </p>
                  <p>
                    <strong>Велосипеды</strong>: Verenti Substance Sora / Kona Rove<br/>
                    <strong>Подседельные сумки</strong>: <a target="_blank" href="https://vk.com/kravetsbikepacking">Kravets</a> / <a target="_blank" href="https://vk.com/uraltour">Uraltour</a><br/>
                    <strong>Нарульные сумки и стаканы</strong>: <a target="_blank" href="https://malpa.by/">Malpa</a><br/>
                    <strong>Передние багажники</strong>: <a target="_blank" href="https://vk.com/bagajnikdlyavelosipeda">Bazhov</a><br/>
                    <strong>Сумки на багажник</strong>: <a target="_blank" href="http://rackbag.ru/">RackBag</a><br/>
                    <strong>Поясные сумки</strong>: <a target="_blank" href="http://zulufixed.com/">Zulu</a> / <a target="_blank" href="https://vk.com/graphitemade">Graphit</a><br/>
                  </p>
                  <p>
                    Палатка, коврики и остальное туристическое снаряжение практически полностью собрано в Декатлоне.
                  </p>
                  <p>
                    Для упаковки велосипедов и перевозки в поезде мы использовали мешки для хранения покрышек
                    (обычные мусорные, но с широкой горловиной) и пищевую пленку.
                    Вот так мы отправились на поезде в Калининград
                    <img
                      style={{width: '100%', marginTop: '1em'}}
                      src="https://farm2.staticflickr.com/1899/43723828275_4ada23aa71_h.jpg"
                      alt="packed bicycles"/>
                  </p>
                  <p>
                    После нескольких часов на вокзале велосипеды были собраны и началось.
                  </p>
                </section>
                <Gallery/>
            </div>

        )
    }
}

export default SummersidePage;