"use client"

import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/clerk-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Toggle from "@/components/ThemeProvider/toggle";
import {LayoutDashboard, PenBox} from "lucide-react";

import {stringify} from "@/constants/stringify";

export default function Index() {
    return (
        <header className="fixed top-0 w-full bg-transparent backdrop-blur-md z-50">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                <Link href="/" className="h-12 w-auto flex items-center text-lg font-bold">
                    {stringify.logoTitle}
                </Link>
                {/* Right Section (Buttons for Sign In/Sign Up or User Account) */}
                <div className="flex items-center space-x-4">
                    <Toggle/>
                    <SignedOut>
                        <SignInButton>
                            <Button variant="ghost">{stringify.login}</Button>
                        </SignInButton>
                        <SignUpButton>
                            <Button>{stringify.signUp}</Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <Link href="/dashboard" className={"text-gray-600 dark:text-white hover:text-blue-600 flex items-center gap-2"}>
                           <Button variant="ghost">
                               <LayoutDashboard size={80}/>
                               <span className={"hidden md:inline"}>{stringify.dashboard}</span>
                           </Button>
                        </Link>
                        <Link href="/transacion/create" className={"text-gray-600 hover:text-blue-600 flex items-center gap-2"}>
                            <Button >
                                <PenBox size={80}/>
                                <span className={"hidden md:inline"}>{stringify.transactions}</span>
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