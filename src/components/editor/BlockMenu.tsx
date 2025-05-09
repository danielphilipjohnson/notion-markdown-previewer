"use client";

import {
	DropdownMenu,
	DropdownMenuPortal,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuLabel
} from "../ui/DropdownMenu";
import { blockMenuItems } from "@/lib/editor/block-menu-items";
import { forwardRef } from "react";

interface BlockMenuProps {
	open: boolean;
	position: { x: number; y: number };
	onInsert: (blockType: string) => void;
	onClose: () => void;
}

const BlockMenu = forwardRef<HTMLDivElement, BlockMenuProps>(
	({ open, position, onInsert, onClose }) => {
		const menuItems = blockMenuItems;

		return (

			<DropdownMenu open={open} onOpenChange={(v) => !v && onClose()}>
				<DropdownMenuPortal>
					<DropdownMenuContent
						className="z-50 p-1 overflow-y-auto text-gray-200 bg-gray-900 border border-gray-700 rounded-md shadow-lg w-72 max-h-96"
						style={{ position: "fixed", left: position.x, top: position.y }}
						sideOffset={0}
					>
						<DropdownMenuLabel className="px-2 py-1 text-xs text-gray-400">
							Blocks
						</DropdownMenuLabel>

						{menuItems.map((section) => (
							<div key={section.section}>
								<DropdownMenuLabel className="text-xs text-gray-400">
									{section.section}
								</DropdownMenuLabel>

								{section.items.map(({ type, label, icon: Icon, hint }) => (
									<DropdownMenuItem
										key={label}
										onSelect={() => onInsert(type)}
										className="flex items-center justify-between px-2 py-1.5 text-sm rounded-md focus:bg-gray-800"
									>
										<span className="flex items-center">
											<Icon size={16} className="mr-2 text-gray-400" />
											{label}
										</span>
										{hint && <span className="text-xs text-gray-500">{hint}</span>}
									</DropdownMenuItem>
								))}
								
								<DropdownMenuSeparator className="my-1" />
							</div>
						))}
						
						<DropdownMenuItem 
							onSelect={() => onClose()} 
							className="flex items-center justify-between px-2 py-1.5 text-sm rounded-md focus:bg-gray-800">
							Close
						</DropdownMenuItem>
					
						<div className="flex justify-between px-2 py-1 text-xs text-gray-500">
							<span>Type &apos;/&apos; on the page</span>
							<span>esc</span>
						</div>
					</DropdownMenuContent>
				</DropdownMenuPortal>
			</DropdownMenu>
		
		);
	}
);

BlockMenu.displayName = "BlockMenu";

export default BlockMenu;
