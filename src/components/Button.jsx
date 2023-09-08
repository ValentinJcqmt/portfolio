import clsx from 'clsx';
import './../css/components/Button.scss';

export default function Button({
	children,
	variants,
	download,
	className,
	icon = null,
	href = null,
	target = null,
}){
	const variantsArr = Array.isArray(variants) ? variants : [variants];

	let classNameStr = clsx('Button', className);
	variantsArr.map(variantName => classNameStr += ' Button--'+variantName);

	const props = {
		'data-icon' : icon,
		'download' : download,
		'className' : classNameStr
	};

	return href
		? <a href={href} target={target} {...props}>
			{children}
		</a>
		: <button {...props}>
			{children}
		</button>
}