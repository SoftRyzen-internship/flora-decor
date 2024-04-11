import Link from 'next/link';
import FacebookIcon from '@/public/icons/facebook.svg';
import InstagramIcon from '@/public/icons/instagram.svg';

export const SocialLinks = () => {
  return (
    <div className="flex gap-6">
      <Link
        href="https://m.facebook.com/profile.php/?id=100024849397472"
        aria-label="посилання на сторінку в Фейсбук"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex text-bgMain hover:text-bgSecond focus:text-bgSecond active:text-[#D5DDC9] transition"
      >
        <FacebookIcon width={40} height={40} className="fill-current" />
      </Link>
      <Link
        href="https://www.instagram.com/olena8826?igsh=amkyYzRyYWZpNnhw"
        aria-label="посилання на сторінку в Інстаграм"
        target="_blank"
        rel="noopener noreferrer nofollow"
        className="inline-flex text-bgMain hover:text-bgSecond focus:text-bgSecond active:text-[#D5DDC9] transition"
      >
        <InstagramIcon width={40} height={40} className="fill-current" />
      </Link>
    </div>
  );
};
