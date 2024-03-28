import {
	Card, CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import db from "@/db/db";
import { formatCurrency, formatNumber } from "@/lib/formatters";

type DashboardProps = {
	title: string,
	subtittle: string;
	body: string;
};


async function getSalesData() {
	const data = await db.order.aggregate({
		_sum: { pricePaidInCents: true },
		_count: true
	});
	return {
		amount: (data._sum.pricePaidInCents || 0) / 100,
		numberOfSales: data._count,
	};
}

async function getUserData() {
	const [userCount, orderData] = await Promise.all([
		db.user.count(),
		db.order.aggregate({
			_sum: { pricePaidInCents: true },
		}),
	]);

	return {
		userCount,
		averageValuePerUser:
			userCount === 0
				? 0
				: (orderData._sum.pricePaidInCents || 0) / userCount / 100,
	};
}
async function getProductData() {
	const [activeCount, inActiveCount] = await Promise.all([
		db.product.count({ where: { isAvailableForPurchase: true } }),
		db.product.count({ where: { isAvailableForPurchase: false } }),
	]);
	return {
		activeCount,
		inActiveCount,
	};
}

export default async function AdminsDashboard() {
	const [salesData, userData, productData] = await Promise.all([
		getSalesData(),
		getUserData(),
		getProductData(),
	]);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
			<DashboardCard
				title="Sales"
				subtittle={`${formatNumber(salesData.numberOfSales)} Orders`}
				body={formatCurrency(salesData.amount)}
			/>
			<DashboardCard
				title="Customers"
				subtittle={`${formatCurrency(userData.averageValuePerUser)} Avarage Value`}
				body={formatNumber(userData.userCount)}
			/>
			<DashboardCard
				title="Products"
				subtittle={`${formatNumber(productData.inActiveCount)} Inactive`}
				body={formatNumber(productData.activeCount)}
			/>

		</div>
	);
}

function DashboardCard({ title, subtittle, body }: DashboardProps) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{subtittle}</CardDescription>
			</CardHeader>
			<CardContent>
				{body}
			</CardContent>

		</Card>
	);
};