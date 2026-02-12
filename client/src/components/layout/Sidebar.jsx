import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    LayoutDashboard,
    Activity,
    AlertTriangle,
    FileText,
    GitBranch,
    Settings
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', to: '/' },
    { icon: Activity, label: 'Metrics', to: '/metrics' },
    { icon: AlertTriangle, label: 'Alerts', to: '/alerts' },
    { icon: FileText, label: 'Reports', to: '/reports' },
    { icon: GitBranch, label: 'Baselines', to: '/baselines' },
    { icon: Settings, label: 'Settings', to: '/settings' },
];

export function Sidebar({ className }) {
    return (
        <div className={cn("pb-12 h-screen border-r bg-card w-64 fixed left-0 top-0 z-30 hidden lg:block", className)}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-xl font-bold tracking-tight text-primary">
                        PerfDash
                    </h2>
                    <div className="space-y-1">
                        {sidebarItems.map((item) => (
                            <Button
                                key={item.to}
                                variant="ghost"
                                className="w-full justify-start"
                                asChild
                            >
                                <NavLink
                                    to={item.to}
                                    className={({ isActive }) =>
                                        cn(
                                            "flex items-center gap-3 px-3 py-2 rounded-md transition-all hover:bg-accent hover:text-accent-foreground",
                                            isActive ? "bg-secondary text-secondary-foreground font-medium" : "text-muted-foreground"
                                        )
                                    }
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.label}
                                </NavLink>
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
