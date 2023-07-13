import SocialIcon from '../common/SocialIcon';

function Footer() {
    return (
        <footer className="footer pt-60">
            <div className="container-fluid">
                <div className="footer-top">
                    <div className="row">
                        <div className="col-lg-3 col-sm-3 col-12">
                            <div className="footer-top-left text-center">
                                <p className="footer-address section__des-4">
                                    Via Carlo Montù 78 22021 Bellagio CO, Italy
                                </p>
                                <p className="footer-pre-phone section__des-4">+11 6254 7855</p>
                                <p className="footer-phone section__des-4">+11 5488 3866</p>
                                <p className="footer-mail section__des-4">castella@example.com</p>
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 col-12">
                            <div className="footer-top-center d-flex align-items-center flex-column">
                                <img src="/assets/images/logo/logo-new-1.png" alt="logo new" />
                                <p>
                                    Semper libero, sit amet blandit vel, rhoncus venenatis luctus pulvinar, hendrerit
                                    id, lorem.
                                </p>
                                <SocialIcon />
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-3 col-12">
                            <div className="footer-top-right text-center">
                                <span>
                                    <h4 className="section__des-4">Working hours:</h4>
                                    <h3 className="section__des-4">Monday to Friday 9am - 5pm</h3>
                                </span>
                                <div className="footer-input">
                                    <input type="text" name="" id="" placeholder="Your mail..." />
                                    <i class="fa-solid fa-arrow-right"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom pt-60">
                    <div className="d-flex align-items-center justify-content-center">
                        © 2023 Qode Interactive, All Rights Reserved
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
