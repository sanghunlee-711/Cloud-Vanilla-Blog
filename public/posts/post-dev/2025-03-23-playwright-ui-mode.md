---
slug: 2025-03-23-playwright-ui-mode
title: microsoft의 playwright에 기여를 해보자
summary: 첫번째 오픈소스 도전, 그 결과는?
author: Sanghun lee
date: 2025-03-23 11:33:00 +0800
folder: [post-dev]
categories: [playwright, microsoft, opensource]
tags: [playwright, microsoft, opensource]
math: true
mermaid: true
image:
  src: https://mcr.microsoft.com/api/v1/catalog/productimage/6b0a4367bdeab10995bc239278f04c68c10e48adbec15e799e01909a0d66dcb9
  width: 850
  height: 585
---

# 시작하게 된 이유
언젠가는 오픈소스에 기여해보고 싶다는 생각을 가지고 있었다. 

최근에 조금 여유가 생긴 것 같아 오픈소스에 기여해보려 했던 계획을 실행해보고 싶었고, 개발자 지인([@pengoose](https://github.com/pengooseDev)) 중 활발하게 오픈소스에 기여하시는 분이 계셔 따로 연락을 드리고 나름의 팁을 전수 받으며 이슈를 찾아보게 되었다.

그리하여 찾은 이슈는 아래와 같다.

![playwright-ui-mode-issue-content](static/images/posts/playwright-ui-mode/issue-content.png)

등록된 시간이 좀 된 이슈이나 UI관련이라 파악하기도 쉬울 것 같고(?) 내용 정리도 잘 되어 있어 어떤 요구사항인지도 명확한 것 같아 진행해보기로 결정하고 코멘트를 하나 남겼다.

![playwright-ui-mode-issue-comment](static/images/posts/playwright-ui-mode/issue-comment.png)

진행해도 좋다는 이야기에 재빠르게 진행하기 위해 contribution guide를 읽으며 프로세스를 정립했고, 아래와 같이 요구사항을 간단하게 정리했다.

## 요구사항 정리

Playwright의 UI 모드에서 테스트 파일, 폴더, 스펙 등 다양한 범위에 대한 실행 시간 요약이 표시되지 않는다는 문제

- 이 기능은 Playwright의 VSCode 플러그인에서는 제공
- 테스트 suit의 속도를 비교하고 가장 느린 테스트를 식별하는 데 유용

결국 가장 하위 테스트 케이스는 시간이 뜨는데 그 상위의 그룹 또는 그 상위의 그룹에서는 시간이 나타나지 않아 불편하니 이 기능을 추가해달란 말이었다.

따라서, 저 하위 테스트 케이스의 시간들을 총합해서 보여주면 되는 것이다.

## 요구사항 개발 시작

우선 playwright포크를 뜨고 로컬에서 브랜치를 만든다음 ui와 관련된 코드를 찾기 시작했다.

키워드는 ui, time 그리고 실행될 때의 아이콘 이름이었다. 일단 UI모드를 실행하고 개발자도구를 통해 확인하기는 쉬운 상태이기에 재빠르게 코드가 위치한 곳 부터 찾아보려했다.

`playwright/packages/trace-viewer/src/ui/uiModeTestListView.tsx` 위치를 찾게 되었고, 이 때 처음으로 UI부분이 리액트 기반인 것을 알게 되어 한번의 신기함을 획득했다.

이 코드에서 `testTree.ts` 를 가져오는 부분이 있는데 이 부분 내에서 playwright 좌측의 실행 케이스 부분의 로직들을 담당하고 있었다.

우선 실제 코드 변경이 제대로 먹히는지 확인하기 위해 package.json을 읽어보고 `PW_HMR=1 npm run ctest -- --ui` 를 통해 ui모드로 진입 및 코드 변경 후 적용이 되는지 확인해보았다.

재귀 형태로 된 트리 구조였으며 각 테스트 케이스의 시간을 더하는 로직도 눈에 보였다.

```js
testCaseItem.duration = (testCaseItem.children as TestItem[]).reduce((a, b) => a + b.duration, 0);
```

`visitSuite` 메서드 내에 존재하는 로직이고 `visitSuite`는 재귀 함수이기에 이 재귀 함수에 맞춰 상위로 시간을 전파해줄 함수를 만들면 되겠다고 판단했다.

```js

const updateParentDuration = (group: GroupItem, duration: number): void => {
      group.duration += duration;
      if (!!group.parent && group.parent.kind === 'group')
        updateParentDuration(group.parent, duration);
    };
...

testCaseItem.duration = (testCaseItem.children as TestItem[]).reduce((a, b) => a + b.duration, 0);
updateParentDuration(parentGroup, testCaseItem.duration);
```

이렇게 다시 UI 모드를 실행해보며 내가 의도한 대로 작동하는 것을 확인할 수 있었다.

이제 개발은 완료 되었으니, 테스트 케이스를 업데이트해주면 되었는데.. 거의 4000개에 육박하는 테스트를 돌리느라 초반에 시간을 좀 잡아먹었지만 그래도 3개의 파일에서 스냅샷만 업데이트 해주면 되는 형태로 테스트가 만들어져 있어 수월하게 진행할 수 있었다.

## 테스트 케이스 업데이트
"스냅샷 업데이트를 이렇게 활용하면 되는구나"를 많이 깨달은 케이스이다.
사실 현업에서 나의 사고 방식은 스냅샷이나 DOM관련 테스트는 E2E로 빼서 진행하면 되는거지, 왜 중복으로 하나 생각을 했었다.

이번에 진행한 기능을 봤을 때 **UI의 시멘틱한 구조를 유지하는 지에 대한 여부를 판단하기위해 활용하는 좋은 방향**이 있구나를 깨닫게 되었다.

여튼, 내가 수정한 부분과 관련된 테스트 파일은 아래와 같이 3가지가 있었다.

```javascript
tests/playwright-test/ui-mode-test-run.spec.ts
tests/playwright-test/ui-mode-test-setup.spec.ts
tests/playwright-test/ui-mode-test-shortcut.spec.ts
```

그리고 package.json에 잘 적혀있는 것을 따라 
`npm run ttest -- --update-snapshots tests/playwright-test/ui-mode-test-run.spec.ts ` 를 통해 테스트 케이스 내의 스냅샷을 업데이트 할 수 있었고, 기본으로 3way방식의 업데이트가 되어있는데 왜 yaml파일이 안생기는지 의아해 하다가 시간을 좀 잡아먹었다.(result는 git에 등록이 안되도록 해놓았..)

따라서 git patch를 통해 업데이트 되는 부분을 하나씩 업데이트해주고 로컬에서 모든 테스트가 통과되는 것을 확인했다.

PS. 다만 스냅샷이 여러번 비교되는 테스트 케이스의 경우 하나씩 변경이 반영되어 몇번 씩 실행을 해줘야 해결이 되었다.

# PR 등록

패기롭게 [PR](https://github.com/microsoft/playwright/pull/35249)을 작성하여 등록하였고, 변경된 UI에 대한 동영상도 담아 정성을 한 스푼 넣었다.

그날 저녁 다른 contributer가 서로 의견을 묻는 코멘트가 달려 금방 merge가 될 수도 있겠다는 희망회로를 돌렸다.

그런데 몇일이 지나도 응답이 없었고, 이분들이 휴가를 가셨나.. 생각을 했다.

# 결과

![pr-result](static/images/posts/playwright-ui-mode/pr-result.png)

결과는 PR Closed가 되었다. 우선 기능상의 문제라기 보다는 팀 내 회의를 거쳤고 유저에게 혼선을 오히려 더 줄 수 있는 기능이라 판단이 되어 기여는 고맙지만 닫기로 결정했다고 한다.

# 소견

## 개인적 욕심
사실 첫번째 기여부터 UI를 하게 된다면 앞으로 오픈소스에 기여할 때, 이를 발판으로 더 쉽게 접근해볼 수 있지 않을까? 하는 생각을 했다.

또한, 당연히 나도 직장인이니 이력에도 도움이 되는 한줄이 생기지 않을까라는 생각도 하였다.

이로 인해 시장가치가 약간 올라갈 수도 있겠다는 짧은 망상도 했다.

## 색다른 발견

그리고 재미있었다. 

어느 순간 회사인으로서 회사의 코드에만 종속되어 있는 느낌을 많이 받았고, 개인적 시야가 좁아지며 정체되는건가 싶은 생각도 들었다.

그런데 새로운 코드의 구조와 다양한 시각으로 작성된 코드에 기여를 위해 1~2일 정도를 다른 생각의 베이스를 가진 코드를 보니 기분이 좋고 재미도 있었다. (물론 퇴근 후에 따로 보느라 눈은 아팠지만..)

또한, 남들처럼 멋지게 머지된 PR에 내 이름이 들어가 있지는 않겠지만 어떠한 형태로 playwright라는 라이브러리가 운영되는 것에 있어 기여를 했다는 점에서(**팀원들이 내가 제출한 PR에 대해 추가 회의를 했다고 하니 이것 또한 기여가 아니겠는가?**) 이번 도전은 의미가 있었던 것 같다.

아래는 마지막으로 남겨준 `@dgozman`의 코멘트이다.

![issue-result](static/images/posts/playwright-ui-mode/issue-result.png)

결론은 빠른 시일내에 다른 이슈로 다시 한번 도전해보고 싶은 상태가 되었다. 