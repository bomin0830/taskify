'use client';

import Column from '@/app/components/Column';
import NewColumnModal from '@/app/components/modals/NewColumnModal';
import ChipAddIcon from '@/app/components/ui/chipAddIcon';
import { useModal } from '@/context/ModalContext';
import SideBar from '@/app/components/SideBar';
import DashboardHeaderInSettings from '@/app/components/DashboardHeaderInSettings';

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

  const NewColumnButton = () => {
    return (
      <div className='min-w-[354px] max-lg:hidden'>
        <div
          className='border-gray-_d9d9d9 ml-[20px] mt-[68px] flex h-[70px] items-center justify-center rounded-lg border bg-white max-lg:ml-[0px] max-lg:mt-[0px]'
          onClick={() => handleOpenModal(<NewColumnModal />)}
        >
          <p className='mr-[12px] text-[16px] font-bold'>
            새로운 컬럼 추가하기
          </p>
          <ChipAddIcon size={'large'} />
        </div>
      </div>
    );
  };

  const NewColumnButtonMedia = () => {
    return (
      <div className='hidden max-lg:fixed max-lg:bottom-0 max-lg:block max-lg:w-full max-lg:bg-custom_gray-_fafafa max-lg:px-[20px]'>
        <div
          className='border-gray-_d9d9d9 ml-[20px] mt-[68px] flex h-[70px] items-center justify-center rounded-lg border bg-white max-lg:ml-[0px] max-lg:mt-[0px]'
          onClick={() => handleOpenModal(<NewColumnModal />)}
        >
          <p className='mr-[12px] text-[16px] font-bold'>
            새로운 컬럼 추가하기
          </p>
          <ChipAddIcon size={'large'} />
        </div>
      </div>
    );
  };

  return (
    <div className='relative flex'>
      <SideBar />
      <div className='w-screen'>
        <DashboardHeaderInSettings />
        <div className='flex overflow-x-auto whitespace-nowrap bg-custom_gray-_fafafa max-lg:flex-col max-lg:overflow-x-visible max-lg:whitespace-normal'>
          {/* 컬럼 컴포넌트 뿌리기 */}
          {columnMockData.data.map((column: any, index: number) => {
            return <Column key={column.id} title={column.title} />;
          })}
          <NewColumnButton />
        </div>
      </div>
      <NewColumnButtonMedia />
    </div>
  );
}
