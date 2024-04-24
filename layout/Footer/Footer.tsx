import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { SocialLinks } from '@/components/SocialLinks';
import { FooterLinks } from '@/components/FooterLinks';
import { FooterDeliveryList } from '@/components/FooterDeliveryList';
import { FooterLinksContact } from '@/components/FooterLinksContact';
import { FooterLinkHomePolicy } from '@/components/FooterLinkHomePolicy';

import data from '@/data/layout.json';

export const Footer = () => {
  const {
    footerLinkContact,
    delivery,
    deliveryIcons,
    companyIcons,
    subtitle,
    homeBtn,
    policyBtn,
    copirate,
  } = data;

  return (
    <footer className="relative border-container pt-[60px] md:pt-[70px] xl:pt-[60px] xl:pb-[40px] pb-[30px] bg-main text-center md:text-left">
      <Container>
        <div className="xl:flex xl:justify-between xl:mb-[140px]">
          <Logo isFooter />
          <div className="flex flex-col gap-[35px] md:flex-row md:gap-[155px] mdOnly:mt-[69px] mdOnly:mb-[100px] xl:gap-[250px] smOnly:mt-[35px]">
            <div className="flex flex-col gap-[15px] items-center">
              <ul className="flex flex-col gap-[15px] xl:gap-[30px]">
                {footerLinkContact.map(item => (
                  <FooterLinksContact
                    key={item.name}
                    name={item.name}
                    href={item.href}
                    ariaLabel={item.ariaLabel}
                    label={item.label}
                  />
                ))}
              </ul>
            </div>
            <div className="xl:flex xl:flex-row xl:gap-[250px]">
              <div className="smOnly:mb-[35px] mdOnly:mb-[51px]">
                <p className="font-geologica text-subtitleXs not-italic text-bgSecond mb-[15px] xl:mb-[30px] md:text-subtitleMd">
                  {delivery}
                </p>
                <ul className="flex gap-5 justify-center xl:flex-col">
                  {deliveryIcons.map(item => (
                    <FooterDeliveryList key={item.name} name={item.name} />
                  ))}
                </ul>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="xl:flex xl:flex-row-reverse xl:items-center xl:justify-between">
          <div className="flex flex-col gap-[15px] notXL:mb-[35px] md:flex-row md:gap-[30px]">
            <p className="font-geologica text-subtitleXs not-italic text-footerSecond md:text-subtitleMd">
              {subtitle}
            </p>
            <ul className="flex gap-5 justify-center md:gap-7 xl:gap-5">
              {companyIcons.map(item => (
                <FooterLinks
                  key={item.name}
                  name={item.name}
                  path={item.path}
                  ariaLabel={item.ariaLabel}
                />
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center smOnly:gap-[35px] md:flex-row mdOnly:gap-[70px] xl:flex-row-reverse xl:gap-[225px]">
            <FooterLinkHomePolicy policy={policyBtn} home={homeBtn} />
            <p className="font-geologica not-italic text-footerColor text-subtitleXs md:text-subtitleMd">
              &copy; {copirate}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
