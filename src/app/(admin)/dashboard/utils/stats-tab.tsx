import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/elements/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/elements/tabs"
import { Overview } from "./overview"
import { RecentSales } from "./recent-sales"
import { UserGroupIcon } from "@heroicons/react/24/outline"

export const StatsTab = () => {
    return(
        <Tabs defaultValue="overview" className="space-y-4 mt-7">
            {/* <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="analytics">
                    Analytics
                </TabsTrigger>
                <TabsTrigger value="reports">
                    Reports
                </TabsTrigger>
                <TabsTrigger value="notifications">
                    Notifications
                </TabsTrigger>
            </TabsList> */}
            <TabsContent value="overview" className="space-y-4">
                <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium"> Total Announcement </CardTitle>
                            <UserGroupIcon className="h-5 w-5 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+4,653</div>
                            <p className="text-xs text-muted-foreground"> +20.1% from last month </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium"> Total Candidate </CardTitle>
                            <UserGroupIcon className="h-5 w-5 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+4,653</div>
                            <p className="text-xs text-muted-foreground"> +20.1% from last month </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium"> Total Employees </CardTitle>
                            <UserGroupIcon className="h-5 w-5 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">+2350</div>
                            <p className="text-xs text-muted-foreground"> +180.1% from last month </p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Resigned</CardTitle>
                            <UserGroupIcon className="h-5 w-5 text-muted-foreground"/>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">20</div>
                            <p className="text-xs text-muted-foreground"> +80.00% from last month </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="grid gap-4 grid-cols-7">
                    <Card className="col-span-7 xl:col-span-4">
                        <CardHeader>
                            <CardTitle>Announcement</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            <Overview />
                        </CardContent>
                    </Card>
                    <Card className="col-span-7 xl:col-span-3">
                        <CardHeader>
                            <CardTitle>Recent Candidate</CardTitle>
                            <CardDescription> Candidate applied 653 in this month. </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <RecentSales />
                        </CardContent>
                    </Card>
                </div>
            </TabsContent>
        </Tabs>
    )
}