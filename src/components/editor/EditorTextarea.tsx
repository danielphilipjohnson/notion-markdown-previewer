import React, { forwardRef } from "react";

interface EditorTextareaProps {
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
	onOpenMenu: () => void;
	setMenuPosition: (pos: { x: number; y: number }) => void;
}

const EditorTextarea = forwardRef<HTMLTextAreaElement, EditorTextareaProps>(
	({ value, onChange, onKeyDown}, ref) => {

		return (
			<div className="relative">
				<textarea
					ref={ref}
					value={value}
					onChange={onChange}
					onKeyDown={onKeyDown}
					className="w-full min-h-96 bg-gray-900 text-gray-200 resize-none border-none focus:outline-none focus:ring-0 font-mono text-base leading-relaxed"
					spellCheck="false"
					placeholder="Type '/' for commands"
				/>
			</div>
		);
	}
);

EditorTextarea.displayName = "EditorTextarea";

export default EditorTextarea;
