"use client";

import {ThemeProvider as NextThemesProvider} from "next-themes";
import {type ThemeProviderProps} from "next-themes/dist/types";

interface ThemeProviderProps {
    attribute?: string,
    defaultTheme?: string,
    enableSystem?: boolean,
    disableTransitionOnChange?: boolean
}

export function ThemeProvider({
                                  children,
                                  ...props,
                                  attribute,
                                  defaultTheme,
                                  enableSystem,
                                  disableTransitionOnChange
                              }: ThemeProviderProps) {
    return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}