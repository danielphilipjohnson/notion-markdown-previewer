interface EmojiLabelProps {
	emoji: string;
	text: string;
}

const EmojiLabel: React.FC<EmojiLabelProps> = ({ emoji, text }) => (
	<span className="text-gray-300 text-sm flex items-center">
		<span className="mr-1">{emoji}</span> {text}
	</span>
);

export default EmojiLabel;
