import { HashRouter, Routes, Route } from "react-router-dom";
import PhotoList from "./pages/PhotoList";
import PhotoDetail from "./pages/PhotoDetail";

export default function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<PhotoList />} />
                <Route path="/photos/:id" element={<PhotoDetail />} />
            </Routes>
        </HashRouter>
    );
}