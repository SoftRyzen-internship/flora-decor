'use client';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { BurgerMenu } from '@/components/BurgerMenu';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';

import Burger from '@/public/icons/menu.svg';

import data from '@/data/layout.json';

export const Header = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  const onBurgerMenuClose = () => setIsBurgerOpen(false);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1400px)',
  });

  const { ariaLBurger, labelLink } = data;

  return (
    <header className="py-[10px] xl:py-8 bg-bgMain fixed top-0 left-0 w-full z-10">
      <Container className="relative flex items-center justify-between">
        <Navbar className="notXL:hidden" />
        <Logo isHeader className="xl:absolute xl:left-[47.5%]" />
        <Button
          isLink
          isHeaderLink
          isDisabled={false}
          onClick={onBurgerMenuClose}
          className="notXL:hidden"
        >
          {labelLink}
        </Button>
        <button
          type="button"
          aria-label={ariaLBurger}
          onClick={() => setIsBurgerOpen(true)}
          className="xl:hidden block transition text-main hover:text-subtitle focus-visible:text-subtitle cursor-pointer"
        >
          <Burger className="w-10 h-10" />
        </button>
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
