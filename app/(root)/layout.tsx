import Mobilenavbar from "@/components/Mobilenavbar";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn={firstName: 'Shreyash', lastName: 'Deep'};
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={loggedIn}/>
        <div className="flex size-full flex-col ">
          <div className="root-layout">
            <Image src="/icons/logo.svg" alt="logo" width={30} height={30} />
             <div>
              <Mobilenavbar user={loggedIn}/>
             </div>
          </div>
            {children}
        </div>
    </main>
  );
}
