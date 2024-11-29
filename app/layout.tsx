"use client";

import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import NavbarComponent from "@/components/layout/NavbarComponent";
import React from "react";
import {Box, Container} from "@chakra-ui/react";
import {Toaster} from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
          <style jsx global>{`
            @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");
          `}</style>
      </head>
      <body>
          <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              disableTransitionOnChange
          >
              <Box as="main" minH="100vh" position="relative">
                  <NavbarComponent/>
                  <Container maxW="1024px" pt={28} px={6} pb={36}>
                      {children}
                  </Container>
              </Box>
              <Toaster/>
          </ThemeProvider>
      </body>
    </html>
  );
}
