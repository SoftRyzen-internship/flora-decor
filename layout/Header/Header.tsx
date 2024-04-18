'use client';

import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

import classNames from 'classnames';

import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { BurgerMenu } from '@/components/BurgerMenu';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/Button';

import Burger from '@/public/icons/menu.svg';

import data from '@/data/layout.json';

export const Header = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState<boolean>(false);

  const onBurgerMenuClose = () => setIsBurgerOpen(false);

  const isDesktop = useMediaQuery({
    query: '(min-width: 1400px)',
  });

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { ariaLBurger, labelLink } = data;

  const stylesHeader = classNames(
    'py-[10px] xl:py-8 fixed top-0 left-0 w-full z-10',
    { 'bg-bgMain': scrolled },
  );

  return (
    <header className={stylesHeader}>
      <Container className="relative flex items-center justify-between">
        <Navbar className="notXL:hidden" />
        <Logo
          isHeader
          className="xl:absolute xl:left-[50%] xl:translate-x-[-50%]"
        />
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
          className="xl:hidden w-10 h-10 block transition text-main hover:text-subtitle focus-visible:text-subtitle cursor-pointer"
        >
          <Burger className="w-6 h-6 mr-auto ml-auto" />
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
