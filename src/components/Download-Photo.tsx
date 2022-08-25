import { saveAs } from "file-saver";

interface Props {
  download_link: string;
  name: string;
}

export const DownloadPhoto = ({ download_link, name }: Props) => {
  return (
    <div className="ml-auto rounded-full border border-decoratedarklight py-2 px-4">
      <span
        className="text-darklighttext"
        onClick={() => saveAs(download_link, name)}
      >
        Descargar
      </span>
    </div>
  );
};
