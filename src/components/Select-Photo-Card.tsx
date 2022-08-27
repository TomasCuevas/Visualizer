import { saveAs } from "file-saver";
import * as dayjs from "dayjs";
import "dayjs/locale/es";

//* interfaces *//
import { RootObject } from "../interfaces/photos-interfaces";

export const SelectPhotoCard = ({
  created_at,
  downloads,
  exif: { name: cameraName },
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
    <article className="mx-auto w-full py-3">
      <header className="sticky top-0 z-20 flex h-[60px] items-center gap-2 bg-white px-[10px] xl:h-[70px]">
        <div className="mx-auto flex w-full max-w-[1300px] items-center gap-2">
          <img
            src={large}
            alt="profile image"
            className="h-[40px] w-[40px] rounded-full"
          />
          <span className="text-base font-normal text-darklighttext">
            {name}
          </span>
          <div className="ml-auto rounded-full border border-decoratedarklight py-2 px-4">
            <span
              className="text-darklighttext"
              onClick={() => saveAs(full || small, name)}
            >
              Descargar
            </span>
          </div>
        </div>
      </header>
      <picture>
        <source media="(min-width: 1024)" srcSet={full} />
        <img src={small} alt="photo" className="mx-auto" />
      </picture>
      <footer className="mx-auto flex max-w-[1300px] flex-col gap-7 py-5 px-[10px] xl:py-10">
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
                className="h-[14px] w-[14px]"
              />
              <span className="text-sm text-darklighttext">{`Publicado el ${date}`}</span>
            </span>
          )}
          {cameraName && (
            <span className="flex items-center gap-3">
              <img
                src="/public/camera.svg"
                alt="camera"
                className="h-[14px] w-[14px]"
              />
              <span className="text-sm text-darklighttext">{cameraName}</span>
            </span>
          )}
        </div>
      </footer>
    </article>
  );
};
