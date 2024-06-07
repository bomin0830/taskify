'use Client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface CustomAvatarProps {
  profileUrl?: string; //유저 프로필 이미지
  nickName: string; //유지 닉네임
  size?: 'small' | 'large';
}

const colors = ['#FFC85A', '#FDD446', '#9DD7ED', '#C4B1A2', '#A3C4A2'];

// 유저 프로필 이미지가 없다면 프로필이 랜덤으로 지정된 배경색과 닉네임의 첫글자로 지정됩니다
export default function CustomAvatar({
  profileUrl,
  nickName,
  size = 'small',
}: CustomAvatarProps) {
  const [backgroundColor, setBackgroundColor] = useState<string>('');

  const getRandomBackgroundColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    return randomColor;
  };

  useEffect(() => {
    setBackgroundColor(getRandomBackgroundColor());
  }, []);

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
          <div
            className={`flex h-full items-center justify-center rounded-full text-white`}
            style={{ backgroundColor }}
          >
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
