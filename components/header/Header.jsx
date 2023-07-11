import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Header() {
    return (
        <div>
            <div className="header__main d-flex align-items-center ">
                <div className="container-fluid">
                    <div className="d-flex pl-60 pr-60 justify-content-between ">
                        <div className="header__main__search">
                            <div>
                                <i className="bi bi-search"></i>
                                <input type="text" placeholder="Search..." />
                            </div>
                        </div>
                        <nav className="header__main__content d-flex align-items-center">
                            <ul className="d-flex ">
                                <li>
                                    <Link className="has-dropdown active" href="/">
                                        Home
                                    </Link>
                                    <ul className="submenu">
                                        <li>
                                            <Link className="has-dropdown" href="/">
                                                Main Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="has-dropdown" href="/">
                                                Announcement Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="has-dropdown" href="/">
                                                Bridal Shop
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="has-dropdown" href="/">
                                                Bridal Shop
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="has-dropdown" href="/">
                                                Parallax Gallery
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="has-dropdown" href="/">
                                                Florist Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="has-dropdown" href="/">
                                                Wedding Cakes
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link className="" href="/">
                                        Pages
                                    </Link>
                                    <ul className="submenu">
                                        <li>
                                            <Link className="has-dropdown" href="/">
                                                About US
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="has-dropdown" href="/">
                                                Our Story
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="has-dropdown" href="/">
                                                Bridesmaids & Groomsmen
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="has-dropdown" href="/">
                                                Accomodation
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="has-dropdown" href="/">
                                                Gift Registry
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="has-dropdown" href="/">
                                                Our Services
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="has-dropdown" href="/">
                                                Our Story
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <Link className="" href="/">
                                        Portfolio
                                    </Link>
                                    <ul className="submenu sub-portfolio">
                                        <li>
                                            <div className="d-flex justify-content-between">
                                                <Link className="has-dropdown" href="/">
                                                    List Types
                                                </Link>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex justify-content-between">
                                                <Link className="has-dropdown" href="/">
                                                    List Layout
                                                </Link>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="d-flex justify-content-between">
                                                <Link className="has-dropdown" href="/">
                                                    Single Types
                                                </Link>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="header__main__logo">
                                <Link href="/">
                                    <Image
                                        src="/assets/images/logo/logo-dark-new-02.png"
                                        alt="header logo"
                                        width={190}
                                        height={85}
                                    />
                                    {/* <Image
                                        src="/assets/images/logo/logo-light-new-01.png"
                                        alt="header logo"
                                        width={190}
                                        height={85}
                                    /> */}
                                </Link>
                            </div>
                            <ul className="d-flex">
                                <li>
                                    <Link className="" href="/">
                                        Blog
                                    </Link>
                                </li>
                                <li>
                                    <Link className="" href="/">
                                        Shop
                                    </Link>
                                </li>
                                <li>
                                    <Link className="" href="/">
                                        Landing
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                        <div className="header__main__sidebar">
                            <div>
                                <i className="fa-solid fa-ellipsis"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__sticky"></div>
        </div>
    );
}
