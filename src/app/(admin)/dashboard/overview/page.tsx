import { Button } from "@/components/elements/button";
import { CalendarDateRangePicker } from "@/components/elements/date-range-picker";
import AdminLayout from "@/components/layouts/admin";
import AdminBreadcrumb from "@/components/layouts/admin-breadcrumb";
import { Metadata } from "next";
import { StatsTab } from "../utils/stats-tab";

export const metadata: Metadata = {
    title: "Dashboard - Overview",
    description: "Example Dashboard - Overview",
}

const pages = [
    { name: 'Dashboard', href: '/dashboard', current: false},
    { name: 'Overview', href: null, current: false },
]

export default function Dashboard() {
    return (
        <AdminLayout>
            <header className='sm:flex items-end justify-between gap-3'>
                <AdminBreadcrumb pages={pages}/>
                <div className="flex items-center space-x-2">
                    <CalendarDateRangePicker />
                    <Button>Download</Button>
                </div>
            </header>

            <div>
                <StatsTab></StatsTab>
            </div>

        </AdminLayout>
    );
}
