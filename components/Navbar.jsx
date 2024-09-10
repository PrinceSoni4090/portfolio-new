
'use client'
import Link from 'next/link';
import { Button } from './ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { ModeToggle } from './theme-btn';
import LoadingBar from 'react-top-loading-bar';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';



const Navbar = () => {

    const [progress, setProgress] = useState(0)
    const pathname = usePathname()

    useEffect(() => {
        setProgress(30)

        setTimeout(() => {
            setProgress(70)
        }, 100);

        setTimeout(() => {
            setProgress(100)
        }, 800);

    }, [pathname])

    useEffect(() => {
        setTimeout(() => {
            setProgress(0)
        }, );

       
    }, [900])


    return (
        <nav className="p-4 bg-background/50 sticky top-0  backdrop-blur border-b-0 z-10">
            <LoadingBar
                color='#933ce6'
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <div className=" text-lg font-semibold md:mr-2 lg:mr-2 ">
                        Portfolio
                    </div>
                </Link>
                <div className='hidden md:flex space-x-4 items-center'>
                    <Link href="/" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Home</Link>
                    <Link href="/blog" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Blog</Link>
                    <Link href="/about" className="hover:scale-105 hover:font-semibold transition-transform duration-300">About</Link>
                    <Link href="/contact" className="hover:scale-105 hover:font-semibold transition-transform duration-300">Contact</Link>
                    <div className="flex items-center">
                        <Button className="mx-1 text-xs" variant="outline">Login</Button>
                        <Button className="mx-1 text-xs" variant="outline">Signup</Button>
                        <ModeToggle />
                    </div>
                </div>

                <div className="md:hidden">
                    <Sheet>
                        <spam className="mx-4">
                            <ModeToggle />
                        </spam>
                        <SheetTrigger>

                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                            </svg>
                        </SheetTrigger>



                        <SheetContent>
                            <SheetHeader>
                                <SheetTitle className="font-bold my-4"> PrinceBlog </SheetTitle>
                                <SheetDescription>
                                    <div className="flex flex-col gap-6">
                                        <Link href="/">
                                            Home
                                        </Link>
                                        <Link href="/blog">
                                            Blog
                                        </Link>
                                        <Link href="/about">
                                            About
                                        </Link>
                                        <Link href="/contact">
                                            Contact
                                        </Link>
                                        <div>
                                            <Button className="mx-1 text-xs" variant="outline">Login</Button>
                                            <Button className="mx-1 text-xs" variant="outline">Signup</Button>
                                        </div>
                                    </div>
                                </SheetDescription>
                            </SheetHeader>
                        </SheetContent>
                    </Sheet>

                </div>

            </div>


        </nav>
    );
};


export default Navbar;


