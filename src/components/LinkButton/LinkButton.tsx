import { ReactNode } from "react";

type LinkButtonProps = {
	children: ReactNode;
	buttonLink: string;
	isNavButton?: boolean;
};

const LinkButton = ({ children, buttonLink, isNavButton }: LinkButtonProps) => {
	let buttonClass = undefined;

	if (isNavButton) {
		buttonClass = "navButton";
	} else {
		buttonClass = "regularLink";
	}

	return (
		<a href={buttonLink} className={`${buttonClass} p-5`}>
			{children}
		</a>
	);
};

export default LinkButton;
