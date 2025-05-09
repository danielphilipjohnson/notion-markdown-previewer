import { cn } from "@/lib/utils";

interface ButtonGroupProps {
	children: React.ReactNode;
	className?: string;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ children, className }) => {
	return (
		<div
			className={cn(
				"inline-flex items-center justify-center rounded-md bg-gray-800 p-1 gap-px",
				className
			)}
		>
			{children}
		</div>
	);
};

export default ButtonGroup;
