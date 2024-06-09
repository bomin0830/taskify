import Image from 'next/image';

const CardContents = ({
  imageUrl,
  description,
  tags,
}: {
  imageUrl?: string;
  description: string;
  tags: string[];
}) => {
  return (
    <>
      <div className='flex items-center gap-[20px] max-sm:gap-[12px]'>
        {/* 태그 */}
        <div className='flex gap-[6px] rounded-xl bg-[#F1EFFD] px-[8px] py-[4px]'>
          <img
            className='w-[6px]'
            src='/images/Ellipse-puple.svg'
            alt='꾸미는 점'
          />
          <span className='text-[12px] text-[#5534DA] max-sm:text-[10px]'>
            To Do
          </span>
        </div>
        <img src='/images/Vector.svg' className='h-[20px]' alt='구분선' />
        <div className='flex'>
          {tags.map((tag: any, index: number) => {
            return (
              <div
                className='mr-[6px] rounded bg-[#F9EEE3] px-[6px] py-[4px] text-[12px] text-[#D58D49] max-sm:text-[10px]'
                key={index}
              >
                {tag}
              </div>
            );
          })}
        </div>
      </div>

      {/* 카드 컨텐츠(설명, 이미지) */}
      <div className='mb-[8px]'>
        <div className='mb-[16px] text-[14px] leading-[24px]'>
          {description}
        </div>
        {imageUrl && (
          <div className='relative h-[260px] w-full'>
            <Image
              fill
              src={imageUrl}
              alt='카드 이미지'
              className='rounded-md object-cover'
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CardContents;
