import Image from "next/future/image";

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
  return (
    <section className="relative flex h-[230px] flex-col justify-center gap-3 overflow-hidden px-[5%] sm:h-[300px] md:h-[600px]">
      <h3 className="text-3xl font-semibold text-white md:text-5xl md:font-bold">
        {title}
      </h3>
      <p className="hidden max-w-[600px] text-base text-white sm:block md:text-lg md:font-medium md:leading-8">
        {description.split("<")[0]}
      </p>
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <Image
          src={coverImage}
          alt="topic image"
          className="h-full w-full object-cover"
          height="0"
          width="0"
          sizes="100vw"
          quality={70}
          priority
        />
      </div>
      <div className="absolute top-0 left-0 -z-10 h-full w-full bg-gray-800/40"></div>
    </section>
  );
};
