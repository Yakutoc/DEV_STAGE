import React from 'react';
import { CarouselProps } from '@salutejs/plasma-ui';

import { CommonCarousel } from './Carousel';

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
    ({ axis, onIndexChange, index, children }, ref) => (
        <CommonCarousel
            axis={axis}
            index={index}
            detectActive
            detectThreshold={0.4}
            onIndexChange={onIndexChange}
            scrollAlign="start"
            scrollSnapType="mandatory"
            paddingEnd="50vh"
            ref={ref}
        >
            {children}
        </CommonCarousel>
    ),
);
