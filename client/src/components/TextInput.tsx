import React from "react";
import { InputNumber } from 'antd';
import '../TextInput.css'
interface TextInputProps {
    onChange: (value: number | null) => void
    reference: React.RefObject<HTMLInputElement>
}
export const TextInput: React.FC<TextInputProps> = (props: TextInputProps) => {
    return (
        <>
            <label>Amount:</label>
            <div className="input-container">
                <InputNumber min={0} step={0.01} defaultValue={0.00} onChange={props.onChange} />
            </div>
        </>
    )
}