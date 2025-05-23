import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type MainNavItems } from '@/types';
import { Link } from '@inertiajs/react';
import { LayoutGrid, Split } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: MainNavItems[] = [
    {
        role: 'admin',
        navGroup: [
            {
                title: 'Platform',
                items: [
                    {
                        title: 'Dashboard',
                        href: 'dashboard',
                        icon: LayoutGrid,
                    },
                    {
                        title: 'Divisions',
                        href: 'admin.divisions.index',
                        icon: Split,
                    },
                ],
            },
        ],
    },
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="sidebar">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
