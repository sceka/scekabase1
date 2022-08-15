import HomePage from "./pages/HomePage";
import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignedInPage from "./pages/SignedInPage";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/homepage" element={<SignedInPage />} />
            </Routes>
        </Router>
    );
}

export default App;
