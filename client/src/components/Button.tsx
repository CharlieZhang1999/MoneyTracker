import React from 'react';
import '../Button.css';
interface ButtonProps {
    title: string
    eventHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
    active: Boolean
}
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button className={props.active?'active':'inactive'} onClick={props.eventHandler}> {props.title} </button>
    )
}