import Image from 'next/image';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from '../common/Button';

function ControlledCarousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="slider__img">
                        <Image
                            className="d-block w-100"
                            src="/assets/images/wedding2.jpg"
                            alt="First slide"
                            width={1000}
                            height={700}
                            objectFit="cover"
                            loading="eager"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3 className="animate__animated animate__fadeInUp animate__delay-1s">SIMONA & NOEL</h3>
                        <p className="animate__animated animate__backInDown animate__delay-2s">
                            Nulla vitae elit libero, a pharetra augue mollis interdum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slider__img">
                        <Image
                            className="d-block w-100"
                            src="/assets/images/wedding1.jpg"
                            alt="Second slide"
                            width={1000}
                            height={700}
                            objectFit="cover"
                            loading="eager"
                        />
                    </div>

                    <Carousel.Caption>
                        <h3 className="animate__animated animate__fadeInUp animate__delay-1s">MARTHA & JOEY</h3>
                        <p className="animate__animated animate__backInDown animate__delay-2s">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slider__img">
                        <Image
                            className="d-block w-100"
                            src="/assets/images/wedding3.jpg"
                            alt="Third slide"
                            width={1000}
                            height={700}
                            objectFit="cover"
                            loading="eager"
                        />
                    </div>

                    <Carousel.Caption>
                        <h3 className="animate__animated animate__fadeInUp animate__delay-1s">SIMONA & NOEL</h3>
                        <p className="animate__animated animate__backInDown animate__delay-2s">
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Button
                className="section__button slider__button animate__animated animate__fadeInUp animate__delay-3s"
                title="RSVP"
            />
        </>
    );
}

export default ControlledCarousel;
