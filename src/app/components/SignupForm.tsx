'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import axios from '@/app/api/axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

type Inputs = {
  Id: string;
  nickname: string;
  password: string;
  passwordCheck: string;
  acceptTerms: boolean;
};

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty, isValid },
  } = useForm<Inputs>({ mode: 'onTouched' });
  const router = useRouter();
  const [passShow, setPassShow] = useState<boolean>(false);
  const [passCheckShow, setPassCheckShow] = useState<boolean>(false);

  const INPUT_STYLE =
    'px-4 py-[15px] outline-none rounded-lg border border-solid border-custom_gray-_d9d9d9 focus:border-custom_violet-_5534da';
  const ERROR_STYLE = 'text-[14px] leading-[17px] text-custom_red';

  const trySignup: SubmitHandler<Inputs> = async () => {
    let res;
    try {
      res = await axios.post('/users', {
        email: getValues('Id'),
        nickname: getValues('nickname'),
        password: getValues('password'),
      });
      alert('가입이 완료되었습니다!');
      router.push('/login');
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(trySignup)}
      className='flex flex-col max-w-[544px] w-[100%] mt-[38px] px-3 text-[16px] text-custom_black-_333236 max-xl:mt-[60px] max-sm:mt-10'
    >
      {/*아이디 부분 */}
      <label htmlFor='Id' className='mb-2'>
        아이디
      </label>
      <div className='mb-4 flex flex-col gap-y-2 '>
        <input
          id='Id'
          placeholder='이메일을 입력해주세요'
          type='text'
          className={`${INPUT_STYLE} ${errors.Id ? 'border-custom_red' : ''}`}
          aria-invalid={errors.Id ? 'true' : 'false'}
          {...register('Id', {
            required: '이메일을 입력해주세요',
            pattern: {
              value: /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/,
              message: '이메일 형식으로 작성해 주세요.',
            },
          })}
        />
        {errors.Id && (
          <strong className={ERROR_STYLE}>{errors?.Id?.message}</strong>
        )}
      </div>
      {/*닉네임 부분*/}
      <label htmlFor='nickname' className='mb-2'>
        닉네임
      </label>
      <div className='mb-4 flex flex-col gap-y-2 '>
        <input
          id='nickname'
          placeholder='이메일을 입력해주세요'
          type='text'
          className={`${INPUT_STYLE} ${
            errors.nickname ? 'border-custom_red' : ''
          }`}
          aria-invalid={errors.nickname ? 'true' : 'false'}
          {...register('nickname', {
            required: '닉네임을 입력해주세요',
            pattern: {
              value: /^[?a-zA-Z0-9#?!@$ %^&*-/].{0,9}$/,
              message: '열 자 이하로 작성해주세요',
            },
          })}
        />
        {errors.nickname && (
          <strong className={ERROR_STYLE}>{errors?.nickname?.message}</strong>
        )}
      </div>
      {/*비밀번호 부분 */}
      <label htmlFor='password' className='mb-2'>
        비밀번호
      </label>
      <div className='relative mb-5 flex flex-col gap-y-2'>
        <input
          id='password'
          placeholder='8자 이상 입력해주세요'
          type={passShow ? 'string' : 'password'}
          className={`${INPUT_STYLE} ${
            errors.password ? 'border-custom_red' : ''
          }`}
          aria-invalid={errors.password ? 'true' : 'false'}
          {...register('password', {
            required: '비밀번호를 입력해주세요',
            pattern: {
              value: /^[?a-zA-Z0-9#?!@$ %^&*-/].{7,}$/,
              message: '8자 이상 작성해 주세요',
            },
          })}
        />
        <button
          className='absolute top-3 right-4'
          type='button'
          onClick={() => setPassShow(!passShow)}
        >
          {passShow ? (
            <Image
              src='/AuthPage/eyeOn.svg'
              width={24}
              height={24}
              alt='비밀번호 보여짐'
            />
          ) : (
            <Image
              src='/AuthPage/eyeOff.svg'
              width={24}
              height={24}
              alt='비밀번호 숨겨짐'
            />
          )}
        </button>
        {errors.password && (
          <strong className={ERROR_STYLE}>{errors?.password?.message}</strong>
        )}
      </div>
      {/*비밀번호 확인 부분 */}
      <label htmlFor='passwordCheck' className='mb-2'>
        비밀번호 확인
      </label>
      <div className='relative mb-5 flex flex-col gap-y-2'>
        <input
          id='passwordCheck'
          placeholder='비밀번호를 한 번 더 입력해주세요'
          type={passCheckShow ? 'string' : 'password'}
          className={`${INPUT_STYLE} ${
            errors.passwordCheck ? 'border-custom_red' : ''
          }`}
          aria-invalid={errors.passwordCheck ? 'true' : 'false'}
          {...register('passwordCheck', {
            validate: (value) =>
              value === getValues('password')
                ? true
                : '비밀번호가 일치하지 않습니다.',
          })}
        />
        <button
          className='absolute top-3 right-4'
          type='button'
          onClick={() => setPassCheckShow(!passCheckShow)}
        >
          {passShow ? (
            <Image
              src='/AuthPage/eyeOn.svg'
              width={24}
              height={24}
              alt='비밀번호 확인 보여짐'
            />
          ) : (
            <Image
              src='/AuthPage/eyeOff.svg'
              width={24}
              height={24}
              alt='비밀번호 확인 숨겨짐'
            />
          )}
        </button>
        {errors.passwordCheck && (
          <strong className={ERROR_STYLE}>
            {errors?.passwordCheck?.message}
          </strong>
        )}
      </div>
      <div className='mt-1 mb-[21px] flex items-center gap-x-2'>
        <input
          id='acceptTerms'
          type='checkbox'
          className='w-5 h-5'
          {...register('acceptTerms', { required: true })}
        />
        <label htmlFor='acceptTerms'> 이용약관에 동의합니다.</label>
      </div>
      <input
        value={'가입하기'}
        type='submit'
        className='w-[100%] text-[18px] text-custom_white bg-custom_violet-_5534da rounded-lg font-medium h-[50px] flex justify-center items-center cursor-pointer disabled:bg-custom_gray-_9fa6b2 disabled:cursor-default'
        disabled={!isDirty || !isValid}
      />
    </form>
  );
}
