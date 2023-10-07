import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ConfigProvider } from "antd";

function App() {
    return (
        <BrowserRouter>
            <ConfigProvider
                theme={{ token: { fontFamily: "Plus Jakarta Sans" } }}
            >
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </ConfigProvider>
        </BrowserRouter>
    );
}

export default App;
