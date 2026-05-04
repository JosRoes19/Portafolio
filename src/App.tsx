import { I18nextProvider } from 'react-i18next'
import './App.css'
import i18n from './i18n/i18n'
import { AppRouter } from './routes/AppRouter'
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header';
import { ScrollTop } from "./components/TopScroll/TopScroll";
import { ToastContainer } from 'react-toastify';
import { LazyMotion, domAnimation } from "framer-motion";

function App() {

  return (
    <I18nextProvider i18n={i18n}>
      <Router>
        <LazyMotion features={domAnimation}>
          <Header />
          <main id='page-main-content'>
            <AppRouter />
          </main>
          <Footer />
          <ScrollTop />
        </LazyMotion>
      </Router>
      <ToastContainer />
    </I18nextProvider>
  )
}

export default App
