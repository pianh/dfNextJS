import React, { useEffect } from 'react';

export function LoadingScreen() {
    useEffect(() => {
        const applyKeyframes = () => {
            const boxes = document.querySelectorAll('.boxes .box');

            boxes.forEach((box, index) => {
                const keyframeName = 'loading-box' + (index + 1);
                box.style.animationName = keyframeName;
                box.style.animationDuration = '1s';
                box.style.animationIterationCount = 'infinite';
                box.style.animationPlayState = 'running';
            });
        };

        applyKeyframes();

        window.addEventListener('beforeunload', applyKeyframes);

        return () => {
            window.removeEventListener('beforeunload', applyKeyframes);
        };
    }, []);

    return (
        <div className="loading-screen-wrapper">
            <div className="boxes">
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="box">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
