import About from '../pages/About/index.js';
import Content from '../pages/Content.js';
import Home from '../pages/Home/index.js';
import Post from '../pages/Post.js';

export const ROUTES = [
  {
    path: '#home',
    name: 'Home',
    components: Home,
  },
  {
    path: '#about',
    name: 'About',
    components: About,
  },
  {
    path: '#post',
    name: 'Post',
    components: Post,
  },
  {
    path: '#contentId=:id',
    name: 'Content',
    components: Content,
  },
];
