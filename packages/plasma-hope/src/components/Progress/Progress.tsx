import React from 'react';
import styled, { css } from 'styled-components';
import { caption, tertiary, surfaceLiquid02, accent } from '@salutejs/plasma-core';

const statuses = {
    success: css`
        background-color: #09a552;
    `,
    warning: css`
        background-color: #ee6820;
    `,
    error: css`
        background-color: #df2638;
    `,
    accent: css`
        background-color: ${accent};
    `,
};

export interface ProgressProps {
    /**
     * Значение прогресса в процентах.
     */
    value: number;
    /**
     * Статус прогресса.
     */
    status?: keyof typeof statuses;
    /**
     * Отображать числовое значение прогресса.
     */
    displayValue?: boolean;
}

const StyledRoot = styled.div`
    display: flex;
    align-items: center;
`;
const StyledTrack = styled.div`
    width: 100%;
    height: 0.25rem;

    background-color: ${surfaceLiquid02};
    border-radius: 0.125rem;
`;
const StyledProgress = styled.div<Pick<ProgressProps, 'value' | 'status'>>`
    width: ${({ value }) => value}%;
    height: 100%;

    ${({ status }) => status && statuses[status]}

    border-radius: 0.125rem;
`;
const StyledValue = styled.span`
    ${caption};

    margin-left: 0.5rem;

    color: ${tertiary};
`;

/**
 * Компонент для отображения прогресса в процентах.
 */
export const Progress: React.FC<ProgressProps> = ({ value, status, displayValue = true }) => {
    const min = 0;
    const max = 100;
    const normalizedValue = Math.max(Math.min(value, max), min);

    return (
        <StyledRoot>
            <StyledTrack>
                <StyledProgress value={normalizedValue} status={status} />
            </StyledTrack>
            {displayValue && <StyledValue>{normalizedValue}%</StyledValue>}
        </StyledRoot>
    );
};
