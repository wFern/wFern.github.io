import React from 'react'
import {Link as GatsbyLink} from 'gatsby'
import ReactDOM from 'react-dom'
import { Link, animateScroll as scroll } from "react-scroll"
import { CSSTransition } from 'react-transition-group'
import { Grid, Sticky } from 'semantic-ui-react'
import VisibilitySensor from 'react-visibility-sensor'

import Layout from '../../components/layouts/summerside/summerside'
import RouteMap from '../../components/RouteMap/index'
import Gallery from '../../components/Gallery/index'
import RouteScroller from '../../components/RouteScroller'

import classes from './summerside.module.scss'

import introImg from '../../assets/img/pages/summerside/intro.jpg'

class SummersidePage extends React.PureComponent {

  state = {
    containerTopWidth: 0,
    containerTopHeight: 0,
    showGear: false,
    trackPosition: null,
    track: 1
  };

  elementVisible = (isVisible, trackPosition, track) => {
    if(isVisible){
      this.setState({
        trackPosition: trackPosition,
        track: track
      });
    }
  };

  comments = [
    {
      id: '42823041980',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 0, 1)}
          partialVisibility={true}
        >
          <div id="kaliningrad">
            <h4>Калининград</h4>
            <p>
              Чтобы стартовать со свежими силами, мы решили, что лучше переночевать в хостеле и выехать на следующее утро. Остаток дня мы просто гуляли по городу и в Плохом Охотнике(ссылка) нашли самый вкусный хэндмейд тофу.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '43723829485',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 8, 1)}
          partialVisibility={true}
        >
          <div>
            <h3>Польша</h3>
            <p>
              Мы собрали все, что писали в статьях о пересечении границы на велосипеде: фонари передние/задние, звонок, жилетка, шлемы конечно же. Ничего из этого не проверили. Более того, попросили открыть хотя бы одну из сумок и даже не заглянули в нее. Просто посмотрели документы, поставили штамп и пропустили.
            </p>
            <h4>Фромборк</h4>
            <p>Первый польский кемпинг. Здесь большой замок, могила Коперника и небольшой порт.</p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '29694624077',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 11, 1)}
          partialVisibility={true}
        >
          <div id='malbork'>
            <h4>Мальборк</h4>
            <p>
              Из-за дождя пришлось остановиться. Весь день мы провели в замке Мариенбург. Впечатляющее нагромождение красного кирпича площадью 20 га. История этого объекта слишком интересная и заслуживает отдельного рассказа. Начните с Википедии(ссылка на мариенбург)
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '42823050820',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 27.9, 1)}
          partialVisibility={true}
        >
          <div id='walcz'>
            <h4>Валч</h4>
            <p>
              Три дня в дороге и мы снова застряли. Дожди были слишком сильными и долгими, и мы не могли двигаться. Два дня укрывались от ливня с хостеле рядом с озером для байдарочников-олимпийцев. В Польше, как мы поняли, многие любят этот вид спорта/отдыха. Мы останавливались в нескольких специализированных кемпингах для байдарочников. И там всегда было много народа. Плавают большими группами, семьей, с детьми, по-всякому.
            </p>
            <p>
              Топ польской кухни - “пироги”. Они же вареники. Подают везде, стоит недорого, энергии хватает на пол дня минимум.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '44633251481',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 43.7, 1)}
          partialVisibility={true}
        >
          <div>
            <h3>Германия</h3>
            <p>
              Первая остановка в Германии шокировала. Мы нашли ночлег в кемпинг-деревне. По-моему там жила пара тысяч человек: вэны, дома на колесах, палатки. Было даже что-то вроде школы или детского лагеря.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '43914302014',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 50.55, 1)}
          partialVisibility={true}
        >
          <div id='berlin'>
            <h4>Берлин</h4>
            <p>
              Три дня мы гостили у нашего друга. Были здесь во второй раз, но хочется вернуться еще. Очень живой город. Всем кто интересуется стрит-артом, город и музей Urban Nation(ссылка) обязательны к посещению.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '44583236272',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 73.53, 1)}
          partialVisibility={true}
        >
          <div>
            <h4>Потсдам, Магдебург</h4>
            <p>
              Стало очень жарко. За три дня мы отвыкли от дороги и выбираться из Берлина было тяжеловато. Маршрут прилип к Среднегерманскому каналу и большую часть пути до Нидерландов мы двигались вдоль него. Наткнулись на Магдебургский водный мост(ссылка), редкое и необычное сооружение. Очень странно наблюдать, как большие баржи проплывают по мосту, а внизу еще одна река. На канале всегда было какое-то движение. И чтобы хоть как-то развлекаться в дороге, мы придумали гоняться за судами. Как railfans(ссылка), только на воде. Мы наблюдали много разных: коммерческие и строительные баржи, прогулочные катера, яхты. Люди путешествуют по каналам даже с личным автомобилем. Почти у всех на судах были собаки и велосипеды. Один из кемпингов стоял прямо на канале. Владелец оказался российским немцем. Он пустил нас в свой дом на колесах, включил первый канал и рассказал немного историй о переселении, русской мафии в Германии и как возникают эти кемпинг-деревни, которым мы удивлялись всю дорогу. Утром я конечно же посмотрел “Жить здорово”.
            </p>
            <p>
              В день, когда пошел дождь, мы обедали у озера, на котором стояла крепость. Её хозяин предложил нам зайти внутрь и переждать. Он угостил нас колой и решил провести небольшую экскурсию. Оказалось, что это настоящий замок с привидением. Хозяин крепости показал нам зал, где произошло убийство, и плитку на полу, где лежал труп женщины. Её дух теперь шастает по ночам в башне и издает страшные звуки. Этот мужик занимается восстановлением этого замка. По-началу его жена и дети поддерживали это начинание. Но после встречи с призраком, они больше не приезжают к нему в это место. А мужик привык.
            </p>
            <p>
              В пик жары у Алены случился тепловой удар. Не слишком опасное, но очень неприятное явление. Прикрывайте голову, пользуйтесь солнцезащитными кремами. А если вам прилетело - прячьтесь в тень и поспите несколько часов.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '42823070450',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 89.7, 1)}
          partialVisibility={true}
        >
          <div>
            <h3>Нидерланды</h3>
            <p>
              Кемпинг в Нидерландах почти в два раза дороже. Поэтому мы решили сделать марш-бросок и добраться до Амстердама, не останавливаясь больше на ночевку. Пришлось проехать за день почти 150 км. Зато в городе ждали старые друзья и почти две недели покоя.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '43914313914',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 100, 1)}
          partialVisibility={true}
        >
          <div id='amsterdam'>
            <h4>Амстердам</h4>
            <p>
              Здесь мы были впервые, хотя уже несколько раз планировали добраться. В этом городе смешиваются сразу несколько любимых штук: корабли, вода и велосипеды. В одно утро мы специально встали пораньше, чтобы объехать вдоль все центральные каналы.
            </p>
            <p>
              Мы попали на Pride(ссылка) - один из крупнейших ЛГБТ-фестивалей в Европе. С вечера пятницы и все выходные каналы были заполнены карнавальными плавсредствами, на которых бесконечно тусовался народ. На одном из главных каналов проходил парад лодок, в котором участвуют каждый год даже пожарные и полицейские. На улицах было еще теснее. В центре мы просто просачивались сквозь тела и офигевали от происходящего.
            </p>
            <p>
              В конце нашего “отпуска” в Амстердаме мы помогали с организацией фестиваля местным сквоттерам. Я отвык от такой самоорганизации и было приятно смотреть, как столько разных людей объединены общим делом. Познакомились с кучей интересных людей и сильно по всем скучаем.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '43723854595',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 0, 2)}
          partialVisibility={true}
        >
          <div id='copenhagen'>
            <h3>Дания</h3>
            <p>
              Мы купили билеты на FlixBus до Копенгагена. На некоторых их автобусах есть специальный багажник для велосипедов. Но пользуйтесь этой компанией только в крайних случаях. В момент пересадки наш следующий автобус просто не пришел. Нам пришлось самим искать, как добираться дальше. Все закончилось хорошо, но никакой компенсации мы до сих пор не получили, несмотря на десяток отправленных писем в поддержку.
            </p>
            <p>
              Копенгаген нам не удалось посмотреть, оставалось не так много времени до окончания действия визы. Поэтому мы переночевали одну ночь и двинулись в Швецию.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '44633261371',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 8.98, 2)}
          partialVisibility={true}
        >
          <div>
            <h3>Швеция</h3>
            <p>
              На территории Швеции разрешен дикий кемпинг. Но дело даже не в том, что это официально разрешено, а в том, что здесь очень много красивых и безлюдных мест для этого. Мы почти не останавливались в кемпингах и ставили палатку возле какого-нибудь озера.
            </p>
            <p>
              Здесь не так много велодорожек, но зато дороги почти безлюдные. Стало больше подъемов, повсюду камни и озера. Из всей поездки природа Швеции понравилась больше всего. Мы просто ехали и сутками наслаждались пейзажами.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '43914316954',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 46.38, 2)}
          partialVisibility={true}
        >
          <div id='jonkoping'>
            <h4>Йёнчёпинг</h4>
            <p>
              Огромное озеро Веттерн. Около 70 км мы двигались вдоль берега. Снова наблюдали за судами, но уже другими. Здесь не торговые баржи как на канале в Германии, а красивые яхты, парусники и прогулочные катера. И на всем побережьи традиционные красно-белые дома. Почти у каждого водоема стоит такой.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '29694619487',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 75.06, 2)}
          partialVisibility={true}
        >
          <div id='norrkoping'>
            <h4>Норрчёпинг</h4>
            <p>
              Здесь уже выход к балтийскому морю и пахнет соленой водой. До Стокгольма оставалось совсем немного, поэтому мы больше фотографировали и отдыхали. <br/>
              Последний дикий кемпинг мы устроили на территории заповедника. В поисках места несколько раз видели оленей за ужином. Свой 27-й день рождения я точно запомню: проснулся у озера в лесу, позавтракал, сид на теплой скале и поехал в Стокгольм.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
    {
      id: '30763233938',
      msg: (
        <VisibilitySensor
          onChange={(e) => this.elementVisible(e, 100, 2)}
          partialVisibility={true}
        >
          <div id='stockholm'>
            <h4>Стокгольм</h4>
            <p>
              К сожалению и здесь у нас не оказалось возможности посмотреть город. Мы просто проехали через центральную часть и загрузились в наш паром. На этом велосипедное приключение закончилось и остальную часть пути мы пробирались домой паромами, автобусами и машинами.
            </p>
          </div>
        </VisibilitySensor>
      )
    },
  ];

  setContainerTopRef = element => {
    this.containerTop = element;
  };
  setScrollRouterRef = element => {
    this.scrollRouterBlock = element;
  };
  setScrollTopRef = element => {
    this.scrollTop = element;
  };

  componentDidMount(){
    window.addEventListener('resize', this.resizeMap);
    window.addEventListener('scroll', this.handleScroll);
    this.resizeMap();
  }
  componentWillUnmount(){
    window.removeEventListener('resize', this.resizeMap);
    window.removeEventListener('scroll', this.handleScroll);
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
        containerTopHeight: containerTopNode.clientHeight/2.2,
      });
    }
  };

  handleScroll = () => {
    if(this.scrollTop !== null){
      if (window.pageYOffset > 500) {
        this.scrollTop.style.display = "block";
      } else{
        this.scrollTop.style.display = "none";
      }
    }
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render(){
    return (
      <Layout location={this.props.location}>
        <main className={classes.main}>
          <div className={classes.mapWrapper} ref={this.setContainerTopRef}>
            <div className={classes.mapHeader}>
              <h2>
                Двухэтапное велопутешествие в&nbsp;Европе.
              </h2>
              <h3>
                2000&nbsp;км, 24&nbsp;дня&nbsp;езды, &#8734;&nbsp;впечатлений.
              </h3>
            </div>
            <section className={classes.contentTableSection}>
              <div className={classes.textContainer}>
                <ul className={classes.contentTable}>
                  <li>
                    <Link
                      to="intro"
                      className={classes.link}
                      smooth={true}
                    >
                      Кто&nbsp;мы
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="why"
                      className={classes.link}
                      smooth={true}
                      offset={-20}
                    >
                      Как&nbsp;собирались
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="get"
                      className={classes.link}
                      smooth={true}
                      offset={-20}
                    >
                      Что&nbsp;получилось
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="gallery"
                      className={classes.link}
                      smooth={true}
                      offset={-20}
                    >
                      Как&nbsp;прошло
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="end"
                      className={classes.link}
                      smooth={true}
                      offset={-20}
                    >
                      Конец
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
            <Sticky context={this.containerTop}>
              <div className={classes.map}>
                <RouteMap
                  width={this.state.containerTopWidth}
                  height={this.state.containerTopHeight}
                />
              </div>
            </Sticky>
          </div>
          <section id="intro" className={classes.intro}>
            <div className={classes.textContainer}>
              <Grid verticalAlign='middle' columns={2}>
                <Grid.Row>
                  <Grid.Column>
                    <img
                      className={classes.fullWidth}
                      src={introImg}
                      alt="cyclists bikepacking"
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <p>
                      Мы &mdash; Алена и Андрей. Летом 2018 мы отправились с велосипедами в Европу. <br/>
                      Путешествие заняло 44 дня, 24 из которых &mdash; в седле. Заезд разделился на два этапа, Калининград&nbsp;&mdash;&nbsp;Амстердам и Копенгаген&nbsp;&mdash;&nbsp;Стокгольм. В сумме на велосипедах мы проехали более 2000 км. Здесь наша история с маршрутом, фотографиями и комментариями.
                    </p>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </section>
          <section id="why">
            <div className={classes.textContainer}>
              <h3>Как собирались</h3>
              <p>
                Идея о длительном велопутешествии возникла после предыдущего длительного скитания в Европе (ссылка). Изначально мы хотели повторить этот опыт волонтерства через workaway, но с велосипедами, перемещаться между проектами на них. Но времени на этот раз у нас было меньше и мы долго тянули с решением. От идеи с волонтерством пришлось отказаться. Мы решили выехать в сторону Берлина и проехать столько, сколько получится, на что хватит денег и времени до окончания действия визы.
              </p>
              <p>
                У нас не было какой-то специальной физической подготовки. До отъезда мы катались нерегулярно.
              </p>
              <p>
                Сборы проходили в очень короткие сроки. Две недели ушли на чтение статей о велопутешествиях; выбор, заказ и установку снаряжения; диагностику велосипедов.
              </p>
              <p>
                Мы плохо представляли, как правильно снаряжать велосипед
                для длительной поездки. В <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://skjegg.blogspot.com/search/label/%D0%B2%D0%B2%D0%B5%D0%B4%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B2%20%D0%B1%D0%B0%D0%B9%D0%BA%D0%BF%D0%B0%D0%BA%D0%B8%D0%BD%D0%B3">блоге Skjegg</a> нашли список бюджетных производителей велосипедного снаряжения из СНГ и примеры вариантов загрузки.<br/>
              </p>
              <div>
                Другие ресурсы и статьи, которые помогли со сборами
                <ul
                  style={{listStyle: 'none'}}
                >
                  <li>
                    <a className={classes.link} target="_blank" rel="noopener noreferrer" href="http://www.bikepacking.com/">Bikepacking.com</a> - всё о байкпакинге
                  </li>
                  <li>
                    <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://bicycletouringpro.com/cheap-bicycle-touring-gear-sample-pack-list/">Bicycle Touring Pro</a> - список вещей для “классического” велотура
                  </li>
                  <li>
                    <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://www.theadventurejunkies.com/essential-gear-bicycle-touring/">The Adventure Junkies</a> - еще один список вещей. Полезно прочитать несколько и сравнить
                  </li>
                  <li>
                    <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://tomsbiketrip.com/cycle-touring-kit-list/">Tom's Bike Trip</a> - подробный персональный список снаряжения со ссылками
                  </li>
                  <li>
                    <a className={classes.link} target="_blank" rel="noopener noreferrer" href="https://www.adventurecycling.org/resources/blog/seven-tips-for-bicycle-touring-on-a-budget/">Adventure Cycling Association</a> - о экономии в путешествии
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section id="get">
            <div className={classes.textContainer}>
              <h3>Что получилось</h3>
            </div>
            <img
              className={classes.fullWidth}
              src="https://farm2.staticflickr.com/1953/45051957631_60d12a3e33_h.jpg"
              alt="bicycle bikepacking"
            />
            <img
              className={classes.fullWidth}
              src="https://farm2.staticflickr.com/1918/30116672827_14e27f256f_h.jpg"
              alt="bicycle bikepacking"
            />
            <div className={classes.textContainer}>
              <p style={{marginTop: '1em'}}>
                <strong>Велосипеды</strong>: Verenti Substance Sora / Kona Rove<br/>
                <strong>Подседельные сумки</strong>: <a className={classes.link} rel="noopener noreferrer" target="_blank" href="https://vk.com/kravetsbikepacking">Kravets</a> / <a className={classes.link} rel="noopener noreferrer" target="_blank" href="https://vk.com/uraltour">Uraltour</a><br/>
                <strong>Нарульные сумки и стаканы</strong>: <a className={classes.link} rel="noopener noreferrer" target="_blank" href="https://malpa.by/">Malpa</a><br/>
                <strong>Передние багажники</strong>: <a className={classes.link} rel="noopener noreferrer" target="_blank" href="https://vk.com/bagajnikdlyavelosipeda">Bazhov</a><br/>
                <strong>Сумки на багажник</strong>: <a className={classes.link} rel="noopener noreferrer" target="_blank" href="http://rackbag.ru/">RackBag</a><br/>
                <strong>Поясные сумки</strong>: <a className={classes.link} rel="noopener noreferrer" target="_blank" href="http://zulufixed.com/">Zulu</a> / <a className={classes.link} rel="noopener noreferrer" target="_blank" href="https://vk.com/graphitemade">Graphit</a><br/>
              </p>
              <p>
                Палатка, коврики и остальное туристическое снаряжение практически полностью собрано в Декатлоне.
              </p>
              <div className={classes.spoiler}>
                <div
                  className={classes.spoilerTitle}
                  onClick={this.showGearHandler}
                >
                  {this.state.showGear ? 'Скрыть' : 'Показать'} полный список вещей
                </div>
                <CSSTransition
                  in={this.state.showGear}
                  timeout={500}
                  unmountOnExit
                  classNames={{
                    enter: `${classes.spoilerBody} enter`,
                    enterActive: `${classes.spoilerBody} enter-active`,
                    enterDone: `${classes.spoilerBody} enter-done`,
                    exit: `${classes.spoilerBody} exit`,
                    exitActive: `${classes.spoilerBody} exit-active`,
                    exitDone: `${classes.spoilerBody} exit-done`,
                  }}
                >
                  {() => (
                    <div className={classes.spoilerBody}>
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
                        Одежда: солнцезащитные очки, футболки х2,
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
                        Гигиена: крем от загара, зубная щетка, зубная паста, деттол,
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
                Для упаковки велосипедов и перевозки в поезде мы использовали мешки для хранения покрышек (обычные мусорные, но с широкой горловиной) и пищевую пленку. Вот так они отправились на поезде в Калининград
                <img
                  style={{display: 'block', width: '50%', margin: '1em 0'}}
                  src="https://farm2.staticflickr.com/1899/43723828275_7709b7573f_h.jpg"
                  alt="packed bicycles"/>
              </p>
              <p>
                После нескольких часов на вокзале велосипеды были собраны и началось.
              </p>
            </div>
          </section>
          <section id='gallery'>
            <div className={classes.textContainer}>
              <h3>Как прошло</h3>
            </div>
            <Grid columns={2}>
              <Grid.Row>
                <Grid.Column width={11}>
                  <Gallery comments={this.comments}/>
                </Grid.Column>
                <Grid.Column width={5}>
                  <div className={classes.stickyRouteContainer} ref={this.setScrollRouterRef}>
                    <Sticky context={this.scrollRouterBlock}>
                      <RouteScroller
                        width={window ? (window.innerWidth / 16) * 5 : null}
                        height={window ? window.innerHeight : null}
                        trackPosition={this.state.trackPosition}
                        track={this.state.track}
                      />
                    </Sticky>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </section>
          <section id="end" className={classes.end}>
            <div className={classes.textContainer}>
              <h3>Конец</h3>
              <p>
                Конечно, за 44 дня произошло намного больше событий. Нам нравится рассказывать о них, но не хочется утомлять длинными повествованиями. Здесь мы хотели сделать небольшой обзор нашего путешествия чтобы показать, как это может быть. Если вас интересуют какие-то подробности, пишите на почту, в fb или любые другие социалки (ссылки)
              </p>
              <p>
                Посмотреть больше фотографий дорог, полей и ветрогенераторов можно в альбоме на <a target="_blank" rel="noopener noreferrer" href="https://photos.app.goo.gl/3uWWih4ncY8uQAMw5">Google Photos</a>
              </p>
            </div>
          </section>
          <div className={classes.goToIndex}>
            <GatsbyLink
              to="/"
            >
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 31.494 31.494"
              >
              <path d="M10.273,5.009c0.444-0.444,1.143-0.444,1.587,0c0.429,0.429,0.429,1.143,0,1.571l-8.047,8.047h26.554
                c0.619,0,1.127,0.492,1.127,1.111c0,0.619-0.508,1.127-1.127,1.127H3.813l8.047,8.032c0.429,0.444,0.429,1.159,0,1.587
                c-0.444,0.444-1.143,0.444-1.587,0l-9.952-9.952c-0.429-0.429-0.429-1.143,0-1.571L10.273,5.009z"/>
              </svg>
            </GatsbyLink>
          </div>
          <div
            className={classes.scrollTopBtn}
            onClick={this.scrollToTop}
            ref={this.setScrollTopRef}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 492.004 492.004"
            >
              <path d="M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12
                c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028
                c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265
                c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"/>
            </svg>
          </div>
        </main>
      </Layout>
    )
  }
}

export default SummersidePage;