import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Nav>
                <div className="flex justify-between my-8">
                    <div className="items-start">
                        <h1>logo</h1>
                    </div>
                    <div>
                        <NavLink href="/">Home</NavLink>
                        <NavLink href="/products">Products</NavLink>
                        <NavLink href="/orders">My Orders</NavLink>
                    </div>
                </div>
            </Nav>
            <div className="container my-6">{children}</div>
        </>
    );
}
