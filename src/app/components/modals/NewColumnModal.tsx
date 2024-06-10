'use client';

import { useModal } from '@/context/ModalContext';
import { ChangeEvent, useEffect, useState } from 'react';
import { postNewColumnData } from '../ToDoCardModal/functions';

const modalButtonStyle =
  'text-center w-[120px] h-[48px] text-[16px] rounded-lg border border-[#d9d9d9] max-sm:w-[138px]';

const NewColumnModal = () => {
  const [value, setValue] = useState<string>();
  const { closeModal } = useModal();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newvalue = e.target.value;
    setValue(newvalue);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      postNewColumnData(value, 8853);
    }
  };

  return (
    <div className='flex min-w-[492px] flex-col gap-[32px] max-sm:min-w-[279px]'>
      <p className='text-[24px] font-bold max-sm:text-[20px]'>새 컬럼 생성</p>
      <form className='flex flex-col gap-[16px]' onSubmit={handleSubmit}>
        <label htmlFor='name' className='text-[18px] max-sm:text-[16px]'>
          이름
        </label>
        <input
          id='name'
          placeholder='새로운 프로젝트'
          className='col-span-3 rounded-md border border-[#d9d9d9] p-[14px] text-[16px] placeholder-black'
          onChange={handleChange}
        />
      </form>
      <div className='flex justify-end gap-[12px] text-[16px] max-sm:justify-between max-sm:text-[14px]'>
        <button
          type='button'
          className={`${modalButtonStyle} bg-white text-[#787486]`}
          onClick={closeModal}
        >
          취소
        </button>
        {/* value가 있을떄 버튼 활성화*/}
        <button
          type='submit'
          className={`${modalButtonStyle} bg-[#5534DA] text-white disabled:bg-opacity-20`}
          disabled={!value}
        >
          생성
        </button>
      </div>
    </div>
  );
};

export default NewColumnModal;
