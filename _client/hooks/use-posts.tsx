import { API, useMutation } from "_client/hooks/_useTRPC";
import { usePostStore } from "_client/stores/posts-store";
import { useCallback, useEffect, useRef, useState } from "react";

type UsePostsHook = () => {
  addLike: (id: string) => void;
  addView: (id: string) => void;
};

export const usePosts: UsePostsHook = () => {
  const [posts, setPosts] = usePostStore();
  const addViewMutation = useMutation(["posts.addView"]);
  const addLikeMutation = useMutation(["posts.addLike"]);

  const addLike = useCallback(async (id: string) => {
    if (!id) return;
    setPosts((data) => [
      ...data.map((post) => {
        if (post.id !== id) return post;
        return { ...post, likes: post.likes + 1 };
      }),
    ]);
    addLikeMutation.mutate({ id });
  }, [addLikeMutation, setPosts]);

  const addView = useCallback(async (id: string) => {
    if (!id) return;
    setPosts((data) => [
      ...data.map((post) => {
        if (post.id !== id) return post;
        return { ...post, views: post.views + 1 };
      }),
    ]);

    addViewMutation.mutate({ id });
  }, [addViewMutation, setPosts]);

  return { addLike, addView };
};

export default usePosts;
