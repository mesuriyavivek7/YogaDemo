import React, { useState } from 'react';
import { motion } from 'framer-motion';
import MobileSideNavbar from './MobileSideNavbar';
import SideNavbar from './SideNavbar';
import Navbar from './Navbar';
import yoga1 from "../assets/yoga1.mp4"
import yoga3 from "../assets/yoga3.mp4"
import yoga4 from "../assets/yoga4.mp4"
import yoga5 from "../assets/yoga5.mp4"
import yoga6 from "../assets/yoga6.mp4"
import yoga7 from "../assets/yoga7.mp4"

import yoga1i from "../assets/yoga1.png"
import yoga3i from "../assets/yoga3.png"
import yoga4i from "../assets/yoga4.png"
import yoga5i from "../assets/yoga5.png"
import yoga6i from "../assets/yoga6.png"
import yoga7i from "../assets/yoga7.png"

// Sample video data
const initialVideos = [
    { id: '1', title: 'Yoga Basics', thumbnail: yoga1i, videoUrl: yoga1, duration: '12:34' },
    { id: '2', title: 'Advanced Stretching', thumbnail: yoga7i, videoUrl: yoga7, duration: '18:45' },
    { id: '3', title: 'Meditation Techniques', thumbnail: yoga3i, videoUrl: yoga3, duration: '22:11' },
    { id: '4', title: 'Power Yoga', thumbnail: yoga4i, videoUrl: yoga4, duration: '45:00' },
    { id: '5', title: 'Relaxation Yoga', thumbnail: yoga5i, videoUrl: yoga5, duration: '30:00' },
    { id: '6', title: 'Morning Flow', thumbnail: yoga6i, videoUrl: yoga6, duration: '20:00' }
];

const Dashboard = () => {
    const [videos, setVideos] = useState(initialVideos);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
    const [hoveredVideoId, setHoveredVideoId] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null); // Stores selected video for modal

    // Drag and Drop Handlers
    const handleDragStart = (e, video) => {
        e.dataTransfer.setData('text/plain', video.id);
    };

    const handleDragOver = (e) => e.preventDefault();

    const handleDrop = (e, targetVideo) => {
        e.preventDefault();
        const draggedVideoId = e.dataTransfer.getData('text/plain');
        const draggedVideo = videos.find(v => v.id === draggedVideoId);
        if (!draggedVideo || draggedVideo.id === targetVideo.id) return;

        const updatedVideos = [...videos];
        const draggedIndex = updatedVideos.findIndex(v => v.id === draggedVideo.id);
        const targetIndex = updatedVideos.findIndex(v => v.id === targetVideo.id);

        updatedVideos.splice(draggedIndex, 1);
        updatedVideos.splice(targetIndex, 0, draggedVideo);
        setVideos(updatedVideos);
    };

    return (
        <div className="flex h-screen bg-gradient-to-br from-blue-50 to-purple-100 relative">
            {/* Mobile Sidebar */}
            <MobileSideNavbar
                isOpen={isMobileSidebarOpen}
                onClose={() => setIsMobileSidebarOpen(false)}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            {/* Desktop Sidebar */}
            <SideNavbar activeTab={activeTab} setActiveTab={setActiveTab} />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col relative z-30">
                {/* Navbar */}
                <Navbar
                    activeTab={activeTab}
                    onMobileSidebarToggle={() => setIsMobileSidebarOpen(true)}
                />

                {/* Content Area */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 overflow-y-auto">
                    {activeTab === 'dashboard' ? (
                        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white/80 backdrop-blur-lg rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-semibold text-purple-800">Total Videos</h3>
                                <div className="text-4xl font-bold text-purple-600 mt-4">{videos.length}</div>
                            </div>
                            <div className="bg-white/80 backdrop-blur-lg rounded-lg shadow-md p-6">
                                <h3 className="text-xl font-semibold text-purple-800">Total Watch Time</h3>
                                <div className="text-4xl font-bold text-purple-600 mt-4">
                                    {videos.reduce((total, video) => {
                                        const [minutes, seconds] = video.duration.split(':').map(Number);
                                        return total + minutes * 60 + seconds;
                                    }, 0)} mins
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {videos.map((video) => (
                                <motion.div
                                    key={video.id}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, video)}
                                    onDragOver={handleDragOver}
                                    onDrop={(e) => handleDrop(e, video)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onMouseEnter={() => setHoveredVideoId(video.id)}
                                    onMouseLeave={() => setHoveredVideoId(null)}
                                    onClick={() => setSelectedVideo(video)} // Open modal on click
                                    className="bg-white/80 backdrop-blur-lg rounded-lg overflow-hidden shadow-md cursor-pointer relative"
                                >
                                    {hoveredVideoId === video.id ? (
                                        <video src={video.videoUrl} className="w-full h-48 object-cover" autoPlay loop muted />
                                    ) : (
                                        <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover" />
                                    )}
                                    <div className="p-4">
                                        <h3 className="font-bold text-lg text-purple-800">{video.title}</h3>
                                        <p className="text-purple-600">{video.duration}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>

                {/* Video Modal */}
                {selectedVideo && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w-3/4 lg:w-1/2">
                            <div className="flex justify-between items-center p-4 border-b">
                                <h2 className="text-xl font-bold text-purple-800">{selectedVideo.title}</h2>
                                <button onClick={() => setSelectedVideo(null)} className="text-red-500 font-bold text-lg">✖</button>
                            </div>
                            <video src={selectedVideo.videoUrl} controls autoPlay className="w-full h-auto" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;