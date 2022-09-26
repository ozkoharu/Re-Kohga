import React from 'react';

type Props = {
    title?: string;
    children: React.ReactNode;
};

export const BaseHeader: React.FC<Props> = ({
    title = 'Kohga',
    children,
}) => {
    return (
        <header>
            <div>
                {title}
            </div>
            <div>
                {children}
            </div>
        </header>
    )
}