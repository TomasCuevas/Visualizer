import Styles from "./Loader.module.css";

interface Props {
  loading: boolean;
}

export const Loader: React.FC<Props> = ({ loading }) => {
  return (
    <div
      className={
        loading
          ? "absolute bottom-0 my-5 flex h-[70px] w-full items-center justify-center"
          : "hidden"
      }
    >
      <span className={Styles.loader}></span>
    </div>
  );
};
