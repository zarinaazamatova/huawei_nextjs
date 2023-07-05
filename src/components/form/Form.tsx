import { useState, FormEvent, ReactNode } from "react"
import {StyledForm} from './Form.styles'
type FormProps = {
labelText?: string;
inputType: string;
placeHolder: string;
id: string;
buttonContent: ReactNode;
onSubmit: (value: string) => void;
}
const Form = ({labelText = '', inputType, placeHolder, id, buttonContent, onSubmit}: FormProps) => {
    const [value, setValue] = useState('')
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onSubmit(value)
    }
    return (
        <StyledForm onSubmit={handleSubmit}>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <div className="input-container">
                <input id={id} placeholder={placeHolder} type={inputType} value={value} onChange={(e)=> setValue(e.target.value)} />
                <button type="submit"><span>{buttonContent}</span></button>
            </div>
        </StyledForm>
    )
}

export default Form;