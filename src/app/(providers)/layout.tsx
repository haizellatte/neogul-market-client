"use client";
import { LogInModalProvider } from "@/contexts/LogInmodal.context";
import { AuthProvider } from "@/contexts/auth.context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

function ProvidersLayout({ children }: PropsWithChildren) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LogInModalProvider>{children}</LogInModalProvider>
      </AuthProvider>
      {/* <ReactQueryDevtools initialIsOpen={true} /> */}
    </QueryClientProvider>
  );
}

export default ProvidersLayout;
