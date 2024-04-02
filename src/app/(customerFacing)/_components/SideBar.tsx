import { NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function SideBar({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex items-center justify-between gap-4 flex-row mx-auto w-full">
            <div className="flex flex-col justify-center items-center gap-2 bg-red-100 h-full w-[200px] mx-6 fixed left-0">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/products">Products</NavLink>
                <NavLink href="/orders">My Orders</NavLink>
            </div>
            <div className="container bg-gray-600 flex-1 rounded-md py-6 my-6">
                {children}
            </div>
        </div>
    );
}
