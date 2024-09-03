import { ReactComponent as CheckSvg } from "./assets/check.svg";
import { ReactComponent as DeleteSvg } from "./assets/delete.svg";
import "./TodoIcon.css";

const iconTypes = {
	check: color => <CheckSvg fill={color} />,
	delete: color => <DeleteSvg fill={color} />,
};

export const TodoIcon = ({ type, color }) => {
	return <span className={`icon-container icon-container-${type}`}>{iconTypes[type](color)}</span>;
};
