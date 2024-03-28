import { Nav, NavLink } from "@/components/Nav";

export const dynamic = "force-dynamic";

export default function AdminsLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>
		<Nav >
			<NavLink href="/admin">Dasboard</NavLink>
			<NavLink href="/admin/products">Products</NavLink>
			<NavLink href="/admin/users">Customers</NavLink>
			<NavLink href="/admin/orders">sales</NavLink>
		</Nav>
		<div className="container my-6">
			{children}
		</div>
	</>;
}