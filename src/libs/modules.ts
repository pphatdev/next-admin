import { ChartPieIcon, FolderArrowDownIcon, FolderOpenIcon, UserGroupIcon } from "@heroicons/react/24/outline";

export const modules = [
    {
        id: 1,
        name: 'Dashboard',
        href: '/',
        children: [
            { id: 1, name: 'Overview', href: '/dashboard', initial: "P", icon: ChartPieIcon, new: 1, current: true },
        ]
    },
]