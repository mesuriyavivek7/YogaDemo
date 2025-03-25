import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flame, Eye, EyeOff, Lock, User, Activity, Droplet, Triangle } from 'lucide-react';
import { Navigate, useNavigate } from 'react-router-dom';

const AnimatedBackground = () => {
    const floatingVariants = {
        float: {
            y: [0, -20, 0],
            transition: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
                variants={floatingVariants}
                animate="float"
                className="absolute top-20 left-20 opacity-30"
            >
                <Triangle className="w-16 h-16 text-purple-500 rotate-45" />
            </motion.div>
            <motion.div
                variants={floatingVariants}
                animate="float"
                className="absolute bottom-30 right-30 opacity-20"
            >
                <Activity className="w-24 h-24 text-blue-500" />
            </motion.div>
            <motion.div
                variants={floatingVariants}
                animate="float"
                className="absolute top-1/3 left-1/4 opacity-25"
            >
                <Droplet className="w-20 h-20 text-indigo-500" />
            </motion.div>
        </div>
    );
};

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const titleVariants = {
        initial: { opacity: 0, y: -50 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const letterVariants = {
        initial: { opacity: 0, y: 50 },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/dashboard')
        console.log('Login attempted:', { email, password });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4 relative">
            <AnimatedBackground />
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.5,
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
                className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl w-full max-w-md p-8 space-y-6 relative z-10"
            >
                <div className="flex items-center justify-center mb-6">
                    <motion.div
                        whileHover={{
                            rotate: 360,
                            scale: 1.1
                        }}
                        transition={{
                            duration: 0.6,
                            type: "spring"
                        }}
                    >
                        <Flame className="w-16 h-16 text-purple-600" />
                    </motion.div>
                    <motion.h1
                        variants={titleVariants}
                        initial="initial"
                        animate="animate"
                        className="text-3xl font-bold text-gray-800 ml-4 flex overflow-hidden"
                    >
                        {['Y', 'o', 'g', 'a', ' ', 'D', 'a', 's', 'h', 'b', 'o', 'a', 'r', 'd'].map((char, index) => (
                            <motion.span
                                key={index}
                                variants={letterVariants}
                                className={char === ' ' ? 'mx-1' : ''}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <User className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Lock className="w-5 h-5 text-gray-400" />
                        </div>
                        <input
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        >
                            {showPassword ? (
                                <EyeOff className="w-5 h-5 text-gray-400" />
                            ) : (
                                <Eye className="w-5 h-5 text-gray-400" />
                            )}
                        </button>
                    </motion.div>

                    <motion.button
                        whileHover={{
                            scale: 1.05,
                            boxShadow: "0px 0px 8px rgb(168, 85, 247)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 cursor-pointer rounded-lg hover:bg-purple-700 transition-colors"
                    >
                        Login
                    </motion.button>
                </form>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-center"
                >
                    <a href="#" className="text-sm text-purple-600 hover:underline">
                        Forgot Password?
                    </a>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default Login;