import PageHeader from "@/app/admin/_component/PageHeader";
import db from "@/db/db";
import { ProductForm } from "../../_component/ProductForm";

async function EditProductPage({ params: { id } }: { params: { id: string } }) {
    const product = await db.product.findUnique({ where: { id } });
    return (
        <>
            <PageHeader>Edit Product</PageHeader>
            <ProductForm product={product} />
        </>
    );
}

export default EditProductPage;
