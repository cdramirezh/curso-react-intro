import { ReactComponent as CheckSvg } from "./check.svg";
import { ReactComponent as DeleteSvg } from "./delete.svg";

const iconTypes = {
	check: <CheckSvg />,
	delete: <DeleteSvg />,
};

export const TodoIcon = ({ type, icon }) => {
	return (
		<svg className={`Icon-${type}`} src={icon}>
			{iconTypes[type]}
		</svg>
	);
};
