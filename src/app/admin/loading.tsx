import { Loader } from "lucide-react";

const AdminLoading = () => {
	return (
		<div className="flex justify-center">
			<Loader className="size={22} animate-spin" />
		</div>
	);
};

export default AdminLoading;