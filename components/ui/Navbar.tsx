import NextLink from "next/link";
import { useRouter } from "next/router";

//* icons *//
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

//* hooks *//
import { useSlider } from "../../hooks";

//* topics *//
import { topics } from "../../utils";

export const Navbar: React.FC = () => {
  const { query } = useRouter();
  const {
    distanceToLeft,
    elementsRef,
    moveNextElement,
    movePreviousElement,
    showLeftArrow,
    showRightArrow,
    ulRef,
  } = useSlider();

  const { topic: topicQuery } = query;

  return (
    <nav className="w-ful sticky top-[60px]  z-30 flex h-[60px] items-center justify-center overflow-hidden bg-white px-[5%] shadow-md lg:top-[70px]">
      <div
        className={
          showLeftArrow
            ? "absolute left-0 z-10 ml-[5%] flex h-full w-[30px] items-center justify-center bg-white/75"
            : "hidden"
        }
      >
        <MdKeyboardArrowLeft
          onClick={movePreviousElement}
          className="cursor-pointer text-2xl text-[#222]"
        />
      </div>
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <ul
          ref={ulRef}
          style={{ left: distanceToLeft }}
          className="absolute flex h-full items-center gap-5 transition-all duration-300"
        >
          {topics.map(({ topic, url, slug }, index) => (
            <li
              ref={(element) => (elementsRef.current[index] = element)}
              key={url}
              className={
                slug === topicQuery
                  ? "flex h-full w-full items-center border-b-2 border-black"
                  : "flex h-full w-full items-center border-b-2 border-black/0"
              }
            >
              <NextLink href={url} passHref>
                <a
                  className={
                    slug === topicQuery
                      ? "whitespace-nowrap text-sm font-normal text-black"
                      : "whitespace-nowrap text-sm font-normal text-gray-400"
                  }
                >
                  {topic}
                </a>
              </NextLink>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={
          showRightArrow
            ? "absolute right-0 z-10 mr-[5%] flex h-full w-[30px] items-center justify-center bg-white/75"
            : "hidden"
        }
      >
        <MdKeyboardArrowRight
          onClick={moveNextElement}
          className="cursor-pointer text-2xl text-[#222]"
        />
      </div>
    </nav>
  );
};
