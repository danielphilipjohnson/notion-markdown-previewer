import { useCallback } from "react";

export function useEditorCommands({
	content,
	setContent,
	editorRef,
}: {
	content: string;
	setContent: (val: string) => void;
	editorRef: React.RefObject<HTMLTextAreaElement | null>;
}) {
	const insertBlock = useCallback((blockType: string) => {
		const textarea = editorRef.current;
		if (!textarea) return;

		const cursorPos = textarea.selectionStart;
		const textBeforeCursor = content.substring(0, cursorPos);
		const startOfLinePos = textBeforeCursor.lastIndexOf("\n") + 1;
		const textBefore = content.substring(0, startOfLinePos);
		const textAfter = content.substring(cursorPos);

		let insertText = "";

		switch (blockType) {
			case "heading1":
				insertText = "# ";
				break;
			case "heading2":
				insertText = "## ";
				break;
			case "heading3":
				insertText = "### ";
				break;
			case "bulletList":
				insertText = "- ";
				break;
			case "numberedList":
				insertText = "1. ";
				break;
			case "code":
				insertText = "```\n\n```";
				break;
			case "page":
				insertText = "---\n";
				break;
			default:
				insertText = "\n";
		}

		const updatedContent = textBefore + insertText + textAfter;
		const newCursorPos = startOfLinePos + insertText.length;

		setContent(updatedContent);

		setTimeout(() => {
			textarea.focus();
			textarea.setSelectionRange(newCursorPos, newCursorPos);
		}, 0);
	}, [content, editorRef, setContent]);

	return { insertBlock };
}

export default useEditorCommands;
