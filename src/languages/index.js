import KO from './ko/index.js';
import ENG from './eng/index.js';

const currentLanguage = localStorage?.getItem('cloud-blog-language');

const TRANSLATION_MAP = new Map([
  ['ko', KO],
  ['eng', ENG],
]);

const TEXT_MAP = TRANSLATION_MAP.has(currentLanguage)
  ? TRANSLATION_MAP.get(currentLanguage)
  : KO;

export default TEXT_MAP;
