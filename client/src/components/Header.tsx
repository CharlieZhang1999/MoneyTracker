import React from 'react';
interface HeaderProps {
    title: string
}
export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <p className='header'> {props.title} </p>
    )
}