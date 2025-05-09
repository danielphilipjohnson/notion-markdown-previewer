import { FileIcon } from "lucide-react";

export interface SidebarEntry {
	id: string;
	label: string;
	icon?: React.ElementType;
}

export function getMockFavorites() {
	return [
		{ id: "fav-1", label: "🧠 Mind Gym", icon: FileIcon },
		{ id: "fav-2", label: "🚀 Launch Checklist", icon: FileIcon },
		{ id: "fav-3", label: "📅 Chaos Calendar", icon: FileIcon },
		{ id: "fav-4", label: "🎯 Focus Rituals", icon: FileIcon },
		{ id: "fav-5", label: "🏔️ Goals Vault", icon: FileIcon },
		{ id: "fav-6", label: "🧩 Idea Playground", icon: FileIcon },
		{ id: "fav-7", label: "📦 Brain Dump Box", icon: FileIcon },
		{ id: "fav-8", label: "🧘 Calm Corner", icon: FileIcon },
		{ id: "fav-9", label: "🔍 Debugging Life", icon: FileIcon }
	];
}
