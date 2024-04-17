import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';

export const Footer = () => {
  return (
    <footer className="pt-[60px] pb-[30px] bg-main">
      <Container>
        <Logo isFooter />
        <p></p>
      </Container>
    </footer>
  );
};
