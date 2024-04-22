import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { SocialLinks } from '@/components/SocialLinks';
import { FooterLinks } from '@/components/FooterLinks';
import { FooterDeliveryList } from '@/components/FooterDeliveryList';
import { FooterLinksContact } from '@/components/FooterLinksContact';
import { FooterLinkHomePolicy } from '@/components/FooterLinkHomePolicy';

import IconLocation from '@/public/icons/location.svg';

import data from '@/data/layout.json';

export const Footer = () => {
  const {
    location,
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
    <footer className="relative border-container pt-[60px] md:pt-[70px] pb-[30px] bg-main text-center md:text-left">
      <Container>
        <div className="xl:flex xl:justify-between xl:mb-[140px]">
          <Logo isFooter />
          <div className="flex flex-col gap-[35px] md:flex-row md:gap-[155px] mdOnly:mt-[69px] mdOnly:mb-[100px] xl:gap-[250px]">
            <div className="flex flex-col gap-[15px] items-center smOnly:mt-[35px]">
              <div className="flex items-center gap-[15px]">
                <div className="w-10 h-10 bg-bgMain flex justify-center items-center rounded-full">
                  <IconLocation width={24} height={24} />
                </div>
                <p className="font-geologica text-sm not-italic font-medium leading-[1.4] tracking-[-0.28px] text-bgSecond flex flex-col items-start">
                  {location.label}
                  <span>{location.labelSpan}</span>
                </p>
              </div>
              <ul className="flex flex-col gap-[15px]">
                {footerLinkContact.map(item => (
                  <FooterLinksContact
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
                <p className="font-geologica text-sm not-italic font-medium leading-[1.4] tracking-[-0.28px] text-bgSecond mb-[15px]">
                  {delivery}
                </p>
                <ul className="flex gap-5 justify-center xl:flex-col">
                  {deliveryIcons.map(item => (
                    <FooterDeliveryList name={item.name} />
                  ))}
                </ul>
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
        <div className="xl:flex xl:flex-row-reverse xl:items-center xl:justify-between">
          <div className="flex flex-col gap-[15px] notXL:mb-[35px] md:flex-row md:gap-[30px]">
            <p className="font-geologica text-sm not-italic font-medium leading-[1.4] tracking-[-0.28px] text-footerSecond">
              {subtitle}
            </p>
            <ul className="flex gap-5 justify-center md:gap-7 xl:gap-5">
              {companyIcons.map(item => (
                <FooterLinks
                  name={item.name}
                  path={item.path}
                  ariaLabel={item.ariaLabel}
                />
              ))}
            </ul>
          </div>
          <div className="flex flex-col smOnly:gap-[35px] md:flex-row mdOnly:gap-[70px] xl:flex-row-reverse xl:gap-[193px]">
            <FooterLinkHomePolicy policy={policyBtn} home={homeBtn} />
            <p className="font-geologica text-footerColor text-subtitleXs">
              &copy; {copirate}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
