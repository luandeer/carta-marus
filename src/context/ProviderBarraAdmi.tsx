"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

export default function ProviderBarraAdmi({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <ProgressBar
                height="3px"
                color="#D7251E"
                options={{ showSpinner: false }}
                shallowRouting
            />
            {children}
        </>
    );
}