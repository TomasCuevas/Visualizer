import { Link } from "react-router-dom";

//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";

export const FeedHomeCard = ({
  id,
  urls: { full, small },
  user,
}: RootObject) => {
  const {
    name,
    profile_image: { large },
  } = user;

  return (
    <article className="group relative flex  flex-col items-center">
      <header className="z-20 mb-1 mr-auto flex h-[40px] cursor-pointer items-center gap-2 transition-all duration-300 group-hover:opacity-100 sm:absolute sm:bottom-5 sm:left-5 sm:opacity-0">
        <img
          src={large}
          alt="profile image"
          className="h-[30px] w-[30px] rounded-full"
        />
        <span className="text-base font-normal text-darklighttext sm:text-lg sm:text-lighttext">
          {name}
        </span>
      </header>
      <Link to={`/photo/${id}`}>
        <picture>
          <source media="(min-width: 1024)" srcSet={full} />
          <img src={small} alt="photo" className="cursor-zoom-in rounded-3xl" />
        </picture>
        <div className="left-0 top-0 z-10 h-full w-full cursor-zoom-in rounded-3xl bg-black/40 opacity-0 transition-all duration-300 sm:absolute sm:group-hover:opacity-100" />
      </Link>
    </article>
  );
};
