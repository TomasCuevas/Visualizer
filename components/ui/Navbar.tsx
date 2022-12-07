import NextLink from "next/link";
import { useRouter } from "next/router";

//* icons *//
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

//* hooks *//
import { useGetTopics, useSlider } from "../../hooks";

export const Navbar: React.FC = () => {
  const { topicsQuery } = useGetTopics();
  const {
    distanceToLeft,
    elementsRef,
    moveNextElement,
    movePreviousElement,
    showLeftArrow,
    showRightArrow,
    ulRef,
  } = useSlider();

  const router = useRouter();
  const { topic } = router.query;

  return (
    <nav className="w-ful sticky top-[60px] z-30 flex h-[60px] items-center justify-center overflow-hidden bg-white px-4 shadow-md lg:top-[70px]">
      <div
        className={
          showLeftArrow
            ? "absolute left-0 z-10 ml-4 flex h-full w-[30px] items-center justify-center bg-white/75"
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
          {!topicsQuery.isFetching || !topicsQuery.isLoading
            ? topicsQuery.data?.map(({ title, slug, id }, index) => (
                <li
                  ref={(element) => (elementsRef.current[index] = element)}
                  key={id}
                  className={
                    slug === topic
                      ? "flex h-full w-full items-center border-b-2 border-black"
                      : "flex h-full w-full items-center border-b-2 border-black/0"
                  }
                >
                  <NextLink href={`/topic/${slug}`} passHref>
                    <a
                      className={
                        slug === topic
                          ? "whitespace-nowrap text-sm font-normal text-black"
                          : "whitespace-nowrap text-sm font-normal text-gray-400"
                      }
                    >
                      {title}
                    </a>
                  </NextLink>
                </li>
              ))
            : null}
        </ul>
      </div>
      <div
        className={
          showRightArrow
            ? "absolute right-0 z-10 mr-4 flex h-full w-[30px] items-center justify-center bg-white/75"
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
