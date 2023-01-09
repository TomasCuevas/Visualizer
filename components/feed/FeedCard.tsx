import { useRouter } from "next/router";
import NextLink from "next/link";
import { motion, Variants } from "framer-motion";

//* interfaces *//
import { IPhoto } from "../../interfaces/photos";

//* animation variants *//
const articleAnimation: Variants = {
  offscreen: { opacity: 0.5, scale: 0.8 },
  onscreen: {
    opacity: 1,
    scale: [0.9, 1.1, 1],
    transition: { duration: 0.2 },
  },
};

export const FeedCard: React.FC<IPhoto> = ({
  id,
  urls: { small },
  user: {
    name,
    profile_image: { large },
    username,
  },
}) => {
  const { pathname } = useRouter();
  const isInPhotoPage = pathname.includes("/photo/[id]");

  return (
    <motion.article
      initial="offscreen"
      whileInView="onscreen"
      variants={articleAnimation}
      viewport={{ once: false, amount: 0.1 }}
      className="group relative flex min-w-full flex-col transition-all duration-300 sm:hover:scale-[102%]"
    >
      <header
        className={
          isInPhotoPage
            ? "hidden"
            : "z-20 mb-1 mr-auto flex h-[40px] w-full cursor-pointer items-center transition-all duration-300 group-hover:opacity-100 sm:absolute sm:bottom-5 sm:left-5 sm:opacity-0"
        }
      >
        <NextLink href={`https://unsplash.com/@${username}`} passHref>
          <a target="__blank" className="flex items-center gap-2">
            <img
              src={large}
              alt="profile image"
              className="h-[30px] w-[30px] rounded-full"
            />
            <span
              className={
                "text-base font-normal text-darklighttext sm:text-lg sm:text-lighttext"
              }
            >
              {name}
            </span>
          </a>
        </NextLink>
      </header>

      <NextLink prefetch={false} href={`/photo/${id}`} passHref>
        <a className="relative flex min-w-full">
          <img
            src={small}
            alt={`${name} photo`}
            className="relative h-auto min-w-full scale-100 cursor-zoom-in rounded-3xl object-cover shadow-md shadow-gray-900/50 blur-0 transition-all duration-300"
          />
          <div
            className={
              isInPhotoPage
                ? "absolute left-0 top-0 z-10 h-full w-full cursor-zoom-in rounded-3xl bg-black/40 opacity-0 transition-all duration-300 group-hover:opacity-100"
                : "left-0 top-0 z-10 h-full w-full cursor-zoom-in rounded-3xl bg-black/40 opacity-0 transition-all duration-300 sm:absolute sm:group-hover:opacity-100"
            }
          />
          <div className="absolute top-5 left-5 z-10 ml-auto flex gap-2 rounded-xl bg-white px-5 transition-all duration-500 sm:opacity-0 sm:group-hover:opacity-100">
            <p className="text-sm">By</p>
            <img src="/unsplash.svg" alt="Unsplash logo" className="w-[65px]" />
          </div>
        </a>
      </NextLink>
    </motion.article>
  );
};
