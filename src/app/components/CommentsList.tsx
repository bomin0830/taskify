import { CreateCommentRes } from '../api/apiTypes/commentsType';
import CustomAvatar from './CustomAvatar';

export default function CommentsList({
  comments,
}: {
  comments: CreateCommentRes[];
}) {
  return (
    <div className='flex flex-col gap-[15px]'>
      {comments.map((comment: any, index: number) => {
        console.log(comment.author.profileImageUrl);
        return (
          <div key={index} className='flex gap-[12px]'>
            <CustomAvatar
              profileUrl={comment.author.profileImageUrl}
              nickName={comment.author.nickname}
              size={'large'}
            />
            {/* 메시지 내용 */}
            <div>
              <div className='flex gap-[8px] mt-[8px] text-[14px]'>
                <span className='font-semibold'>장만철</span>
                <span className='text-[12px] text-[#9FA6B2]'>
                  2022.12.27 14:00
                </span>
              </div>
              <span className='mb-[12px]'>오늘안에 만들수 있냐 ㅜㅜ</span>
              <div className='flex text-[#9FA6B2] gap-[12px] text-[12px] underline'>
                <button>수정</button>
                <button>삭제</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
