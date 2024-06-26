"use client"
import React from 'react'
import { cn } from '@/utils/tailwind-merge'
import { APP_NAME } from '@/configs/env'
import { Inter, Poppins } from 'next/font/google'
import { Metadata } from 'next'
import AdminSidebarList from '@/components/layouts/sidebar-list'
import AdminHeader from '@/components/layouts/header'
import AdminSidebarLogo from './sidebar-logo'
import "../../styles/globals.css"
import { modules } from '../../libs/modules';
import AdminContainer from './admin-container'

const poppins = Poppins({ weight: "400", subsets: ["latin"] })
const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: APP_NAME,
    description: APP_NAME,
}

const AdminLayout: React.FC<{
    children?: React.ReactNode,
    classNames?: string
}> = ({
    children,
    classNames
}) => {

    const [collapse, setCollapse] = React.useState(true)

    const collapseHandle = () => {
        collapse
            ? setCollapse(false)
            : setCollapse(true)
    }

    return (
        <main className={
            cn(
                classNames,
                poppins.className,
                inter.className,
                'flex w-full bg-gray-50 h-svh overflow-y-auto'
            )
        }>
            <div className={cn(collapse ? '-left-full lg:left-0 lg:sticky lg:block': 'left-0 z-50 bg-white/80 backdrop-blur-sm', 'fixed transition-all w-72 h-screen overflow-y-auto pb-2 shrink-0 text-slate-900 font-poppins border-r border-black/10')}>
                <AdminSidebarLogo collapseHandle={collapseHandle}/>
                <AdminSidebarList modules={modules}/>
            </div>

            <div className='w-full'>
                <AdminHeader collapseHandle={collapseHandle}/>
                <AdminContainer>
                    {children}
                </AdminContainer>
            </div>
        </main>
    )
}

export default AdminLayout;