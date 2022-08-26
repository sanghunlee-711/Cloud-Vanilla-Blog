export const API_ADDRESS =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000'
    : 'https://api.cloud-sanghun.com';

export const PAGE_ADDRESS =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8800'
    : 'https://blog.cloud-sanghun.com';

export const GA_ID = 'G-WDVYMB6XSH';

export default {};
