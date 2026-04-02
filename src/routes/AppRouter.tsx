import { lazy, useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { Routes, Route, Navigate } from 'react-router-dom';
import { projectsService } from '../services/projectsService';

const Index = lazy(() => import('../views/Index/Index'));
const Projects = lazy(() => import('../views/ProjectsView/ProjectsView'));
const AboutMe = lazy(() => import('../views/AboutMe/AboutMe'));
const Resume = lazy(() => import('../views/ResumeView/ResumeView'));
const Contact = lazy(() => import('../views/Contact/Contact'));




export const AppRouter = () => {
  const { t } = useTranslation();
  const [hasProjects, setHasProjects] = useState<boolean | null>(null);

  useEffect(() => {
    const checkProjects = async () => {
      const exists = await projectsService.checkProjectsExist();
      setHasProjects(exists);
    };
    checkProjects();
  }, []);

  if (hasProjects === null) {
    return <div className='loading-screen'>{t("global.loading")}</div>
  }

  return (
    <Routes> 
          <Route path="*" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/resume' element={<Resume />} />
          {hasProjects ? (
              <Route path='/projects' element={<Projects />} />
            ) : (
              <Route path='/projects' element={<Navigate to="/" replace />} />
            ) 
          }
    </Routes>
  );
};