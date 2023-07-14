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
                            src="/assets/images/wedding1.jpg"
                            alt="First slide"
                            width={1000}
                            height={700}
                            objectFit="cover"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>SIMONA & NOEL</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="slider__img">
                        <Image
                            className="d-block w-100"
                            src="/assets/images/wedding2.jpg"
                            alt="Second slide"
                            width={1000}
                            height={700}
                            objectFit="cover"
                        />
                    </div>

                    <Carousel.Caption>
                        <h3>MARTHA & JOEY</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                        />
                    </div>

                    <Carousel.Caption>
                        <h3>SIMONA & NOEL</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Button className="section__button slider__button" title="RSVP" />
        </>
    );
}

export default ControlledCarousel;
