import {
    LayoutGrid,
    Video,
} from 'lucide-react';

const SideNavbar = ({ activeTab, setActiveTab }) => {
    return (
        <div className="bg-white/80 backdrop-blur-lg shadow-2xl relative z-20 w-64 hidden md:block">
            <div className="p-5 border-b flex items-center justify-between h-[73px]">
                <h2 className="font-bold text-xl text-purple-800">Yoga</h2>
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
                        onClick={() => setActiveTab(tab)}
                    >
                        <Icon className="mr-3 text-purple-600" />
                        <span>{text}</span>
                    </div>
                ))}
            </nav>
        </div>
    );
};

export default SideNavbar;