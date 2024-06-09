export default function ToDoCardDropDown({ isOpen }: { isOpen: boolean }) {
  return (
    isOpen && (
      <div className='absolute right-[40px] top-[40px] flex w-[93px] flex-col items-center justify-center gap-[6px] rounded-md border border-[#D9D9D9] bg-white p-[6px] text-[14px] shadow-lg max-sm:w-[86px] max-sm:text-[12px]'>
        <button className=''>
          <p className={buttonStyle}>수정하기</p>
        </button>
        <button className={buttonStyle}>
          <span>삭제하기</span>
        </button>
      </div>
    )
  );
}

const buttonStyle =
  'px-[14px] py-[4px] rounded-sm hover:text-[#5534DA] hover:bg-[#F1EFFD]';
