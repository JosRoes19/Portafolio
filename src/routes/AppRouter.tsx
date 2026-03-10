import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import ProjectsView from '../views/ProjectsView/ProjectsView';
import ServicesView from '../views/ServicesView/ServicesView';


const Index = lazy(() => import('../views/Index/Index'));
const Contact = lazy(() => import('../views/Contact/Contact'));
const AboutMe = lazy(() => import('../views/AboutMe/AboutMe'));



export const AppRouter = () => {

  return (
    <Routes> 
          <Route path="*" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/aboutme' element={<AboutMe />} />
          <Route path='/projects' element={<ProjectsView />} />
          <Route path='/services' element={<ServicesView />} />
    </Routes>
  );
};