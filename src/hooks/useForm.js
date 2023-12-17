import { useState } from "react"

export const useForm = (onAdd) => {
    const [value, setValue] = useState("");
    const [codeKey, setCodeKey] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const todo = {
            id: new Date().toJSON(),
            title: value,
            isCompleted: false,
            isImportant: false
        }
        onAdd(todo);
        setValue("");
    }

    const handleCodeKey = (e) => {
        setCodeKey(e.code);
    }

    const handleChange = ({ target }) => {
        if (target.value.length <= 190 || codeKey === "Backspace") {
            setValue(target.value);
        }
    }

    return { value, handleChange, handleCodeKey, handleSubmit };
}