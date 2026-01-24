import { cn } from "@/lib/utils";

interface GlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export const GlassPanel = ({
    children,
    className,
    ...props
}: GlassPanelProps) => {
    return (
        <div
            className={cn(
                "glass-panel rounded-2xl p-6 relative overflow-hidden group transition-all duration-300",
                className
            )}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="relative z-10">{children}</div>
        </div>
    );
};
