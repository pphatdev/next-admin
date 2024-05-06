import { ChartPieIcon, RadioIcon, UserGroupIcon, UsersIcon } from "@heroicons/react/24/outline";

export const modules = [
    {
        id: 1,
        name: 'Dashboard',
        href: '/',
        children: [
            { id: 1, name: 'Overview', href: '/dashboard', initial: "P", icon: ChartPieIcon, new: 0, current: true },
            { id: 2, name: 'Recruiment', href: '/users', initial: "P", icon: UsersIcon, new: 10, current: true },
            { id: 3, name: 'Employees', href: '/users', initial: "P", icon: UserGroupIcon, new: 1, current: true },
            { id: 4, name: 'Appraisal', href: '/users', initial: "P", icon: RadioIcon, new: 0, current: true },
        ]
    },
    {
        id: 2,
        name: 'Recruitment',
        href: '/',
        children: [
            { id: 1, name: 'Announcement', href: '/users', initial: "P", icon: UsersIcon, new: 10, current: true },
            { id: 2, name: 'Candidate', href: '/users', initial: "P", icon: UserGroupIcon, new: 1, current: true },
            { id: 3, name: 'Short list', href: '/users', initial: "P", icon: RadioIcon, new: 0, current: true },
            { id: 4, name: 'Quiz Test', href: '/users', initial: "P", icon: RadioIcon, new: 0, current: true },
            { id: 5, name: 'Interview', href: '/users', initial: "P", icon: RadioIcon, new: 0, current: true },
        ]
    },
    {
        id: 3,
        name: 'Employee',
        href: '/',
        children: [
            { id: 1, name: 'Present', href: '/users', initial: "P", icon: UsersIcon, new: 10, current: true },
            { id: 2, name: 'Resigned', href: '/users', initial: "P", icon: UserGroupIcon, new: 1, current: true },
        ]
    },
    {
        id: 4,
        name: 'Time off',
        href: '/',
        children: [
            { id: 1, name: 'Attendance', href: '/users', initial: "P", icon: UsersIcon, new: 10, current: true },
            { id: 2, name: 'Leave', href: '/users', initial: "P", icon: UserGroupIcon, new: 1, current: true },
        ]
    },
    {
        id: 5,
        name: 'Appraisals',
        href: '/',
        children: [
            { id: 1, name: 'Promote', href: '/users', initial: "P", icon: UsersIcon, new: 10, current: true },
            { id: 2, name: 'History', href: '/users', initial: "P", icon: UserGroupIcon, new: 1, current: true },
        ]
    },
    {
        id: 6,
        name: 'Reporting',
        href: '/',
        children: [
            { id: 1, name: 'Recruitment', href: '/users', initial: "P", icon: UsersIcon, new: 10, current: true },
            { id: 2, name: 'Employee', href: '/users', initial: "P", icon: UserGroupIcon, new: 1, current: true },
            { id: 3, name: 'Time off', href: '/users', initial: "P", icon: UserGroupIcon, new: 1, current: true },
            { id: 4, name: 'Appraisal', href: '/users', initial: "P", icon: UserGroupIcon, new: 1, current: true },
        ]
    },
]