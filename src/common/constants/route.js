import About from '../../pages/About/index.js';
import Content from '../../pages/Content.js';
import GuestBook from '../../pages/GuestBook/index.js';
import Home from '../../pages/Home/index.js';
import Posts from '../../pages/Posts/index.js';
import Resume from '../../pages/Resume/index.js';

export const ROUTES = [
  {
    path: '/',
    name: 'Home',
    components: Home,
  },
  {
    path: '/about',
    name: 'About',
    components: About,
  },
  {
    path: '/post',
    name: 'Post',
    components: Posts,
  },
  {
    path: '/guest',
    name: 'GuestBook',
    components: GuestBook,
  },
  {
    path: '/resume',
    name: 'Resume',
    components: Resume,
  },
  {
    path: '/content',
    name: 'Content',
    components: Content,
  },
];

export const UNWATCHABLE_LIST = ['Content', 'Resume'];

export const SHOW_ROUTE = ROUTES.filter(
  (el) => !UNWATCHABLE_LIST.includes(el.name)
);
