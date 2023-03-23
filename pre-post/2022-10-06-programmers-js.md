---
slug: 2022-11-06-next-step-tdd
title: 넥스트스텝 스터디 참여후기(1~8주차)
summary: TDD, 클린코드에 조금 더 가까이!
author: Sanghun lee
date: 2022-11-06 11:33:00 +0800
categories: [TDD, Javascript]
folder: [post-personnel]
tags: [TDD]
math: true
mermaid: true
image:
  src: https://edu.nextstep.camp/resources/20220905052739/images/logo/logo_thumnail_white.jpg
  height: 585
---

# TDD란?

- 실패하는 테스트를 먼저 만들고 그 테스트를 통과하기위해 코드를 짜는 개발 방법
- 사고방식을 강조 함
- 제대로 동작하는지 빠르게 피드백을 받기위한 사고방식
- 결정과 피드백 사이의 갭에 대한 인식, 더 나아가 결정과 피드백 사이의 갭을 조절하기 위한 테크닉
- 결국은 내 결정이 잘 동작하는지 빠르게 피드백을 얻는것이 중요한 사고 방식이다.
- 따라서 테스트 코드는 의도치 않은 유용한 부산물이 된다..
- **TDD의 핵심은 피드백을 받는것**
- **더 빨리 더 자주 피드백을 받는 것!**
  - **더 자주 피드백을 받기 위해 작은영역으로 핵심을 포함한 가장 중요한 기능부터 문제를 쪼개서 접근해나가아면 좋음**

## TDD는 언제 하는 것이 좋은가?

- 여러번 구현해봐서 어떻게 해야할지 아는 경우는 굳이 할 필요가 없음.
- **처음 해봐서 막연한 경우, 요구사항이 변경될 수 있는 경우, 개발중에 코드가 많이 변경될 것 같은 경우**
- **내가 개발하고 나서 누가 유지보수 할 지 모르는 경우**
- **불확실성이 높은 상황일 수록 더 효과적이게 된다**

# 클린코드

1. 의도를 드러내는 네이밍 결과로 바로가는 것은 어렵다
   1. 좀 더 그 의도를 드러내는 **과정**에 **집중해보는 것이 좋다.**
      1. 의도를 드러내고(reveal the intention)
      2. 구현은 숨기고 (hide the implementation)
      3. 반환타입에 대한 명확한 힌트를 제공한다. (give a clear hint as to the expected return type)
   2. EX) linearSearchFor → searchFor → includes
   3. EX) getLinearSearchPosition → getSearchPosition → indexOf

## 이런 강의 자료를 어떻게 찾았을까?

엔지니어링 덕질을 해보자

추천하는 엔지니어들은 켄트백, 워드 커닝햄 등 고전이 되는 유명한 엔지니어이다.

이들의 책이나 내용이 공감되는 부분이 있을 때 그 부분들을 분석하고 거기서 파생되는 지식과 자료들을 찾아보며 공부하게 되었다고 한다.

# 개인 소감

이런 자료들을 찾아서 양질의 컨텐츠를 교육해주는것이 대단하다고 생각 되었다.

테스트코드를 혼자서 이 자료 저 자료 혼재해가며 열심히 공부하다가 드디어 개념부터하여 양질의 지식들을 제대로 배울 수 있는 기회가 생긴 것 같아 너무 기뻤다.

여기서 잘 배워서 개인블로그, 프로젝트, 회사에 까지 모든 코드들을 테스트를 도입하여 맘 편히 리팩토링 할 수 있게 되면 좋겠다 😅.

# 참고하면 좋을 것 들

- [워드 커닝햄 변수명 짓기](https://wiki.c2.com/?IntentionRevealingNames)

- [PPT](https://docs.google.com/presentation/d/18c4kP9oWbGvKOeX7hd6Tt9FDSWx0NRomdqxQpeUFeto/edit#slide=id.g11a196697e6_0_119)

## 온보딩 계산기 미션!

나의 온보딩 계산기 미션 참여기!
[[클린코드 4기 이상훈] 계산기 구현](https://github.com/next-step/js-calculator/pull/144)
