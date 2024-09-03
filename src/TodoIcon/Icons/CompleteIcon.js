import { TodoIcon } from "../";

export const CompleteIcon = ({ completed }) => (
	<TodoIcon type={"check"} color={completed ? "green" : "gray"} />
);
