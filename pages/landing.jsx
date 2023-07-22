import Heading from '@/components/common/Heading';
import OtherLayout from '@/components/layout/OtherLayout';
import Image from 'next/image';
import React from 'react';

export default function Landing() {
    return (
        <main>
            <div className="landing__wrapper">
                <div className="landing__intro">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="landing__heading">
                                <div className="-title">CELEBRATE LOVE WIDTH CASTELLA</div>
                                <div className="-sub-title">ELEGANT WEDDING THEME</div>
                            </div>
                        </div>
                        <div className="col-lg-7">
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
                            alt="get-img"
                        />
                    </div>
                    <Heading title="WEDDING WEBSITES" />
                </div>
            </div>
        </main>
    );
}
Landing.Layout = OtherLayout;
