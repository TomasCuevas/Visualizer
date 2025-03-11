import { useRouter } from "next/router";
import Link from "next/link";

//* HEROUI *//
import { Image } from "@heroui/react";

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
    <article className="group relative mx-4 mb-4 flex h-auto w-full max-w-[calc(100vw_-_32px)] break-inside-avoid flex-col transition-all duration-300 sm:mx-auto">
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
          <Image
            src={large}
            alt="profile image"
            className="h-[30px] w-[30px] rounded-full"
          />
          <span
            className={
              "text-base font-normal text-dark-light-text sm:text-lg sm:text-light-text"
            }
          >
            {name}
          </span>
        </Link>
      </header>

      <Link
        prefetch={false}
        href={`/photo/${id}`}
        className="relative flex w-full [&>*:nth-child(1)]:w-full [&>*:nth-child(1)]:!max-w-full"
      >
        <Image
          alt={small}
          src={small}
          className="relative h-auto w-full max-w-full scale-100 cursor-zoom-in rounded-2xl object-cover shadow-md shadow-gray-900/50 blur-0 duration-300"
          isZoomed
        />
        <div
          className={
            isInPhotoPage
              ? "pointer-events-none absolute left-0 top-0 z-10 h-full w-full cursor-zoom-in rounded-2xl bg-black/40 opacity-0 duration-300 group-hover:opacity-100"
              : "pointer-events-none absolute left-0 top-0 z-10 h-full w-full cursor-zoom-in rounded-2xl bg-black/40 opacity-0 duration-300 sm:group-hover:opacity-100"
          }
        />
        <div className="absolute left-5 top-5 z-10 ml-auto flex gap-2 rounded-xl bg-white px-5 transition-all duration-500 sm:opacity-0 sm:group-hover:opacity-100">
          <p className="text-sm">By</p>
          <Image
            src="/unsplash.svg"
            alt="Unsplash logo"
            className="w-[65px] rounded-none"
          />
        </div>
      </Link>
    </article>
  );
};
