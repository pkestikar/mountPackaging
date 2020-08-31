import React, { useEffect } from 'react';
import Button from "Components/Button";
import Icon from '../../components/Icon';
import Grid from '@material-ui/core/Grid';
import { IMAGE_PATH } from "../../config";
import Container from '@material-ui/core/Container';
import {MQMaxMedium, MQMinLarge} from "../../utilities/DeviceQueries";

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

export const ServiceInfoItemComposer = (props) => {
    return (
        <Grid container spacing={2} className={'service-info-item-container'}>
            <Grid item xs={12} md={4} className={'service-info-img-wrapper'}>
                <img className={'service-info-img'} src={`${IMAGE_PATH}${props.image}.png`} alt={props.image}/>
            </Grid>
            <Grid item xs={12} md={8} className="service-info-description">
                <div className={'title'}>{props.title}</div>
                <div className="text">
                    {props.description}
                </div>
            </Grid>
        </Grid>
    )
};

export const serviceItems = [
    {
        image: 'paint-bucket',
        title: '01 PAINTS',
        description: 'We have experience in manufacturing packaging solutions for a gamut of containers with various sizes, for any of the volumetric or gravimetric requirements.'
    },
    {
        image: 'oil-bucket',
        title: '02 OILS',
        description: 'We provide packaging solutions for all kinds of oils like gear oils, lubricant oils, edible oils, etc.'
    },
    {
        image: 'ink-bottle',
        title: '03 INKS',
        description: 'While striving for an efficient solution, our packaging machinery designs for inks ensure least amount of contamination.'
    },
    {
        image: 'barrel',
        title: '04 CHEMICALS',
        description: 'We are able to provide packaging machinery for chemicals like peroxides with Lance bottom and top filling.'
    },
    {
        image: 'adhesive-tube',
        title: '05 ADHESIVES',
        description: 'We can provide packaging solutions for adhesives  with volumetric/pressure type filling.'
    }
];

const HomePage = (props) => {
    useEffect(() => {
        document.body.classList.add('home-page');
        return () => {
            document.body.classList.remove('home-page');
        }
    }, []);

    SwiperCore.use([ Navigation, Pagination ]);
    const swiperParams = {
        slidesPerView: 1,
        navigation: false,
        pagination: { clickable: true }
    };

    return (
        <div className="mp--homepage-container">
            <div className="mp--homepage--first-section">
                <div className={'background-curve'}></div>
                <div className="mp--homepage--first-section-info-container">
                    <div className="introduction-text">
                        <span className="we-design">WE DESIGN.</span>
                        <span className="we-deliver">WE DELIVER.</span>
                    </div>
                    <div className="introduction-description">
                        <span className={'description-text'}>Tailored to the customer requirements, we design and deliver top-notch packaging machinery.</span>
                    </div>
                    <div className="introduction-cta">
                        <Button palette={'primary'}>Let's Connect</Button>
                    </div>
                    <div className="scroll-down-indicator">
                        <Icon icon={'scroll'} />
                    </div>
                </div>
            </div>
            <div className="mp--homepage--second-section">
                <div className="second-section-heading">
                    WE SPECIALIZE IN
                </div>
                <MQMinLarge>
                    <Container maxWidth={'lg'} disableGutters>
                        {
                            serviceItems.map((item, key) => {
                                return (
                                    <ServiceInfoItemComposer
                                        image={item.image}
                                        title={item.title}
                                        description={item.description}
                                        key={`service-info-item-${key}`}
                                    />
                                )
                            })
                        }
                    </Container>
                </MQMinLarge>
                <MQMaxMedium>
                    <Swiper {...swiperParams}>
                        {
                            serviceItems.map((item, key) => {
                                return (
                                    <SwiperSlide key={`service-${key}`}>
                                        <div className="service-info-item-container__mobile">
                                            <div className="service-info-img-wrapper">
                                                <img className={'service-info-img'} src={`${IMAGE_PATH}${item.image}.png`} alt={item.image}/>
                                            </div>
                                            <div className="service-info-description">
                                                <div className="title">
                                                    {item.title}
                                                </div>
                                                <div className="text">
                                                    {item.description}
                                                </div>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                </MQMaxMedium>
            </div>
            <div className="mp--homepage--third-section">
                <span>Ready with requirements?</span>
                <Button palette={'secondary'}>Get Quotation</Button>
            </div>
        </div>
    )
};

export default HomePage;
