import { calculateYears } from "../../../common/utils/year.js";
import { DEV_START_DATE } from "../../../common/constants/date.js";

const INTRODUCTIONS = `
<strong>${calculateYears(
  DEV_START_DATE
)}년차</strong> 프론트엔드 개발자 이상훈입니다.\n
프런트엔드 개발을 단순한 화면 구현이 아닌, 서비스 전반의 구조와 기준을 설계하는 역할로 바라보고 있습니다.\n
역할과 책임(R&R)의 분리를 중심으로 설계하며, 변경과 확장에 강한 구조를 만드는 것을 중요하게 생각합니다.
`;

export default { INTRODUCTIONS };
