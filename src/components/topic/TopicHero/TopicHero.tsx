//* HEROUI *//
import { Image } from "@heroui/react";

//* INTERFACE *//
interface Props {
  coverImage: { image: string; blur_hash: string };
  description: string;
  title: string;
}

export const TopicHero: React.FC<Props> = ({
  coverImage,
  description,
  title,
}) => {
  return (
    <>
      <section className="relative flex h-[230px] flex-col justify-center gap-5 overflow-hidden bg-cover bg-center bg-no-repeat px-[5%] sm:h-[300px] md:h-[600px]">
        <Image
          src={coverImage.image}
          alt={`${title} cover image`}
          loading="lazy"
          className="relative left-0 top-0 h-full w-full rounded-none object-cover"
          classNames={{ wrapper: "absolute left-0 top-0 w-full !max-w-none" }}
        />

        <h3 className="z-10 w-fit bg-stone-400/20 px-4 py-1 text-4xl font-semibold text-white [text-shadow:2px_1px_0_#000] md:text-6xl md:font-bold">
          {title}
        </h3>
        <p className="z-10 hidden max-w-[600px] rounded-xl bg-stone-900/50 px-4 py-1 text-base text-white backdrop-blur-sm [text-shadow:0px_1px_0_#000] sm:block md:text-lg md:font-medium md:leading-8">
          {description.split("<")[0]}
        </p>
      </section>
    </>
  );
};
