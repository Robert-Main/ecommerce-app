import PageHeader from "../../_component/PageHeader";
import { ProductForm } from "../_component/ProductForm";

function NewProductPage() {
	return (
		<>
			<PageHeader>Add Product</PageHeader>
			<ProductForm />
		</>
	);
}

export default NewProductPage;