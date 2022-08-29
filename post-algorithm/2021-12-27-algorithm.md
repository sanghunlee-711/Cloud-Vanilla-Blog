---
slug: 2021-10-06-nextjs_user
title: LeetCode 문제풀이(704.Binary Search)
author: Sanghun lee
date: 2021-12-03 11:33:00 +0800
categories: [LeetCode, BinarySearch]
tags: [Algorithm]
math: true
mermaid: true
image:
  src: https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcZDedj%2FbtraJzj53sn%2FHdUj1jQOUihHUy0oday6kK%2Fimg.png
  width: 850
  height: 585
---

# 문제 설명

데이터 처리 전문가가 되고 싶은 "어피치"는 문자열을 압축하는 방법에 대해 공부를 하고 있습니다. 최근에 대량의 데이터 처리를 위한 간단한 비손실 압축 방법에 대해 공부를 하고 있는데, 문자열에서 같은 값이 연속해서 나타나는 것을 그 문자의 개수와 반복되는 값으로 표현하여 더 짧은 문자열로 줄여서 표현하는 알고리즘을 공부하고 있습니다.
간단한 예로 "aabbaccc"의 경우 "2a2ba3c"(문자가 반복되지 않아 한번만 나타난 경우 1은 생략함)와 같이 표현할 수 있는데, 이러한 방식은 반복되는 문자가 적은 경우 압축률이 낮다는 단점이 있습니다. 예를 들면, "abcabcdede"와 같은 문자열은 전혀 압축되지 않습니다. "어피치"는 이러한 단점을 해결하기 위해 문자열을 1개 이상의 단위로 잘라서 압축하여 더 짧은 문자열로 표현할 수 있는지 방법을 찾아보려고 합니다.

예를 들어, "ababcdcdababcdcd"의 경우 문자를 1개 단위로 자르면 전혀 압축되지 않지만, 2개 단위로 잘라서 압축한다면 "2ab2cd2ab2cd"로 표현할 수 있습니다. 다른 방법으로 8개 단위로 잘라서 압축한다면 "2ababcdcd"로 표현할 수 있으며, 이때가 가장 짧게 압축하여 표현할 수 있는 방법입니다.

다른 예로, "abcabcdede"와 같은 경우, 문자를 2개 단위로 잘라서 압축하면 "abcabc2de"가 되지만, 3개 단위로 자른다면 "2abcdede"가 되어 3개 단위가 가장 짧은 압축 방법이 됩니다. 이때 3개 단위로 자르고 마지막에 남는 문자열은 그대로 붙여주면 됩니다.

압축할 문자열 s가 매개변수로 주어질 때, 위에 설명한 방법으로 1개 이상 단위로 문자열을 잘라 압축하여 표현한 문자열 중 가장 짧은 것의 길이를 return 하도록 solution 함수를 완성해주세요.

# 제한사항

s의 길이는 1 이상 1,000 이하입니다.
s는 알파벳 소문자로만 이루어져 있습니다.

>

```md
입출력 예
s result
"aabbaccc" 7
"ababcdcdababcdcd" 9
"abcabcdede" 8
"abcabcabcabcdededededede" 14
"xababcdcdababcdcd" 17
```

# 풀이

처음에 스택에 넣고 다시 빼서 비교하고 이런 로직을 생각했다가.. 구현하려다 보니 어쩔수 없이 이중반복문을 써야할 것 같아서 무식하게 이중반복문을 사용했다.

여기서 중요하게 봐야될 포인트 두가지가 있다.

- subStr: subStr(i,j) => i에서 j(포함x)까지 문자열을 자르고 반환해줌
  ![](https://images.velog.io/images/cloudlee711/post/ae0b5a48-6d38-44e1-96a4-57f8c7643732/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-12-27%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.54.34.png)
  End가 넘어가면 알아서 바꿔주거나 같으면 빈문자열을 반환해주는 특징이 있다.

- 이중 반복문을 돌릴때 indent 반복문의 증가량이 i로 되는 것

  첫번째 반복문이 얼마나 자를지를 고려하는 반복문이라 생각하면 이해가 쉽다.

  이 부분을 생각하면서 고민을 좀 많이 했는데 다시 생각해보면 이런류의 문제가 꽤 있었던 것 같아 익숙해질 필요가 있는 것 같다.

```javascript
//걍 이중반복문임..;
function solution(s) {
  const lengthArr = [s.length]; // 빈 문자열 처리를 위함.

  for (let i = 1; i <= Math.floor(s.length / 2); i += 1) {
    // 아니 등호때매 안됬네 ;;
    let count = 1;
    let pressStr = '';

    for (let j = 0; j < s.length; j += i) {
      let curr = s.substring(j, j + i);
      let next = s.substring(j + i, j + 2 * i);

      if (curr === next) {
        count += 1;
      } else {
        if (count === 1) {
          pressStr = pressStr + curr;
        } else {
          pressStr = pressStr + count + curr;
          count = 1; //다시 시작
        }
      }
    }
    lengthArr.push(pressStr.length);
  }

  return Math.min(...lengthArr);
}
```

끝!

# 참고

>

- [프로그래머스 - 문자열 압축](https://programmers.co.kr/learn/courses/30/lessons/60057)
