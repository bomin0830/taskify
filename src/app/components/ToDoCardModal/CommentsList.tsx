'use client';

import { useCallback, useEffect, useState } from 'react';
import CustomAvatar from '../CustomAvatar';
import Comment from './Comment';
import { getCommentsByCardId } from './api';

export default function CommentsList({ cardId }: { cardId: number }) {
  const [comments, setComments] = useState<string[]>([]);
  const [size, setSize] = useState<number>(3);
  const [loading, setLoading] = useState(false);
  const [totalCount, setTotalCount] = useState<number>(0);

  const fetchComments = async (size: number) => {
    setLoading(true);
    try {
      const resBysize = await getCommentsByCardId(cardId, size);
      setComments(resBysize.comments);
      const res = await getCommentsByCardId(cardId);
      setTotalCount(res.comments.length);
    } catch (error: any) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && !loading) {
        setSize((prev) => {
          const newSize = prev + 1;
          fetchComments(newSize);
          return newSize;
        });
      }
    },
    [size, loading],
  );

  //옵저버 객체 만들기
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    });

    const target = document.getElementById(`intersection-target${cardId}`);
    console.log(target);

    if (target && totalCount > size) {
      console.log('observer connect');
      observer.observe(target);
    }
    if (comments.length === 0) {
      console.log('observer length disconnect');
      observer.disconnect();
    }
    return () => {
      console.log('observer disconnect');
      observer.disconnect();
    };
  }, [handleIntersection, totalCount, size, cardId]);

  useEffect(() => {
    fetchComments(size);
  }, []);

  console.log(totalCount);

  // 아래 state는 api적용 이후 수정 예정입니다.
  const isMobile = window.innerWidth < 768;
  console.log(comments);
  return (
    comments.length > 0 && (
      <div className='flex h-[230px] flex-col overflow-y-auto whitespace-nowrap'>
        {comments.map((comment: any, index: number) => {
          return (
            <div key={index} className='flex gap-[12px]'>
              <div className='flex flex-col items-center'>
                <CustomAvatar
                  profileUrl={comment.author.profileImageUrl}
                  nickName={comment.author.nickname}
                  size={isMobile ? 'small' : 'medium'}
                />
                {/* 댓글이 1개면 구분선을 붙이지 않습니다 */}
                {comments.length > 1 && (
                  <div className='my-[5px] h-[40px] w-[1px] bg-gray-300'></div>
                )}
              </div>
              <Comment
                commentId={comment.id}
                createdAt={comment.createdAt}
                content={comment.content}
                commenterName={comment.author.nickname}
              />
            </div>
          );
        })}
        <div
          id={`intersection-target${cardId}`}
          className='min-h-[10px] bg-white'
        ></div>
      </div>
    )
  );
}
