import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import { SwiperImage } from '@/components/common/SwiperImg';
import HeaderBottom from '@/components/header/HeaderBottom';
import RootLayout from '@/components/layout/RootLayout';
import React from 'react';

export default function Rsvp() {
    return (
        <main>
            <div className="rsvp__wrapper">
                <section className="header__faq">
                    <div>
                        <HeaderBottom src="/assets/images/bcgr-video.jpg" text="RSVP PAGE" width={2000} height={850} />
                    </div>
                </section>
                <section className="rsvp__content">
                    <Heading
                        title="WE CAN'T WAIT TO SEE YOU!"
                        subTitle="PLEASE RSVP BY NOVEMEBER THE 14TH, LET US KNOW YOU'RE COMING!"
                        className="animate__animated animate__lightSpeedInRight animate__delay-0.5s"
                    />
                    <div className="rsvp__form">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-12 col-lg-12">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-6">
                                            <input placeholder="Your Name" />
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-6">
                                            <input placeholder="Email" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-12">
                                    <div className="row -attend">
                                        <div className="col-12 col-sm-6 col-lg-6">
                                            <div className="d-flex justify-content-between -attend-left">
                                                <span>Will you attend?</span>
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" />
                                                    <span>Accept with pleasure</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-6 -attend-right">
                                            <div className="d-flex align-items-center">
                                                <input type="radio" />
                                                <span>Decline with regret</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-12">
                                    <div className="row">
                                        <div className="col-12 col-sm-6 col-lg-6">
                                            <input placeholder="Number of guests" />
                                        </div>
                                        <div className="col-12 col-sm-6 col-lg-6">
                                            <input placeholder="Meal preferences" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-12">
                                    <textarea placeholder="Notes..." />
                                </div>
                                <div className="col-12 col-sm-12 col-lg-12">
                                    <Button className="section__button rsvp__button" title="CONTACT US" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="rsvp__slider">
                    <div className="container">
                        <div className="rsvp__img-wrapper d-flex">
                            <SwiperImage />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
Rsvp.Layout = RootLayout;
