import { ChangeEvent, useState } from 'react';

interface CommentProps {
  createdAt: string;
  content: string;
}

const Comment = ({ createdAt, content }: CommentProps) => {
  const [value, setValue] = useState(content);
  const [isEditing, setIsEditing] = useState(false);

  const handleOnClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    setIsEditing(false);
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const cancelEdit = () => {
    setValue(content);
    setIsEditing(false);
  };

  return (
    <div className='w-full text-[14px] max-sm:text-[12px]'>
      <div className='mt-[6px] flex items-center gap-[8px]'>
        <span className='font-semibold'>장만철</span>
        <span className='text-[12px] text-[#9FA6B2] max-sm:text-[10px]'>
          {createdAt}
        </span>
      </div>
      {isEditing ? (
        <div className='relative'>
          <form onSubmit={handleSubmit} className='w-full'>
            <input
              value={value}
              className='w-full rounded-md border p-[5px]'
              onChange={handleChange}
            ></input>
          </form>
        </div>
      ) : (
        <p>{value}</p>
      )}
      <div className='mt-[3px] flex gap-[10px] text-[10px] text-[#9FA6B2] underline'>
        {/* 댓글이 수정중이면, 수정버튼 -> 취소버튼으로 변경 */}
        {isEditing ? (
          <button onClick={cancelEdit}>취소</button>
        ) : (
          <button onClick={handleOnClick}>수정</button>
        )}
        <button>삭제</button>
      </div>
    </div>
  );
};

export default Comment;
