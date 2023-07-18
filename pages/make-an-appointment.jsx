import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import ImageHighlight from '@/components/common/ImageHighlight';
import Image from 'next/image';
import React from 'react';

export default function MakeAnAppointment() {
    return (
        <main>
            <div className="maa__wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-6">
                            <div className="maa-left">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/p9-img-01.jpg"
                                        width={1000}
                                        height={1000}
                                        objectFit="cover"
                                        alt="maa image"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-6">
                            <div className="maa-right d-flex flex-column text-center align-items-center">
                                <ImageHighlight
                                    src="/assets/images/bird.png"
                                    width="300"
                                    height="160"
                                    alt="image bird"
                                />
                                <div className="maa__heading">
                                    <Heading title="READY TO REQUEAST AN APPOINTMENT?" subTitle="WHERE IT ALL BEGINS" />
                                </div>
                                <div className="maa__form row">
                                    <div className="col-12 col-sm-12 col-lg-12">
                                        <input placeholder="Appointment type" />
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-6">
                                        <input placeholder="Date" />
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-6">
                                        <input placeholder="Location" />
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-6">
                                        <input type="date" placeholder="Date" />
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-6">
                                        <input placeholder="Standard package" />
                                    </div>
                                    <div className="col-12 col-sm-12 col-lg-12">
                                        <input placeholder="Your Name" />
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-6">
                                        <input type="text" placeholder="Phone Number" />
                                    </div>
                                    <div className="col-12 col-sm-6 col-lg-6">
                                        <input type="email" placeholder="E-mail" />
                                    </div>
                                    <div className="col-12 col-sm-12 col-lg-12">
                                        <p>
                                            Share with us your wedding theme, gown styles that you like and any
                                            additional information you think will be useful to find your dress!
                                        </p>
                                    </div>
                                    <div className="col-12 col-sm-12 col-lg-12">
                                        <textarea placeholder="Your message..."></textarea>
                                    </div>
                                    <div className="col-12">
                                        <Button className="section__button maa__button" title="Book your appointment" />
                                    </div>
                                </div>
                                <div className="maa__gallery">
                                    <div className="row">
                                        <div className="col-12 col-sm-4 col-lg-4 col-xl-4 -item">
                                            <div className="-img">
                                                <Image
                                                    src="/assets/images/maa/ig-sidebar-blog-1.jpg"
                                                    width={315}
                                                    height={300}
                                                    objectFit="cover"
                                                    alt="galley image"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4 col-lg-4 col-xl-4 -item">
                                            <div className="-img">
                                                <Image
                                                    src="/assets/images/maa/ig-sidebar-blog-2.jpg"
                                                    width={315}
                                                    height={300}
                                                    objectFit="cover"
                                                    alt="galley image"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4 col-lg-4 col-xl-4 -item">
                                            <div className="-img">
                                                <Image
                                                    src="/assets/images/maa/ig-sidebar-blog-3.jpg"
                                                    width={315}
                                                    height={300}
                                                    objectFit="cover"
                                                    alt="galley image"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4 col-lg-4 col-xl-4 -item">
                                            <div className="-img">
                                                <Image
                                                    src="/assets/images/maa/ig-sidebar-blog-4.jpg"
                                                    width={315}
                                                    height={300}
                                                    objectFit="cover"
                                                    alt="galley image"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4 col-lg-4 col-xl-4 -item">
                                            <div className="-img">
                                                <Image
                                                    src="/assets/images/maa/ig-sidebar-blog-5.jpg"
                                                    width={315}
                                                    height={300}
                                                    objectFit="cover"
                                                    alt="galley image"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4 col-lg-4 col-xl-4 -item">
                                            <div className="-img">
                                                <Image
                                                    src="/assets/images/maa/ig-sidebar-blog-6.jpg"
                                                    width={315}
                                                    height={300}
                                                    objectFit="cover"
                                                    alt="galley image"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
