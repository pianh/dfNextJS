import SocialIcon from '../common/SocialIcon';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-4 col-12">
                            <p className="footer-address">
                                Via Carlo Montù 78 <br /> 22021 Bellagio CO, Italy
                            </p>
                            <p className="footer-pre-phone">+11 6254 7855</p>
                            <p className="footer-phone">+11 5488 3866</p>
                            <p className="footer-mail">castella@example.com</p>
                        </div>
                        <div className="col-lg-4 col-sm-4 col-12">
                            <img src="/assets/images/logo/logo-new-1.png" alt="logo new" />
                            <p>
                                Semper libero, sit amet blandit vel, rhoncus venenatis luctus pulvinar, hendrerit id,
                                lorem.
                            </p>
                            <SocialIcon />
                        </div>
                        <div className="col-lg-4 col-sm-4 col-12">
                            <span>
                                <h4>Working hours:</h4>
                                <h3>Monday to Friday 9am - 5pm</h3>
                            </span>
                            <div className="footer-input">
                                <input type="text" name="" id="" placeholder="Your mail..." />
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="d-flex align-items-center justify-content-center">
                    © 2023 Qode Interactive, All Rights Reserved
                </div>
            </div>
        </footer>
    );
}

export default Footer;
