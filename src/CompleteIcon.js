import { TodoIcon } from "./TodoIcon";

export const CompleteIcon = ({ completed }) => (
	<TodoIcon type={"check"} color={completed ? "green" : "gray"} />
);
