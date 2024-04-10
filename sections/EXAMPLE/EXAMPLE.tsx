import { SectionTitle } from '@/components';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/Button';

export const EXAMPLE = () => {
  return (
    <section>
      <Logo isHeader />
      <SectionTitle
        label="Section Title"
        center="center"
        variant="otherTitle"
      />
      <SectionTitle
        label="Section Title for contacts"
        center="left"
        variant="contactTitle"
      />
      <div className="flex flex-col gap-2 mt-5">
        <p> Лінк в хедері/ розміри тільки для десктопу</p>
        <Button isLink isHeaderLink isDisabled={false}>
          Залишити заявку
        </Button>
        <p> Лінк в секціях</p>
        <Button isLink isOrderLink isDisabled={false}>
          Замовити
        </Button>
        <p> Кнопка більше </p>
        <Button isLink={false} isBtn isDisabled={false} type="button">
          Більше
        </Button>
        <p> Кнопка сховати </p>
        <Button isLink={false} isBtn isDisabled={false} type="button">
          сховати
        </Button>
        <p> Кнопка сабміт </p>
        <Button isLink={false} isBtn isDisabled={false} type="submit">
          Замовити
        </Button>
        <p> Кнопка дісейблед</p>
        <Button isLink={false} isBtn isDisabled={true} type="submit">
          Замовити
        </Button>
      </div>
    </section>
  );
};
