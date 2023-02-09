import React from 'react';
import '../Header.css';
interface HeaderProps {
    title: string
}
export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
    return (
        <div className='Header'> 
            <div className='header-section'>
                <div className='header-title'>{props.title} </div>
            </div>
        </div>
    )
}