import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Index = lazy(() => import('../views/Index/Index'));
const Contact = lazy(() => import('../views/Contact/Contact'));
const AboutMe = lazy(() => import('../views/AboutMe/AboutMe'));
const ResumeView = lazy(() => import('../views/ResumeView/ResumeView'));

const SuspenseFallback = () => {
  const { t } = useTranslation();
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh', color: 'white' }}>
      {t('app.loading')}
    </div>
  );
};

export const AppRouter = () => {
  return (
    <Suspense fallback={<SuspenseFallback />}>
      <Routes>
        <Route path="*" element={<Index />} />
        <Route path="/home" element={<Index />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='/resume' element={<ResumeView />} />
      </Routes>
    </Suspense>
  );
};