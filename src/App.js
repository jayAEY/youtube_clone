import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed, SearchBar } from "./components"

// import  Navbar from "./components/Navbar";
// import { Feed } from "@mui/icons-material";
// import VideoDetail from "./components/VideoDetail";
// import ChannelDetail from "./components/ChannelDetail";
// import SearchFeed from "/componoents/SearchFeed";

const App = () => (
    <BrowserRouter>
    <Box sx = {{ backgroundColor:' #000'}}>
        <Navbar />
        <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
    </Box>
    </BrowserRouter>
)

export default App