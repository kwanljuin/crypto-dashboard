"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
    LayoutDashboard,
    BarChart3,
    Wallet,
    ArrowLeftRight,
    Briefcase,
    Settings,
    Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/' },
    { icon: BarChart3, label: 'Markets', href: '/markets' },
    { icon: Briefcase, label: 'Portfolio', href: '/portfolio' },
    { icon: ArrowLeftRight, label: 'Exchange', href: '/exchange' },
    { icon: Wallet, label: 'Wallet', href: '/wallet' },
    { icon: Settings, label: 'Settings', href: '/settings' },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 h-screen w-20 hidden md:flex flex-col items-center py-8 z-50 glass-panel border-r border-white/5">
            <div className="mb-12">
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <Zap className="text-black w-7 h-7 fill-current" />
                </div>
            </div>

            <nav className="flex-1 flex flex-col gap-4">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "relative group p-3 rounded-xl transition-all duration-300",
                                isActive ? "bg-primary/20 text-primary" : "text-white/40 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />

                            {/* Tooltip */}
                            <div className="absolute left-full ml-4 px-3 py-1.5 bg-black border border-white/10 rounded-md text-[10px] uppercase tracking-widest text-white opacity-0 group-hover:opacity-100 translate-x-[-10px] group-hover:translate-x-0 transition-all pointer-events-none whitespace-nowrap z-[60] font-mono">
                                {item.label}
                            </div>

                            {/* Active Indicator */}
                            {isActive && (
                                <motion.div
                                    layoutId="sidebar-active"
                                    className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-primary rounded-r-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                        </Link>
                    );
                })}
            </nav>

            <div className="mt-auto">
                <button className="p-3 rounded-xl text-white/30 hover:text-white hover:bg-white/5 transition-all">
                    <Settings size={24} />
                </button>
            </div>
        </aside>
    );
}
