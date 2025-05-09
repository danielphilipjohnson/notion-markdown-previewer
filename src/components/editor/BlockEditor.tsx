"use client";
// ! future experiment: add a block editor to the markdown previewer
import { useState } from "react";
import { nanoid } from "nanoid";
import MarkdownPreview from "./MarkdownPreview";

type Block = {
	id: string;
	type: "heading1" | "paragraph";
	content: string;
	editing: boolean;
};

export default function BlockEditor() {
	const [blocks, setBlocks] = useState<Block[]>([
		{
			id: nanoid(),
			type: "paragraph",
			content: "",
			editing: true,
		},
	]);

	const updateBlock = (id: string, updates: Partial<Block>) => {
		setBlocks((prev) =>
			prev.map((block) => (block.id === id ? { ...block, ...updates } : block))
		);
	};

	const addNewBlock = () => {
		setBlocks((prev) => [
			...prev,
			{
				id: nanoid(),
				type: "paragraph",
				content: "",
				editing: true,
			},
		]);
	};
	const deleteBlock = (id: string) => {
		setBlocks((prev) => prev.filter((block) => block.id !== id));
	};

	return (
		<div className="p-4 space-y-2">
			{blocks.map((block) =>
				block.editing ? (
					<input
						key={block.id}
						value={block.content}
						onChange={(e) =>
							updateBlock(block.id, { content: e.target.value })
						}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								e.preventDefault();
								updateBlock(block.id, { editing: false });
								addNewBlock();
							}

							if (
								e.key === "Backspace" &&
								block.content === "" &&
								blocks.length > 1 // prevent deleting last block
							) {
								e.preventDefault();
								deleteBlock(block.id);
							}
						}}
						className="w-full text-lg text-gray-200 bg-transparent focus:outline-none placeholder:text-gray-500"
						placeholder="Write, press ‘space’ for AI, ‘/’ for commands…"
						autoFocus
					/>

				) : (
					<div
						key={block.id}
						onClick={() => updateBlock(block.id, { editing: true })}
						className="cursor-text"
					>
						<MarkdownPreview content={block.content} />
					</div>
				)
			)}

		</div>
	);
}
