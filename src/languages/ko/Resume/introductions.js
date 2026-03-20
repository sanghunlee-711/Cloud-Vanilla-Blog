import { calculateYears } from "../../../common/utils/year.js";
import { DEV_START_DATE } from "../../../common/constants/date.js";

const INTRODUCTIONS = `
<strong>${calculateYears(
  DEV_START_DATE
)}년차</strong> 프론트엔드 개발자 이상훈입니다.\n
프론트엔드 개발을 단순 화면 구현이 아닌, 사용자 경험·성능·안정성을 함께 설계하는 역할로 정의하고 있습니다.\n
변경과 확장에 강한 아키텍처를 지향하며, 기술 선택의 근거와 트레이드오프를 문서화·공유해 팀과 함께 제품 품질을 지속적으로 개선합니다.
`;

export default { INTRODUCTIONS };
