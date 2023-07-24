import HeaderBottom from '@/components/header/HeaderBottom';
import Image from 'next/image';
import { useState } from 'react';
import { SwiperImage } from '@/components/common/SwiperImg';
import RootLayout from '@/components/layout/RootLayout';

export default function Faq() {
    const [isDes1, setIsDes1] = useState(false);

    const toggleDes = (e) => {
        const target = e.currentTarget;
        setIsDes1(!isDes1);

        const nextSibling = target.nextElementSibling;
        if (nextSibling) {
            nextSibling.classList.toggle('active__toggle');
        }

        // Remove "active__toggle" class from other "-des" elements
        const allDesElements = document.querySelectorAll('.-des');
        allDesElements.forEach((desElement) => {
            if (desElement !== nextSibling) {
                desElement.classList.remove('active__toggle');
            }
        });
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
                                        <div className="-title" onClick={toggleDes}>
                                            <span>HOW TO GET THERE</span>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>

                                        <div className="-des active__toggle">
                                            1 Tellus eget condimentum rhoncus, sem quam nec vitae sapien velit ut minus
                                            id quod maxime ut semper libero, sit amet adipiscing blandit vel, rhoncus
                                            venenatis sodales cumque nihil impedit quo placeat omnis voluptas luctus
                                            pulvinar, hendrerit id, lorem.
                                        </div>
                                    </div>
                                    <div className="faq__box">
                                        <div className="-title" onClick={toggleDes}>
                                            <span>WHEN YOU NEED TO BOOK</span>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>

                                        <div className="-des">
                                            2 Tellus eget condimentum rhoncus, sem quam nec vitae sapien velit ut minus
                                            id quod maxime ut semper libero, sit amet adipiscing blandit vel, rhoncus
                                            venenatis sodales cumque nihil impedit quo placeat omnis voluptas luctus
                                            pulvinar, hendrerit id, lorem.
                                        </div>
                                    </div>
                                    <div className="faq__box">
                                        <div className="-title" onClick={toggleDes}>
                                            <span>DECORATION AND STUFF</span>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>

                                        <div className="-des">
                                            3 Tellus eget condimentum rhoncus, sem quam nec vitae sapien velit ut minus
                                            id quod maxime ut semper libero, sit amet adipiscing blandit vel, rhoncus
                                            venenatis sodales cumque nihil impedit quo placeat omnis voluptas luctus
                                            pulvinar, hendrerit id, lorem.
                                        </div>
                                    </div>
                                    <div className="faq__box">
                                        <div className="-title" onClick={toggleDes}>
                                            <span>HOW TO GET THERE</span>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>

                                        <div className="-des">
                                            4 Tellus eget condimentum rhoncus, sem quam nec vitae sapien velit ut minus
                                            id quod maxime ut semper libero, sit amet adipiscing blandit vel, rhoncus
                                            venenatis sodales cumque nihil impedit quo placeat omnis voluptas luctus
                                            pulvinar, hendrerit id, lorem.
                                        </div>
                                    </div>
                                    <div className="faq__box">
                                        <div className="-title" onClick={toggleDes}>
                                            <span>PREPARE FOR BIG DAY</span>
                                            <i className="fa-solid fa-arrow-right-long"></i>
                                        </div>
                                        <div className="-des">
                                            5 Tellus eget condimentum rhoncus, sem quam nec vitae sapien velit ut minus
                                            id quod maxime ut semper libero, sit amet adipiscing blandit vel, rhoncus
                                            venenatis sodales cumque nihil impedit quo placeat omnis voluptas luctus
                                            pulvinar, hendrerit id, lorem.
                                        </div>
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
