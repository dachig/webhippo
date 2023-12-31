"use client"

import { PRODUCT_CATEGORIES } from "@/config";
import { useEffect, useRef, useState } from "react";
import NavItem from "./Navitem";
import { useOnClickOutside } from "@/hooks/use-on-click-outside";

const NavItems = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)
    const isAnyOpen = activeIndex !== null;

    const navRef = useRef<HTMLDivElement | null>(null); //important functionality to close navDropdown when you click outside of it --> see hooks folder
    useOnClickOutside(navRef, () => setActiveIndex(null)) 
    useEffect(()=>{
        const handler =(e:KeyboardEvent)=>{
            if(e.key === "Escape"){
                setActiveIndex(null);
            }
        }
        document.addEventListener("keydown",handler);
        return () => {
            document.removeEventListener("keydown",handler);
        }
    },[])

    return (
        <div className="flex gap-4 h-full" ref={navRef}>{/*ref*/}
            {PRODUCT_CATEGORIES.map((category, index) => {
                const handleOpen = () => {
                    if (activeIndex === index) {
                        setActiveIndex(null)
                    } else {
                        setActiveIndex(index)
                    }
                }
                const isOpen = index === activeIndex;

                return (
                    <NavItem
                        category={category}
                        handleOpen={handleOpen}
                        isOpen={isOpen}
                        key={category.value}
                        isAnyOpen={isAnyOpen}
                    />
                )
            })}
        </div>
    )
}

export default NavItems;