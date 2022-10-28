import { useRef, useCallback } from "react";
import Post from "./Post";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPages } from "./fetcher";
import { Header } from "./Header";
import en from "javascript-time-ago/locale/en.json";
import TimeAgo from "javascript-time-ago";

TimeAgo.addDefaultLocale(en);

function App() {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    isError,
    isLoading,
    error,
  } = useInfiniteQuery(
    ["/posts"],
    ({ pageParam = 0 }) => fetchPages(pageParam),
    {
      getNextPageParam: (lastPages, allPages) => {
        return allPages.length * 10;
      },
    }
  );

  const intObserver = useRef();
  const lastPostRef = useCallback(
    (post) => {
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((posts) => {
        if (posts[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (post) intObserver.current.observe(post);
    },
    [isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (isError)
    return (
      <span className="col-span-full text-center my-6">
        Error: {error.message}
      </span>
    );

  if (isLoading)
    return <span className="col-span-full text-center my-6">Loading...</span>;

  const content = data?.pages.map((pg) => {
    return pg.map((post, i) => {
      if (pg.length === i + 1) {
        return <Post ref={lastPostRef} key={post._id} post={post} />;
      }
      return <Post key={post._id} post={post} />;
    });
  });

  return (
    <>
      <Header />
      <main class="container mx-auto my-4">
        <ul class="grid p-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {content}
        </ul>
        {isFetchingNextPage && (
          <p className="col-span-full text-center my-6">
            Loading more videos...
          </p>
        )}
      </main>
      <footer class="container text-center py-8">
        <p>
          <a
            href="#top"
            class="text-blue-700 hover:text-blue-900 hover:underline focus:text-blue-900 focus:underline"
          >
            Back to Top
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
