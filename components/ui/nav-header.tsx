'use client';

import Link from 'next/link';
import { useTheme } from 'next-themes';
import { Moon, Sun, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

// Temporary Button component until we implement shadcn/ui fully
const NavButton = ({ children, onClick, className }: { children: React.ReactNode, onClick?: () => void, className?: string }) => (
    <button
        onClick={onClick}
        className={`p-2 rounded-lg hover:bg-muted/20 transition-colors ${className}`}
    >
        {children}
    </button>
);

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
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        >
            <div className="mx-auto max-w-7xl glass-panel rounded-2xl px-6 py-3 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-primary/20 blur-sm group-hover:bg-primary/40 transition-colors" />
                        <span className="relative font-mono font-bold text-primary group-hover:text-primary-foreground transition-colors">C</span>
                    </div>
                    <span className="font-mono font-bold text-lg tracking-tight group-hover:text-glow transition-all">
                        Crypto<span className="text-primary">Dash</span>
                    </span>
                </Link>

                <nav className="flex items-center gap-1">
                    <Link href="/coins" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                        All Coins
                    </Link>
                    <Link href="/portfolio" className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                        Portfolio
                    </Link>
                </nav>

                <div className="flex items-center gap-2">
                    <a
                        href="https://github.com/kwanljuin/crypto-dashboard"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-muted/20 transition-colors"
                    >
                        <Github className="w-5 h-5" />
                    </a>

                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="p-2 rounded-lg hover:bg-muted/20 transition-colors"
                    >
                        {mounted && theme === 'dark' ? (
                            <Sun className="w-5 h-5 text-amber-300" />
                        ) : (
                            <Moon className="w-5 h-5 text-slate-700" />
                        )}
                    </button>
                </div>
            </div>
        </motion.header>
    );
};
