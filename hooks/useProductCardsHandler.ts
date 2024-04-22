'use client';

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

// import { getProducts } from '@/sanity/requests/getProducts';
import { Product } from '@/sections/Goods/types';

type ProductCardsHandler = {
  cards: Product[];
  isMore: boolean;
  loadMoreCards: () => void;
  hideExtraCards: () => void;
};

export const useProductCardsHandler = (
  buttonRef: React.RefObject<HTMLUListElement>,
  products: Product[],
): ProductCardsHandler => {
  // const [products, setProducts] = useState([] as Product[]);
  const [cards, setCards] = useState([] as Product[]);
  const [isMore, setIsMore] = useState(true);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1400px)',
  });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1399.99 });
  const isMobile = useMediaQuery({
    query: '(max-width: 767.99px)',
  });

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     const products = await getProducts();
  //     setProducts(products);
  //   };
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    if (isDesktop) {
      setCards(products);
    } else if (isTablet) {
      setCards(products.slice(0, 4));
    } else if (isMobile) {
      setCards(products.slice(0, 3));
    }
  }, [isDesktop, isMobile, isTablet, products]);

  const loadMoreCards = () => {
    if (isTablet) {
      const newCards = products.slice(0, cards.length + 4);
      setCards(newCards);
      if (newCards.length === products.length) {
        setIsMore(false);
      }
    } else if (isMobile) {
      const newCards = products.slice(0, cards.length + 3);
      setCards(newCards);
      if (newCards.length === products.length) {
        setIsMore(false);
      }
    }
  };

  const hideExtraCards = () => {
    if (isDesktop) {
      setCards(products);
    } else if (isTablet) {
      setCards(products.slice(0, 4));
      setIsMore(true);
    } else if (isMobile) {
      setCards(products.slice(0, 3));
      setIsMore(true);
    }
    console.log(buttonRef);

    if (buttonRef.current) {
      buttonRef.current.scrollTo({ top: 100, behavior: 'smooth' });
    }
  };

  return { cards, isMore, loadMoreCards, hideExtraCards };
};
