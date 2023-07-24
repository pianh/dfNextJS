import HeaderBottom from '@/components/header/HeaderBottom';
import Image from 'next/image';
import { useState } from 'react';
import { SwiperImage } from '@/components/common/SwiperImg';
import RootLayout from '@/components/layout/RootLayout';

export default function Faq() {
    const [isDes1, setIsDes1] = useState(false);
    const [isDes2, setIsDes2] = useState(true);
    const [isDes3, setIsDes3] = useState(true);
    const [isDes4, setIsDes4] = useState(true);
    const [isDes5, setIsDes5] = useState(true);
    const [isDes6, setIsDes6] = useState(true);

    const toggleDes1 = () => {
        setIsDes1(!isDes1);
    };
    const toggleDes2 = () => {
        setIsDes2(!isDes2);
    };
    const toggleDes3 = () => {
        setIsDes3(!isDes3);
    };
    const toggleDes4 = () => {
        setIsDes4(!isDes4);
    };
    const toggleDes5 = () => {
        setIsDes5(!isDes5);
    };
    const toggleDes6 = () => {
        setIsDes6(!isDes6);
    };

    return (
        <main>
            <div className="faq__wrapper">
                <section className="header__faq">
                    <div className="container-fluid">
                        <HeaderBottom src="/assets/images/faq-title.jpg" text="FAQ" width={3000} height={545} />
                    </div>
                </section>
                <section className="faq__content pt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/faq/faq-h1.png"
                                        width={600}
                                        height={600}
                                        objectFit="cover"
                                        alt="faq img"
                                    />
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-12 col-lg-6 ">
                                <div>
                                    <div className="faq__box animate__animated animate__backInDown animate__delay-0.5s">
                                        <div className="-title" onClick={toggleDes1}>
                                            <span>HOW TO GET THERE</span>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                        {!isDes1 && (
                                            <div className="-des">
                                                Tellus eget condimentum rhoncus, sem quam nec vitae sapien velit ut
                                                minus id quod maxime ut semper libero, sit amet adipiscing blandit vel,
                                                rhoncus venenatis sodales cumque nihil impedit quo placeat omnis
                                                voluptas luctus pulvinar, hendrerit id, lorem.
                                            </div>
                                        )}
                                    </div>
                                    <div className="faq__box">
                                        <div className="-title" onClick={toggleDes2}>
                                            <span>WHEN YOU NEED TO BOOK</span>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                        {!isDes2 && (
                                            <div className="-des">
                                                Tellus eget condimentum rhoncus, sem quam nec vitae sapien velit ut
                                                minus id quod maxime ut semper libero, sit amet adipiscing blandit vel,
                                                rhoncus venenatis sodales cumque nihil impedit quo placeat omnis
                                                voluptas luctus pulvinar, hendrerit id, lorem.
                                            </div>
                                        )}
                                    </div>
                                    <div className="faq__box">
                                        <div className="-title" onClick={toggleDes3}>
                                            <span>DECORATION AND STUFF</span>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                        {!isDes3 && (
                                            <div className="-des">
                                                Tellus eget condimentum rhoncus, sem quam nec vitae sapien velit ut
                                                minus id quod maxime ut semper libero, sit amet adipiscing blandit vel,
                                                rhoncus venenatis sodales cumque nihil impedit quo placeat omnis
                                                voluptas luctus pulvinar, hendrerit id, lorem.
                                            </div>
                                        )}
                                    </div>
                                    <div className="faq__box">
                                        <div className="-title" onClick={toggleDes4}>
                                            <span>HOW TO GET THERE</span>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                        {!isDes4 && (
                                            <div className="-des">
                                                Tellus eget condimentum rhoncus, sem quam nec vitae sapien velit ut
                                                minus id quod maxime ut semper libero, sit amet adipiscing blandit vel,
                                                rhoncus venenatis sodales cumque nihil impedit quo placeat omnis
                                                voluptas luctus pulvinar, hendrerit id, lorem.
                                            </div>
                                        )}
                                    </div>
                                    <div className="faq__box">
                                        <div className="-title" onClick={toggleDes5}>
                                            <span>PREPARE FOR BIG DAY</span>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                        {!isDes5 && (
                                            <div className="-des">
                                                Tellus eget condimentum rhoncus, sem quam nec vitae sapien velit ut
                                                minus id quod maxime ut semper libero, sit amet adipiscing blandit vel,
                                                rhoncus venenatis sodales cumque nihil impedit quo placeat omnis
                                                voluptas luctus pulvinar, hendrerit id, lorem.
                                            </div>
                                        )}
                                    </div>
                                    <div className="faq__box">
                                        <div className="-title" onClick={toggleDes6}>
                                            <span>PHOTOGRAPHY DESTINATIONS</span>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                        {!isDes6 && (
                                            <div className="-des">
                                                Tellus eget condimentum rhoncus, sem quam nec vitae sapien velit ut
                                                minus id quod maxime ut semper libero, sit amet adipiscing blandit vel,
                                                rhoncus venenatis sodales cumque nihil impedit quo placeat omnis
                                                voluptas luctus pulvinar, hendrerit id, lorem.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="faq__slider">
                    <div className="faq__img-wrapper d-flex">
                        <SwiperImage />
                    </div>
                </section>
            </div>
        </main>
    );
}
Faq.Layout = RootLayout;
