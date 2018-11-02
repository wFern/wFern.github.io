import React from 'react'
import { CSSTransition } from 'react-transition-group'
import Layout from '../../components/layouts/summerside/summerside'
import RouteMap from '../../components/RouteMap/index'
import Gallery from '../../components/Gallery/index'
import classes from './summerside.module.scss'

class SummersidePage extends React.PureComponent {

  state = {
    containerTopWidth: 0,
    containerTopHeight: 0,
    showGear: false
  };

  setContainerTopRef = element => {
    this.containerTop = element;
  };

  componentDidMount(){
    window.addEventListener('resize', this.resizeMap);
    this.resizeMap();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.resizeMap);
  }

  showGearHandler = () => {
    this.setState( prevState => ({
      showGear: !prevState.showGear
    }));
  };

  resizeMap = () => {
    const containerTopNode = this.containerTop;
    if(window !== undefined){
      this.setState({
        containerTopWidth: window.innerWidth,
        containerTopHeight: containerTopNode.clientHeight,
      });
    }
  };

  render(){
    return (
      <Layout location={this.props.location}>
        <main>
          <div className={classes.mapWrapper} ref={this.setContainerTopRef}>
            <div className={classes.mapHeader}>
              <h2>
                Двухэтапное велопутешествие по&nbsp;Европе.
              </h2>
              <h3>
                2000&nbsp;км, 24&nbsp;дня&nbsp;езды, &#8734;&nbsp;впечатлений.
              </h3>
            </div>
            <RouteMap
              width={this.state.containerTopWidth}
              height={this.state.containerTopHeight}
            />
          </div>
          <div className={classes.wrapper}>
            <p>
              Мы - Алена и Андрей. Летом 2018 мы отправились с велосипедами в Европу. Путешествие заняло 44 дня, 24 из которых - в седле. Заезд разделился на два этапа, Калининград - Амстердам и Копенгаген - Стокгольм. В сумме на велосипедах мы проехали более 2000 км. Здесь наша короткая история с маршрутом, фотографиями и некоторыми комментариями.
            </p>
            <p>
              Идея о длительном велопутешествии возникла давно. Но окончательное решение было принято за несколько недель до старта. По-этому все сборы проходили в короткие сроки.
            </p>
            <p>
              У нас не было какой-то специальной физической подготовки. До отъезда мы катались нерегулярно.
            </p>
            <p>
              Две недели сборов ушли на чтение десятков статей о велопутешествиях; выбор, заказ и установку снаряжения; диагностику велосипедов. <br/>
              Мы плохо представляли, как правильно снаряжать велосипед
              для длительной поездки. В <a target="_blank" href="https://skjegg.blogspot.com/search/label/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D0%B1%D0%B0%D0%B9%D0%BA%D0%BF%D0%B0%D0%BA%D0%B8%D0%BD%D0%B3">блоге Skjegg</a> есть список местных бюджетных производителей велосипедного снаряжения и примеры вариантов загрузки. <br/>
            </p>
            <div>
              Другие ресурсы и статьи, которые помогли со сборами
              <ul
                style={{listStyle: 'none'}}
              >
                <li>
                  <a href="http://www.bikepacking.com/">Bikepacking.com</a> - всё о байкпакинге
                </li>
                <li>
                  <a href="https://bicycletouringpro.com/cheap-bicycle-touring-gear-sample-pack-list/">Bicycle Touring Pro</a> - список вещей для “классического” велотура
                </li>
                <li>
                  <a href="https://www.theadventurejunkies.com/essential-gear-bicycle-touring/">The Adventure Junkies</a> - еще один список вещей. Полезно прочитать несколько и сравнить
                </li>
                <li>
                  <a href="https://tomsbiketrip.com/cycle-touring-kit-list/">Tom's Bike Trip</a> - подробный персональный список снаряжения со ссылками
                </li>
                <li>
                  <a href="https://www.adventurecycling.org/resources/blog/seven-tips-for-bicycle-touring-on-a-budget/">Adventure Cycling Association</a> - о экономии в путешествии
                </li>
              </ul>
            </div>
            <p>
              Вот что получилось
              <img
                style={{width: '100%', marginTop: '1em'}}
                src="https://farm2.staticflickr.com/1953/45051957631_60d12a3e33_h.jpg"
                alt="bicycle bikepacking"
              />
              <img
                style={{width: '100%', margin: '1em 0'}}
                src="https://farm2.staticflickr.com/1918/30116672827_14e27f256f_h.jpg"
                alt="bicycle bikepacking"
              />
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
            <div className="spoiler">
              <div
                className="spoiler__title"
                onClick={this.showGearHandler}
              >
                {this.state.showGear ? 'Скрыть' : 'Показать'} полный список вещей
              </div>
              <CSSTransition
                in={this.state.showGear}
                timeout={500}
                unmountOnExit
                classNames="spoiler__body"
              >
                {state => (
                  <div className="spoiler__body">
                    <p>
                      Инструменты: шестигранники, лопатки, bike-hand, латки, насос, семейник,
                      сухая смазка цепи, выжимка цепи, запасные болты, перчатки, мультитул
                    </p>
                    <p>Детали и запчасти: камеры ×2, свет + батареи, велозамок, цепь,
                      тросик, изолента, запасные спицы, пластиковые хомуты, карабины
                    </p>
                    <p>
                      Пакинг: сумки передние, сумка нарульная, сумка подседельная,
                      кормушки, сумки поясные, инструменталка, гермомешок на багажник,
                      езинки для багажника, бутылки, мешки для упаковки велосипедов в поезд
                    </p>
                    <p>
                      Снаряжение: светоотражающие жилеты, дождевик, спальный мешок,
                      палатка, коврик, фольгированное одеяло, горелка, котелок, кружки,
                      ложки, налобный фонарик, пакеты, зажигалка + спички,
                      нитки и иголки, фастексы, замки, нож, перчатки, шлем
                    </p>
                    <p>
                      Вещи: солнцезащитные очки, крем от загара, футболки х2,
                      джерси х2, джоггеры, джинсы, шорты х2 + быстросохнущие,
                      носки + трусы х4, кофта, шапка, бафф, тапки, полотенце,
                      тетрадка + ручка, футляр для очков, авоська
                    </p>
                    <p>
                      Электроника: лэптоп+зарядка, телефоны+провода, флешки,
                      два usb адаптера, powerbank+провод, наушники, тройник,
                      фотоаппарат + зарядка + батареи
                    </p>
                    <p>
                      Документы: паспорта (внутренние+загран),
                      международные водительские права, медицинские страховки,
                      билеты на поезд, выписки с карт
                    </p>
                    <p>
                      Гигиена: зубная щетка, зубная паста, деттол,
                      влажные салфетки, сухие салфетки
                    </p>
                    <p>
                      Аптечка: уголь, противовоспалительное, бинты,
                      эластичный бинт, пластырь, перекись/зеленка/йод, витамины
                    </p>
                  </div>
                )}
              </CSSTransition>
            </div>
            <p>
              Для упаковки велосипедов и перевозки в поезде мы использовали мешки для хранения покрышек
              (обычные мусорные, но с широкой горловиной) и пищевую пленку.
              Вот так мы отправились на поезде в Калининград
              <img
                style={{display: 'block', width: '75%', margin: '1em auto'}}
                src="https://farm2.staticflickr.com/1899/43723828275_7709b7573f_h.jpg"
                alt="packed bicycles"/>
            </p>
            <p>
              После нескольких часов на вокзале велосипеды были собраны и началось.
            </p>
          </div>
          <Gallery/>
          <section>
            <p>
              Мы не хотели показать "как надо". Мы хотели показать "как может быть".
            </p>
            <p>Больше фотографий дорог, полей и ветрогенераторов в альбоме на <a href="https://photos.app.goo.gl/3uWWih4ncY8uQAMw5">Google Photos</a></p>
          </section>
        </main>
      </Layout>
    )
  }
}

export default SummersidePage;