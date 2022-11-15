---
slug: 2022-11-15-tarverse-tree
title: '자바스크립트로 트리를 순회해보자'
date: 2022-11-15 11:33:00 +0800
author: Sanghun lee
summary: '헷갈리는 순회를 정리해보자'
categories: [Tree, Traverse]
folder: [post-dev]
tags: [Blog]
math: true
mermaid: true
image:
  src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Sorted_binary_tree_ALL_RGB.svg/586px-Sorted_binary_tree_ALL_RGB.svg.png'
  height: 585
---

# 작성 이유

매번 헷갈려서 도식화하면서 겨우겨우 푸는 것이 지겨워서 어느정도 머리에 외워놓는게 편할 것 같아서 작성하게 되었다.

분명 Js로 자료구조를 공부하며 작성하였으나 다소 이론적인 부분이 많아서

각 예제별로 릿코드의 문제를 들어 기재해놓으면 이해가 빠를 것 같아 별도로 글을 써보려 한다.

아래 예제는 이해를 간편하게 하기 위해 이진트리로 진행한다.

# 1. Pre-order Traversal(전위순회 === 깊이 우선순회(DFS))

1. 루트를 먼저 방문
2. 왼쪽 서브 트리를 탐색
3. 오른쪽 서브 트리를 탐색하게 된다.

## Pre-order 예제

- 144. Binary Tree Preorder Traversal

Given the root of a binary tree, return the preorder traversal of its nodes' values.

Example 1:

```md
Input: root = [1,null,2,3]
Output: [1,2,3]
```

Example 2:

```md
Input: root = []
Output: []
```

Example 3:

```md
Input: root = [1]
Output: [1]
```

### Interative PreOrder with Binary Tree

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];
  const result = [];
  const stack = [root];

  while (stack.length !== 0) {
    const curr = stack.pop();
    result.push(curr.val);
    //stack은LIFO논리가 되므로 right가 먼저 들어가는 것이 맞음(재귀와 헷갈리지 않도록 하자)
    if (curr.right) stack.push(curr.right);
    if (curr.left) stack.push(curr.left);
  }
  return result;
};
```

### Recursive PreOrder with Binary Tree

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  if (!root) return [];

  const result = [];

  const helper = (node) => {
    if (!node) return;
    result.push(node.val);
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
  };
  helper(root);
  return result;
};
```

# 2. In-order Traversal(중위순회 === 순회(Symmetric))

1. 왼쪽 서브트리를 탐색
2. 루트노드 방문
3. 오른쪽 서브트리를 탐색하게 된다.

## In-order 예제

- 94. Binary Tree Inorder Traversal

Given the root of a binary tree, return the inorder traversal of its nodes' values.

Example 1:

```md
Input: root = [1,null,2,3]
Output: [1,3,2]
```

Example 2:

```md
Input: root = []
Output: []
```

Example 3:

```md
Input: root = [1]
Output: [1]
```

### Interative InOrder with Binary Tree

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let stack = [];
  let result = [];
  let current = root;

  while (current || stack.length) {
    //visit left subTree
    while (current) {
      stack.push(current);
      current = current.left;
    }
    //check current node
    current = stack.pop();
    result.push(current.val);
    //visit right subTree;
    current = current.right;
  }
  return result;
};
```

### Recursive PreOrder with Binary Tree

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  let result = [];

  const helper = (node) => {
    if (!node) return;
    if (node.left) helper(node.left);
    result.push(node.val);
    if (node.right) helper(node.right);
  };
  helper(root);
  return result;
};
```

# 3. Post-order Traversal(후위순회)

1. 왼쪽 서비트리를 탐색
2. 오른쪽 서브트리를 탐색
3. 루트노드 방문

## Post-order 예제

- 145. Binary Tree Postorder Traversal

Given the root of a binary tree, return the postorder traversal of its nodes' values.

Example 1:

```md
Input: root = [1,null,2,3]
Output: [3,2,1]
```

Example 2:

```md
Input: root = []
Output: []
```

Example 3:

```md
Input: root = [1]
Output: [1]
```

### Interative PostOrder with Binary Tree

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  if (!root) return [];
  let result = [];
  let stack = [];
  let node = root;
  let lastNodeVisited = null;

  while (stack.length || node) {
    //왼쪽 서브트리 탐색
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      let peekNode = stack[stack.length - 1];
      //왼쪽 서브트리가 없는 경우 오른쪽 서브트리가 존재(및 탐색을 안했다면)한다면 오른쪽 노드 탐색
      if (peekNode.right && peekNode.right !== lastNodeVisited) {
        node = peekNode.right;
      } else {
        //좌 우 모두 탐색 시 루트노드 방문
        result.push(peekNode.val);
        lastNodeVisited = stack.pop();
      }
    }
  }

  return result;
};
```

### Recursive PostOrder with Binary Tree

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const result = [];

  const helper = (node) => {
    if (!node) return;
    if (node.left) helper(node.left);
    if (node.right) helper(node.right);
    result.push(node.val);
  };

  helper(root);

  return result;
};
```

# 4. Level-order Traversal(레벨 순서 순회 === 너비우선순회(BFS))

1. 각 레벨별로 루트에서 가까운 레벨부터 제일 하위레벨의 순으로 탐색한다.

- Iterative형으로 구현할 때 큐를 사용하여 각 레벨을 모으면 편하다.

## Level-order 예제

- 102. Binary Tree Level Order Traversal

Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

Example 1:

```md
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
```

Example 2:

```md
Input: root = [1]
Output: [[1]]
```

Example 3:

```md
Input: root = []
Output: []
```

Constraints:

The number of nodes in the tree is in the range [0, 2000].
-1000 <= Node.val <= 1000

### Interative LevelOrder with Binary Tree

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  const queue = [root];
  const result = [];

  while (queue.length) {
    let currentQueuLen = queue.length;
    let row = [];

    for (let i = 0; i < currentQueuLen; i++) {
      const curr = queue.shift();
      row.push(curr.val);
      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);
    }
    result.push(row);
  }
  return result;
};
```

### Recursive LevelOrder with Binary Tree

```javascript
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) return [];
  let result = [];

  const helper = (node, level) => {
    if (!node) return;

    if (result[level]) result[level].push(node.val);
    else result[level] = [node.val];

    helper(node.left, level + 1);
    helper(node.right, level + 1);
  };

  helper(root, 0);

  return result;
};
```

# 참고

- [위키(트리순회)](https://ko.wikipedia.org/wiki/%ED%8A%B8%EB%A6%AC_%EC%88%9C%ED%9A%8C)
- [LeetCode- Explore](https://leetcode.com/explore/learn/card/data-structure-tree/134/traverse-a-tree/992/)
