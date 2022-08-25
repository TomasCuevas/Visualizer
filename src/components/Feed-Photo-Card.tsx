import { Link } from "react-router-dom";

//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";

export const FeedPhotoCard = ({
  user,
  urls: { full, small },
  id,
}: RootObject) => {
  const {
    name,
    profile_image: { large },
  } = user;

  return (
    <article className="w-full">
      <header className="mb-1 flex h-[40px] items-center gap-2">
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
