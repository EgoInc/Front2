import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/home";
import Pricing from "./pages/pricing";
import About from "./pages/about-us";
import Service from "./pages/service";
import UseCase from "./pages/use-case";
import NotFound from "./pages/not-found";
import ComingSoon from "./pages/coming-soon";
import TitleUpdater from "./utils/TitleUpdater";
import ScrollToTop from "./utils/ScrollToTop";
import {routes} from "./config";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <TitleUpdater />
                <Header />
                <Routes>
                    {routes.map(({ path, element }) => (
                        <Route key={path} path={path} element={element} />
                    ))}
                </Routes>
                <Footer />
        </Router>
    );
}

export default App;
