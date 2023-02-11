import React from "react";
import '../Select.css'
interface SelectProps {
    value: string
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
    reference: React.RefObject<HTMLSelectElement>
}
export const Select: React.FC<SelectProps> = (props: SelectProps) => {
    return (
        <>
            <label>Category:</label> 
            <select id="ct" name="category" value={props.value} onChange={props.onChange} ref={props.reference}>
                <option value="DEFAULT" disabled hidden>Select One</option>
                <option value="Bills">Bills</option>
                <option value="Grocery">Grocery</option>
                <option value="Health">Health</option>
                <option value="Travel">Travel</option>
                <option value="Others">Others</option>
            </select>
        </>
    )
}