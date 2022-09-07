import { Link } from "react-router-dom";

//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";

export const SelectMoreCard = ({
  id,
  urls: { full, small },
  user: {
    name,
    profile_image: { large },
  },
}: RootObject) => {
  return (
    <article className="group relative flex  flex-col items-center">
      <header className="absolute bottom-5 left-5 z-20 mb-1 mr-auto flex h-[40px] cursor-pointer items-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <img
          src={large}
          alt="profile image"
          className="h-[30px] w-[30px] rounded-full"
        />
        <span className="text-base font-normal text-lighttext sm:text-lg">
          {name}
        </span>
      </header>
      <Link to={`/photo/${id}`}>
        <picture>
          <source media="(min-width: 1024)" srcSet={full} />
          <img src={small} alt="photo" className="cursor-zoom-in rounded-3xl" />
        </picture>
        <div className="absolute left-0 top-0 z-10 h-full w-full cursor-zoom-in rounded-3xl bg-black/40 opacity-0 transition-all duration-300 group-hover:opacity-100" />
      </Link>
    </article>
  );
};
