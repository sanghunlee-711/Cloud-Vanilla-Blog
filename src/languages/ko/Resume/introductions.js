import { calculateYears } from '../../../common/utils/year.js';
import {DEV_START_DATE} from '../../../common/constants/date.js'

const INTRODUCTIONS = `
<strong>${calculateYears(
  DEV_START_DATE
)}년차</strong> 프론트엔드 개발자 이상훈입니다.\n
프론트엔드개발은 웹개발의 일부라는 생각으로 웹 개발 전반에 대한 기본지식을 갖추고 있습니다.
JavaScript 프레임워크 및 라이브러리의 구현원리와 함께 웹 표준에 알맞는 개발에 관심이 많습니다.
모든 최적화를 위한 첫 걸음은 R&R의 분리라는 생각을 가지며 설계하고 리팩토링합니다.
비즈니스 요구사항 만족과 동시에 사람이 읽을 수 있는 코드의 최대 퍼포먼스를 내는 개발자가 되기 위해 고민하며 정진하고 있습니다.
`;

export default { INTRODUCTIONS };
