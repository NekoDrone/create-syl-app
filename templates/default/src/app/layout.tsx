"use client";

import "./globals.css";
import type { FC, ReactNode } from "react";
import { lexend } from "@/utils/styles/font";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export interface LayoutProps {
  children: ReactNode;
}

const RootLayout: FC<LayoutProps> = ({ children }) => {
  const reactQuery = new QueryClient();

  return (
    <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />
      <title>Create Syl&apos;s App</title>
    </head>
    <body
      className={`${lexend.className} bg-ctp-base text-ctp-text font-light antialiased`}
    >
    <QueryClientProvider client={reactQuery}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
    </body>
    </html>
  );
};

export default RootLayout;