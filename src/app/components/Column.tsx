import ColumnCard from '@/app/components/ColumnCard';
import Image from 'next/image';
import ChipAddIcon from './ui/chipAddIcon';

const cardsMockDataByColumnId = {
  cursorId: 0,
  totalCount: 3,
  cards: [
    {
      id: 0,
      title: '새로운 일정 관리 Taskify',
      description: '안녕하세요!',
      tags: ['프로젝트', '백엔드'],
      dueDate: '2024-05-31',
      assignee: {
        profileImageUrl: '',
        nickname: 'string',
        id: 0,
      },
      teamId: 'string',
      columnId: 0,
      createdAt: '2024-05-31T16:45:45.608Z',
      updatedAt: '2024-05-31T16:45:45.608Z',
    },
    {
      id: 1,
      title: 'string',
      description: 'string',
      tags: ['백엔드', '상'],
      dueDate: '2024-05-31',
      assignee: {
        profileImageUrl: '/images/test/profile-test.jpeg',
        nickname: 'string',
        id: 0,
      },
      imageUrl: '/images/test/card-image-test.jpg',
      teamId: 'string',
      columnId: 0,
      createdAt: '2024-05-31T16:45:45.608Z',
      updatedAt: '2024-05-31T16:45:45.608Z',
    },
  ],
};

export default function Column({ title }: { title: string }) {
  return (
    <div className='border-gray-_eeeeee flex h-[1000px] w-[354px] flex-col gap-[25px] border-r p-[20px]'>
      {/* 카드 info */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center justify-center text-[16px] font-bold'>
          <img
            className='mr-[8px]'
            src='/images/Ellipse-puple.svg'
            alt='꾸미는 점'
          />
          <span className='mr-[12px]'>{title}</span>
          <div className='text-gray-_787486 bg-gray-_eeeeee h-[20px] rounded px-[6px] text-[12px] font-normal'>
            {cardsMockDataByColumnId.totalCount}
          </div>
        </div>
        <Image
          width={24}
          height={24}
          src='/images/settings-icon.svg'
          alt='설정 아이콘'
        />
      </div>
      <div className='flex flex-col gap-[16px]'>
        {/* 카드 추가 버튼 */}
        <div className='border-gray-_d9d9d9 flex h-[40px] items-center justify-center rounded-md border bg-white'>
          <ChipAddIcon size={'large'} />
        </div>
        {/* 카드 배열 뿌리기 */}
        {cardsMockDataByColumnId.cards.map((card: any, index: number) => {
          return (
            <ColumnCard
              key={index}
              imageUrl={card.imageUrl}
              title={card.title}
              tags={card.tags}
              dueDate={card.dueDate}
              assignerNickname={card.assignee.nickname}
              assignerProfileUrl={card.assignee.profileImageUrl}
            />
          );
        })}
      </div>
    </div>
  );
}
