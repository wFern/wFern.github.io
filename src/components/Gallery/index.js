import React from 'react'

import Swiper from 'react-id-swiper'

import photoSizes from "../../data/photo_sizes.json"

import './swiper.css';
import classes from './Gallery.module.scss';

class Gallery extends React.Component {
  state = {
    pagePhotoCounter: 0,
    hasMore: true,
    photoSizes: [],
    swiperParams: {
      lazy: true,
      shouldSwiperUpdate: true,
      rebuildOnUpdate: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      renderPrevButton: () => {
        return (<div className='swiper-button-prev'>
          <svg viewBox="16 11 17 25" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.17 32.92l9.17-9.17-9.17-9.17 2.83-2.83 12 12-12 12z"/>
          </svg>
        </div>)
      },
      renderNextButton: () => {
        return (<div className='swiper-button-next'>
          <svg viewBox="16 11 17 25" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.17 32.92l9.17-9.17-9.17-9.17 2.83-2.83 12 12-12 12z"/>
          </svg>
        </div>)
      },
    },
    showModal: false
  };

  componentDidMount(){
    let photoWithComments = [...photoSizes];
    let photoItem = null;
    let setCommentCounter = 0;
    photoSizes.map((item, i) => {
      photoItem = this.props.comments.find(comment => comment.id === item.id);
      if(photoItem !== undefined){
        photoWithComments.splice(i + setCommentCounter, 0, {comment: true, msg: photoItem.msg});
        setCommentCounter++;
      }
      return null;
    });
    this.setState({
        photoSizes: photoWithComments
    });
  }

  photoClickHandler = (event, index) => {

    let swiperParams = {...this.state.swiperParams};
    swiperParams.initialSlide = index;

    this.setState({
      showModal: true,
      swiperParams: swiperParams
    });
  };

  closeModal = () => {
    this.setState({
        showModal: false
    });
  };

  render() {

    let items = [];

    this.state.photoSizes.map((item, i) => {
      if(item.comment){
        items.push(
          <div
            className={classes.comment}
            key={i}
          >
            {item.msg}
          </div>
        );
      } else {
        items.push(
          <div
            className={classes.item}
            key={item.id}
            onClick={(e) => this.photoClickHandler(e, item.index)}
            style={{
              background: `url('${item.small}') no-repeat center`,
              backgroundSize: 'cover'
            }}
          />
        );
      }
      return null;
    });

    return (
      <div>
        <div className={this.state.showModal ? [classes.modal, classes.modalShow].join(' ') : classes.modal}>
          <div
              className={classes.modalClose}
              onClick={this.closeModal}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 357 357"
            >
              <g>
                <g id="close">
                  <polygon
                    points="357,35.7 321.3,0 178.5,142.8 35.7,0 0,35.7 142.8,178.5 0,321.3 35.7,357 178.5,214.2 321.3,357 357,321.3
                    214.2,178.5"
                  />
                </g>
              </g>
            </svg>
          </div>
          <Swiper {...this.state.swiperParams}>
            {
              photoSizes.map((item) => (
                <div key={item.id}>
                  <img
                      className={['swiper-item swiper-lazy', classes.swiperItem].join(' ')}
                      data-src={item.large}
                      alt={item.id}
                  />
                  <div className={['swiper-lazy-preloader', classes.swiperLazyPreloader].join(' ')}>
                    <div className={classes.loader}>
                      <div className={classes.ldsCss}>
                        <div className={classes.ldsEclipse}>
                          <div/>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </Swiper>
        </div>
        <div className={classes.masonry}>
          {items}
        </div>
      </div>
    );
  }
}

export default Gallery;