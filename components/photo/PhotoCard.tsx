import { saveAs } from "file-saver";
import dayjs from "dayjs";
import "dayjs/locale/es";

//* interfaces *//
import { IPhoto } from "../../interfaces/photos";

export const PhotoCard: React.FC<IPhoto> = ({
  created_at,
  downloads,
  exif: { name: cameraName },
  urls: { full, regular },
  user,
  views,
}) => {
  const {
    name,
    profile_image: { large },
  } = user;

  dayjs.locale("es");
  const date = dayjs(created_at).format("D MMMM. YYYY");

  return (
    <article className="mx-auto w-full py-3">
      <header className="sticky top-0 z-50 flex h-[60px] items-center gap-2 bg-white px-[5%]">
        <div className="mx-auto flex w-full max-w-[1300px] items-center gap-2">
          <img
            src={large}
            alt="profile image"
            className="h-[40px] w-[40px] rounded-full"
          />
          <span className="text-base font-normal text-darklighttext">
            {name}
          </span>
          <div className="group ml-auto flex w-[120px] cursor-pointer items-center justify-center rounded-full border border-background py-2 px-5 transition-all duration-300 hover:bg-background">
            <span
              className="text-background transition-all duration-300 group-hover:font-bold group-hover:text-lighttext"
              onClick={() => saveAs(full, name)}
            >
              Descargar
            </span>
          </div>
        </div>
      </header>

      <main className="relative z-40 w-full bg-white">
        <picture>
          <img
            src={regular}
            alt="photo"
            className="mx-auto max-h-[calc(100vh_-_200px)] sm:px-[5%]"
          />
        </picture>
      </main>

      <footer className="relative z-40 mx-auto flex max-w-[1300px] flex-col gap-7 bg-white px-[5%] py-5 xl:py-10">
        <div className="flex flex-col gap-2">
          <span>
            <p className="font-light text-gray-500">Visualizaciones</p>
            <span className="font">{views.toLocaleString("en-US")}</span>
          </span>
          <span>
            <p className="font-light text-gray-500">Descargas</p>
            <span className="font">{downloads.toLocaleString("en-US")}</span>
          </span>
        </div>
        <div className="flex flex-col gap-2">
          {date && (
            <span className="flex items-center gap-3">
              <img
                src="/calendar.svg"
                alt="calendar"
                className="h-[14px] w-[14px]"
              />
              <span className="text-sm text-darklighttext">{`Publicado el ${date}`}</span>
            </span>
          )}
          {cameraName && (
            <span className="flex items-center gap-3">
              <img
                src="/camera.svg"
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
