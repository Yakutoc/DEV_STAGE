import React from 'react';
import styled from 'styled-components';
import {
    useCarousel,
    useCSSCarousel,
    Carousel as BaseCarousel,
    CarouselTrack as BaseTrack,
    CarouselTemplateProps,
    CarouselProps,
    CarouselVirtualProps,
    applyNoSelect,
} from '@salutejs/plasma-core';

import { useForkRef } from '../../hooks';

const StyledCarousel = styled(BaseCarousel)``;
const StyledCarouselTrack = styled(BaseTrack)`
    ${applyNoSelect};
    transition-property: transform;
    transition-duration: 0.5s;
    transform: translate(0px, 0px);
`;

const CarouselTemplate = React.forwardRef<
    HTMLElement,
    CarouselTemplateProps & { trackRef?: React.MutableRefObject<HTMLElement | null>; virtualSize?: number }
>(
    (
        {
            axis,
            scrollSnapType,
            trackRef,
            paddingStart,
            paddingEnd,
            listRole,
            listAriaLabel,
            children,
            virtualSize,
            ...rest
        },
        ref,
    ) => {
        return (
            <StyledCarousel ref={ref} axis={axis} scrollSnapType={scrollSnapType} {...rest}>
                <StyledCarouselTrack
                    ref={(trackRef as React.MutableRefObject<HTMLDivElement | null>) || null}
                    axis={axis}
                    paddingStart={paddingStart}
                    paddingEnd={paddingEnd}
                    role={listRole}
                    aria-label={listAriaLabel}
                    virtualSize={virtualSize}
                >
                    {children}
                </StyledCarouselTrack>
            </StyledCarousel>
        );
    },
);

/**
 * Компонент для создания списков с прокруткой.
 */
// eslint-disable-next-line prefer-arrow-callback
export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(function Carousel(
    {
        index = 0,
        axis = 'x',
        scrollSnapType = 'mandatory',
        scrollAlign,
        detectActive,
        detectThreshold,
        scaleCallback,
        scaleResetCallback,
        onIndexChange,
        onDetectActiveItem,
        throttleMs,
        debounceMs,
        animatedScrollByIndex,
        cssScroll,
        ...rest
    },
    ref,
) {
    const { scrollRef, trackRef } = useCarousel({
        index,
        axis,
        scrollAlign,
        detectActive,
        detectThreshold,
        scaleCallback,
        scaleResetCallback,
        onIndexChange,
        onDetectActiveItem,
        throttleMs,
        debounceMs,
        animatedScrollByIndex,
        cssScroll,
    });

    const handleRef = useForkRef(scrollRef, ref);

    return (
        <CarouselTemplate ref={handleRef} trackRef={trackRef} axis={axis} scrollSnapType={scrollSnapType} {...rest} />
    );
});

// eslint-disable-next-line prefer-arrow-callback
export const CarouselLight = React.forwardRef<HTMLDivElement, CarouselProps>(function CarouselLight(
    {
        index = 0,
        axis = 'x',
        scrollSnapType = 'mandatory',
        scrollAlign,
        detectActive,
        detectThreshold,
        scaleCallback,
        scaleResetCallback,
        onIndexChange,
        onDetectActiveItem,
        throttleMs,
        debounceMs,
        animatedScrollByIndex,
        cssScroll,
        ...rest
    },
    ref,
) {
    const { scrollRef, trackRef } = useCSSCarousel({
        index,
        axis,
        scrollAlign,
        detectActive,
        detectThreshold,
        scaleCallback,
        scaleResetCallback,
        onIndexChange,
        onDetectActiveItem,
        throttleMs,
        debounceMs,
        animatedScrollByIndex,
        cssScroll,
    });

    const handleRef = useForkRef(scrollRef, ref);

    return (
        <CarouselTemplate ref={handleRef} trackRef={trackRef} axis={axis} scrollSnapType={scrollSnapType} {...rest} />
    );
});

/**
 * Компонент для создания виртуализированных списков с прокруткой.
 * Адаптирован для использования с хуком useVirtual.
 * ```
 * import { useVirtual } from '@salutejs/use-virtual';
 * ```
 */
// eslint-disable-next-line prefer-arrow-callback
export const CarouselVirtual = React.forwardRef<
    HTMLDivElement,
    CarouselVirtualProps & { trackRef?: React.MutableRefObject<HTMLElement | null> }
>(({ trackRef, ...rest }, ref) => {
    return <CarouselTemplate ref={ref} trackRef={trackRef} {...rest} />;
});
