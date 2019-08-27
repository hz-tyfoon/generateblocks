const { createElement } = wp.element;
export default function Section( { tagName, id, className, style, children } ) {
	if ( ! id ) {
		id = null;
	}

	return createElement(
		tagName,
		{
			id: id,
			className: className,
			style: style
		},
		children
	)
}