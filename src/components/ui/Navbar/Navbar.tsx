import NextLink from "next/link";
import { useRouter } from "next/router";

//* HOOK *//
import { useGetTopics } from "@/hooks";

export const Navbar: React.FC = () => {
  const { topicsQuery } = useGetTopics();

  const router = useRouter();
  const { topic } = router.query;

  return (
    <nav className="w-ful sticky top-[60px] z-30 flex h-[60px] items-center justify-center overflow-hidden bg-white px-4 shadow-md lg:top-[70px]">
      <div className="flex h-full w-full items-center overflow-auto">
        <ul className="flex h-full items-center gap-5 transition-all duration-300">
          {!topicsQuery.isFetching || !topicsQuery.isLoading
            ? topicsQuery.data?.map(({ title, slug, id }) => (
                <li
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
    </nav>
  );
};
