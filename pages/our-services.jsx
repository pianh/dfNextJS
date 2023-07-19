import Heading from '@/components/common/Heading';
import ImageHighlight from '@/components/common/ImageHighlight';
import Scroll from '@/components/common/Scroll';
import HeaderBottom from '@/components/header/HeaderBottom';
import Image from 'next/image';
import React from 'react';

export default function OurServices() {
    return (
        <main>
            <div className="service__wrapper">
                <section className="header__service">
                    <div>
                        <HeaderBottom
                            src="/assets/images/services/services-img-1.jpg"
                            text="OUR SERVICES"
                            width={2000}
                            height={545}
                        />
                    </div>
                </section>
                <section className="service__welcome">
                    <div className="container d-flex flex-column text-center">
                        <div className="service__icon">
                            <ImageHighlight src="/assets/images/bird.png" width="300" height="160" alt="image bird" />
                        </div>
                        <Heading
                            title="WELCOME TO OUR
                            WEDDING & CONCEPT STUDIO"
                            subTitle="THERE IS SOMETHING FOR EVEYONE"
                        />
                        <div className="pt-60 service__img-wrapper">
                            <div className="row justify-content-between">
                                <div className="col-12 col-sm-12 col-lg-4">
                                    <div>
                                        <div className="service__img">
                                            <Image
                                                src="/assets/images/services/h1-img-2.png"
                                                alt="service image"
                                                width={300}
                                                height={300}
                                                objectFit="cover"
                                            />
                                            <div className="service__img-effect">
                                                <Image
                                                    src="/assets/images/services/detail-rev-img.png"
                                                    alt="service effect"
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                        </div>
                                        <div className="service__heading">
                                            <h4 className="section__title-4">SIMONA JAGGER</h4>
                                            <h5 className="section__des-4">
                                                Blandit vel, rhoncus venenatis luctus pulvinar, hendrerit id, lorem.
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-4">
                                    <div>
                                        <div className="service__img">
                                            <Image
                                                src="/assets/images/services/h1-img-3.png"
                                                alt="service image"
                                                width={300}
                                                height={300}
                                                objectFit="cover"
                                            />
                                            <div className="service__img-effect">
                                                <Image
                                                    src="/assets/images/services/detail-rev-img.png"
                                                    alt="service effect"
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                        </div>
                                        <div className="service__heading">
                                            <h4 className="section__title-4">SIMONA JAGGER</h4>
                                            <h5 className="section__des-4">
                                                Blandit vel, rhoncus venenatis luctus pulvinar, hendrerit id, lorem.
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-4">
                                    <div>
                                        <div className="service__img">
                                            <Image
                                                src="/assets/images/services/h1-img-4.png"
                                                alt="service image"
                                                width={300}
                                                height={300}
                                                objectFit="cover"
                                            />
                                            <div className="service__img-effect">
                                                <Image
                                                    src="/assets/images/services/detail-rev-img.png"
                                                    alt="service effect"
                                                    width={400}
                                                    height={400}
                                                />
                                            </div>
                                        </div>
                                        <div className="service__heading">
                                            <h4 className="section__title-4">SIMONA JAGGER</h4>
                                            <h5 className="section__des-4">
                                                Blandit vel, rhoncus venenatis luctus pulvinar, hendrerit id, lorem.
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service__infinite">
                    <div className="container">
                        <Heading title="INFINITE & ETERNAL LOVE" subTitle="THEME HENDRERIT ID, LOREM" />
                        <div className="service__slider-wrapper">
                            <div className="service__slider"></div>
                            <div className="service__slider-content"></div>
                        </div>
                        <div className="service__number">
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="-item d-flex">
                                    <span>3618</span>
                                    <h4>Ceremonies</h4>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="-item">
                                    <span>3618</span>
                                    <h4>Ceremonies</h4>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="-item">
                                    <span>3618</span>
                                    <h4>Ceremonies</h4>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-3">
                                <div className="-item">
                                    <span>3618</span>
                                    <h4>Ceremonies</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="scroll__area">
                    <Scroll
                        text1="ENDLESS INSPIRATIONS"
                        text2=" AGNIFICENT WEDDING"
                        text3="BEAUTIFUL IDEAS"
                        text4="ENDLESS INSPIRATIONS{' '}"
                        text5="AGNIFICENT WEDDING"
                        text6="BEAUTIFUL IDEAS"
                    />
                </section>
                <section className="service__married"></section>
            </div>
        </main>
    );
}
