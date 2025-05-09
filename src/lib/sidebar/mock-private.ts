import { FileIcon } from "lucide-react";

export interface PrivateSidebarEntry {
	id: string;
	label: string;
	emoji?: string;
	icon?: React.ElementType;
	active?: boolean;
}

export function getMockPrivate(): PrivateSidebarEntry[] {
	return [
		{ id: "private-1", label: "Mission Map", emoji: "🗺️", icon: FileIcon },
		{ id: "private-2", label: "Packing the Future", emoji: "📦", icon: FileIcon },
		{ id: "private-3", label: "🚀 Side Hustle Lab", icon: FileIcon },
		{ id: "private-4", label: "Client Portal", emoji: "👥", icon: FileIcon },
		{ id: "private-5", label: "Workflows HQ", emoji: "🏢", icon: FileIcon, active: true },
		{ id: "private-6", label: "🧭 Life Planner", icon: FileIcon },
		{ id: "private-7", label: "🪜 Level-Up Goals", icon: FileIcon }
	];
}
