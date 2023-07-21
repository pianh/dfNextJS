import Button from '@/components/common/Button';
import Heading from '@/components/common/Heading';
import SocialIcon from '@/components/common/SocialIcon';
import { SwiperImage } from '@/components/common/SwiperImg';
import RootLayout from '@/components/layout/layout';
import Image from 'next/image';
import React from 'react';

export default function blog() {
    return (
        <div className="blog__wrapper">
            <section className="container">
                <div className="blog__cate">
                    <span className="-level-1">Home</span>
                    <span className="-level-3">/ Blog right sidebar</span>
                </div>
                <div className="blog__content">
                    <div className="row">
                        <div className="blog__left col-12 col-sm-12 col-lg-9">
                            <div className="blog__happy">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/blog/p9-title-img-01.jpg"
                                        width={1000}
                                        height={500}
                                        alt="happy image"
                                    />
                                </div>
                                <Heading
                                    title="CHOOSE YOUR TRUE HAPPINES"
                                    subTitle="NOVEMBER 28, 2022 EVENTS"
                                    desc="Tellus eget condimentum rhoncus, sem quam nec vitae sapien laoreet semper libero, sit amet adipiscing blandit vel, rhoncus bibendum nullam quis ante. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo mullam dictum felis eu pede mollis pretium. Integer tincidunt venenatis tempus. Etiam sit amet orci eget eros faucibus. Etiam ultricies feugiat a aliquam lorem ante, dapibus in, viverra quisnisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Duis leo vel augue luctus pulvinar, hendrerit id, lorem.."
                                />
                                <div className="blog__btn">
                                    <Button className="" title="READ MORE" />
                                </div>
                            </div>
                            <div className="blog__begin">
                                <div className="-video">
                                    <iframe
                                        width="1000"
                                        height="400"
                                        src="https://www.youtube.com/embed/xtQtGKL0NCI"
                                        frameborder="0"
                                        allowfullscreen
                                    ></iframe>
                                </div>
                                <Heading
                                    title="CHOOSE YOUR TRUE HAPPINES"
                                    subTitle="NOVEMBER 28, 2022 EVENTS"
                                    desc="Tellus eget condimentum rhoncus, sem quam nec vitae sapien laoreet semper libero, sit amet adipiscing blandit vel, rhoncus bibendum nullam quis ante. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo mullam dictum felis eu pede mollis pretium. Integer tincidunt venenatis tempus. Etiam sit amet orci eget eros faucibus. Etiam ultricies feugiat a aliquam lorem ante, dapibus in, viverra quisnisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Duis leo vel augue luctus pulvinar, hendrerit id, lorem.."
                                />
                                <div className="blog__btn">
                                    <Button className="" title="READ MORE" />
                                </div>
                            </div>
                            <article className="blog__intro">
                                <h3>
                                    “Walking with your hands in mine and mine in yours, that&apos;s exactly where I want
                                    to be always.”
                                </h3>
                                <h4>Unknown</h4>
                            </article>
                            <div className="blog__ending">
                                <div className="-img">
                                    <Image
                                        src="/assets/images/blog/blog-list-01.jpg"
                                        width={1000}
                                        height={500}
                                        alt="happy image"
                                    />
                                </div>
                                <Heading
                                    title="CHOOSE YOUR TRUE HAPPINES"
                                    subTitle="NOVEMBER 28, 2022 EVENTS"
                                    desc="Tellus eget condimentum rhoncus, sem quam nec vitae sapien laoreet semper libero, sit amet adipiscing blandit vel, rhoncus bibendum nullam quis ante. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo mullam dictum felis eu pede mollis pretium. Integer tincidunt venenatis tempus. Etiam sit amet orci eget eros faucibus. Etiam ultricies feugiat a aliquam lorem ante, dapibus in, viverra quisnisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Duis leo vel augue luctus pulvinar, hendrerit id, lorem.."
                                />
                                <div className="blog__btn">
                                    <Button className="" title="READ MORE" />
                                </div>
                            </div>
                            <article className="blog__banner">
                                <div className="-bg"></div>
                                <h3>She said yes</h3>
                            </article>
                        </div>
                        <div className="blog__right col-12 col-sm-12 col-lg-3 text-center">
                            <div className="blog__seach">
                                <input placeholder="Search..." />
                                <i class="fa-solid fa-magnifying-glass"></i>
                            </div>
                            <div className="blog__social">
                                <div className="blog-user">
                                    <Image
                                        src="/assets/images/blog/user-sidebar.png"
                                        alt="Blog avatar"
                                        width={250}
                                        height={250}
                                        objectFit="cover"
                                    />
                                </div>
                                <SocialIcon />
                            </div>
                            <div className="blog__posts">
                                <span className="blog__posts-heading">LATEST POSTS:</span>
                                <div className="blog__post-item">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/blog/sidebar-blog-1.jpg"
                                            width={200}
                                            height={100}
                                            alt="post image"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <h3>Write your love story </h3>
                                        <h4>December 29, 2022</h4>
                                    </div>
                                </div>
                                <div className="blog__post-item">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/blog/sidebar-blog-2.jpg"
                                            width={200}
                                            height={100}
                                            alt="post image"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <h3>Write your love story </h3>
                                        <h4>December 29, 2022</h4>
                                    </div>
                                </div>
                                <div className="blog__post-item">
                                    <div className="-img">
                                        <Image
                                            src="/assets/images/blog/sidebar-blog-3.jpg"
                                            width={200}
                                            height={100}
                                            alt="post image"
                                        />
                                    </div>
                                    <div className="-heading">
                                        <h3>Write your love story </h3>
                                        <h4>December 29, 2022</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog__slider">
                <div className="container">
                    <div className="blog__img-wrapper d-flex">
                        <SwiperImage />
                    </div>
                </div>
            </section>
        </div>
    );
}
