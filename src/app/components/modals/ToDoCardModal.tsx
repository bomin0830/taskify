'use client';

import CommentsList from '../ToDoCardModal/CommentsList';
import CardHeader from '../ToDoCardModal/CardHeader';
import CardInfo from '../ToDoCardModal/CardInfo';
import CommentInput from '../ToDoCardModal/CommentInput';
import CardContents from '../ToDoCardModal/CardContents';

interface assignee {
  profileImageUrl?: string;
  nickname: string;
  id: number;
}

export default function ToDoCardModal({
  title,
  description,
  tags,
  dueDate,
  assignee,
  imageUrl,
}: {
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  imageUrl?: string;
  assignee: assignee;
}) {
  return (
    <div className='flex w-[682px] flex-col gap-[24px] p-[4px] max-xl:w-[632px] max-sm:w-full max-sm:gap-[16px]'>
      <CardHeader title={title} />
      {/* 컨텐츠 */}
      <div className='flex gap-[24px] max-sm:flex-col'>
        <div className='flex w-[450px] flex-col gap-[16px] max-xl:w-[420px] max-sm:order-2 max-sm:w-full'>
          <CardContents
            imageUrl={imageUrl}
            description={description}
            tags={tags}
          />
          <CommentInput />
          <CommentsList comments={commentsList.comments} />
        </div>
        <CardInfo assignee={assignee} dueDate={dueDate} />
      </div>
    </div>
  );
}

const commentsList = {
  cursorId: 0,
  comments: [
    {
      id: 0,
      content: '이젠 this time is real',
      createdAt: '2024-06-03T16:13:33.230Z',
      updatedAt: '2024-06-03T16:13:33.230Z',
      cardId: 0,
      author: {
        profileImageUrl: '/images/test/profile-test.jpeg',
        nickname: '보아',
        id: 0,
      },
    },
    {
      id: 1,
      content: ' no one can deny',
      createdAt: '2024-06-03T16:13:33.230Z',
      updatedAt: '2024-06-03T16:13:33.230Z',
      cardId: 0,
      author: {
        profileImageUrl: '',
        nickname: '공중정원',
        id: 0,
      },
    },
    {
      id: 2,
      content: '세상 가운데 살아 숨 쉬는 곳',
      createdAt: '2024-06-03T16:13:33.230Z',
      updatedAt: '2024-06-03T16:13:33.230Z',
      cardId: 0,
      author: {
        profileImageUrl: '',
        nickname: '짱좋다',
        id: 0,
      },
    },
  ],
};
