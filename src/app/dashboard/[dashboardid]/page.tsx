'use client';

import Column from '@/app/components/Column';
import NewColumnModal from '@/app/components/modals/NewColumnModal';
import ChipAddIcon from '@/app/components/ui/chipAddIcon';
import { useModal } from '@/context/ModalContext';
import SideBar from '@/app/components/SideBar';
import DashboardHeaderInSettings from '@/app/components/DashboardHeaderInSettings';
import { useEffect, useMemo, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import {
  getColumnsByDashBoardId,
  getDashBoard,
} from '@/app/components/ToDoCardModal/functions';

export default function dashboardPage(dashboardid: any) {
  const [columnData, setColumnData] = useState([]);
  const id = Number(dashboardid.params.dashboardid);
  const { openModal } = useModal();

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  async function fetchColumns() {
    try {
      const columnData = await getColumnsByDashBoardId(id);
      setColumnData(columnData.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchColumns();
  }, []);

  /* 새로운 컬럼 생성 버튼 - PC */
  const NewColumnButton = useMemo(() => {
    return (
      <div className='min-w-[354px] max-xl:hidden'>
        <div
          className='border-gray-_d9d9d9 ml-[20px] mt-[68px] flex h-[70px] items-center justify-center rounded-lg border bg-white max-xl:ml-[0px] max-xl:mt-[0px]'
          onClick={() => handleOpenModal(<NewColumnModal />)}
        >
          <p className='mr-[12px] text-[16px] font-bold'>
            새로운 컬럼 추가하기
          </p>
          <ChipAddIcon size={'large'} />
        </div>
      </div>
    );
  }, [handleOpenModal]);

  /* 새로운 컬럼 생성 버튼 - Tablet, Mobile */
  const NewColumnButtonMedia = useMemo(() => {
    return (
      <div className='hidden max-xl:fixed max-xl:bottom-0 max-xl:block max-xl:w-full max-xl:bg-custom_gray-_fafafa max-xl:px-[20px]'>
        <div
          className='border-gray-_d9d9d9 ml-[20px] mt-[68px] flex h-[70px] items-center justify-center rounded-lg border bg-white max-xl:ml-[0px] max-xl:mt-[0px]'
          onClick={() => handleOpenModal(<NewColumnModal />)}
        >
          <p className='mr-[12px] text-[16px] font-bold'>
            새로운 컬럼 추가하기
          </p>
          <ChipAddIcon size={'large'} />
        </div>
      </div>
    );
  }, [handleOpenModal]);

  return (
    <div className='relative flex'>
      <SideBar />
      <div className='w-screen'>
        <DashboardHeaderInSettings />
        <div className='flex overflow-x-auto whitespace-nowrap bg-custom_gray-_fafafa max-xl:flex-col max-xl:overflow-x-visible max-xl:whitespace-normal'>
          {/* 컬럼 컴포넌트 뿌리기 */}
          {columnData &&
            columnData.length > 0 &&
            columnData.map((column: any, index: number) => {
              return <Column key={column.id} title={column.title} />;
            })}
          {NewColumnButton}
        </div>
      </div>
      {NewColumnButtonMedia}
    </div>
  );
}
