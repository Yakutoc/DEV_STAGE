import React from 'react';
import styled, { css } from 'styled-components';
import { IconChevronLeft, IconChevronDown, IconSize } from '@salutejs/plasma-icons';
import type { PickOptional } from '@salutejs/plasma-core';
import { mediaQuery } from '@salutejs/plasma-core';

import { Button, ButtonProps } from '../Button';

export interface HeaderArrowProps
    extends PickOptional<ButtonProps, 'as' | 'size' | 'scaleOnInteraction' | 'disabled'>,
        React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Тип стрелки.
     */
    arrow: 'back' | 'minimize';
    iconSize?: IconSize;
}

const StyledButton = styled(Button)`
    position: absolute;
    top: 0;
    bottom: 0;
    margin-top: auto;
    margin-bottom: auto;
    right: 100%;
    margin-right: 0.5rem;

    ${({ theme }) =>
        mediaQuery(
            'S',
            theme.deviceScale,
        )(css`
            position: static;
            width: auto;
            height: auto;
            padding: 0;
            margin-right: 1rem;
        `)}
`;

/**
 * Кнопка-стрелка с возможностью отображения в двух типах - "назад" или "свернуть".
 */
export const HeaderArrow: React.FC<HeaderArrowProps> = ({ arrow, iconSize = 's', ...rest }) => (
    <StyledButton size="s" square view="clear" {...rest}>
        {arrow === 'minimize' ? <IconChevronDown size={iconSize} /> : <IconChevronLeft size={iconSize} />}
    </StyledButton>
);
