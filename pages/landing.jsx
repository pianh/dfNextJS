import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import ImagePoint from '@/components/common/ImagePoint';
import OtherLayout from '@/components/layout/OtherLayout';
import Image from 'next/image';
import React from 'react';

export default function Landing() {
    return (
        <main>
            <div className="landing__wrapper">
                <div className="landing__intro">
                    <div className="row">
                        <div className="col-lg-5 col-12 col-sm-12">
                            <div className="landing__heading">
                                <div className="-title animate__animated animate__backInDown animate__delay-0.5s">
                                    CELEBRATE LOVE WIDTH CASTELLA
                                </div>
                                <div className="-sub-title animate__animated animate__backInDown animate__delay-2s">
                                    ELEGANT WEDDING THEME
                                </div>
                                <Button
                                    className="section__button landing__button animate__animated animate__fadeInUp animate__delay-3s"
                                    title="Purchase"
                                />
                            </div>
                        </div>
                        <div className="col-lg-7 col-12 col-sm-12">
                            <div className="landing__img-group">
                                <div className="-pre-img">
                                    <Image
                                        src="/assets/images/landing/landing-rev-img-02.png"
                                        alt="landing img"
                                        width={800}
                                        height={500}
                                        objectFit="cover"
                                    />
                                </div>
                                <div className="-img">
                                    <Image
                                        src="/assets/images/landing/landing-rev-img-03.png"
                                        alt="landing img"
                                        width={200}
                                        height={400}
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="landing__content">
                    <div className="-img d-flex justify-content-center align-items-center">
                        <Image
                            src="/assets/images/team-icon.png"
                            width={330}
                            height={170}
                            objectFit="cover"
                            alt="landing-img"
                        />
                    </div>
                    <div className="landing__website">
                        <Heading title="WEDDING WEBSITES" />
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="landing__card">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/land-img-01.jpg"
                                            width={500}
                                            height={300}
                                            alt="landing img"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">MAIN HOME</div>
                                        <div className="-sub-title">DEMO</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-reduce-5">
                                <div className="landing__card">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/land-img-02.jpg"
                                            width={300}
                                            height={300}
                                            objectFit="cover"
                                            alt="landing img"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">PARALLAX GALLERY</div>
                                        <div className="-sub-title">DEMO</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="landing__card">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/land-img-03.jpg"
                                            width={300}
                                            height={300}
                                            alt="landing img"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">ANNOUNCEMENT HOME</div>
                                        <div className="-sub-title">DEMO</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="landing__card">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/land-img-01.jpg"
                                            width={500}
                                            height={300}
                                            alt="landing img"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">BRIDAL SHOP</div>
                                        <div className="-sub-title">DEMO</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 mt-reduce-5">
                                <div className="landing__card">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/land-img-02.jpg"
                                            width={300}
                                            height={300}
                                            objectFit="cover"
                                            alt="landing img"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">WEDDING HOME</div>
                                        <div className="-sub-title">DEMO</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="landing__card">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/land-img-03.jpg"
                                            width={300}
                                            height={300}
                                            alt="landing img"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">MAIN HOME</div>
                                        <div className="-sub-title">DEMO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="landing__image-intro pt-80 animate__animated animate__backInDown animate__delay-1s">
                        <ImagePoint
                            title="FOR YOUR BIG DAY"
                            subTitle="WEBSITE DEMOS
                            PHOTO GALLERIES"
                            src="/assets/images/h5-parallax-01.jpg"
                            width="1800"
                            height="750"
                            alt="SAVE THE DATE"
                        />
                    </div>
                    <div className="landing__ceremony">
                        <div className="-img d-flex justify-content-center align-items-center">
                            <Image
                                src="/assets/images/team-icon.png"
                                width={330}
                                height={170}
                                objectFit="cover"
                                alt="landing-img"
                            />
                        </div>
                        <Heading title="ALL FOR YOUR CEREMONY" subTitle="WEDDING PRESENTATIONS" />
                        <div className="ceremony__group container">
                            <div className="col-lg-4 col-sm-12 col-12">
                                <div className="ceremony-item">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/h5-decor-01.png"
                                            width={300}
                                            height={300}
                                            objectFit="cover"
                                            alt="ceremony image"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">INVITATION LAYOUTS</div>
                                        <div className="-sub-title">ELEGANT DESIGN</div>
                                        <div className="-des">
                                            Comes with every layout you may need, including readymade invitation and
                                            RSVP templates.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-12">
                                <div className="ceremony-item">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/h5-decor-02.png"
                                            width={300}
                                            height={300}
                                            alt="ceremony image"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">INVITATION LAYOUTS</div>
                                        <div className="-sub-title">ELEGANT DESIGN</div>
                                        <div className="-des">
                                            Comes with every layout you may need, including readymade invitation and
                                            RSVP templates.
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-12">
                                <div className="ceremony-item">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/h5-decor-03.png"
                                            width={300}
                                            height={300}
                                            alt="ceremony image"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">INVITATION LAYOUTS</div>
                                        <div className="-sub-title">ELEGANT DESIGN</div>
                                        <div className="-des">
                                            Comes with every layout you may need, including readymade invitation and
                                            RSVP templates.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="landing__image-intro pt-80">
                        <ImagePoint
                            src="/assets/images/landing/landing-bckgr-1-2048x688.jpg"
                            width="1800"
                            height="750"
                            alt="SAVE THE DATE"
                        />
                    </div>
                    <div className="landing__inner">
                        <div className="-intro">
                            <div className="-img d-flex justify-content-center align-items-center">
                                <Image
                                    src="/assets/images/team-icon.png"
                                    width={330}
                                    height={170}
                                    objectFit="cover"
                                    alt="landing-img"
                                />
                            </div>
                            <Heading title="MULTIUSE INNER PAGES" subTitle="PREDESIGNED TEMPLATES" />
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="landing__card">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/landing-inner-01.jpg"
                                            width={500}
                                            height={300}
                                            alt="landing img"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">MAIN HOME</div>
                                        <div className="-sub-title">DEMO</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12 mt-increase-5">
                                <div className="landing__card">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/landing-inner-02.jpg"
                                            width={300}
                                            height={300}
                                            objectFit="cover"
                                            alt="landing img"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">PARALLAX GALLERY</div>
                                        <div className="-sub-title">DEMO</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="landing__card">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/landing-inner-03.jpg"
                                            width={300}
                                            height={300}
                                            alt="landing img"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">ANNOUNCEMENT HOME</div>
                                        <div className="-sub-title">DEMO</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="landing__card">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/landing-inner-04.jpg"
                                            width={500}
                                            height={300}
                                            alt="landing img"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">BRIDAL SHOP</div>
                                        <div className="-sub-title">DEMO</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12 ">
                                <div className="landing__card">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/landing-inner-05.jpg"
                                            width={300}
                                            height={300}
                                            objectFit="cover"
                                            alt="landing img"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">WEDDING HOME</div>
                                        <div className="-sub-title">DEMO</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-12">
                                <div className="landing__card">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/landing/landing-inner-06.jpg"
                                            width={300}
                                            height={300}
                                            alt="landing img"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <div className="-title">MAIN HOME</div>
                                        <div className="-sub-title">DEMO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="landing__organ">
                        <div className="-title">FOR WEDDINGS & ORGANIZERS</div>
                        <div className="-sub-title">YOUR NEW SITE IS HERE</div>
                        <Button
                            className="section__button landing__button animate__animated animate__fadeInUp animate__delay-3s"
                            title="Get Theme"
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
Landing.Layout = OtherLayout;
