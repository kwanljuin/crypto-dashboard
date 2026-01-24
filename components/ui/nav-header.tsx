'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export const NavHeader = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        >
            <div className="mx-auto w-full bg-black border-b-4 border-white px-6 py-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative w-10 h-10 bg-primary flex items-center justify-center border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] group-hover:shadow-[4px_4px_0px_0px_var(--primary)] transition-all">
                        <span className="font-sans font-black text-black text-xl">C</span>
                    </div>
                    <span className="font-sans font-black text-2xl tracking-tighter uppercase group-hover:text-primary transition-colors">
                        Crypto<span className="text-white">Dash</span>
                    </span>
                </Link>

                <nav className="flex items-center gap-2">
                    <Link href="/coins" className="px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all border-2 border-transparent hover:border-white">
                        Markets
                    </Link>
                    <Link href="/portfolio" className="px-6 py-2 text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all border-2 border-transparent hover:border-white">
                        Portfolio
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/kwanljuin/crypto-dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 border-2 border-white hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                    >
                        <Github className="w-5 h-5" />
                    </a>

                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 border-2 border-white hover:bg-white hover:text-black transition-all shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]"
                    >
                        {mounted && theme === 'dark' ? (
                            <Sun className="w-5 h-5" />
                        ) : (
                            <Moon className="w-5 h-5" />
                        )}
                    </button>
                </div>
            </div>
        </motion.header>
    );
};
