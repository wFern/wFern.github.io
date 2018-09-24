import React from 'react';

import InfiniteScroll from 'react-infinite-scroller';
import Swiper from 'react-id-swiper';

import photoSizes from "../../data/photo_sizes.json";

import './swiper.css';
import './index.scss';

class Gallery extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            pagePhotoCounter: 0,
            hasMore: true,
            photoSizes: [],
            swiperParams: {
                lazy: true,
                shouldSwiperUpdate: true,
                rebuildOnUpdate: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            },
            showModal: false
        };
    }

    loadPhotos = () => {
        if(photoSizes.slice(this.state.pagePhotoCounter * 10, this.state.pagePhotoCounter * 10 + 10).length !== 0){
            this.setState({
                pagePhotoCounter: this.state.pagePhotoCounter + 1,
                photoSizes: this.state.photoSizes.concat(photoSizes.slice(this.state.pagePhotoCounter * 10, this.state.pagePhotoCounter * 10 + 10)),
            });
        } else{
            this.setState({
                hasMore: false
            });
        }
    };

    photoClickHandler = (event, i) => {
        this.setState({
            showModal: true,
            swiperParams: {
                initialSlide: i,
                lazy: true,
                shouldSwiperUpdate: true,
                rebuildOnUpdate: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            },
        });
    };

    closeModal = () => {
        this.setState({
            showModal: false
        });
    };

    render() {

        let items = [];

        this.state.photoSizes.map((item, i) => (
            items.push(
                <div
                    className='masonry__item'
                    key={item.id}
                    style={{
                        background: `url('${item.medium}') no-repeat center`,
                        backgroundSize: 'cover'
                    }}
                    onClick={(e) => this.photoClickHandler(e, i)}
                />
            )
        ));

        return (
            <div>
                <div className={this.state.showModal ? 'modal modal_show' : 'modal'}>
                    <div
                        className='modal__close'
                        onClick={this.closeModal}
                    >X</div>
                    <Swiper {...this.state.swiperParams}>
                        {
                            photoSizes.map((item) => (
                                <div key={item.id}>
                                    <img
                                        className='swiper-item swiper-lazy'
                                        data-src={item.large}
                                    />
                                    <div className="swiper-lazy-preloader"/>
                                </div>
                            ))
                        }
                    </Swiper>
                </div>
                <InfiniteScroll
                    className='masonry'
                    loadMore={this.loadPhotos}
                    hasMore={this.state.hasMore}
                    loader={<div key={0} className='loader'><div className="lds-ripple"><div/><div/></div></div>}
                >
                    {items}
                </InfiniteScroll>
            </div>

        );
    }
}

export default Gallery;