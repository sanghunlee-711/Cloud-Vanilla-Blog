import TRANSLATION_MAP from "../../../languages/index.js";

const EDUCATION_TRANSLATION = TRANSLATION_MAP.RESUME.ETC.EDUCATION;

export const EDUCATION = [
  {
    period: "2012.03 ~ 2018.08",
    title: EDUCATION_TRANSLATION.university,
    explanation: EDUCATION_TRANSLATION.universityExplanation,
  },
  {
    period: "2009.03 ~ 2012.02",
    title: EDUCATION_TRANSLATION.highschool,
    explanation: EDUCATION_TRANSLATION.highschoolExplanation,
  },
];

export const ETC = [
  {
    period: "2018.10 ~ 2020.05",
    title: TRANSLATION_MAP.RESUME.ETC.ETC.corpName,
    explanation: TRANSLATION_MAP.RESUME.ETC.ETC.corpExplanation,
  },
];
