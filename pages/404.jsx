import Button from '@/components/common/Button';
import React from 'react';

export default function NotFoundPage() {
    return (
        <main>
            <div className="not-found-page">
                <div className="container text-center">
                    <h3 className="">ERROR PAGE</h3>
                    <h4>
                        The page you are looking for doesn&apos;t exist. It may have been moved or removed altogether.
                        Please try searching for some other page, or return to the website&apos;s homepage to find what
                        you&apos;re looking for.
                    </h4>
                    <Button className="section__button not-found__button" title="Back to home" />
                </div>
            </div>
        </main>
    );
}
