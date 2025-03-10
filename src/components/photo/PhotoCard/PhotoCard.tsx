import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { saveAs } from "file-saver";
import dayjs from "dayjs";
import "dayjs/locale/es";

//* ANIMATION VARIANTS *//
import { imageVariants } from "./photoCard.variants";

//* INTERFACE *//
import { IPhoto } from "@/interfaces";

export const PhotoCard: React.FC<IPhoto> = ({
  id,
  created_at,
  downloads,
  exif: { name: cameraName },
  urls: { full, regular },
  user: {
    username,
    name,
    profile_image: { large },
  },
  views,
  location,
}) => {
  const [imageFull, setImageFull] = useState<boolean>(false);
  const [scroll, setScroll] = useState<number>(0);

  const onSetImageFul = () => {
    if (imageFull) scrollTo(0, scroll);
    if (!imageFull) setScroll(window.scrollY);

    setImageFull((prev) => !prev);
  };

  dayjs.locale("es");
  const date = dayjs(created_at).format("D MMMM. YYYY");

  useEffect(() => {
    setImageFull(false);
  }, [regular]);

  return (
    <article className="mx-auto w-full pb-3">
      <header className="sticky top-0 z-50 flex h-[60px] items-center gap-2 bg-white px-[5%] lg:h-[70px]">
        <div className="mx-auto flex h-[60px] w-full items-center gap-2">
          <Link
            href={`https://unsplash.com/@${username}`}
            target="__blank"
            className="flex items-center gap-2"
          >
            <img src={large} alt="profile image" className="h-[40px] w-[40px] rounded-full" />
            <span className="text-base font-normal text-dark-light-text">{name}</span>
          </Link>
          <div className="group ml-auto hidden h-[40px] cursor-pointer items-center justify-center rounded-full border border-black py-2 px-5 xs:flex">
            <Link
              href={`https://unsplash.com/photos/${id}`}
              target="__blank"
              className="flex items-center gap-2"
            >
              <span className="hidden md:block">Ver en</span>
              <img src="/unsplash.svg" alt="unsplash logo" className="w-[80px]" />
            </Link>
          </div>
          <div className="group ml-auto flex h-[40px] cursor-pointer items-center justify-center rounded-full border border-background py-2 px-5 transition-all duration-300 hover:bg-background xs:ml-0">
            <span
              className="text-background transition-all duration-300 group-hover:text-light-text"
              onClick={() => saveAs(full, name)}
            >
              Descargar
            </span>
          </div>
        </div>
      </header>

      <main className="relative z-40 w-full bg-white">
        <motion.img
          initial="offscreen"
          whileInView="onscreen"
          variants={imageVariants}
          viewport={{ amount: 0.01, once: false }}
          src={regular}
          alt="photo"
          key={regular}
          className={
            imageFull
              ? "w-screen cursor-zoom-out object-contain xl:min-h-[calc(100vh_-_220px)]"
              : "max-h-[calc(100vh_-_220px)] w-screen cursor-zoom-in object-contain md:px-5 xl:min-h-[calc(100vh_-_220px)]"
          }
          onClick={onSetImageFul}
        />
      </main>

      <footer className="relative z-40 mx-auto flex flex-col gap-7 bg-white px-[5%] py-5 xl:py-10">
        <div className="flex flex-col gap-2">
          <span>
            <p className="font-light text-gray-500">Visualizaciones</p>
            <span className="font">{views.toLocaleString("en-US")}</span>
          </span>
          <span>
            <p className="font-light text-gray-500">Descargas</p>
            <span className="font">{downloads.toLocaleString("en-US")}</span>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          <span className={date ? "flex items-center gap-3" : "hidden"}>
            <img src="/calendar.svg" alt="calendar" className="h-[22px] w-[22px]" />
            <span className="text-sm text-dark-light-text">{`Publicado el ${date}`}</span>
          </span>
          <span className={cameraName ? "flex items-center gap-3" : "hidden"}>
            <img src="/camera.svg" alt="camera" className="h-[22px] w-[22px]" />
            <span className="text-sm text-dark-light-text">{cameraName}</span>
          </span>
          <span className={location.name ? "flex items-center gap-3" : "hidden"}>
            <img src="/location.svg" alt="camera" className="h-[22px] w-[22px]" />
            <span className="text-sm text-dark-light-text">{location.name}</span>
          </span>
        </div>
      </footer>
    </article>
  );
};
