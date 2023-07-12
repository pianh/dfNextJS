import React from 'react';

export default function Heading({ title, subTitle, desc }) {
    return (
        <div className="text-center">
            <h3 className="section__title">{title}</h3>
            <h4 className="section__sub__title">{subTitle}</h4>
            <p className="section__des__title">{desc}</p>
        </div>
    );
}
