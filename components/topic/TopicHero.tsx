//* interface *//
interface Props {
  coverImage: string;
  description: string;
  title: string;
}

export const TopicHero: React.FC<Props> = ({
  coverImage,
  description,
  title,
}) => {
  console.log(coverImage);

  return (
    <section
      style={{ backgroundImage: `url('${coverImage}')` }}
      className="relative flex h-[230px] flex-col justify-center gap-5 overflow-hidden bg-cover bg-center bg-no-repeat px-[5%] sm:h-[300px] md:h-[600px]"
    >
      <h3 className="text-4xl font-semibold text-white md:text-6xl md:font-bold">
        {title}
      </h3>
      <p className="hidden max-w-[600px] rounded-md bg-white/10 px-4 py-1 text-base text-white backdrop-blur-sm sm:block md:text-lg md:font-medium md:leading-8">
        {description.split("<")[0]}
      </p>
    </section>
  );
};
