import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/elements/avatar"

import { Button } from "@/components/elements/button";
import logo from '../../../../assets/logo.svg'

export function RecentSales() {
    return (
        <div className="space-y-8">
            <div className="flex items-center">
                <Avatar className="h-9 w-9 ring-1 ring-primary">
                    <AvatarImage src={logo.src} alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Sophat Leat</p>
                    <p className="text-sm text-muted-foreground"> info.sophat@gmail.com </p>
                </div>
                <div className="ml-auto font-medium">
                    <Button variant={"secondary"}> View </Button>
                </div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9 ring-1 ring-primary">
                    <AvatarImage src={logo.src} alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">PPhat Dev</p>
                    <p className="text-sm text-muted-foreground"> hello@pphat.me </p>
                </div>
                <div className="ml-auto font-medium">
                    <Button variant={"secondary"}> View </Button>
                </div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9 ring-1 ring-primary">
                    <AvatarImage src={logo.src} alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Chhem Sithuch</p>
                    <p className="text-sm text-muted-foreground"> chhem.sithuch@gmail.com </p>
                </div>
                <div className="ml-auto font-medium">
                    <Button variant={"secondary"}> View </Button>
                </div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9 ring-1 ring-primary">
                    <AvatarImage src={logo.src} alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Kol Heang</p>
                    <p className="text-sm text-muted-foreground"> kol.heang@gmail.com </p>
                </div>
                <div className="ml-auto font-medium">
                    <Button variant={"secondary"}> View </Button>
                </div>
            </div>
            <div className="flex items-center">
                <Avatar className="h-9 w-9 ring-1 ring-primary">
                    <AvatarImage src={logo.src} alt="Avatar" />
                    <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                    <p className="text-sm font-medium leading-none">Thy Thary</p>
                    <p className="text-sm text-muted-foreground"> thy.thary@gmail.com </p>
                </div>
                <div className="ml-auto font-medium">
                    <Button variant={"secondary"}> View </Button>
                </div>
            </div>
        </div>
    )
}