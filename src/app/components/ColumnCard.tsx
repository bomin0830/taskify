'use client';

import Image from 'next/image';
import CustomAvatar from './CustomAvatar';
import ToDoCardModal from './modals/ToDoCardModal';
import { CreateCardRes } from '../api/apiTypes/cardType';
import { useModal } from '@/context/ModalContext';

interface ColumnCardProps {
  imageUrl: string;
  title: string;
  tags: string[];
  dueDate: string;
  assignerNickname: string;
  assignerProfileUrl: string;
}

const mockCardData: CreateCardRes = {
  id: 0,
  title: '새로운 일정 관리 Taskify',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nibh arcu, quis consequat ante cursus eget. Cras mattis, nulla non laoreet porttitor, diam justo laoreet eros, vel aliquet diam elit at leo!',
  tags: ['프로젝트', '백엔드'],
  dueDate: '2024-05-31',
  assignee: {
    profileImageUrl: '',
    nickname: 'string',
    id: 0,
  },
  imageUrl: '/images/test/card-image-test.jpg',
  teamId: 'string',
  columnId: 0,
  createdAt: '2024-05-31T16:45:45.608Z',
  updatedAt: '2024-05-31T16:45:45.608Z',
};

export default function ColumnCard({
  imageUrl,
  title,
  tags,
  dueDate,
  assignerNickname,
  assignerProfileUrl,
}: ColumnCardProps) {
  const { openModal } = useModal();

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  return (
    <div
      className='flex flex-col items-center gap-[10px] rounded-md border border-custom_gray-_d9d9d9 bg-white p-[20px] max-lg:flex-row max-sm:flex-col'
      onClick={() =>
        handleOpenModal(
          <ToDoCardModal
            title={mockCardData.title}
            description={mockCardData.description}
            tags={mockCardData.tags}
            dueDate={mockCardData.dueDate}
            assignee={mockCardData.assignee}
            imageUrl={mockCardData.imageUrl}
          />,
        )
      }
    >
      {/* 카드 이미지 설정 */}
      {imageUrl && (
        <div className='relative h-[160px] w-[274px] max-lg:max-h-[51px] max-lg:max-w-[90px] max-sm:max-h-[999px] max-sm:w-full max-sm:max-w-[999px]'>
          <Image
            fill
            className='h-[160px] rounded-md object-cover max-lg:h-full'
            src={imageUrl}
            alt=''
          />
        </div>
      )}
      {/* 제목 */}
      <div className='flex w-full flex-col gap-[10px]'>
        <span className='h-[19px]'>{title}</span>
        <div className='flex flex-col justify-center gap-[16px] max-lg:flex-row max-lg:items-center max-sm:flex-col max-sm:items-start'>
          <div className='flex'>
            {tags.map((tag: any, index: number) => {
              return (
                <div
                  className='mr-[6px] flex h-[22px] items-center justify-center whitespace-nowrap rounded bg-[#F9EEE3] px-[6px] text-[12px] text-[#D58D49]'
                  key={index}
                >
                  {tag}
                </div>
              );
              1;
            })}
          </div>
          {/* 카드 마감날짜와 관리자 아이콘 */}
          <div className='relative flex w-full items-center justify-between text-[12px] text-custom_gray-_787486'>
            <div className='flex gap-[6px]'>
              <img src='/images/calender-icon.svg' alt='캘린더 아이콘' />
              {dueDate}
            </div>
            <CustomAvatar
              nickName={assignerNickname}
              profileUrl={assignerProfileUrl}
            />
          </div>
        </div>
      </div>
      {/* 태그 */}
    </div>
  );
}
