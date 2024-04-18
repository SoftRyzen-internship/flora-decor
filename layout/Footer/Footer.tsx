import { Container } from '@/components/Container';
import { Logo } from '@/components/Logo';
import { SocialLinks } from '@/components/SocialLinks';

import IconLocation from '@/public/icons/location.svg';
import IconMail from '@/public/icons/mail.svg';
import IconTel from '@/public/icons/phone.svg';
import IconUkr from '@/public/icons/ukrposhta.svg';
import IconNova from '@/public/icons/nova_poshta.svg';
import IconGoIt from '@/public/icons/goIT.svg';
import IconSoftRyzen from '@/public/icons/softryzen.svg';

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
        <Logo isFooter />
        <div className="flex flex-col gap-[35px] md:flex-row md:gap-[155px] md:mt-[69px] md:mb-[100px]">
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
                <li key={item.name} className="footer-item transition">
                  <a
                    href={item.href}
                    aria-label={item.ariaLabel}
                    className="text-bgSecond font-geologica text-sm not-italic font-medium leading-[1.4] tracking-[-0.28px] hover:text-subtitle focus:text-subtitle transition flex items-center gap-[15px]"
                  >
                    {item.name === 'phone' && (
                      <div className="w-10 h-10 bg-bgMain footer-icon flex justify-center items-center rounded-full">
                        <IconTel width={24} height={24} />
                      </div>
                    )}
                    {item.name === 'mail' && (
                      <div className="w-10 h-10 bg-bgMain footer-icon flex justify-center items-center rounded-full">
                        <IconMail width={24} height={24} />
                      </div>
                    )}
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="mb-[35px] md:mb-[51px]">
              <p className="font-geologica text-sm not-italic font-medium leading-[1.4] tracking-[-0.28px] text-bgSecond mb-[15px]">
                {delivery}
              </p>
              <ul className="flex gap-5 justify-center">
                {deliveryIcons.map(item => (
                  <li key={item.name}>
                    {item.name === 'ukr' && <IconUkr width={133} height={36} />}
                    {item.name === 'nova' && (
                      <IconNova width={100} height={36} />
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <SocialLinks />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-[15px] mb-[35px] md:flex-row md:gap-[30px]">
            <p className="font-geologica text-sm not-italic font-medium leading-[1.4] tracking-[-0.28px] text-footerSecond">
              {subtitle}
            </p>
            <ul className="flex gap-5 justify-center md:gap-7">
              {companyIcons.map(item => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    aria-label={item.ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="text-footerSecond transition hover:text-subtitle focus-visible:text-subtitle"
                  >
                    {item.name === 'goit' && (
                      <IconGoIt className="w-[50px] h-[15px] md:w-[81px] md:h-6 xl:w-[67px] xl:h-[19px]" />
                    )}
                    {item.name === 'softryzen' && (
                      <IconSoftRyzen className="w-[100px] h-[15px] md:w-[161px] md:h-6 xl:w-[134px] xl:h-[19px]" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-[35px] md:flex-row md:gap-[70px]">
            <button>{homeBtn}</button>
            <button>{policyBtn}</button>
            <p className="font-geologica text-footerColor text-subtitleXs">
              &copy; {copirate}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
