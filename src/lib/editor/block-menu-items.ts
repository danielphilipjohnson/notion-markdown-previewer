import {
	FileText,
	Code,
	Text,
	Heading1,
	Heading2,
	Heading3,
	List,
	ListOrdered
} from "lucide-react";

export const blockMenuItems = [
	{
		section: "Suggested",
		items: [
			{ type: "page", label: "Page", icon: FileText },
			{ type: "code", label: "Code", icon: Code },
			{ type: "code", label: "Code - Mermaid", icon: Code },
		]
	},
	{
		section: "Basic blocks",
		items: [
			{ type: "text", label: "Text", icon: Text },
			{ type: "heading1", label: "Heading 1", icon: Heading1, hint: "#" },
			{ type: "heading2", label: "Heading 2", icon: Heading2, hint: "##" },
			{ type: "heading3", label: "Heading 3", icon: Heading3, hint: "###" },
			{ type: "bulletList", label: "Bulleted list", icon: List, hint: "-" },
			{ type: "numberedList", label: "Numbered list", icon: ListOrdered, hint: "1." },
		]
	}
];
