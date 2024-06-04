import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export default function ToDoCardDropDown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <img src='/images/card-setting.svg' alt='카드 설정 아이콘' />
      </DropdownMenuTrigger>
      <DropdownMenuContent className='min-w-[93px]'>
        <DropdownMenuGroup>
          <DropdownMenuItem className='justify-center items-center'>
            수정하기
          </DropdownMenuItem>
          <DropdownMenuItem className='justify-center items-center'>
            삭제하기
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
