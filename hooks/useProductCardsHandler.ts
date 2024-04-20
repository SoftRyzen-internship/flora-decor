'use client';

import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { getProducts } from '@/sanity/requests/getProducts';
import { Product } from '@/sections/Goods/types';

type ProductCardsHandler = {
  cards: Product[];
  isMore: boolean;
  loadMoreCards: () => void;
  hideExtraCards: () => void;
};

export const useProductCardsHandler = (
  buttonRef: React.RefObject<HTMLButtonElement>,
): ProductCardsHandler => {
  const [products, setProducts] = useState([] as Product[]);
  const [cards, setCards] = useState([] as Product[]);
  const [isMore, setIsMore] = useState(true);
  const [currentScreen, setCurrentScreen] = useState('');

  const isDesktop = useMediaQuery({
    query: '(min-width: 1400px)',
  });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1399.99 });
  const isMobile = useMediaQuery({
    query: '(max-width: 767.99px)',
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    if (isDesktop) {
      setCurrentScreen('desktop');
    } else if (isTablet) {
      setCurrentScreen('tablet');
    } else if (isMobile) {
      setCurrentScreen('mobile');
    }
  }, [isDesktop, isTablet, isMobile]);

  useEffect(() => {
    if (currentScreen === 'desktop') {
      setCards(products);
    } else if (currentScreen === 'tablet') {
      setCards(products.slice(0, 4));
    } else if (currentScreen === 'mobile') {
      setCards(products.slice(0, 3));
    }
  }, [products, currentScreen]);

  const loadMoreCards = () => {
    if (currentScreen === 'tablet') {
      const newCards = products.slice(0, cards.length + 4);
      setCards(newCards);
      if (newCards.length === products.length) {
        setIsMore(false);
      }
    } else if (currentScreen === 'mobile') {
      const newCards = products.slice(0, cards.length + 3);
      setCards(newCards);
      if (newCards.length === products.length) {
        setIsMore(false);
      }
    }
  };

  const hideExtraCards = () => {
    if (currentScreen === 'desktop') {
      setCards(products);
    } else if (currentScreen === 'tablet') {
      setCards(products.slice(0, 4));
      setIsMore(true);
    } else if (currentScreen === 'mobile') {
      setCards(products.slice(0, 3));
      setIsMore(true);
    }
    console.log(buttonRef);

    if (buttonRef.current) {
      buttonRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return { cards, isMore, loadMoreCards, hideExtraCards };
};
