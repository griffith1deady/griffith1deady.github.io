"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import {Provider} from "@/components/ui/provider";

export function ThemeProvider({children, ...props}: React.ComponentProps<typeof NextThemesProvider>) {
    return (
        <Provider {...props}>
            {children}
        </Provider>
    )
}
