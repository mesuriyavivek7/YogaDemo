import {
    LayoutGrid,
    Video,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileSideNavbar = ({ isOpen, onClose, activeTab, setActiveTab }) => {
    const sidebarVariants = {
        hidden: { x: '-100%' },
        visible: { x: 0 }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={sidebarVariants}
                    className="fixed inset-y-0 left-0 w-64 bg-white/90 backdrop-blur-lg shadow-2xl z-50 overflow-hidden"
                >
                    <div className="p-5 border-b flex items-center justify-between h-[73px]">
                        <h2 className="font-bold text-xl text-purple-800">Yoga</h2>
                        <button
                            onClick={onClose}
                            className="text-purple-600 hover:text-purple-800"
                        >
                            Close
                        </button>
                    </div>
                    <nav className="mt-10">
                        {[
                            { icon: LayoutGrid, text: 'Dashboard', tab: 'dashboard' },
                            { icon: Video, text: 'Videos', tab: 'videos' }
                        ].map(({ icon: Icon, text, tab }) => (
                            <div
                                key={tab}
                                className={`cursor-pointer flex items-center p-4 hover:bg-purple-100 
                                ${activeTab === tab ? 'bg-purple-100 text-purple-700' : 'text-gray-700'}`}
                                onClick={() => {
                                    setActiveTab(tab);
                                    onClose();
                                }}
                            >
                                <Icon className="mr-3 text-purple-600" />
                                <span>{text}</span>
                            </div>
                        ))}
                    </nav>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MobileSideNavbar;