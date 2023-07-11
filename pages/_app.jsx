import '@/styles/globals.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'animate.css';

import RootLayout from '@/components/layout/layout';
export default function App({ Component, pageProps }) {
    return (
        <>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
        </>
    );
}
