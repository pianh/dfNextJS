import React from 'react';

export default function Scroll(props) {
    return (
        <div>
            <section className="scroll__area pt-80">
                <div className="container-fluid d-flex scroll-group">
                    <div className="scroll-text">
                        <i className="fa-solid fa-diamond"></i>
                        ENDLESS INSPIRATIONS {props.text1}
                    </div>
                    <div className="scroll-text">
                        <i className="fa-solid fa-diamond"></i>
                        AGNIFICENT WEDDING {props.text2}
                    </div>
                    <div className="scroll-text">
                        <i className="fa-solid fa-diamond"></i>
                        BEAUTIFUL IDEAS {props.text2}
                    </div>
                    <div className="scroll-text">
                        <i className="fa-solid fa-diamond"></i>
                        ENDLESS INSPIRATIONS {props.text4}
                    </div>
                    <div className="scroll-text">
                        <i className="fa-solid fa-diamond"></i>
                        AGNIFICENT WEDDING {props.text5}
                    </div>
                    <div className="scroll-text">
                        <i className="fa-solid fa-diamond"></i>
                        BEAUTIFUL IDEAS {props.text6}
                    </div>
                </div>
            </section>
        </div>
    );
}
