---
slug: 2023-03-10-priority-queue
title: '자바스크립트로 우선순위 큐를 활용해보자'
date: 2023-03-10 11:33:00 +0800
author: Sanghun lee
summary: '우선순위 큐를 만들어 leet code의 간단한 문제를 풀어보자'
categories: [Queue, HashMap]
folder: [post-dev]
tags: [Blog]
math: true
mermaid: true
image:
  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Sorted_binary_tree_ALL_RGB.svg/586px-Sorted_binary_tree_ALL_RGB.svg.png'
  height: 585
---

# 작성 이유

사실 해당문제는 간단하게 정렬을 통해 해결하면 동일한 시간복잡도를 가질 수 있게 된다.

하지만 이 문제에서 조금 더 나아가 많은 정보를 얻으려면 우선순위 큐를 직접구현해보고 이의 유익함을 알아내는 것이 중요하다고 생각되어 우선순위큐를 직접 작성한 뒤 이를 활용해 문제를 풀어보았다.

우선순위 큐는 멀리서보면 간단하게 볼 수 있는데 우선순위에 따라 넣고 빼는 역할만 하면 된다.

이 과정에서 자료들을 가지고 있는 배열 내부에(링크드리스트를 써도 좋겠다) 우선순위에 맞게 순서를 찾는 일에서 복잡한 코드 작성이 생긴다.

자세하게 말하면 traverse를 시키는데 코드 작성이 많아진 다는 것이다.

## traverse

탐색 과정에서 swap을 일으켜 퀵정렬을 하게 만드는 것과 비슷하게 진행된다.
우선순위에 맞는 이진힙(이진탐색트리기반)이 되도록 위치를 조정해주며 배열에 넣게 된다.
이진트리를 배열에 넣고 볼 때 부모노드기반 좌측의 노드의 인덱스가 부모노드 2 \* 부모노드 인덱스 + 1, 우측은 + 2이다.
이 논리를 기반으로 sinkDown, bubbleUp을 통해 우선순위에 맞는 트리구조를 계속 가져간다.

아래 우선순위 큐는 최대 이진힙을 기반으로 진행되므로 우선수위가 가장 높은것이 제일 루트 포지션에 존재하게 된다.

```javascript
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class CustomPriorityQueueWithMaxBinHeap {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push(new Node(val, priority));
    this.bubbleUp();
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max.val;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const el = this.values[idx];

    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      //우선순위에 따라 위치를 조정해줌
      if (el.priority <= parent.priority) break;

      this.values[parentIdx] = el;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  sinkDown() {
    let idx = 0;

    const el = this.values[idx];

    while (true) {
      let swapIdx = null,
        leftChildIdx = 2 * idx + 1,
        rightChildIdx = 2 * idx + 2;

      if (leftChildIdx < this.values.length) {
        let leftChild = this.values[leftChildIdx];
        const isSwapInLeft = leftChild.priority > el.priority;

        if (isSwapInLeft) swapIdx = leftChildIdx;
      }

      if (rightChildIdx < this.values.length) {
        let rightChild = this.values[rightChildIdx];
        const isSwapInRight =
          (swapIdx === null && rightChild.priority > el.priority) ||
          (swapIdx !== null && rightChild.priority > leftChild.priority);

        if (isSwapInRight) swapIdx = rightChildIdx;
      }

      if (swapIdx === null) break;
      this.values[idx] = this.values[swapIdx];
      this.values[swapIdx] = el;
      idx = swapIdx;
    }
  }
}
```

## 문제 풀어보기

위에서 알게 된 최대 이진힙을 활용한 우선순위큐를 통해 간단한 문제를 풀어보자

문제는 LeetCode의 347. Top K Frequent Elements 이다.

k 번째 가장 자주 나타나는 요소를 반환해주는 것이다.

아래와 같은 응답을 기대한다.

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

```javascript
var topKFrequent = function (nums, k) {
  const results = [];
  const map = new Map();

  //각 숫자별로 카운팅을 넣어줌
  nums.forEach((num) => {
    map.set(num, (map.get(num) || 0) + 1);
  });

  const priorityQueue = new CustomPriorityQueueWithMaxBinHeap();

  //카운팅 된 값에 따라 우선순위를 부여해줌
  map.forEach((value, key, originMap) => {
    priorityQueue.enqueue(key, value);
  });
  //dequeue시 가장 우선순위가 큰 것이 나오므로 이를 활용해서 답안을 제출해줌
  for (let i = 0; i < k; i++) {
    results.push(priorityQueue.dequeue());
  }
  return results;
};
```

이렇게 풀 수 있게 된다.

사실 내부에서 지원되는 sort메서드를 사용하면 간단하게 풀기가 가능하나 이런식의 자료구조와 함께하는 접근도 굉장히 중요한 것 같다.

끝!

# 참고

- [LeetCode - 347. Top K Frequent Elements](https://leetcode.com/problems/top-k-frequent-elements/)
