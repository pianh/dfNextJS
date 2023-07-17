import Heading from '@/components/common/Heading';
import Map from '@/components/common/Map';
import Image from 'next/image';

function GetInTouch() {
    return (
        <main>
            <div className="get__wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="get__left d-flex justify-content-center flex-column">
                                <div className="-img d-flex justify-content-center align-items-center">
                                    <Image
                                        src="/assets/images/team-icon.png"
                                        width={330}
                                        height={170}
                                        objectFit="cover"
                                        alt="get-img"
                                    />
                                </div>
                                <Heading title="GET IN TOUCH" subTitle="THEME HENDRERIT ID, LOREM" />
                                <div className="get__contact">
                                    <h1>CONTACT US</h1>
                                    <div className="text-center d-flex flex-column">
                                        <p className="footer-address section__des-4">
                                            Via Carlo Montù 78 22021 Bellagio CO, Italy
                                        </p>
                                        <p className="footer-pre-phone section__des-4">+11 6254 7855</p>
                                        <p className="footer-phone section__des-4">+11 5488 3866</p>
                                        <p className="footer-mail section__des-4">castella@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <div className="map__area">
                                <Map />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default GetInTouch;
