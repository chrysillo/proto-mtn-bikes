import React from "react";
import ReactTimeAgo from "react-time-ago";

const Post = React.forwardRef(({ post }, ref) => {
  if (!post.public) return;

  const publishDate = new Date(post.publishDate).valueOf();

  const postBody = (
    <li class="flex flex-col gap-y-2 h-full">
      <img
        src={`https://img.youtube.com/vi/${post._id}/maxresdefault.jpg`}
        alt={post.title}
      />
      <div className="flex flex-col px-4 pb-4 h-full">
        <h2 className="text-3xl text-gray-200 font-semibold tracking-tight">
          {post.title}
        </h2>
        <ReactTimeAgo
          className="text-lg text-gray-200 mt-auto"
          date={publishDate}
        />
      </div>
    </li>
  );

  return (
    <article
      ref={ref}
      className="rounded-lg bg-red-700 cursor-pointer overflow-hidden transition-all shadow-sm hover:shadow-xl hover:scale-105 hover:bg-red-900"
    >
      {postBody}
    </article>
  );
});

export default Post;
