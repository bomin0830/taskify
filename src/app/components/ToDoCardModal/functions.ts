import instance from '@/app/api/axios';
import { LOGIN_TOKEN } from '@/app/api/apiStrings';

const getDashBoard = async () => {
  const res = await instance.get('dashboards', {
    params: { navigationMethod: 'pagination' },
  });
  console.log(res);
};

const getColumnsByDashBoardId = async (dashboardid: number) => {
  const res = await instance.get(`columns`, {
    params: { dashboardId: `${dashboardid}` },
  });
  return await res.data;
};

const postNewColumnData = async (title: string, dashboardid: number) => {
  const data = {
    title: title,
    dashboardId: dashboardid,
  };

  const res = await instance.post(`columns`, data);
  return await res.data;
};

const getCardsList = async (
  columnId: number,
  size: number,
  cursorId: number,
) => {
  const params = {
    columnId: `${columnId}`,
    size: `${size}`,
    cursorId: `${cursorId}`,
  };

  const res = await instance.get('cards', { params });
  console.log(res);
};

export {
  getDashBoard,
  getColumnsByDashBoardId,
  postNewColumnData,
  getCardsList,
};
