import RootLayout from '@/components/layout/layout';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
    return (
        <>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </>
    );
}
