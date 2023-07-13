import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Sidebar from '../sidebar/Sidebar';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import SocialIcon from '../common/SocialIcon';
export default function Header() {
    const [isHovered, setIsHovered] = useState(false);
    const [menuOpen, setMenuOpen] = useState(true);
    const [isSticky, setIsSticky] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const menuToggleHandler = () => {
        setMenuOpen((p) => !p);
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsSticky(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div
                id="header-sticky"
                className={`header__main d-flex align-items-center header__transparent ${
                    isSticky ? 'header-sticky' : ''
                }`}
            >
                <div className="container-fluid">
                    <div className="d-flex pl-60 pr-60 justify-content-between ">
                        <div className="header__main__search d-flex align-items-center">
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
                                            <Link className="" href="/">
                                                Main Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="" href="/">
                                                Announcement Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="" href="/">
                                                Bridal Shop
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="" href="/">
                                                Bridal Shop
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="" href="/">
                                                Parallax Gallery
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="" href="/">
                                                Florist Home
                                            </Link>
                                        </li>
                                        <li>
                                            <Link className="" href="/">
                                                Wedding Cakes
                                            </Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="has-dropdown">
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
                                    <ul className="submenu">
                                        <li className="has-dropdown">
                                            <div className="d-flex justify-content-between">
                                                <Link className="has-dropdown" href="/">
                                                    List Types
                                                </Link>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                            <ul className="sub-detail">
                                                <li>
                                                    <Link href="/">Standard List</Link>
                                                </li>
                                                <li>
                                                    <Link href="/">Gallery List</Link>
                                                </li>
                                                <li>
                                                    <Link href="/">Floating List</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="has-dropdown">
                                            <div className="d-flex justify-content-between">
                                                <Link className="has-dropdown" href="/">
                                                    List Layout
                                                </Link>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                            <ul className="sub-detail">
                                                <li>
                                                    <Link href="/">Three Column</Link>
                                                </li>
                                                <li>
                                                    <Link href="/">Three Column Grid</Link>
                                                </li>
                                                <li>
                                                    <Link href="/">Four Column</Link>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <div className="d-flex justify-content-between">
                                                <Link className="has-dropdown" href="/">
                                                    Single Types
                                                </Link>
                                                <i className="fa-solid fa-angle-right"></i>
                                            </div>
                                            <ul className="sub-detail">
                                                <li>
                                                    <Link href="/">Single One</Link>
                                                </li>
                                                <li>
                                                    <Link href="/">Single Two</Link>
                                                </li>
                                                <li>
                                                    <Link href="/">Single Three</Link>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="header__main__logo">
                                <Link href="/">
                                    <Image
                                        src="/assets/images/logo/logo-dark-new-02.png"
                                        className="items-center"
                                        alt="header logo"
                                        width={190}
                                        height={80}
                                    />
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
                        <div className="header__main__sidebar d-flex align-items-center">
                            <div
                                className={`header__main__toggle ${isHovered ? '' : 'move'}`}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                onClick={menuToggleHandler}
                            >
                                <div className="diamond-container">
                                    <i className="fa-solid fa-diamond"></i>
                                    <i className="fa-solid fa-diamond"></i>
                                    <i className="fa-solid fa-diamond"></i>
                                </div>
                            </div>
                            {!menuOpen ? (
                                <nav className="sidebar">
                                    <span className="menu__toggle__close move-right" onClick={menuToggleHandler}>
                                        <AiOutlineClose />
                                    </span>
                                    <div className="d-flex justify-content-center align-items-center flex-column">
                                        <Image
                                            src="/assets/images/sidearea-img.png"
                                            alt="wedding img"
                                            width={291}
                                            height={307}
                                        />
                                        <div className="sidebar__heading text-center">
                                            <h2>WEDDING HOUR</h2>
                                            <h3>LAGO DI GARDA</h3>
                                        </div>
                                        <div className="sidebar__des text-center">
                                            <p>
                                                4:00PM – 4:30PM <br /> Via Generale Carlo Montù 78 <br /> 22021 Bellagio
                                                CO, Italy
                                            </p>
                                        </div>
                                        <div className="sidebar__icon">
                                            <SocialIcon />
                                        </div>
                                    </div>
                                </nav>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
            <div className="header__sticky"></div>
        </div>
    );
}
