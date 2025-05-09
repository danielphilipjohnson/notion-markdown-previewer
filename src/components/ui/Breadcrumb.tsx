interface BreadcrumbItem {
	label: string;
	href?: string;
}

interface BreadCrumbProps {
	items: BreadcrumbItem[];
}

const BreadCrumb = ({ items }: BreadCrumbProps) => {
	if (!items || items.length === 0) {
		return null;
	}

	return (
		<nav aria-label="breadcrumb">
			<ol className="flex items-center space-x-2">
				{items.map((item, index) => {
					const isLastItem = index === items.length - 1;
					return (
						<>
							<li key={item.label + '-' + index} className="flex items-center">
								{item.href && !isLastItem ? (
									<a
										href={item.href}
										className="text-sm text-blue-600 hover:underline dark:text-blue-400"
									>
										{item.label}
									</a>
								) : (
									<span
										className={`text-sm ${isLastItem ? 'text-gray-700 dark:text-gray-300 font-medium' : 'text-gray-500 dark:text-gray-400'}`}
										aria-current={isLastItem ? 'page' : undefined}
									>
										{item.label}
									</span>
								)}
							</li>
							{!isLastItem && (
								<li aria-hidden="true">
									<span className="text-gray-500 dark:text-gray-400">/</span>
								</li>
							)}
						</>
					);
				})}
			</ol>
		</nav>
	);
};

export default BreadCrumb;