import { Link } from "react-router-dom";

//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";

export const SelectMoreCard = ({ id, urls: { full, small } }: RootObject) => {
  return (
    <article className="w-full">
      <Link to={`/photo/${id}`}>
        <picture>
          <source media="(min-width: 1024)" srcSet={full} />
          <img src={small} alt="photo" className="rounded-lg" />
        </picture>
      </Link>
    </article>
  );
};
