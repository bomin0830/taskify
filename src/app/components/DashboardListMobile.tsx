'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { mockData } from './mockdata/DashboardMock';
import { useModal } from '@/context/ModalContext';
import NewDashboardModal from './modals/NewDashboardModal';
import instance from '@/app/api/axios';

type ColorPalette = {
  [key: string]: string;
};

const ColorPalette: ColorPalette = {
  '#7ac555': 'bg-custom_green-_7ac555',
  '#760dde': 'bg-custom_purple',
  '#ffa500': 'bg-custom_orange',
  '#76a6ea': 'bg-custom_blue',
  '#e876ea': 'bg-custom_pink',
};

type DashboardData = {
  id: string;
  title: string;
  color: string;
  createdByMe: boolean;
};

export default function DashboardListMobile() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalCount, setTotalCount] = useState<number>(10);
  const startPointRef = useRef(0);
  const { openModal } = useModal();
  const [dashboardsData, setDashboardsData] = useState<DashboardData[]>([]);
  const startIndex = (currentPage - 1) * 10; //시작페이지
  const totalPage = Math.ceil(totalCount / 10); //마지막페이지

  /** 대시보드 조회 파라미터 */
  const queryParams = {
    navigationMethod: 'pagination',
    cursorId: startIndex,
    page: currentPage,
    size: 10,
  };

  const handleOpenModal = (content: React.ReactNode) => {
    openModal(content);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startPointRef.current = e.touches[0].pageX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endPoint = e.changedTouches[0].pageX;
    if (startPointRef.current < endPoint) {
      if (currentPage === 1) return;
      setCurrentPage(currentPage - 1);
    } else if (startPointRef.current > endPoint) {
      if (currentPage === totalPage) return;
      setCurrentPage(currentPage + 1);
    }
  };

  /** 대시보드 조회 */
  useEffect(() => {
    const fetchdashboardData = async () => {
      const res = await instance.get('dashboards', {
        params: queryParams,
      });
      setDashboardsData(res.data.dashboards);
      setTotalCount(res.data.totalCount);
    };
    fetchdashboardData();
  }, [currentPage]);

  return (
    <div className='p-0 px-3 sm:hidden'>
      <div className='mx-2 mb-8 mt-16 flex items-center justify-between'>
        <button>
          <img
            className='h-5 w-5'
            src='/images/addTaskButton.svg'
            alt='할 일 추가하기'
            onClick={() => handleOpenModal(<NewDashboardModal />)}
          />
        </button>
      </div>
      <div onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        {dashboardsData.map((todo) => (
          <Link
            key={todo.id}
            href={`/dashboard/${todo.id}`}
            className='my-7 flex items-center justify-center'
          >
            <div
              className={`h-2 w-2 rounded-full ${ColorPalette[todo.color]}`}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
