type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

function Input({ className = "", ...props }: InputProps) {
	return (
		<input
			className={`w-full bg-gray-800 border border-gray-700 rounded-md px-2 py-1 text-gray-200 focus:outline-none focus:ring-1 focus:ring-gray-600 ${className}`}
			{...props}
		/>
	);
}

export default Input;
