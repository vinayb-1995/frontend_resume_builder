import { Route, Routes } from "react-router-dom";
import Intro from "../pages/Intro/Intro";
import PageNotFound from "../pages/404pgae/PageNotFound";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Skills from "../pages/Skills/Skills";
import Projects from "../pages/Projects/Projects";
import Experiences from "../pages/Experiences/Experiences";
import Education from "../pages/Education/Education";

const routes = [
  { path: "/", element: <Intro/> },
  { path: "/about", element: <About/> },
  { path: "/skills", element: <Skills /> },
  { path: "/projects", element: <Projects /> },
  { path: "/experiences", element: <Experiences /> },
  { path: "/education", element: <Education /> },
  { path: "/contact", element: <Contact/> },
];
const AppRouter = () => {
  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
export default AppRouter;
