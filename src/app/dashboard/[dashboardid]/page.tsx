import { CreateCardRes } from '@/app/api/apiTypes/cardType';
import Column from '@/app/components/Column';
import NewColumnModal from '@/app/components/modals/NewColumnModal';
import ToDoCardModal from '@/app/components/modals/ToDoCardModal';

const columnMockData = {
  result: 'SUCCESS',
  data: [
    {
      id: 0,
      title: 'TO DO',
      teamId: 'string',
      createdAt: '2024-05-31T16:47:59.846Z',
      updatedAt: '2024-05-31T16:47:59.846Z',
    },
    {
      id: 1,
      title: 'On Progress',
      teamId: 'string',
      createdAt: '2024-05-31T16:47:59.846Z',
      updatedAt: '2024-05-31T16:47:59.846Z',
    },
  ],
};

const mockCardData: CreateCardRes = {
  id: 0,
  title: '새로운 일정 관리 Taskify',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus nibh arcu, quis consequat ante cursus eget. Cras mattis, nulla non laoreet porttitor, diam justo laoreet eros, vel aliquet diam elit at leo!',
  tags: ['프로젝트', '백엔드'],
  dueDate: '2024-05-31',
  assignee: {
    profileImageUrl: '',
    nickname: 'string',
    id: 0,
  },
  imageUrl: '/images/test/card-image-test.jpg',
  teamId: 'string',
  columnId: 0,
  createdAt: '2024-05-31T16:45:45.608Z',
  updatedAt: '2024-05-31T16:45:45.608Z',
};

export default function dashboardPage() {
  return (
    <>
      <div className='flex flex-wrap bg-custom_gray-_fafafa'>
        {/* 컬럼 컴포넌트 뿌리기 */}
        {columnMockData.data.map((column: any, index: number) => {
          return <Column key={column.id} title={column.title} />;
        })}
        {/* 카드 추가하기 모달 */}
        <NewColumnModal />
      </div>
      <ToDoCardModal mockData={mockCardData} />
    </>
  );
}
