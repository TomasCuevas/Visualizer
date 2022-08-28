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
    <article className="flex  flex-col items-center">
      <header className="mb-1 mr-auto flex h-[40px] items-center gap-2 sm:hidden">
        <img
          src={large}
          alt="profile image"
          className="h-[30px] w-[30px] rounded-full"
        />
        <span className="text-base font-normal text-darklighttext">{name}</span>
      </header>
      <Link to={`/photo/${id}`}>
        <picture>
          <source media="(min-width: 1024)" srcSet={full} />
          <img src={small} alt="photo" className="rounded-3xl" />
        </picture>
      </Link>
    </article>
  );
};
