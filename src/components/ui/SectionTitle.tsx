import { cn } from "@/lib/utils";

interface SectionTitleProps {
	children: React.ReactNode;
	className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children, className }) => (
	<div className={cn("text-xs font-medium text-gray-500", className)}>
		{children}
	</div>
);

export default SectionTitle;
