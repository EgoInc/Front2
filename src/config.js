import Home from "./pages/home";
import About from "./pages/about-us";
import Service from "./pages/service";
import UseCase from "./pages/use-case";
import Pricing from "./pages/pricing";
import ComingSoon from "./pages/coming-soon";
import NotFound from "./pages/not-found";

export const routes = [
    { path: "/", title: "Главная | Позитивус", element: <Home /> },
    { path: "/about", title: "О нас | Позитивус", element: <About /> },
    { path: "/services", title: "Услуги | Позитивус", element: <Service /> },
    { path: "/use-cases", title: "Кейсы | Позитивус", element: <UseCase /> },
    { path: "/pricing", title: "Цены | Позитивус", element: <Pricing /> },
    { path: "/contact", title: "Скоро | Позитивус", element: <ComingSoon /> },
    { path: "/blog", title: "Блог | Позитивус", element: <ComingSoon /> },
    { path: "/privacy", title: "Политика конфиденциальности | Позитивус", element: <ComingSoon /> },
    { path: "*", title: "Страница не найдена | Позитивус", element: <NotFound /> }
];