---
slug: RegEx
title: 정규표현식
author: Sanghun Lee
date: 2021-09-08 11:33:00 +0800
categories: [BE, RegEx]
tags: [RegEx]
math: true
mermaid: true
image:
  src: 'https://miro.medium.com/max/1200/1*m3wegA5h10b8aM5U64xtSA.png'
  width: 850
  height: 585
---

# <span>참고!</span>

이 포스팅은 <a href ="https://www.youtube.com/watch?v=t3M6toIflyQ">드림코딩 엘리</a> 유튜브 채널의** 정규표현식 , 더이상 미루지 말자 🤩** 포스팅을 보고 개인공부를 위해 정리한 내용입니다 :)
추가적으로 참고한 포스팅은 아래와 같습니다

<span style="color:red">
모든 저작권은 드림코딩 by엘리에게 있습니다. 공부를 위한 참고용 포스트 입니다.
</span>

<hr>

정규표현식은 텍스트에서 필요한 형태의 패턴을 찾을 때 주로 사용이 된다.

Email, Pw의 유효성 검사에서도 사용된다.

slash를 이용하여 정규표현식을 나타내고 그 안에 패턴을 적고 flag를 이용한 옵션을 준다.

```regexp
/regex?/i
```

## 1. Groups & Ranges

```text
| : 또는
() : 그룹
[]: 문자셋, 괄호안의 어떤 문자 든
[^]: 부정 문자셋, 괄호안의 어떤 문자가 아닐 때
(?:) 찾지만 기억하지는 않음 -> 쓰면 그룹이 지정되는게 풀린다
```

<br>

### 1.1 그룹을 이용한 찾는 방식

![그룹을 이용한 찾는 방식](https://images.velog.io/images/cloudlee711/post/9a7e278d-62ec-4114-99df-af7d2064dd2a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-09%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.07.08.png)

### 1.2 (?:)를 이용한 방식

![(?:)를 이용한 방식](https://images.velog.io/images/cloudlee711/post/a5c7ba88-46d6-4926-8845-3bb27be65150/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-09%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.08.35.png)

<br>

<br>

### 1.3 부정문자셋과 대괄호 사용

![](https://images.velog.io/images/cloudlee711/post/3dad87a6-b615-4ff2-ae6f-af0ec0b26bac/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-09%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.10.16.png)
<br>

a~z와 A-Z와 0~9에 해당하는 것을 제외한 모든 것을 찾게됨.

<br>

## 2. Quantifiers

```text
?: 없거나 있거나
*: 없거나 있거나 많거나
{n}: n번 반복
{min, }: 최소
{min,max}: 최소, 그리고 최대
```

### 2.1 ?를 사용

![](https://images.velog.io/images/cloudlee711/post/6b6c92a3-ce5d-4b6c-a53c-e358d0bd81e6/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-09%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.12.20.png)

-> a 다음 y가 존재하거나 존재하지 않거나의 케이스를 찾아 줌

### 2.2 {min, max?} 활용

![](https://images.velog.io/images/cloudlee711/post/57e1c299-9df7-4e2b-973c-74235a86fb04/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-09%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.13.42.png)

-> gra다음 최소 두가지 최대 3가지가 나오고 y가 들어가는 케이스에 대해 찾음

## 3. Boundary-type

```text
\b: 단어경계
\B: 단어경계가 아님
^: 문장의 시작
$: 문장의 끝
```

### 3.1 $를 활용

![](https://images.velog.io/images/cloudlee711/post/47206313-df78-4082-8f7b-15fd78b9c770/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-09%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.17.38.png)

문장의 끝에 해당하는 Ya를 검색하게 됨.

## 4. Character classes

```text
\:특수문자가 아닌 문자
. 어떤 글자(줄바꿈 문자 제외)
\d: digit 숫자
\w: word 문자
\s: space공백
\S: space공백 아님
```

### 4.1 특수문자 '[]'를 찾기위해 '\' 를 활용하는 방법

![](https://images.velog.io/images/cloudlee711/post/cb7fe835-8bce-446b-b008-6ef3e5c73a7c/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-09%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.20.40.png)

## 5. 휴대폰 번호 찾기

### 5.1 혼자시도

![](https://images.velog.io/images/cloudlee711/post/81098270-2056-43ac-b3a1-87b0b03aa07e/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-09%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.28.43.png)

휴대폰 번호라서 010 은 박아놓고 들어올 케이스들이 -, ,.뿐이어서 그냥 수량으로 해결했다 ..

![](https://images.velog.io/images/cloudlee711/post/0de228ca-6a5a-4d7e-8719-86fd093713c4/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-09%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.30.37.png)

가장 쉬운 것 부터 접근하라고 하셨다

>

```md
1. \d\d\d-\d\d\d-\d\d\d\d
2. \d{2,3}-\d{3}-\d{4}
3. \d{2,3}[- .]\d{3}[- .]\d{4}
```

### 5.2 이메일 찾기

#### 5.2.1 혼자시도

![](https://images.velog.io/images/cloudlee711/post/76781dec-3854-44cf-a327-0f7454fe2f07/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-09%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.42.32.png)

최소값만 지정해주고 다 붙여버렸다.
실제로는 이렇게 쓰면 큰일날듯 ㅎㅅㅎ..

#### 5.2.2 쉽게쉽게 .. + 를 활용하기

![](https://images.velog.io/images/cloudlee711/post/661556ad-077b-4ca0-934c-d30d9380a939/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-09%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.40.55.png)

## 6.youtube에서 특정 id값만 찾아내기

![](https://images.velog.io/images/cloudlee711/post/1f6cff56-dc57-49f8-83c5-21454f0fc041/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-03-09%20%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB%2011.54.30.png)

?:를 활용하여 제외케이스를 만들어서 그룹에서 제외하기

## 7. 숫자 콤마찍기

```javascript
const numb = (x) => {
  let regEx = /\B(?=(\d{3})+(?!\d))/g;
  let madeString = String(x).replace(regEx, ',');

  return madeString;
};
console.log(numb(1000));
```

>

>

## - 참고

- [정규표현식, 더 이상 미루지말자 드림코딩by엘리](https://www.youtube.com/watch?v=t3M6toIflyQ&t=358s)
- [github 드림코딩by엘리](https://github.com/dream-ellie/regex)
- [연습용 사이트 (regexr.com)](https://regexr.com/5ml92)
- [regexone](https://regexone.com/lesson/excluding_characters?)
