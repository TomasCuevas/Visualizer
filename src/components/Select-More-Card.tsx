import { Link } from "react-router-dom";

//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";

export const SelectMoreCard = ({ id, urls: { full, small } }: RootObject) => {
  return (
    <article className="group relative w-full">
      <Link to={`/photo/${id}`}>
        <picture>
          <source media="(min-width: 1024)" srcSet={full} />
          <img src={small} alt="photo" className="rounded-lg lg:rounded-2xl" />
        </picture>
        <div className="left-0 top-0 z-10 h-full w-full cursor-zoom-in rounded-lg bg-black/40 opacity-0 transition-all duration-300 sm:absolute sm:group-hover:opacity-100 lg:rounded-2xl" />
      </Link>
    </article>
  );
};
