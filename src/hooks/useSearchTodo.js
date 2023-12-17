import { useState } from "react"

export const useSearchTodo = (onChange) => {
    const [value, setValue] = useState("");
    const [focused, setFocused] = useState(false);

    const handleChange = ({ target }) => {
        setValue(target.value);
        onChange(target.value)
    }

    const onFocus = () => setFocused(true);
    const onBlur = () => setFocused(false);

    return { value, handleChange, onFocus, onBlur };
}