import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

interface MarkdownPreviewProps {
	content: string;
}

const MarkdownPreview = ({ content }: MarkdownPreviewProps) => {
	return (
		<div className="p-4 prose text-gray-200 bg-gray-900 rounded-md markdown-preview min-h-96 prose-invert max-w-none">
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				rehypePlugins={[rehypeHighlight]}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
};

export default MarkdownPreview;
