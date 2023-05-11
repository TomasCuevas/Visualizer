import { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

//* interface *//
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
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setImageLoaded(false);
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = coverImage.image;
  }, [coverImage.image]);

  return (
    <>
      <section className="relative flex h-[230px] flex-col justify-center gap-5 overflow-hidden bg-cover bg-center bg-no-repeat px-[5%] sm:h-[300px] md:h-[600px]">
        <div
          style={{ display: imageLoaded ? "none" : "inline" }}
          className="absolute left-0 top-0 h-[230px] sm:h-[300px] md:h-[600px]"
        >
          {coverImage.blur_hash && (
            <Blurhash
              width="100%"
              height="100%"
              hash={coverImage.blur_hash}
              resolutionX={32}
              resolutionY={32}
            />
          )}
        </div>
        <img
          style={{ display: imageLoaded ? "block" : "none" }}
          src={coverImage.image}
          alt={`${title} cover image`}
          loading="lazy"
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <h3 className="z-10 text-4xl font-semibold text-white md:text-6xl md:font-bold">
          {title}
        </h3>
        <p className="hidden max-w-[600px] rounded-md bg-gray-900/10 px-4 py-1 text-base text-white backdrop-blur-md sm:block md:text-lg md:font-medium md:leading-8">
          {description.split("<")[0]}
        </p>
      </section>
    </>
  );
};
