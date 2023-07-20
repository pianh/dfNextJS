import Heading from '@/components/common/Heading';
import ImageHighlight from '@/components/common/ImageHighlight';
import Scroll from '@/components/common/Scroll';
import SlideShow from '@/components/common/SlideShow';
import { SwiperImage } from '@/components/common/SwiperImg';
import HeaderBottom from '@/components/header/HeaderBottom';
import Image from 'next/image';
import Link from 'next/link';
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
                <section className="service__welcome animate__animated animate__fadeInLeft ">
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
                                    <div className="service__img-item">
                                        <div className="service__img">
                                            <Image
                                                src="/assets/images/services/h1-img-2.png"
                                                alt="service image"
                                                width={350}
                                                height={350}
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
                                    <div className="service__img-item">
                                        <div className="service__img">
                                            <Image
                                                src="/assets/images/services/h1-img-3.png"
                                                alt="service image"
                                                width={350}
                                                height={350}
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
                                    <div className="service__img-item">
                                        <div className="service__img">
                                            <Image
                                                src="/assets/images/services/h1-img-4.png"
                                                alt="service image"
                                                width={350}
                                                height={350}
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
                <div className="service__infinite-wrapper">
                    <div className="service__infinite">
                        <div className="container">
                            <Heading title="INFINITE & ETERNAL LOVE" subTitle="THEME HENDRERIT ID, LOREM" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="service__slider-wrapper">
                            <div className="service__slide-show">
                                <SlideShow />
                            </div>
                        </div>
                    </div>
                    <div className="service__number">
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="-item">
                                        <span className="d-flex justify-content-center">
                                            <i className="fa-solid fa-diamond"></i>
                                            3618
                                            <i className="fa-solid fa-diamond"></i>
                                        </span>
                                        <h4>Ceremonies</h4>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="-item">
                                        <span className="d-flex justify-content-center">
                                            <i className="fa-solid fa-diamond"></i>
                                            1509
                                            <i className="fa-solid fa-diamond"></i>
                                        </span>
                                        <h4>Ceremonies</h4>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="-item">
                                        <span className="d-flex justify-content-center">
                                            <i className="fa-solid fa-diamond"></i>
                                            1624
                                            <i className="fa-solid fa-diamond"></i>
                                        </span>
                                        <h4>Ceremonies</h4>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-lg-3">
                                    <div className="-item">
                                        <span className="d-flex justify-content-center">
                                            <i className="fa-solid fa-diamond"></i>
                                            3185
                                            <i className="fa-solid fa-diamond"></i>
                                        </span>
                                        <h4>Ceremonies</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <section className="scroll__area">
                    <Scroll
                        text1="ENDLESS INSPIRATIONS"
                        text2=" AGNIFICENT WEDDING"
                        text3="BEAUTIFUL IDEAS"
                        text4="ENDLESS INSPIRATIONS"
                        text5="AGNIFICENT WEDDING"
                        text6="BEAUTIFUL IDEAS"
                    />
                </section>
                <section className="service__married container pt-60">
                    <Heading
                        title="WE’RE GETTING MARRIED!"
                        subTitle="THEME HENDRERIT ID, LOREM"
                        desc="Tellus eget condimentum rhoncus, sem quam nec vitae sapien semper libero, blandit vel, rhoncus venenatis luctus pulvinar, hendrerit id, lorem."
                    />
                    <div className="row">
                        <div className="col-12 col-sm-12 col-lg-4">
                            <div className="service__married-img-wrapper">
                                <div className="service__married-img">
                                    <Link href="">
                                        <Image
                                            src="/assets/images/services/blog-h1.png"
                                            alt="service image"
                                            width={440}
                                            height={460}
                                            objectFit="cover"
                                        />
                                    </Link>
                                    <div className="service__married-img-effect"></div>
                                </div>
                                <div className="service__heading text-center">
                                    <h3 className="service__title">FLORAL FANTASY, DECORATION</h3>
                                    <div className="service__sub-title d-flex">
                                        <p>NOVEMBER 30, 2022 </p>
                                        <span>
                                            <i className="fa-solid fa-diamond"></i>
                                        </span>
                                        <p>CEREMONYDRESS</p>
                                        <p>, DRESS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-4">
                            <div className="service__married-img-wrapper">
                                <div className="service__married-img">
                                    <Link href="">
                                        <Image
                                            src="/assets/images/services/blog-h2.png"
                                            alt="service image"
                                            width={440}
                                            height={460}
                                            objectFit="cover"
                                        />
                                    </Link>
                                    <div className="service__married-img-effect"></div>
                                </div>
                                <div className="service__heading text-center">
                                    <h3 className="service__title">FLORAL FANTASY, DECORATION</h3>
                                    <div className="service__sub-title d-flex">
                                        <p>NOVEMBER 30, 2022 </p>
                                        <span>
                                            <i className="fa-solid fa-diamond"></i>
                                        </span>
                                        <p>CEREMONYDRESS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-lg-4">
                            <div className="service__married-img-wrapper">
                                <div className="service__married-img">
                                    <Link href="">
                                        <Image
                                            src="/assets/images/services/blog-h3.png"
                                            alt="service image"
                                            width={440}
                                            height={460}
                                            objectFit="cover"
                                        />
                                    </Link>
                                    <div className="service__married-img-effect"></div>
                                </div>
                                <div className="service__heading text-center">
                                    <h3 className="service__title">FLORAL FANTASY, DECORATION</h3>
                                    <div className="service__sub-title d-flex">
                                        <p>NOVEMBER 30, 2022 </p>
                                        <span>
                                            <i className="fa-solid fa-diamond"></i>
                                        </span>
                                        <p>CEREMONYDRESS</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="service__introduce pt-120">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className="service-gift">
                                    <Image
                                        src="/assets/images/hover-client-new.png"
                                        alt="introduce image"
                                        width={170}
                                        height={170}
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className="service-gift">
                                    <Image
                                        src="/assets/images/h3-client-2.png"
                                        alt="introduce image"
                                        width={170}
                                        height={170}
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className="service-gift">
                                    <Image
                                        src="/assets/images/h3-client-hover-3.png"
                                        alt="introduce image"
                                        width={170}
                                        height={170}
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className="service-gift">
                                    <Image
                                        src="/assets/images/h3-client-hover-04.png"
                                        alt="introduce image"
                                        width={170}
                                        height={170}
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className="service-gift">
                                    <Image
                                        src="/assets/images/h3-client-hover-05.png"
                                        alt="introduce image"
                                        width={170}
                                        height={170}
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2">
                                <div className="service-gift">
                                    <Image
                                        src="/assets/images/h3-client-hover-6.png"
                                        alt="introduce image"
                                        width={250}
                                        height={250}
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="service__slider">
                    <div className="container">
                        <div className="faq__img-wrapper d-flex">
                            <SwiperImage />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
