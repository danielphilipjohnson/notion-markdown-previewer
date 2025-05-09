interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon: React.ReactNode;
	tooltip?: string;
	className?: string;
}

const IconButton = ({
	icon,
	tooltip,
	className = "",
	...props
}: IconButtonProps) => {
	return (
		<button
			className={`p-1 hover:bg-gray-800 rounded-md transition-colors ${className}`}
			title={tooltip}
			aria-label={tooltip}
			{...props}
		>
			{icon}
		</button>
	);
};

export default IconButton;
