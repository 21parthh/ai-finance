"use client"


import {SignedIn, SignedOut, SignInButton, UserButton} from "@clerk/clerk-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Toggle from "@/components/toggle";
import {LayoutDashboard, PenBox} from "lucide-react";

export default function Header() {
    return (
        <header className="fixed top-0 w-full bg-white/80 dark:bg-background/80 backdrop-blur-md z-50 border-b">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="h-12 w-auto flex items-center text-lg font-bold">
                    AI_Finance
                </Link>

                {/* Middle Section (Theme Toggle) */}




                {/* Right Section (Buttons for Sign In/Sign Up or User Account) */}
                <div className="flex items-center space-x-4">
                    <Toggle/>
                    <SignedOut>
                        <SignInButton>
                            <Button variant="outline">Login</Button>
                        </SignInButton>
                        <SignInButton>
                            <Button>Sign Up</Button>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <Link href="/dashboard" className={"text-gray-600 hover:text-blue-600 flex items-center gap-2"}>
                           <Button variant="outline">
                               <LayoutDashboard size={80}/>
                               <span className={"hidden md:inline"}>Dashboard</span>
                           </Button>
                        </Link>
                        <Link href="/transacion/create" className={"text-gray-600 hover:text-blue-600 flex items-center gap-2"}>
                            <Button >
                                <PenBox size={80}/>
                                <span className={"hidden md:inline"}>Transaction</span>
                            </Button>
                        </Link>
                        <UserButton appearance={{
                            elements: {
                                avatarBox: "w-10 h-10",
                            }
                        }}/>
                    </SignedIn>
                </div>
            </nav>
        </header>

    )
}