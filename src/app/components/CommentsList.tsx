import { ChangeEvent, useEffect, useState } from 'react';
import { CreateCommentRes } from '../api/apiTypes/commentsType';
import CustomAvatar from './CustomAvatar';
import Comment from './Comment';

export default function CommentsList({
  comments,
}: {
  comments: CreateCommentRes[];
}) {
  // 아래 state는 api적용 이후 수정 예정입니다.
  const [nowComments, setNowComments] = useState(comments);

  return (
    <div className='flex flex-col'>
      {nowComments.map((comment: any, index: number) => {
        return (
          <div key={index} className='flex gap-[12px]'>
            <div className='flex flex-col items-center'>
              <CustomAvatar
                profileUrl={comment.author.profileImageUrl}
                nickName={comment.author.nickname}
                size={'large'}
              />
              {/* 댓글이 1개면 구분선을 붙이지 않습니다 */}
              {nowComments.length > 1 && (
                <div className='my-[5px] h-[40px] w-[1px] bg-gray-300'></div>
              )}
            </div>
            <Comment createdAt={comment.createdAt} content={comment.content} />
          </div>
        );
      })}
    </div>
  );
}
