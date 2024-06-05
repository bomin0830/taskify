'use client';

import { useModal } from '@/context/ModalContext';

const NewDashboardModal = () => {
  const { closeModal } = useModal();

  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div className='flex w-[320px] flex-col sm:w-[540px]'>
      <div className='text-[24px] font-bold text-custom_black-_333236'>
        새로운 대시보드
      </div>
      <div className='mt-[32px]'>
        <div className='text-[18px] text-custom_black-_333236'>
          대시보드 이름
        </div>
        <input
          className='mt-[10px] w-full rounded-md border border-custom_gray-_d9d9d9 px-4 py-4'
          placeholder='뉴프로젝트'
        />
      </div>
      <div className='mt-[28px] flex gap-x-3'>
        <div className='relative h-[30px] w-[30px] rounded-full bg-custom_green-_7ac555'>
          <img
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform'
            src='/images/check.svg'
            alt='check'
          />
        </div>
        <div className='h-[30px] w-[30px] rounded-full bg-custom_purple'></div>
        <div className='h-[30px] w-[30px] rounded-full bg-custom_orange'></div>
        <div className='h-[30px] w-[30px] rounded-full bg-custom_blue'></div>
        <div className='h-[30px] w-[30px] rounded-full bg-custom_pink'></div>
      </div>
      <div className='mt-5 flex w-full justify-center gap-x-3 sm:justify-end'>
        <button
          className='w-1/2 rounded-md border border-custom_gray-_d9d9d9 bg-custom_white px-[46px] py-[14px] sm:w-auto'
          onClick={handleCloseModal}
        >
          취소
        </button>
        <button className='w-1/2 rounded-md border-custom_gray-_d9d9d9 bg-custom_violet-_5534da px-[46px] py-[14px] text-white sm:w-auto'>
          생성
        </button>
      </div>
    </div>
  );
};

export default NewDashboardModal;
