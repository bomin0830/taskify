'use client';

import Column from '@/app/components/Column';
import NewColumnModal from '@/app/components/modals/NewColumnModal';
import ChipAddIcon from '@/app/components/ui/chipAddIcon';
import { useModal } from '@/context/ModalContext';

const columnMockData = {
  result: 'SUCCESS',
  data: [
    {
      id: 0,
      title: 'TO DO',
      teamId: 'string',
      createdAt: '2024-05-31T16:47:59.846Z',
      updatedAt: '2024-05-31T16:47:59.846Z',
    },
    {
      id: 1,
      title: 'On Progress',
      teamId: 'string',
      createdAt: '2024-05-31T16:47:59.846Z',
      updatedAt: '2024-05-31T16:47:59.846Z',
    },
    {
      id: 2,
      title: 'On Progress',
      teamId: 'string',
      createdAt: '2024-05-31T16:47:59.846Z',
      updatedAt: '2024-05-31T16:47:59.846Z',
    },
  ],
};

export default function dashboardPage() {
  const { openModal } = useModal();

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  return (
    <div className='relative flex overflow-x-auto bg-custom_gray-_fafafa max-lg:flex-col'>
      {/* 컬럼 컴포넌트 뿌리기 */}
      {columnMockData.data.map((column: any, index: number) => {
        return <Column key={column.id} title={column.title} />;
      })}
      {/* 카드 추가하기 모달 */}
      <button
        className='border-gray-_d9d9d9 left-[20px] top-[68px] flex h-[70px] min-w-[354px] items-center justify-center rounded-lg border bg-white max-lg:w-full'
        onClick={() => <NewColumnModal />}
      >
        <p className='mr-[12px] text-[16px] font-bold'>새로운 컬럼 추가하기</p>
        <ChipAddIcon size={'large'} />
      </button>
    </div>
  );
}
