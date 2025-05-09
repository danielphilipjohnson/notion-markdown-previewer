import React from "react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
	icon?: React.ReactNode;
	label: React.ReactNode;
	active?: boolean;
	onClick?: () => void;
}

const SidebarItem = ({ icon, label, active = false, onClick }: SidebarItemProps) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				"rounded py-1 px-2 flex items-center space-x-2 cursor-pointer hover:bg-gray-800",
				active && "bg-gray-800"
			)}
		>
			{icon && <span className="text-gray-400">{icon}</span>}
			<span className="flex items-center text-gray-300 text-md">{label}</span>
		</div>
	);
};

export default SidebarItem;
