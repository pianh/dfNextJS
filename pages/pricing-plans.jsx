import Heading from '@/components/common/Heading';
import { SwiperImage } from '@/components/common/SwiperImg';
import HeaderBottom from '@/components/header/HeaderBottom';
import RootLayout from '@/components/layout/RootLayout';
import Image from 'next/image';
import React from 'react';

export default function PricingPlans() {
    return (
        <main>
            <div className="pricing__wrapper">
                <section className="header__pricing">
                    <div className="container-fluid">
                        <HeaderBottom
                            src="/assets/images/title-bcgr.jpg"
                            text="PRICING PLANS"
                            width={2000}
                            height={545}
                        />
                    </div>
                </section>
                <section className="pricing__content">
                    <Heading
                        title="RECOMENDED PRODUCTS"
                        subTitle="THEME HENDRERIT ID, LOREM"
                        className="animate__animated animate__zoomInDown animate__delay-0.5s"
                    />
                    <div className="pricing-product text-center">
                        <div className="container">
                            <div className="row d-flex justify-content-center">
                                <div className="col-12 col-sm-12 col-lg-4 pricing-item">
                                    <h4>Standard</h4>
                                    <h5>per guest</h5>
                                    <div>
                                        <span>$</span>
                                        <h3>54</h3>
                                    </div>
                                    <p>
                                        Tellus eget venenatis quam Blandit vel, rhoncus luctus Pellentesque eu, pretium
                                        quis Leo eget bibendum et Maecenas tempus massa
                                    </p>
                                    <div className="pricing-pur">PURCHASE</div>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-4 pricing-item pricing-bg">
                                    <h4>EXCLUSIVE</h4>
                                    <h5>per guest</h5>
                                    <div>
                                        <span className="-active">$</span>
                                        <h3 className="-active">112</h3>
                                    </div>
                                    <p>
                                        Tellus eget venenatis quam Blandit vel, rhoncus luctus Pellentesque eu, pretium
                                        quis Leo eget bibendum et Maecenas tempus massa
                                    </p>
                                    <div className="pricing-pur">PURCHASE</div>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-4 pricing-item">
                                    <h4>PREMIUM</h4>
                                    <h5>per guest</h5>
                                    <div>
                                        <span>$</span>
                                        <h3>90</h3>
                                    </div>
                                    <p>
                                        Tellus eget venenatis quam Blandit vel, rhoncus luctus Pellentesque eu, pretium
                                        quis Leo eget bibendum et Maecenas tempus massa
                                    </p>
                                    <div className="pricing-pur">PURCHASE</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pricing__icon">
                    <div className="container">
                        <div className="row ">
                            <div className="col-12 col-sm-6 col-lg-2 d-flex justify-content-center">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/pricing/sidearea-img.png"
                                        width={260}
                                        height={260}
                                        alt="pricing image"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2 d-flex justify-content-center">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/pricing/sidearea-img2.png"
                                        width={260}
                                        height={260}
                                        alt="pricing image"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2 d-flex justify-content-center">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/pricing/sidearea-img3.png"
                                        width={260}
                                        height={260}
                                        alt="pricing image"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2 d-flex justify-content-center">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/pricing/sidearea-img4.png"
                                        width={260}
                                        height={260}
                                        alt="pricing image"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2 d-flex justify-content-center">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/pricing/sidearea-img5.png"
                                        width={260}
                                        height={260}
                                        alt="pricing image"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-2 d-flex justify-content-center">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/pricing/sidearea-img7.png"
                                        width={260}
                                        height={260}
                                        alt="pricing image"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pricing__slider">
                    <div className="container">
                        <div className="pricing__img-wrapper d-flex">
                            <SwiperImage />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
PricingPlans.Layout = RootLayout;
