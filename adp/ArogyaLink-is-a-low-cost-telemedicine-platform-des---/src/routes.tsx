import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';

const AboutPage = lazy(() => import('./pages/about'));
const ServicesPage = lazy(() => import('./pages/services'));
const HowItWorksPage = lazy(() => import('./pages/how-it-works'));
const ContactPage = lazy(() => import('./pages/contact'));
const YogaMedicinePage = lazy(() => import('./pages/yoga-medicine'));

// 404 page for all environments
const NotFoundPage = lazy(() => import('./pages/_404'));

export const routes: RouteObject[] = [
  { path: '/', element: <HomePage /> },
  { path: '/about', element: <AboutPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/how-it-works', element: <HowItWorksPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/yoga-medicine', element: <YogaMedicinePage /> },
  { path: '*', element: <NotFoundPage /> },
];

export type Path = '/' | '/about' | '/services' | '/how-it-works' | '/contact';
export type Params = Record<string, string | undefined>;
