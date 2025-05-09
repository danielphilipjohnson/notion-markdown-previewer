import {
	ChevronRight,
	FileIcon,
	Search,
	MessageSquare,
	Home,
	Mail,
	Users,
	Settings,
	User,
	HelpCircle,
	ChevronsLeft
} from "lucide-react";

import EmojiLabel from "@/components/ui/EmojiLabel";
import { Separator } from "@/components/ui/separator";
import SidebarItem from "./SidebarItem";
import SectionTitle from "../ui/SectionTitle";
import { getMockFavorites } from "@/lib/sidebar/mock-favorites";
import { getMockPrivate } from "@/lib/sidebar/mock-private";
import { cn } from "@/lib/utils";

const Sidebar = ({ sidebarOpen, setSidebarOpen }: { sidebarOpen: boolean, setSidebarOpen: (sidebarOpen: boolean) => void }) => {
	const favorites = getMockFavorites();
	const privatePages = getMockPrivate();

	return (
		<>
			{sidebarOpen && (
				<div
					className={cn(
						"absolute group flex flex-col h-full max-h-full border-r border-gray-800 transition-all duration-200 ease-in-out z-40 bg-gray-900 md:static",
						sidebarOpen ? "w-64" : "w-16"
					)}
				>
					<div className="flex items-center justify-between p-3 hover:bg-gray-800">
						<div className="flex items-center space-x-2">
							<div className="flex items-center justify-center w-6 h-6 text-gray-300 bg-gray-700 rounded">U</div>
							<span className="font-medium truncate text-md">User</span>
						</div>


						<button
							onClick={() => setSidebarOpen(!sidebarOpen)}
							className="flex items-center justify-center w-10 h-10 transition-opacity translate-x-1 rounded-md opacity-0 right-5 group-hover:opacity-100 hover:cursor-pointer"
							title="Collapse sidebar"
						>
							<ChevronsLeft size={16} className="text-gray-400" />
						</button>

					</div>

					<div className="p-1">
						{[
							{ icon: <Search size={16} />, label: "Search" },
							{ icon: <MessageSquare size={16} />, label: "Notion AI" },
							{ icon: <Home size={16} />, label: "Home" },
							{ icon: <Mail size={16} />, label: "Inbox" }
						].map(({ icon, label }) => (
							<SidebarItem key={label} icon={icon} label={label} />
						))}
					</div>

					<div className="px-3 py-2">
						<SectionTitle>Favorites</SectionTitle>
						{favorites.map(({ label }) => (
							<SidebarItem
								key={label}
								icon={<FileIcon size={14} />}
								label={<span className="truncate">{label}</span>}
							/>
						))}
					</div>

					<div className="px-3 py-2">
						<div className="flex items-center justify-between mb-1">
							<SectionTitle>Shared</SectionTitle>
							<ChevronRight size={14} className="text-gray-500" />
						</div>
						<div className="flex flex-col items-center justify-center p-3 text-center bg-gray-800 rounded-md">
							<Users size={20} className="mb-2 text-gray-500" />
							<span className="text-xs text-gray-400">Shared pages will go here</span>
							<button className="px-3 py-1 mt-2 text-xs text-white bg-gray-700 rounded hover:bg-gray-600">
								Start collaborating
							</button>
						</div>
					</div>

					<div className="px-3 py-2">
						<SectionTitle>Private</SectionTitle>
						{privatePages.map(({ label, emoji }) => (
							<SidebarItem
								key={label}
								icon={<FileIcon size={14} />}
								label={
									emoji ? <EmojiLabel emoji={emoji} text={label} /> : label
								}
								active={label === "Work"}
							/>
						))}
					</div>

					<Separator className="mt-auto border-gray-800" />
					<div className="relative w-full">
						<div className="absolute bottom-0 flex items-center justify-between w-full p-3">
							<SidebarItem
								icon={<User size={14} />}
								label={<span className="text-xs">Invite members</span>}
							/>
							<div className="flex items-end justify-end space-x-3">
								<Settings size={14} className="text-gray-500 cursor-pointer hover:text-gray-400" />
								<HelpCircle size={14} className="text-gray-500 cursor-pointer hover:text-gray-400" />
							</div>
						</div>
					</div>
				</div>
			)}
		</>

	);
};

export default Sidebar;
