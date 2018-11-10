import React from 'react'

import InfiniteScroll from 'react-infinite-scroller'
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
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="100 0 270 477.175"
          >
            <g>
              <path
                d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"
              />
            </g>
          </svg>
        </div>)
      },
      renderNextButton: () => {
        return (<div className='swiper-button-next'>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="100 0 270 477.175"
          >
            <g>
              <path
                d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"
              />
            </g>
          </svg>
        </div>)
      },
    },
    showModal: false
  };

  loadPhotos = () => {
    let nextSet = photoSizes.slice(this.state.pagePhotoCounter * 5, this.state.pagePhotoCounter * 5 + 5);

    const set = [...nextSet];
    let setCommentCounter = 0;

    nextSet.map((item, i) => {
      let photoItem = this.props.comments.find(comment => comment.id === item.id);
      if(photoItem !== undefined){
        set.splice(i + setCommentCounter, 0, {comment: true, msg: photoItem.msg});
        setCommentCounter++;
      }
      return null;
    });

    if(nextSet.length !== 0){
      this.setState((prevState) => {
        return {
            pagePhotoCounter: prevState.pagePhotoCounter + 1,
            photoSizes: prevState.photoSizes.concat(set),
        };
      });
    } else {
      this.setState({
          hasMore: false
      });
    }
  };

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
              background: `url('${item.medium}') no-repeat center`,
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
        <InfiniteScroll
          className={classes.masonry}
          loadMore={this.loadPhotos}
          hasMore={this.state.hasMore}
          loader={
            <div key={'loader'} className={classes.loader}>
              <div className={classes.ldsCss}>
                <div className={classes.ldsEclipse}>
                  <div/>
                </div>
              </div>
            </div>
          }
        >
          {items}
        </InfiniteScroll>
      </div>
    );
  }
}

export default Gallery;