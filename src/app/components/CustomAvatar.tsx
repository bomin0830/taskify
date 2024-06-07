import Image from 'next/image';

interface CustomAvatarProps {
  profileUrl?: string; //유저 프로필 이미지
  nickName: string; //유지 닉네임
  size?: 'small' | 'large';
}

// 유저 프로필 이미지가 없다면 프로필이 랜덤으로 지정된 배경색과 닉네임의 첫글자로 지정됩니다
export default function CustomAvatar({
  profileUrl,
  nickName,
  size = 'small',
}: CustomAvatarProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-full border-2 border-white ${
        size === 'small' ? 'h-[24px] w-[24px]' : 'h-[34px] w-[34px]'
      }`}
    >
      {profileUrl ? (
        <Image
          fill
          src={profileUrl}
          alt='Profile Image'
          className='rounded-full object-cover'
        />
      ) : (
        <>
          {/* 랜덤으로 색깔 지정하는 로직 추가 예정 */}
          <div className='flex h-full items-center justify-center rounded-full bg-custom_green-_a3c4a2 text-white'>
            <span
              className={`${size === 'small' ? 'text-[12px]' : 'text-[16px]'}`}
            >
              {/* nickName.at(0) */}
              {nickName[0].at(0)?.toUpperCase()}
            </span>
          </div>
        </>
      )}
    </div>
  );
}
