
import Homepage from './page/homepage/Page';
import EditPage from './page/edit-page/Page';
import DiaryPage from './page/diary-page/Page';

export const RouterList = [
  { component: Homepage, pathname: '/' },
  { component: EditPage, pathname: '/edit' },
  { component: DiaryPage, pathname: '/diary' }
];
