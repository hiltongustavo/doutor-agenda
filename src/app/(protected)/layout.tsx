import Image from "next/image";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "./_components/app-sidebar";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="border-b bg-linear-to-r from-blue-500/90 to-blue-500 p-4">
          <div className="flex justify-between gap-10">
            <Image
              src="/logo.svg"
              alt="Doutor Agenda"
              width={136}
              height={28}
              className="md:hidden"
            />
            <SidebarTrigger />
          </div>
        </div>

        {children}
      </main>
    </SidebarProvider>
  );
};

export default ProtectedLayout;
