import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Characters from "./pages/Characters";
import Planets from "./pages/Planets";
import Starships from "./pages/Starships";
import NotFound from "./components/NotFound";

export default function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Characters />} />
                <Route path="/planets" element={<Planets />} />
                <Route path="/starships" element={<Starships />} />
            </Routes>
        </>
    );
}
