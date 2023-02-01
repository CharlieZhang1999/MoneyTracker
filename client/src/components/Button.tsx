import React from 'react';
interface ButtonProps {
    title: string
    eventHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    return (
        <button className='header' onClick={props.eventHandler}> {props.title} </button>
    )
}