// generated by theme-builder { version } { plasma-hope-version??? }

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { buttonConfig } from '../../../../components/Button';
import { mergeConfig } from '../../../../engines';
import { argTypesFromConfig } from '../../../_helpers';

import { config } from './Button.config';
import { Button } from './Button';

export default {
    title: 'bootstrap/Button',
    component: Button,
    argTypes: argTypesFromConfig(mergeConfig(buttonConfig, config)),
} as ComponentMeta<typeof Button>;

export const Default: ComponentStory<typeof Button> = (props) => {
    return (
        <div style={{ padding: '1rem' }}>
            <Button {...props}>Hello</Button>
        </div>
    )
};