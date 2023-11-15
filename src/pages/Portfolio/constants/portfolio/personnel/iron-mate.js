export const IRON_MATE_PORTFOLIO = {
  title: '쇠질 메이트',
  job: '프론트엔드 개발',
  type: '개인프로젝트',
  period: '2023/09~2023/11',
  links: [
    {
      icon: 'fab fa-github',
      link: 'https://github.com/sanghunlee-711/iron-mate',
    },
    {
      icon: 'fa fa-globe',
      link: 'https://www.iron-mate.com/',
    },
  ],
  devHighlights: [
    '일, 월별 운동 내용 요약 기능',
    '세트간 타이머 제공',
    '액셀 데이터 다운로드 및 존재하는 데이터 적용 기능',
    'PWA 세팅으로 접근 용이한 UX 제공',
  ],
  devAchivement: [
    'serviceworker를 사용한 브라우저 멀티 프로세스 활용으로 정확한 타이머 기능 제공',
    'next-pwa를 통한 PWA세팅',
    'react-hook-form의 유연한 활용',
    'xlsx로 정해진 포맷의 액셀데이터 제공',
  ],
  techEnvironment: ['ES5/6', 'HTML5', 'CSS3'],
  libs: ['Next.js', 'next-pwa', 'xlsx', 'react-hook-form', 'Vercel'],
  exploreComment: `쇠질메이트는 운동일지 기록을 더욱 간결하고 심플하게 하자는 취지에서 시작되었습니다.
  기록한 운동정보를 webStorage에 저장할 수 있도록 지원하였고, 해당 데이터를 Excel로 추출하여 별도 보관할 수 있도록 지원합니다.
    `,
  devExplains: [
    {
      image:
        '../../../../../../static/images/portfolio/iron-mate/singlethread.png',
      explanation: [
        '싱글스레드로 인해 다른 탭 또는 외부 프로그램 시행 시 타이머가 정상작동하지 않는 현상이 발생 되었습니다.',
        '서비스워커를 활용해 별도 프로세스를 실행하여 타이머의 정합성을 유지하여 UX를 증대하였습니다.',
      ],
    },
    {
      image: '../../../../../../static/images/portfolio/iron-mate/history.jpeg',
      explanation: [
        'xlsx 라이브러리를 활용하여 날짜별 운동 종목에 맞는 데이터를 제공합니다.',
      ],
    },
  ],
};
