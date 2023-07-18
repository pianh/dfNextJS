import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/styles/globals.scss';
import 'animate.css';

import RootLayout from '@/components/layout/layout';
import { LoadingScreen } from '@/components/common/LoadingScreen';

export default function App({ Component, pageProps }) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data loading
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }, []);

    return (
        <>
            {isLoading ? (
                <LoadingScreen />
            ) : (
                <RootLayout>
                    <Component {...pageProps} />
                </RootLayout>
            )}
        </>
    );
}
