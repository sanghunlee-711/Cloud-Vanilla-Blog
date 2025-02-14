import { calculateYears } from '../../../common/utils/year.js';
import {DEV_START_DATE} from '../../../common/constants/date.js'

const INTRODUCTIONS = `
Hello, I'm Sanghunlee with <strong>${calculateYears(
  DEV_START_DATE
)}years</strong> experience as Web front-end developer .\n
I believe that front-end development is a part of web development, and I have basic knowledge of web development in general.
Very interested in the implementation principles of JavaScript frameworks and libraries, as well as development suited to web standards.
Designing and refactoring with the idea that the first step to any optimization is separation code with R&R.
Working hard to become a developer that satisfies business requirements and delivers maximum performance for human-readable code.
`;

export default { INTRODUCTIONS };
