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
  ],
};

export default function dashboardPage() {
  const { openModal } = useModal();

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  return (
    <>
      <div className='flex flex-wrap bg-custom_gray-_fafafa'>
        {/* 컬럼 컴포넌트 뿌리기 */}
        {columnMockData.data.map((column: any, index: number) => {
          return <Column key={column.id} title={column.title} />;
        })}
        {/* 카드 추가하기 모달 */}
        <button
          className='w-[354px] h-[70px] bg-white rounded-lg border border-gray-_d9d9d9 flex justify-center items-center relative top-[68px] left-[20px]'
          onClick={() => handleOpenModal(<NewColumnModal />)}
        >
          <p className='mr-[12px] text-[16px] font-bold'>
            새로운 컬럼 추가하기
          </p>
          <ChipAddIcon size={'large'} />
        </button>
      </div>
    </>
  );
}
