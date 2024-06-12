import axios from 'axios';
import instance from '@/app/api/axios';

const getDashBoard = async () => {
  try {
    const res = await instance.get('dashboards', {
      params: { navigationMethod: 'pagination' },
    });
  } catch (error) {
    console.log(error);
  }
};

const getColumnsByDashBoardId = async (dashboardid: number) => {
  try {
    const res = await instance.get(`columns`, {
      params: { dashboardId: `${dashboardid}` },
    });
    return await res.data;
  } catch (error) {
    console.error(error);
  }
};

const getCardsByColumnId = async (columId: number) => {
  const res = await instance.get(`cards`, {
    params: { columnId: `${columId}` },
  });
  return res.data;
};

const getCommentsByCardId = async (cardId: number) => {
  const res = await instance.get(`comments`, {
    params: { cardId: `${cardId}` },
  });
  return res.data;
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

  try {
    const res = await instance.get('cards', { params });
  } catch (error) {
    console.log(error);
  }
};

const deleteColumnByID = async (columnId: number) => {
  try {
    const res = await instance.delete(`columns/${columnId}`);
  } catch (error) {
    console.log(error);
  }
};

const deleteComment = async (commentId: number) => {
  try {
    const res = await instance.delete(`comments/${commentId}`);
  } catch (error) {
    console.log(error);
  }
};

const deleteCard = async (cardId: number) => {
  try {
    const res = await instance.delete(`cards/${cardId}`);
  } catch (error) {
    console.log(error);
  }
};

const putColumnByID = async (columnId: number, title: string) => {
  const data = { title: title };
  try {
    const res = await instance.put(`columns/${columnId}`, data);
  } catch (error) {
    console.log(axios.isAxiosError(error));
  }
};

const postComment = async (
  content: string,
  cardId: number,
  columnId: number,
  dashboardId: number,
) => {
  const data = {
    content: content,
    cardId: cardId,
    columnId: columnId,
    dashboardId: dashboardId,
  };
  console.log(data);
  try {
    const res = await instance.post('comments', data);
  } catch (err) {
    console.log(err);
  }
};

const putComment = async (commentId: number, content: string) => {
  const data = { content: content };
  try {
    const res = await instance.put(`comments/${commentId}`, data);
  } catch (error) {
    console.error(error);
  }
};

const getMyUserData = async () => {
  try {
    const res = await instance.get('users/me');
    console.log(res.data);
  } catch (error) {
    console.error(error);
  }
};

export {
  getDashBoard,
  getMyUserData,
  getColumnsByDashBoardId,
  getCardsList,
  deleteColumnByID,
  putColumnByID,
  getCardsByColumnId,
  getCommentsByCardId,
  postComment,
  putComment,
  deleteComment,
  deleteCard,
};