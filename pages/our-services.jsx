import Heading from '@/components/common/Heading';
import ImageHighlight from '@/components/common/ImageHighlight';
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
                                <div className="col-12 col-sm-4 col-lg-4">
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
                                </div>
                                <div className="col-12 col-sm-4 col-lg-4">
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
                                </div>
                                <div className="col-12 col-sm-4 col-lg-4">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
