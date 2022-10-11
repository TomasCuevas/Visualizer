import NextLink from "next/link";
import { useRouter } from "next/router";

//* interfaces *//
import { IPhoto } from "../../interfaces/photos";

export const FeedCard: React.FC<IPhoto> = ({
  id,
  urls: { regular },
  user: {
    name,
    profile_image: { large },
  },
}) => {
  const { pathname } = useRouter();
  const isInPhotoPage = pathname.includes("/photo/[id]");

  return (
    <article className="group relative flex  flex-col items-center">
      {!isInPhotoPage && (
        <header
          className={
            "z-20 mb-1 mr-auto flex h-[40px] cursor-pointer items-center gap-2 transition-all duration-300 group-hover:opacity-100 sm:absolute sm:bottom-5 sm:left-5 sm:opacity-0"
          }
        >
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
        </header>
      )}

      <NextLink href={`/photo/${id}`} passHref>
        <a>
          <div>
            <picture>
              <img
                src={regular}
                alt={`${name} photo`}
                className="cursor-zoom-in rounded-3xl"
              />
            </picture>
            <div
              className={
                isInPhotoPage
                  ? "absolute left-0 top-0 z-10 h-full w-full cursor-zoom-in rounded-3xl bg-black/40 opacity-0 transition-all duration-300 group-hover:opacity-100"
                  : "left-0 top-0 z-10 h-full w-full cursor-zoom-in rounded-3xl bg-black/40 opacity-0 transition-all duration-300 sm:absolute sm:group-hover:opacity-100"
              }
            />
          </div>
        </a>
      </NextLink>
    </article>
  );
};
