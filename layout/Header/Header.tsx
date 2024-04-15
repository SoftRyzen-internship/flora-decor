'use client';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';

import Burger from '@/public/icons/menu.svg';

import data from '@/data/layout.json';
import { BurgerMenu } from '@/components/BurgerMenu';

export const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  const onBurgerMenuClose = () => setIsBurgerOpen(false);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1400px)',
  });

  const { ariaLBurger } = data;

  return (
    <header className="py-[10px] xl:py-5 bg-bgMain fixed top-0 left-0 w-full">
      <Container className="flex items-center justify-between">
        <Logo isHeader />
        {!isDesktop && (
          <button
            type="button"
            aria-label={ariaLBurger}
            onClick={() => setIsBurgerOpen(true)}
            className="block transition text-main hover:text-subtitle focus:text-subtitle cursor-pointer"
          >
            <Burger className="w-6 h-6" />
          </button>
        )}
        {!isDesktop && (
          <BurgerMenu
            isBurgerOpen={isBurgerOpen}
            onBurgerMenuClose={onBurgerMenuClose}
          />
        )}
      </Container>
    </header>
  );
};
