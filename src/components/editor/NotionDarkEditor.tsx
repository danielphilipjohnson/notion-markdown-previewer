"use client";
import { useState, useRef } from "react";
import Sidebar from "../layout/Sidebar";
import EditorToggle from "./EditorToggle";
import EditorTextarea from "./EditorTextarea";
import MarkdownPreview from "./MarkdownPreview";
import BlockMenu from "./BlockMenu";
import useEditorCommands from "@/hook/useEditorCommands";
import { Menu } from "lucide-react";
import Breadcrumb from "../ui/Breadcrumb";

const NotionDarkEditor = () => {
	const [content, setContent] = useState("# dashboard logic\n\n");
	const [sidebarOpen, setSidebarOpen] = useState(true);

	const [blockMenuOpen, setBlockMenuOpen] = useState(false);
	const [blockMenuPosition, setBlockMenuPosition] = useState({ x: 0, y: 0 });
	const [previewMode, setPreviewMode] = useState(false);

	const editorRef = useRef<HTMLTextAreaElement>(null);
	const blockMenuRef = useRef<HTMLDivElement>(null);

	const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "/" && !blockMenuOpen) {
			e.preventDefault();
			const textarea = e.currentTarget;
			const rect = textarea.getBoundingClientRect();
			const lineHeight = parseInt(getComputedStyle(textarea).lineHeight || "24", 10);

			const selectionStart = textarea.selectionStart;
			const lines = textarea.value.substring(0, selectionStart).split("\n");
			const currentLineIndex = lines.length - 1;

			setBlockMenuPosition({
				x: rect.left,
				y: rect.top + currentLineIndex * lineHeight,
			});
			setBlockMenuOpen(true);
		}

		if (e.key === "Escape" && blockMenuOpen) {
			setBlockMenuOpen(false);
		}
	};

	const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(e.target.value);
	};

	const { insertBlock } = useEditorCommands({ content, setContent, editorRef });

	const handleInsert = (blockType: string) => {
		insertBlock(blockType);
		setBlockMenuOpen(false); 
	};


	return (
		<div className="relative flex h-screen min-h-screen text-gray-200 bg-gray-900">
			<Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

			<div className="flex flex-col flex-1 w-full">
				<div className="flex">

					{!sidebarOpen && (
						<button title="Open sidebar" type="button" className="w-12 h-12 p-4 hover:cursor-pointer hover:bg-gray-800" onClick={() => setSidebarOpen(!sidebarOpen)}>
							<Menu size={16} className="text-gray-500" />
						</button>
					)}
					
					<div className="flex items-center justify-between p-3">
						<Breadcrumb items={[{label: "Home", href: "/"}, {label: "Dashboard", href: "/dashboard"}]} />
					</div>
				</div>
				

				<div className="w-full max-w-4xl p-6 mx-auto">
					<EditorToggle previewMode={previewMode} setPreviewMode={setPreviewMode} />
					{!previewMode ? (
						<EditorTextarea
							ref={editorRef}
							value={content}
							onChange={handleContentChange}
							onKeyDown={handleKeyDown}
							onOpenMenu={() => setBlockMenuOpen(true)}
							setMenuPosition={setBlockMenuPosition}
						/>
					) : (
						<MarkdownPreview content={content} />
					)}

					<BlockMenu
						open={blockMenuOpen}
						position={blockMenuPosition}
						ref={blockMenuRef}
						onInsert={handleInsert}
						onClose={() => setBlockMenuOpen(false)}
					/>
				</div>
			</div>
		</div>
	);
};

export default NotionDarkEditor;
