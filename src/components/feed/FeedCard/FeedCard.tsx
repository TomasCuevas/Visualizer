import { useRouter } from "next/router";
import Link from "next/link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

//* INTERFACE *//
import { IPhoto } from "@/interfaces";

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
    <article className="group relative flex w-full max-w-[400px] mx-auto flex-col transition-all duration-300 sm:hover:scale-[102%]">
      <header
        className={
          isInPhotoPage
            ? "hidden"
            : "z-20 mb-1 mr-auto flex h-[40px] w-full cursor-pointer items-center transition-all duration-300 group-hover:opacity-100 sm:absolute sm:bottom-5 sm:left-5 sm:opacity-0"
        }
      >
        <Link
          href={`https://unsplash.com/@${username}`}
          target="__blank"
          className="flex items-center gap-2"
        >
          <LazyLoadImage
            src={large}
            alt="profile image"
            className="h-[30px] w-[30px] rounded-full"
            loading="lazy"
            effect="blur"
            threshold={100}
          />
          <span className={"text-base font-normal text-dark-light-text sm:text-lg sm:text-light-text"}>
            {name}
          </span>
        </Link>
      </header>

      <Link prefetch={false} href={`/photo/${id}`} className="relative flex w-full">
        <LazyLoadImage
          alt={small}
          effect="blur"
          threshold={100}
          src={small}
          className="relative object-cover h-auto max-w-full transition-all duration-300 scale-100 shadow-md cursor-zoom-in rounded-2xl shadow-gray-900/50 blur-0"
        />
        <div
          className={
            isInPhotoPage
              ? "absolute left-0 top-0 z-10 h-full w-full cursor-zoom-in rounded-2xl bg-black/40 opacity-0 transition-all duration-300 group-hover:opacity-100"
              : "left-0 top-0 z-10 h-full w-full cursor-zoom-in rounded-2xl bg-black/40 opacity-0 transition-all duration-300 absolute sm:group-hover:opacity-100"
          }
        />
        <div className="absolute z-10 flex gap-2 px-5 ml-auto transition-all duration-500 bg-white top-5 left-5 rounded-xl sm:opacity-0 sm:group-hover:opacity-100">
          <p className="text-sm">By</p>
          <LazyLoadImage
            src="/unsplash.svg"
            alt="Unsplash logo"
            className="w-[65px]"
            loading="lazy"
            effect="blur"
            threshold={100}
          />
        </div>
      </Link>
    </article>
  );
};
