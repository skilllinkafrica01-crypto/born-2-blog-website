import { ReactNode } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { cn } from "@/lib/utils";

interface MainLayoutProps {
  children: ReactNode;
  fullWidth?: boolean;
}

export function MainLayout({ children, fullWidth = false }: MainLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <AppSidebar />
      <main className={cn("lg:ml-72 min-h-screen", !fullWidth && "")}>
        {children}
      </main>
    </div>
  );
}
