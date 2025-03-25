import {
    Flame,
    User,
    Settings,
    LogOut,
} from 'lucide-react';
import { motion } from 'framer-motion';


const Navbar = ({ activeTab, onMobileSidebarToggle }) => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-lg p-4 flex justify-between items-center h-[73px]"
        >
            <div className="flex items-center">
                <Flame
                    className="w-10 h-10 text-purple-600 mr-4 md:hidden"
                    onClick={onMobileSidebarToggle}
                />
                <h1 className="text-2xl font-bold text-purple-800">
                    {activeTab === 'dashboard' ? 'Dashboard' : 'Videos'}
                </h1>
            </div>
            <div className="flex items-center space-x-4">
                <User className="text-purple-600" />
                <Settings className="text-purple-600" />
                <LogOut className="text-red-500" />
            </div>
        </motion.nav>
    );
};

export default Navbar;