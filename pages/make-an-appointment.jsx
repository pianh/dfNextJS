import Heading from '@/components/common/Heading';
import ImageHighlight from '@/components/common/ImageHighlight';
import Image from 'next/image';
import React from 'react';

export default function MakeAnAppointment() {
    return (
        <main>
            <div className="maa__wrapper">
                <div className="container-fluid ">
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
                            <ImageHighlight src="/assets/images/bird.png" width="300" height="160" alt="image bird" />
                            <div className="maa__heading">
                                <Heading title="READY TO REQUEAST AN APPOINTMENT?" subTitle="WHERE IT ALL BEGINS" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
