import { cn } from "@/lib/utils";
import { motion } from "motion/react";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const GlassCard = ({
    children,
    className,
    hoverEffect = true,
    ...props
}: GlassCardProps) => {
    return (
        <div
            className={cn(
                "glass-card p-6 relative overflow-hidden group",
                hoverEffect && "cursor-pointer",
                className
            )}
            {...props}
        >
            <div className="relative z-10">{children}</div>

            {/* Subtle shine effect on hover */}
            {hoverEffect && (
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            )}
        </div>
    );
};
