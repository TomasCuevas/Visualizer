//* STYLES *//
import Styles from "./Loader.module.css";

//* INTERFACE *//
interface Props {
  loading: boolean;
}

export const Loader: React.FC<Props> = ({ loading }) => {
  return (
    <div
      className={
        loading
          ? "my-5 flex h-[58px] w-full items-center justify-center animate-spin duration-[5000]"
          : "hidden"
      }
    >
      <span className={Styles.loader}></span>
    </div>
  );
};
