import { cn } from "@/lib/utils";

interface EditorToggleProps {
	previewMode: boolean;
	setPreviewMode: (value: boolean) => void;
}

const EditorToggle = ({ previewMode, setPreviewMode }: EditorToggleProps) => {
	return (
		<div className="flex justify-end mb-4">
			<div className="flex p-1 bg-gray-800 rounded-md">
				<button
					type="button"
					className={cn(
						"px-3 py-1 rounded-md text-sm",
						!previewMode
							? "bg-gray-700 text-white"
							: "text-gray-400 hover:text-gray-200"
					)}
					onClick={() => setPreviewMode(false)}
				>
					Edit
				</button>
				<button
					type="button"
					className={cn(
						"px-3 py-1 rounded-md text-sm",
						previewMode
							? "bg-gray-700 text-white"
							: "text-gray-400 hover:text-gray-200"
					)}
					onClick={() => setPreviewMode(true)}
				>
					Preview
				</button>
			</div>
		</div>
	);
};

export default EditorToggle;
