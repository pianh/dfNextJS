import Image from 'next/image';
import React from 'react';
import Button from './Button';

export default function ImagePoint({ title, subTitle, className }) {
    return (
        <div className="section__image">
            <img src="assets/images/h5-parallax-01.jpg" alt="story wedding" />
            <h3 className="section__title-3">{title}</h3>
            <p className="section__sub-title-3">{subTitle}</p>
            <Button className="section__button" title="RSVP" />
        </div>
    );
}
