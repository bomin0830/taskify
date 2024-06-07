import Image from 'next/image';
import CustomAvatar from './CustomAvatar';

interface ColumnCardProps {
  imageUrl: string;
  title: string;
  tags: string[];
  dueDate: string;
  assignerNickname: string;
  assignerProfileUrl: string;
}

export default function ColumnCard({
  imageUrl,
  title,
  tags,
  dueDate,
  assignerNickname,
  assignerProfileUrl,
}: ColumnCardProps) {
  return (
    <>
      <div className='flex flex-col justify-center gap-[10px] rounded-md border border-custom_gray-_d9d9d9 bg-white p-[20px]'>
        {/* 카드 이미지 설정 */}
        {imageUrl && (
          <Image
            width={274}
            height={160}
            className='h-[160px] rounded-md object-cover'
            src={imageUrl}
            alt=''
          />
        )}
        {/* 제목 */}
        <span>{title}</span>
        {/* 태그 */}
        <div className='flex'>
          {tags.map((tag: any, index: number) => {
            return (
              <div
                className='mr-[6px] rounded bg-[#F9EEE3] px-[6px] py-[4px] text-[12px] text-[#D58D49]'
                key={index}
              >
                {tag}
              </div>
            );
            1;
          })}
        </div>
        {/* 카드 마감날짜와 관리자 아이콘 */}
        <div className='relative flex items-center justify-between text-[12px] text-custom_gray-_787486'>
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
    </>
  );
}
