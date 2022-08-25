import * as dayjs from "dayjs";
import "dayjs/locale/es";

//* components *//
import { DownloadPhoto } from "./Download-Photo";

//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";

export const PhotoComponent = ({
  created_at,
  downloads,
  exif: { name: cameraName },
  links: { download },
  urls: { full, small },
  user,
  views,
}: RootObject) => {
  const {
    name,
    profile_image: { large },
  } = user;

  dayjs.locale("es");
  const date = dayjs(created_at).format("D MMMM. YYYY");

  return (
    <main className="mt-3">
      <article className="w-full">
        <header className="sticky top-0 mb-1 flex h-[60px] items-center gap-2 bg-white px-[5%]">
          <img
            src={large}
            alt="profile image"
            className="h-[40px] w-[40px] rounded-full"
          />
          <span className="text-base font-normal text-darklighttext">
            {name}
          </span>
          <DownloadPhoto download_link={full} name={name} />
        </header>
        <picture>
          <source media="(min-width: 1024)" srcSet={full} />
          <img src={small} alt="photo" />
        </picture>
        <footer className="my-5 mx-[5%] flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <span>
              <p className="font-light text-gray-500">Visualizaciones</p>
              <span className="font">{views}</span>
            </span>
            <span>
              <p className="font-light text-gray-500">Descargas</p>
              <span className="font">{downloads}</span>
            </span>
          </div>
          <div className="flex flex-col gap-2">
            {date && (
              <span className="flex items-center gap-3">
                <img
                  src="/public/calendar.svg"
                  alt="calendar"
                  className="h-[16px] w-[16px]"
                />
                <span>{`Publicado el ${date}`}</span>
              </span>
            )}
            {cameraName && (
              <span className="flex items-center gap-3">
                <img
                  src="/public/camera.svg"
                  alt="camera"
                  className="h-[16px] w-[16px]"
                />
                <span>{cameraName}</span>
              </span>
            )}
          </div>
        </footer>
      </article>
    </main>
  );
};
