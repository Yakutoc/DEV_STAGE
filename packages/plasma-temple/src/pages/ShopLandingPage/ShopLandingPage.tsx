import React from 'react';
import styled from 'styled-components';
import { Header, CarouselGridWrapper, Carousel, CarouselItem } from '@salutejs/plasma-ui';
import { HeaderProps } from '@salutejs/plasma-ui/components/Header/Header';

import { AnyObject } from '../../types';
import { GalleryCard as CardComponent } from '../../components/GalleryCard/GalleryCard';
import type { GalleryCardProps } from '../../components/GalleryCard/GalleryCard';
import { useRegistry } from '../../hooks/useRegistry';

import { ShopLandingPageState } from './types';

export interface ShopLandingPageProps<T extends AnyObject = AnyObject> {
    header?: HeaderProps;
    onCatalogOpen: () => void;
    onStoreInfoClick: () => void;
    onItemClick: <T1 extends T>(val: T1) => void;
    state: ShopLandingPageState<T>;
    galleryCard?: React.ComponentType<GalleryCardProps<T>>;
}

const StyledCarousel = styled(Carousel)`
    padding: 0.25rem 0;
`;
export const ShopLandingPage: React.FC<ShopLandingPageProps> = ({
    galleryCard,
    state,
    onItemClick,
    header,
    onCatalogOpen,
    onStoreInfoClick,
}) => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const Component = galleryCard ?? CardComponent;

    const { NavCol } = useRegistry();

    const itemsToRender = React.useMemo(() => {
        return state.items?.map((item, i) => {
            const index = i + 1; // потому что первый элемент в карусели `StoreNav`
            const setFocused = () => setActiveIndex(index);
            const open = () => onItemClick(item);

            return (
                <CarouselItem key={item.id} scrollSnapAlign="start">
                    <Component
                        card={item}
                        activeCardIndex={activeIndex}
                        index={index}
                        onClick={open}
                        onFocus={setFocused}
                    />
                </CarouselItem>
            );
        });
    }, [state.items, Component, activeIndex, onItemClick]);

    return (
        <>
            <Header {...header} />
            <CarouselGridWrapper>
                <StyledCarousel index={activeIndex} axis="x" animatedScrollByIndex>
                    <NavCol
                        onFocus={() => setActiveIndex(0)}
                        onCatalogOpen={onCatalogOpen}
                        onStoreInfoClick={onStoreInfoClick}
                        catalogImage={state.catalogImage}
                    />
                    {itemsToRender}
                </StyledCarousel>
            </CarouselGridWrapper>
        </>
    );
};
