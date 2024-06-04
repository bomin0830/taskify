import AuthLogo from '@/app/components/AuthLogo';
import LoginForm from '@/app/components/LoginForm';
import Link from 'next/link';

export default function Login() {
  return (
    <div className='bg-custom_gray-_fafafa text-custom_black-_333236 flex flex-col items-center pt-[60px] min-h-[100vh]'>
      <AuthLogo>오늘도 만나서 반가워요!</AuthLogo>
      <LoginForm />
      <span className='mt-6 leading-[19px] pb-16'>
        회원이 아니신가요?{' '}
        <Link href='/signup' className='underline text-custom_violet-_5534da'>
          회원가입 하기
        </Link>
      </span>
    </div>
  );
}