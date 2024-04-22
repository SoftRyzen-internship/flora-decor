type ReviewCardProps = {
  name: string;
  city: string;
  text: string;
};

export const ReviewCard = ({ name, city, text }: ReviewCardProps) => {
  return (
    <div className="w-full h-[332px] bg-white rounded-tl-[50px] rounded-br-[50px] py-[37px] px-[26px] xl:w-[734px] xl:h-[520px]">
      <p>{name}</p>
      <p>{city}</p>
      <p>{text}</p>
    </div>
  );
};
