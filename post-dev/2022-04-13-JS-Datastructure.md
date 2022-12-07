---
slug: 2022-04-13-JS-data-structure
title: 자바스크립트로 자료구조와 알고리즘 기본을 배워보자-1 [자료구조]
summary: 기초체력 증진이 나의 살길이라 생각해 열심히 정리해보았다.
author: Sanghun lee
date: 2022-04-13 11:33:00 +0800
categories: [DataStructure, Javascript]
folder: [post-dev]
tags: [DataStructure]
math: true
mermaid: true
image:
  src: https://w.namu.la/s/18f590719ba62222718f1a68efcad20118c422b146650c97162d782ef9995d28326d1011cfb37595d9c60d66a05b343556e520204383d4429456fb54ca6bbf5a235345dd3d295c7e17cca15825e536f34d5267a18df4547ef1921a59b8e1e689
  height: 585
---

# 단일 연결 리스트 (Linked List)

배열의 인덱스와 다르게 링크드리스트는 기차 같이 걍 노드(값을 가진)가 연결되어 있음

- 헤드는 연결리스트의 시작 노드를 가리킴
- 테일은 연결리스트의 마지막 노드를 가리킴
- 헤드 노드가 어디있는지만 알고 있을 것이며 이 헤드 노드부터 다음 두번째 노드를 알아내며 계속하여 마지막 노드까지 접근하게 됨
- 탐색 용이를 위해 길이를 가지고 있게 됨

| Lists                              | Array                          |
| ---------------------------------- | ------------------------------ |
| 인덱스 없음                        | 순서대로 인덱스 존재           |
| next포인터를 통해 다음 노드와 연결 | 삽입과 삭제의 비용이 많이 듦   |
| 랜덤한 접근 불가                   | 특정 인덱스에 빠르게 접근 가능 |

- 링크드리스트는 삽입과 제거가 쉬움따라서 임의 접근이 필요하지 않은 아주 긴데이터 세트나 많은 정보에 대해 작업하는 경우 용이함.

## Node

```jsx
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let frist = new Node('Hi');
first.next = new Node('there');
first.next.next = new Node('how');
first.next.next.next = new Node('are');
first.next.next.next.next = new Node('you');
```

## Push 메서드

## Push 메서드 pseudo code

- 값을 인자로 받음
- 받은 값으로 새로운 노드를 만듦
- 만약 리스트의 헤드프로퍼티가 없다면 헤드와 테일을 새로 생성한 노드로 변경한다
- 만약 리스트에 요소가 존재하면 현재 노드의 tail의 next를 새로만든 노드로 업데이트하고
- 현재의 테일을 새로만든 노드로 변경한다.
- 그리고 길이를 증가 시켜준다.
- 그리고 변경된 링크드리스트를 반환해준다.

```javascript



push(val){
	const node = new Node(val);
	if(!this.head){
//아무 것도 없으면 head와 tail모두 새로운 노드를 가리키게 됨
		this.head = node;
		this.tail = this.head;
	}else{
		//현재 노드("Hello")의 tail의
		// 다음을 새로 만든 노드("GoodBye")로 업데이트 하고
		this.tail.next = node;
		// 현재의 tail을 새로만든 노드("GoodBye")로 변경 해주면 됨
		this.tail = node;
		return this;
	}
}



```

## Pop메서드

배열처럼 마지막거를 그냥 빼면 되는게 아니라 마지막 노드를 추출한 다음 테일을 다시 가리키게 만드는 것이 어려워짐

## Pop 메서드 pseudo code

- 인자 안받음
- 리스트에 노드가 없으면 undefined 리턴
- tail에 도달할때 까지 루핑 돔
- 리스트의 끝까지 따라가는 “temp”라고 하는 변수와 항상 한 노드이전것을 가리키는 “pre”라는 변수가 필요함
- temp라는 변수가 리스트의 끝에 이르렀을 때 이 pre변수가 마지막에서 두번 째 노드를 가리키게 됨.
- 길이하나 줄여줌
- 제거한 값 리턴

```javascript







	traverse(){
		let current = this.head;
		while(current){
			console.log(current.val);
			current = current.next;
		}
	}

	pop(){
		if(!this.head) return undefined;
		let current = this.head;
		let newTail = current;
		//current의 next가 없을 때 까지 돌릴 거임
		while(current.next){
			//이렇게 하면 newTail이 계속 current보다
			// 하나 작은 곳에 위치하고 마지막에 되서는
			//이동하지 않게 되므로 재 할당할 값이 남아 있을 수 있음
			newTail = current;
			current = current.next;
		}
		// tail을 새로운 테일로 매칭 시킴
		this.tail = newTail;
		this.tail.next = null;
		this.length--;
		if(this.length === 0){
		// 하나의 노드만 존재하는 경우 처리를 위함
			this.head = null;
			this.tail = null
		}
		return current;
	}



```

## Shift 메서드

제일 앞에 노드 제거 후 값 반환

## Shift 메서드 pseudo code

- 노드가 없으면 return undefined;
- 노드가 존재할 경우 현재의 헤드 속성을 변수에 저장하고
- 헤드 속성을 업데이트 한 다음 한칸 이동시킴
- 길이 하나 줄임
- 제거한 노드 반환

```javascript







shift(){
	if(!this.head) return undefined;
	let removedHead = this.head;
	//Hello에서 GoodBye로 헤드를 옮김
	this.head = removedHead.next;
	this.lenth--;
	if(this.length === 0){
	//마지막 노드를 제거하고 난 뒤 tail이 노드를 가지고 있게 되는 것을 처리하기 위함.
		this.head = null;
		this.tail = null
	}
	return removedHead;
}



```

## Unshift 메서드

링크드리스트 제일 앞에 새로운 노드 추가

## Unshift 메서드 pseudo code

- 인자로 값을 받음
- 새로운 노드를 만듦
- 헤드가 없는 경우 헤드와 테일 모두가 새로운 노드를 가리키게함
- 노드가 이미 있는 경우 새롭게 생성된 노드의 next를 현재의 헤드값으로 설정하고 헤드가 새롭게 생성된 노드를 가리키도록 한 다음
- 길이를 1증가시킴
- 변화된 링크들 리스트를 반환

```javascript
unshift(val){
	const newNode = new Node(val);
	if(!this.head){
		this.head = newNode;
		this.tail = this.head;
	}else{
	//else가 없으면 마지막 노드가 자신을 가리키게 되는 아찔한 상황 발생
		newNode.next = this.head;
		this.head = newNode;
	}
	this.length++;
	return this;
}

```

## Get 메서드

인덱스나 포지션을 받아서 주어진 위치에 있는 노드를 반환하는 메서드이다.

- 0을 주면 헤드를 4를 주면 다섯번째 노드를 반환 등..

중요한 점은 주어진 숫자 만큼 리스트에서 헤드를 시작으로 계속 따라간 후 해당위치의 노드를 반환한다는 것.

그러므로 항상 위치를 기준으로 무엇인가에 접근해야하는 경우 어레이를 사용하는 것이 좋을 수 있음.

## Get 메서드 pseudo code

- 인덱스를 인자로 받아야 함.
- 만약 인덱스가 0보다 작거나 길이보다 크거나 같은 경우 return null
- 루프를 통해 인덱스에 접근하여 특정 인덱스의 노드를 반환해 줌

```jsx
  get(index){
    if(index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;

  }
```

## Set 메서드

특정 인덱스의 노드 값을 변경

## Set 메서드 pseudo code

- 인덱스와 값을 인자로 받음
- get 메서드를 이용해서 특정 node를 찾음
- 특정 Node가 없으면 return false
- 노드가 있으면 인자로 받은 값을 통해 해당 위치 index의 노드 값을 변경해주고 return true

```jsx
	set(index, val){
		const foundNode = this.get(index);
		if(foundNode) {
			foundNode.val = val;
			return true;
		}
		return false;
	}
```

## Insert 메서드

주어진 노드를 주어진 위치에 넣어줌

## Insert 메서드 pseudo code

- 범위를 벗어난 경우 삽입 불가이므로 인덱스가 0 보다 작거나 리스트의 길이보다 큰 경우 false반환
- 인덱스가 길이와 같으면 push메서드 활용하면 됨
- index가 0 이면 unshift메서드 활용하면 됨
- 이제 get메서드를 활용해서 인덱스를 받아오고 그 index의 하나 전 노드(index-1)에 접근하면 됨
- 그 접근한 노드에 next속성을 새로운노드로 업데이트 하고
- 그리고 새로운 노드의 next속성을 인덱스로 받아온 노드에 연결하면 됨
- 길이 올림
- return true(실패하면 false)

PS: !!는 불리안 연산자로 true로 판단되면 true, false로 판단되면 false를 리턴해줌(Boolean()이랑 비슷)

```javascript
insert(index, val) {
	if(index < 0 || index> this.length) return false;
	if(index === this.length) return !!this.push(val);
	if(index === 0) return !!this.unshift(val);

	const newNode = new Node(val);
	const previous = this.get(index - 1);
	const temp = previous.next;
	previous.next = newNode;
	newNode.next = temp;
	this.length++;
	return true;
}
```

## Remove 메서드

특정 포지션의 노드를 지워줌

## Remove 메서드 pseudo code

- 인덱스 값이 0 보다 작거나 리스트 길이 보다 큰 경우 return undefined
- 만약 인덱스가 길이-1과 같으면 pop
- 인덱스가 0 이면 shift메서드 사용
- 그렇지 않다면 get 메서드를 사용해서 index -1의 노드로 접근
- 접근한 노드의 next를 next.next노드로 바꿔줌
- 길이하나 줄임
- 제거 된 노드값을 반환

```jsx
remove(index){
	if(index < 0 || index > this.length) return undefined;
	if(index === 0) return this.shift();
	if(index === this.length - 1) return this.pop();
	const previousNode = this.get(index-1);
	const removed = previousNode.next;
	previousNode.next = removed.next;
	this.length--;
	return removed;
}
```

## Reverse 메서드

리스트 전체를 뒤집어 줌

## Reverse 메서드 pseudo code

- 헤드와 테일을 바꾼다
- next, ,current(head로 initializing) ,prev라는 변수를 만듦
- 리스트 루프 돌면서 current의 next를 next 변수로 설정
- current의 next를 이전에 바로 앞에있던 노드를 가리키도록 설정
- current의 node값을 prev에 저장하고 current의 next속성을 prev로 만들어줌

```jsx
reverse(){
	let node = this.head;
	this.head = this.tail;
	this.tail = node;
	let prev = null, next = null;

	for(let i = 0; i < this.length; i++) {
		next = node.next;
		node.next = prev;
		prev = node;
		node = next;
	}
	return this;
}
print() {
	let arr = [];
	let current = this.head;
	while(current){
		arr.push(current.val);
	}
	return arr;
}

```

## 단일연결리스트 빅오 복잡도(Big O of Singly Linked List )

- Insertion: O(1)
- Removal: O(1)[제일 앞인경우] or O(N)[pop인 경우 전체리스트를 따라가야 하므로]
- Searching: O(N)
- Access: O(N)

→ 정리하자면 단방향 연결리스트가 삽입과삭제의 경우 배열에 비해 유리

임의 접근이 없거나 주어진 순서대로 데이터 관리 또는 순서대로 데이터에 접근한다면 단방향 연결리스트가 유리

# Doubly Linked List(이중 연결 리스트)

- 거의 Singly Linked와 유사함
- 배열과 유사하나 다름
- 테일 헤드 있음
- 모든 노드가 next, previous attributes가 있음.
- 유연성이 더 있는 만큼 메모리가 많이 듦(next+previous를 저장해야 함으로)

## 기본 구조 만들기

```jsx
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

## Push

노드나 값을 이중연결리스트에 추가

## Push pseudocode

- 값을 가지는 새로운 노드 만들기
- 헤드가 null인지 아니면 길이가 0 인지 확인(리스트가 비어있는지)
  - 비어 있으면 head,tail이 모두 새로운 노드로 설정
  - 비어 있지 않다면 현재 양방향 리스트의 테일의 next 속성에 새로운 노드를 추가
  - 그리고 새로운 노드의 prev속성에 테일을 추가
- 길이를 1 올려줌
- 변경된 Doubly Linked List를 반환

```jsx
push(val){
	const newNode = new Node(val);
	if(!this.length){
		this.head = newNode;
		this.tail = newNode;
	} else{
		this.tail.next = newNode;
		newNode.prev = this.tail;
		this.tail = newNode;
	}
	this.length++;
	return this;
}
```

## Pop

제일 뒤에 있는 노드 제거

## Popping pseudocode

- 헤드(테일)이 없다면 return undefined
  - 테일을 나중에 출력하도록 변수에 저장
  - 길이가 0 이라면 헤드와 테일이 둘다 null이 되도록 설정
  - 테일이 그 전에 있던 노드가 되도록 설정(prev)
  - 새로운 tail의 next 속성을 null로 설정
- 길이를 줄임
- 제거한 노드를 리턴!

```jsx
pop(){
	if(!this.head || !this.tail){
		return undefined;
	}
	const poppedNode = this.tail;
	if(this.length === 1){
		this.head = null;
		this.tail = null;
	} else{
		this.tail = poppedNode.prev;
		this.tail.next = null;
		//안하면 list에서는 연결이 끊겨도 pop한 노드에서의 연결이 남아있게 됨.
		poppedNode.prev = null;
	}
	this.length--;
	return poppedNode;
}
```

## Shift

맨 앞의 노드 하나 제거

## Shifting pseudocode

- 길이가 0인지 확인하고
  - 길이 0 이면 return undefined;
  - 아니면 현재 헤드 노드를 변수(oldHead)에 저장
  - 길이가 1이면
    - head, tail을 null로 변경
  - 길이가 1보다 크면 헤드를 oldHead.next의 노드로 변경
  - 그리고 업데이트한 헤드의 prev 속성을 null로 변경
  - oldHead의 next를 null로 변경
  - 길이 1 줄이기
  - oldHead를 반환

```jsx
shift(){
	if(!this.length) return undefined;
	const oldHead = this.head;

	if(this.length === 1){
		this.head = null;
		this.tail = null;
	}else{
		this.head = oldHead.next;
		this.head.prev = null;
		oldHead.next = null;
	}

	this.length--;
	return oldHead;
}
```

## Unshift

제일 앞에 노드하나 추가

## Unshifting pseudocode

- 받은 값으로 새로운 노드 생성
- 길이가 0 이라면 비어있으므로
  - head, tail을 새로운 노드로 설정
- 길이가 0이 아니면 head 노드의 prev 속성을 새로운 노드로
  - 새로운 노드의 next프로퍼티를 head노드로 맞춰주면 됨
  - 그리고 head를 새로운 노드로 변경
- 길이 1 증가
- 리스트 반환

```jsx
unshift(val){
	const newNode = new Node(val);
	if(!this.length){
		this.head = newNode;
		this.tail = newNode;
	}else{
		this.head.prev = newNode;
		newNode.next = this.head;
		this.head = newNode;
	}
	this.length++;
	return this;
}
```

## Get

숫자(인덱스)를 입력하여 해당 위치(인덱스)의 노드를 찾아내는 것

- 단일연결리스트는 처음부터 해당 숫자까지 회문을 돌았어야함
- 양방향은 prev도 있기때문에 앞, 뒤 모두에서 회문을 돌릴 수 있기때문에 요구되는 Index에따라 회문 시작 위치를 바꿔주면 단일연결리스트보다는 최적화가 되는 것.

## Get pseudocode

- 인덱스가 0 보다 작거나 길이보다 크면 return null;(길이랑 같아도 안되는건 인덱스이니까 안됨)
- 인덱스가 길이의 절반보다 작거나 같으면
  - head부터 middle까지 루프를 돌고 찾은 노드 반환
- 인덱스가 길이의 절반보다 크면
  - tail부터 middle까지 루프를 돌아서 찾은노드 반환

### No-Optimize

```jsx
get(index){
	if(index < 0 || index >= this.length)return null;
	const count = 0;
	const current = this.head;
	while(count != index){
		current = current.next;
		count++;
	}
	return current;
}
```

### Optimize

```jsx
get(index){
	if(index < 0 || index >= this.length)return null;
	const count = 0;
	const current = this.head;

	if(index <= this.length/2){
		const count = 0;
		const current = this.head;
		while(count != index){
			current = current.next;
			count++;
		}
	}else{
		const count = this.length - 1;
		const current = this.head;
		while(count != index){
			current = current.prev;
			count--;
		}
	}

	return current;
}
```

## Set

받은 인덱스의 노드 값을 받은 값으로 변경하는 것

## Set pseudocode

- get 메서드를 통해 받은 노드를 변수에 저장
  - get메서드가 유효한 노드를 반환하면 그 노드의 값을 받은 인자의 값으로 변경
  - return true
  - 유효하지 않은 노드 반환 시 return false

```jsx
set(index, val){
	const foundNode = this.get(index);
	if(foundNode !== null){
		foundNode.val = val;
		return true;
	}
	return false;
}
```

## Insert

위치를 나타내는 인덱스와 값하나를 넣고 해당 인덱스에 새로운 값으로 만든 노드를 넣음.

## Insert pseudocode

- 인덱스가 0 보다 작거나 길이보다 큰 경우 Return false
- 0이면 unshift
- 인덱스가 길이랑 같으면 Push
- 이 경우가 아니면 get메서드를 index-1한 값으로 가져오기
- next와 prev 속성을 사용해서 노드들을 연결해줌
- 길이를 1 올리고
- return true

```jsx
insert(index,val){
	if(index < 0 || index > this.length) return false;
	if(index === 0) return !!this.unshift(val);
	if(index === this.length) return !!this.push(val);

	const newNode = new Node(val);
	const beforeNode = this.get(index-1);
	const afterNode = beforeNode.next;

	beforeNode.next = newNode, newNode.prev = beforeNode;
	newNode.next = afterNode, afterNode.prev = newNode;
	this.length++;
	return true;
}
```

## Remove

특정 위치의 노드 삭제

## Remove pseudocode

- 인덱스 유효성 확인(0보다 작은지 길이보다 큰지)
  - 유효하지 않으면 return undefined
  - 인덱스 0 ⇒ shift
  - 길이-1과 같으면 ⇒ pop
  - 나머지는 get메서드를 사용해서 제거해야할 요소를 찾음
    - 그러고 next,prev를 바꿔서 요소를 잘 매꿔줌
    - 찾아낸 노드의 next,prev를 null로 바꾸고
    - 길이 1 줄이고
    - 찾아낸 노드를 반환

```jsx
remove(index){
	if(index < 0 || index >= this.length) return undefined;
	if(index === 0) return this.shift();
	if(index === this.length - 1) return this.pop();

	const removedNode = this.get(index);
	const beforeNode = removedNode.prev;
	const afterNode = removedNode.next;

	beforeNode.next = afterNode;
	afterNode.prev= beforeNode;
	removedNode.next = null;
	removedNode.prev = null;
	this.length--;

	return removedNode;
}
```

# Doubly Linked List Summary

```jsx
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head || !this.tail) {
      return undefined;
    }
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      //안하면 list에서는 연결이 끊겨도 pop한 노드에서의 연결이 남아있게 됨.
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift() {
    if (!this.length) return undefined;
    const oldHead = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;
    return oldHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    const count = 0;
    const current = this.head;

    if (index <= this.length / 2) {
      const count = 0;
      const current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      const count = this.length - 1;
      const current = this.head;
      while (count != index) {
        current = current.prev;
        count--;
      }
    }

    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    (beforeNode.next = newNode), (newNode.prev = beforeNode);
    (newNode.next = afterNode), (afterNode.prev = newNode);
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;

    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;

    return removedNode;
  }
}
```

## 이중연결리스트 BIG O

**Insertion**: O(1)

**Removal**: O(1)

단일 연결리스트의 경우 회문을 전체 돌아야하지만(O(N)) 이중연결리스트는 그럴 필요가 없음

`.prev` 속성이 있기 때문

**Searching**: O(N)

이론적으로 Searching은 O(N/2)이긴 한데 (인덱스에 따라 앞 뒤에서 시작 가능하므로)

결국 ,그래도 O(N)이랑 같음

**Access**: O(N)

## Recap

- 이중연결리스트는 prev빼고 단일연결리스트랑 거의 같음
- 노드를 찾을 때 단일 연결리스트에 비해 절반의 시간이 걸림
  - prev속성 덕에 인덱스의 위치를 통해 중간보다 길면 뒤에서시작이 가능하므로
- 그런데 prev 속성이 추가되므로 추가적인 메모리를 먹으니 염두해야 함

# Stack(스택)

후입선출(Last In Fisrt Out) 원칙따르는 데이터 모음

## 사용처

- 함수 호출을 다루는 상황 (콜스택)
- Undo/ Redo (가장 최근 액션을 없애야 하므로 ㅎㅅㅎ)
- Routing(history object)가 스택처럼 다뤄지기도 함(방문 페이지 기록 등..)
- 알고리즘

## 구성

- 배열도 됨

```jsx
const stack = [];
stack.push('google');
stack.push('instagram');
stack.push('youtube');
console.log(stack); //["google", "instagram", "youtube"];
stack.pop(); //"youtube"
stack.push('amazon');
stack.pop(); //"amazon"
/*
앞에서 다 다룰수도 있긴 함(개념적으로는 스택처럼 사용 가능)
이렇게 하면 인덱스를 다 밀어야해서(re-index) BIG O가 N임
push, pop은 BIG O가 O(1)가 됨 개꿀(인덱스 안건드려도 됨)
*/
stack.unshift('A');
stack.unshift('B');
stack.unshift('C');
console.log(stack); // ["C","B","A"];
stack.shift(); // "A"
```

- 링크드리스트도 됨
  - 기존 singly linked list의 pop메서드를 쓰면 앞에서부터 마지막으로 가기때문에 O(N)이 걸리므로 효율이 없음
  - 대신에 shift() , unshift()를 활용
    - 맨뒤에서 push, pop을 하는 대신 맨 앞에서 push, pop을 시키는 방식(이러면 상수시간 가능 :))

### push 수도코드

- 스택이 비어있는지 확인
  - 비어있으면 first, last 속성을 newNode로 설정
  - 하나라도 노드 있으면 변수만들어서 현재 Stack의 first를 변수에 저장
  - first속성을 새로만든 노드로 변경(newNode)
  - first의 next 속성을 변수에 저장한 노드로 할당
- 사이즈 올림
- 사이즈 반환

### pop 수도코드

- 스택에 노드가 있는지 없는 지확인
  - 비어있으면 null 출력
  - 안 비어있으면 first프로퍼티를 변수에 저장하고
  - 가장 마지막에 출력해줌
  - 노드가 하나뿐이면 first, last 둘다 null
  - 하나보다 많으면 first를 변수에 저장한 노드의 next로 바꿔줌
- 사이즈 하나 줄임
- 변수저장한 노드 반환

```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temp = this.first;
      this.first = newNode;
      this.first.next = temp;
      return ++this.isze;
    }
  }

  pop() {
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp, value;
  }
}
```

## BIG O of STACKS

삽입과 제거가 상수시간이 되는게 스택에서 젤 중요함

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)

## Stack Recap

- LIFO
- 스택은 실행취소나 브라우저 기록 저장등에 사용됨
- JS에서는 지원안해줌 ㅋ
- 알고리즘에서는 그냥 배열 쓰는게편함

# (Queues)큐

선입선출(First In First Out) 원칙따르는 데이터 모음

## 사용처

- 줄서거나
- 프로그래밍에서는
  - 온라인접속 게임 대기
  - 컴퓨터 백그라운드 작업
  - 파일 업로드
  - 프린트 대기열

## 구성

배열로 해봄

```jsx
let q = [];
q.push('FIRST');
q.push('SECOND');
q.push('THIRD');
console.log(q); //["FIRST", "SECOND", "THIRD"];
q.shift(); //"FIRST" //이러면 리인덱싱 다해서 O(N)됨

q = [];
q.unshift('FIRST');
q.unshift('SECOND');
q.unshift('THIRD');
console.log(q); //["THIRD", "SECOND", "FIRST"];
q.pop(); //"FIRST" //이렇게 하면 처음에 넣을떄(unshift) 리인덱싱 하므로 O(N)이 됨
```

클래스로 직접 만들어버리기

- 스택에서 봤던 단일 연결리스트의 문제처럼 pop을 사용하면 전체를 회문하여 tail을 찾아야하므로
- 큐를 구성할때 맨 뒤에 추가하고 맨 앞에서 제거하면 상수시간으로 만들 수 있게 됨.

```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    //리스트 가장 뒤에 추가
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.length;
  }

  dequeue() {
    //리스트 가장 앞을 제거
    if (!this.first) return null;
    const temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
```

### enqueue pseudo code

- 인자 받음
- 받은 인자로 새로운 노드 만듦
- 만약 큐가 비어있으면 해당 노드를 first, last 속성으로 정의
- 큐가 비 어있지 않다면 큐의 현재 last의 next를 새로운 노드로 변경
  - 새로운 노드를 큐의 last로 지정
- 길이 하나 추가하고 길이 리턴

### dequeue pseudo code

- 큐의 first속성이 비어있으면 null출력
- first속성을 변수에 저장
- first가 last와 같으면 (노드 하나면) first,last를 null로 설정
- 하나 이상의 노드가 있으면 큐의 first를 first.next의 노드로 설정
- 길이 하나 감소
- 그리고 제거한 노드의 값 반환

## BIG O of QUEUES

삽입과 제거가 상수시간이 되는게 큐에서 젤 중요함

스택과는 다르게 배열을 큐 용도로 사용하면 상수시간이 나오지 않는 것을 꼭 기억하자

- Insertion - O(1)
- Removal - O(1)
- Searching - O(N)
- Access - O(N)

## QUEUES Recap

- FIFO
- 큐는 줄서는 것 과 같음 맨앞에 선사람이 제일 먼저 나옴
- JS에서는 지원안해줌 ㅋ

# 트리(Tree)

- 연결리스트처럼 노드로 이루어진 데이터 구조
  - parent, child구조가 있음
- List: linear, Trees: Non-linear
- 다르게 생각해보면 Singly Linked List는 트리의 특별한 케이스중 하나라고 보면 됨.
- 트리는 모든 노드가 루트에서 멀어지는 방식(같은 레벨에서 서로 연결되거나 하면 안됨→그러면 그래프됨 ㅎ)

## 트리용어

- Root: 트리에서 가장 상위 노드
- Child: 루트에서 멀어지는 방향으로 연결된 노드
- Parent: Child의 반대개념
- Siblings: 같은 Parent Node를 가진 노드
- Leaf(마지막 노드): Children이 없는 노드
- Edge(간선): 한 노드에서 다른 노드로 향하는 화살표

## 트리 사용처

- HTML, DOM
- 네트워크 라우팅
- 추상구문트리(프로그래밍 언어 구문을 보여주는 방법 중 하나)
- AI(결정트리)
- OS의 폴더(모두 서열이 있음 ㅎ)
- JSON

# 이진트리(Binary Tree)

- 모든 부모노드(parent node)는 최대 2개의 자식 가짐(0,1,2개의 자식이 가능하단말)

## 이진 탐색트리(Binary Search Tree)

- 모든 부모노드(parent node)는 최대 2개의 자식 가짐
- 부모 노드보다 작은 값은 모두 좌측 자식 트리로 , 큰값은 우측 자식 트리로

## 이진탐색트리 검색

- 좌 우로 크기를 통해 나뉘어져 있어 매번 비교시에 탐색을 해야하는 숫자가 절반으로 줄어들 수 있음(이진탐색의 원리를 생각해보자)

## 이진검색트리 뼈대(Skeleton)

```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
}
```

## Insert 메서드

새로운 노드를 위치에 맞게 삽입

## Inserting pseudo code

- 받은 값으로 노드 생성
- 루트부터 시작
  - 루트가 이진탐색트리에 있는지 없는지 확인
    - 없으면 root에 해당 노드 할당
  - 있으면 새로운 노드의 값이 현재 루트보다 큰지 작은지 판별
    - 크면
      - right 속성에 노드가 있는지 확인
      - 있으면 .right 로 넘어가서이 과정을 반복
      - 없으면 새로운 노드를 right속성으로 추가해줌
    - 작으면
      - left 속성에 노드가 있는지 확인
      - 있으면 .left로 넘어가서이 과정을 반복
      - 없으면 새로운 노드를 left속성으로 추가해줌
- 끝나면 전체 이진탐색트리 반환

```javascript
insert(value){
    const newNode = new Node(value);
    if(!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while(true){
      if(value === current.value) return undefined;
      if(value < current.value) {
        if(!current.left){
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if(value > current.value) {
        if(!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
```

## contains 메서드

해당 값을 가진 노드가 트리에 있는지 확인

## Contains pseudo code

- 루트에서 시작
  - 루트 없으면 탐색 끝
  - 루트 있고 찾는 값과 동일하면 return false
  - 루트 있고 루트의 값과 찾는값이 다를때
    - 찾는 값이 루트의 값 보다 크면 오른쪽으로 이동
    - 작으면 왼쪽으로 이동
    - 찾으면 리턴 true
    - 못찾으면 위의 절차 반복
    - 그래도 없으면 return false

```javascript
contains (value){
	if(!this.root) return false;
	let current = this.root,
			found = false;

	while(current && !found){
		if(value < current.value){
			current = current.left;
		}else if(value > current.value){
			current = current.right;
		}else {
			return true;
		}
	}

	return false;
}
```

## BIG O Of BST

- Insertion : O(log N)
- Searching: O(log N)
- Worst : 한쪽으로만 쏠려있는 연결리스트 같은 이진검색트리 같은경우에는 O(N)이 걸리기 마련임(각 레벨마다 처리하는 개수가 줄어들 수가 없기 때문)
  - 루트를 재 정렬하면 가능해지기도 하지만 이런경우에는 그냥 다른 자료구조를 사용하는것도 좋음

# 트리순회(Traversing A Tree)

크게 두가지 방식이 있음

- Breadth-first Search(너비 우선 탐색)
  - InOrder(정위순회) - 아래로 내려간 다음에 올라옴
  - PreOrder(전위 순회) - 루트부터 내려감
  - PostOrder(후위 순회) - 아래로 내려간 다음에 각 레벨 체우고 올라옴
- Depth-first Search(깊이 우선 탐색)

## BFS(너비 우선 탐색)

같은 레벨에 있는 노드 우선 탐색 → 자식 노드를 보기전에 형제노드를 먼저 다 보는 것

### Steps

- 방문한 노드들을 담을 큐를 만들어서(배열 쓰던 징) 변수 선언
- 함수 종료 후 반환할 방문한 순서를 가질 visited변수를 만들어줌
- 루트노드를 큐에 넣어줌
- 큐에 무언가가 있다면 계속 루프를 돌릴 거임
  - 그리고 큐에서 dequeue를 함. (배열인 경우 shift)
    - dequeue한 노드를 visited에 추가해줌
    - 그리고 해당 노드에 왼쪽값이 있는지 확인한 뒤 있다면 큐에 넣어줌
    - 그리고 오른쪽값 있는지 확인한 뒤 있다면 큐에 넣어줌
  - 루프가 끝난 다음 모든 값을 저장한 visited변수를 출력

```jsx
BFS(){
	let data = [],
			queue = [],
			node = this.root;

	queue.push(this.root);

	while(queue.length){
		node = queue.shift();
		data.push(node.value);
		if(node.left) queue.push(node.left);
		if(node.right) queue.push(node.right);
	}
	return data;
}
```

## DFS(깊이 우선 탐색)

모든노드를 방문하거나 순회할때 형제 노드로 넘어가기 전에 수직으로 트리의 끝까지 내려감(트리의 맨아래에 도달할때까지 내려감)

## Pre-order(전위 탐색)

노드를 방문하고 왼쪽 전체 노드를 먼저 방문하고 오른쪽을 방문하며 순회하는 것임

### Steps

- 순환형으로 만드는걸 추천(재귀)
- 방문할 노드값을 담을 배열 변수를 선언
- root노드를 배열 변수에 넣음
- helper함수(traverse)를 만들어서 노드 인수를 입력받을 것임
  - 노드 인수의 값을 방문할 노드값을 담을 배열변수에 담음
  - 해당 노드 인수의 left 속성이 있으면 helper함수를 left속성의 노드와 같이 호출
  - right 속성이 있으면 helper함수를 right속성의 노드와 같이 호출
- helper함수를 current(처음은 루트겠지)와 함께 호출
- 방문할 노드값을 담은 리스트 변수를 반환

```jsx
DFSPreOrder(){
	const data = [];

	const traverse = (node) => {
		data.push(node.value);
		if(node.left) traverse(node.left);
		if(node.right) traverse(node.right);
	}

	traverse(this.root);
	return data;
}
// [10, 6, 3, 8, 15, 20]
```

## Post-order(후위 탐색)

왼쪽 먼저 다 방문하고 오른쪽 다 방문하고 노드 방문

### Steps

- 순환형으로 만드는걸 추천(재귀)
- 방문할 노드값을 담을 배열 변수를 선언
- root노드를 배열 변수에 넣음
- preOrder함수(helper함수)를 만들어서 노드 인수를 입력받을 것임
  - 해당 노드 인수의 left 속성이 있으면 helper함수를 left속성의 노드와 같이 호출
  - right 속성이 있으면 helper함수를 right속성의 노드와 같이 호출
  - 노드 인수의 값을 방문할 노드값을 담을 배열변수에 담음
- helper함수를 current(처음은 루트겠지)와 함께 호출
- 방문할 노드값을 담은 리스트 변수를 반환

```jsx
DFSPostOrder (){
	const data = [];

	const traverse = (node) => {
		if(node.left) traverse(node.left);
		if(node.right) traverse(node.right);
		data.push(node.value);
	}
	traverse(this.root);
	return data;
}

```

## In-order(중위 탐색)

왼쪽 먼저 다 방문하고 노드 방문하고 오른쪽 방문

### Steps

- 순환형으로 만드는걸 추천(재귀)
- 방문할 노드값을 담을 배열 변수를 선언
- root노드를 배열 변수에 넣음
- preOrder함수(helper함수)를 만들어서 노드 인수를 입력받을 것임
  - 해당 노드 인수의 left 속성이 있으면 helper함수를 left속성의 노드와 같이 호출
  - 노드 인수의 값을 방문할 노드값을 담을 배열변수에 담음
  - right 속성이 있으면 helper함수를 right속성의 노드와 같이 호출
- helper함수를 current(처음은 루트겠지)와 함께 호출
- 방문할 노드값을 담은 리스트 변수를 반환

```jsx
DFSInOrder (){
	const data = [];
	const traverse = (node) => {
		if(node.left) traverse(node.left);
		data.push(node.value);
		if(node.right) traverse(node.right);
	}
	traverse(this.root);
	return data;
}
```

## BFS ? DFS 언제 사용?

T.C는 기본적으로 BFS, DFS모두 같음 (모든 노드를 결국 다 방문하므로)

근데 공간 복잡도(S.C) 같은경우 굉장히 레벨이 높은(그러니까 깊이가 깊은 트리)트리 라면 BFS의 경우 Q에 동일레벨의 노드들을 다 저장해놓아야 하는데, 레벨이 깊어지면 질 수록 저장해야 할 노드들이 많아짐(결국 사라지겠지만). 그래서 공간 복잡도가 커지게 됨

반대로 DFS를 하게 되면 콜스택에 각 깊이의 하나씩의 노드만 저장하면 됨.

결론은 깊이보다 넓이가 큰 트리의 경우에는 깊이 우선탐색이 더 적은 공간을 점유하게 됨

### 탐색의 다른종류는 언제쓰냐(전위,중위,후의)

이진 탐색트리라고 가정

이진 탐색트리에서 InOrder(중위 탐색)을 하게 되면 오름차순으로 값이 나오게 될 것임

PreOrder(전위탐색)의 경우 트리를 복사하거나 평탄화해서 저장하고 싶은 경우 사용할만 함

## Recap Of Tree

- 트리는 비선형구조고 루트와 자식노드를 가짐 🙂
- 이진 트리는 어떤타입의 값이든 다 가질 수 있으면 최’대’ 두개의 자식을 가짐
- 이진 ‘탐색’트리는 이진트리의 특정 버전이며 왼쪽 자식 노드가 부모노드보다 작고 오른쪽 자식노드가 부모노드보다 큰 경우 임ㅇ

# Tree Traverse Sample

```jsx
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (value > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        return undefined;
      }
    }
  }

  contains(value) {
    if (!this.root) return false;
    let current = this.root,
      found = false;

    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }

    return false;
  }

  BFS() {
    let data = [],
      queue = [],
      node = this.root;

    queue.push(this.root);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  DFSPreOrder() {
    const data = [];

    const traverse = (node) => {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };

    traverse(this.root);
    return data;
  }

  DFSPostOrder() {
    const data = [];

    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    };
    traverse(this.root);
    return data;
  }

  DFSInOrder() {
    const data = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

//     10
//   6   15
// 3  8    20
tree.DFSPreOrder(); // [10, 6, 3, 8, 15, 20]
tree.DFSPostOrder(); // [3,8,6,20,15,10]
tree.DFSInOrder(); // [3,6,8,10,15,20]
```

# Binary Heap(이진힙)

이진 탐색 트리와 굉장히 유사함

## 최대 이진힙

- 부모노드가 항상 자식노드보다 큰 값을 가짐
- 왼쪽 오른쪽 상관없이 한레벨 아래 있는 자식 노드는 부모노드보다 값이 작아야함
- 왼쪽 오른쪽 순서가 없음 그냥 부모노드보다 자식노드가 작으면 됨

### 조건

- 각 부모노드는 최대 두개의 자식 노드를 가짐
- 부모노드의 값이 언제나 더 큼
- 형제 노드 사이에서는 대소의 조건 이 없음(특별한 순서가 없음)
- 이진힙은 가능한한 간단해야함. 부모노드와 자식노드의 대소관계만 다루기에 추가 될 때마다 자식노드가 가득 찰 것 임(이진탐색트리의 좌우 대소관계를 따지기에 자식노드가 비어있음에도 다른 부모노드 밑에 자식노드가 생기는 경우가 발생할 수 있으니까 이걸 말하는 듯)
- 왼쪽부터 추가해야함

## 최소 이진 힙

- 최대 이진힙과 반대의 조건 생각하면 됨

## 힙이 왜 필요한가

- 이진 힙은 우선순위 큐를 만들기 위해 자주 사용 됨.
  요소를 추가 제거하면서 우선순위를 추적하기 위해서 우선순위 큐가 사용 됨. 각 요소에 대해 중요한 정도를 부여해서 중요한 정도에 따라 큐안의 적절한 장소에 배치하는 것 임.
- 그래프 탐색에서도 힙은 보조용도로 많이 사용되곤 함

### 배열에서 힙 자식 찾기

제일 부모 노드, 왼쪽 자식, 오른쪽 자식 노드 순으로 배열에 넣는다고 가정했을 때

왼쪽 자식 노드: 2\* 부모인덱스 + 1,

오른쪽 자식 노드: 2\* 부모인덱스 + 2

이러면 이제 특정 인덱스를 통해 부모 인덱스를 찾을 수 있게 됨

부모인덱스 : Math.floor((특정인덱스 - 1)/2);

- 0.5단위 인덱스는 없으니까 :)

### Max Heap Skeleton

```jsx
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }
}
```

### Insert

- 마지막에 넣고
- Bubble UP(부모노드와 삽입한 노드 위치를 바꿈)을 통해서 값에 알맞는 적절한 위치를 찾을 때 까지 위로 이동 시킴

### Insert pseudo code

- 배열의 끝에 값을 추가
- Bubble up
  - 마지막에 넣은 값의 부모를 찾아봄
  - 부모 인덱스의 값과 해당 인덱스의 값을 비교함
    - 추가한 값이 더 크면 값을 바꿈
      - 바꾸고 난 뒤 부모인덱스 값을 다시 설정해 줌
    - 아니면 끝

```jsx
bubbleUp() {
	let idx =	this.values.length - 1;
	const element = this.values[idx];
	while(idx > 0){
		let parentIdx = Math.floor((idx-1)/2);
		let parent = this.values[parentIdx];

		if(element <= parent) break;

		this.values[parentIdx] = element;
		this.values[idx]  = parent;
		idx = parentIdx;
	}
}

insert(element) {
	this.values.push(element);
	this.bubbleUp();
}
/*
[41,39,33,18,27,12,55]
 0   1  2  3  4  5 new
*/
```

### Removing from a Binary Heap(Extract Max)

- 루트를 제거함
- 최근 추가된(아마 제일 밑에 있을) 노드를 루트 위치로 끌어올림
- 최대 또는 최소 이진 힙 등의 조건에 맞도록 조정을 해줌(Sink Down)

### Removing from Binary Heap(Extract Max) pseudo code

- 리스트에서 pop시켜서 제거할 값을 리턴 시켜줌
- 첫째 값을 마지막값이랑 위치를 바꿈
- sinkdown
  - 부모 인덱스는 0 부터시작(root)
  - 왼쪽 자식 인덱스: 2\* 부모인덱스 + 1
  - 오른쪽 자식 인덱스: 2\* 부모인덱스 + 2
  - 왼쪽 또는 오른쪽 자식이 부모보다 크면 부모와 자식 위치를 바꿈
    - 둘다 클때는 더 큰쪽과 변경
    - 부모인덱스를 바뀐 자식 인덱스로 업데이트 해주고
    - 이 과정을 두 자식이 부모보다 작을 때 까지 반복
    - root를 반환

```jsx
sinkDown(){
	let idx = 0;
	const length = this.values.length;
	const element = this.values[0];

	while(true){
		let leftChildIdx = 2 * idx + 1,
		rightChildIdx = 2 * idx + 2;
		let leftChild, rightChild;
		let swap = null;

		if(leftChildIdx < length){
			leftChild = this.values[leftChildIdx];
			if(leftChild > element){
				swap = leftChildIdx;
			}
		}

		if(rightChildIdx < length){
			rightChild = this.values[rightChildIdx];
			if((swap === null && rightChild > element) ||
				 (swap !== null && rightChild > leftChild)) {
				swap = rightChildIdx;
			}
		}
		if(swap === null) break;
		this.values[idx] = this.values[swap];
		this.values[swap] = element;
		idx = swap;
	}
}

extractMax(){
	const max = this.values[0];
	const end = this.values.pop();
	if(this.values.length > 0) {
		this.values[0] = end;
		this.sinkDown();
	}
	return max;
}
```

### 최대 이진 힙 Summary

```jsx
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  insert(element) {
    this.values.push(element);
    this.bubbleUp();
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1,
        rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  extractMax() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }
}
const maxHeap = new MaxBinaryHeap();
maxHeap.insert(55);
maxHeap.insert(44);
maxHeap.insert(77);
maxHeap.insert(1);
maxHeap.insert(100);
maxHeap.values; //[ 100, 77, 55, 1, 44 ]
maxHeap.extractMax(); // 100
maxHeap.extractMax(); // 77
```

## 우선순위 큐 (Priority Queue)

- 각 요소가 그에 해당하는 우선순위를 가지는 데이터 구조
- 더 높은 우선순위를 가진 요소가 더 낮은 우선순위를 가진 요소보다 먼저 처리 됨.
- 우선순위 큐와 힙은 별개임.우선순위 큐는 추상적 개념이고 힙만이 아니라 리스트나 배열로도 만들수는 있음
  - 단지 리스트나 배열인 경우 회문 전체를 돌아 우선순위를 파악해줘야하므로 비효율적일 뿐
    - 우선순위 파악(탐색)에 O(N)이나 걸림
      - 배열 제거를 가정하면 제거에도 최악의 경우 O(N)이 걸릴 수도 있음(인덱스 다시 재정렬해야하니까)
  - 힙은 삽입과 제거 모두 O(N)을 가지기에 굉장히 좋음

### 우선순위 큐는 어디에 쓰이려나

컴퓨터의 프로세스를 생각해보자

컴퓨터 실행 시 여러가지 프로세스가 돌아가는데 여기서 우선순위가 있는 것이 먼저 돌아가게 되는 것(unix 의 nice를 생각하면 됨)

```jsx
class Node {
  constructor(val) {
    this.val = val;
    this.priority = null;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
}
```

최대 이진힙이 아닌 최소이진힙(낮은 숫자가 높은 우선순위를 가지는 현상을 만들어보기 위해)을 사용해서 우선순위 큐를 구현해 볼 것.

### 우선순위 큐 pseudo code

- 최소 이진힙을 사용 - 낮은 숫자가 높은 우선순위를 가짐
- 각 노드는 val, priority 속성을 가짐. priority 속성을 통해 힙을 구성할 것임
- Enqueue 메서드는 값을 인자로 받고 새로운 노드를 힙에 추가한 다음 최소이진힙에 맞게 정렬을 할 것임
- Dequeue 메서드는 root element를 제거하고 제거한 요소를 반환할 것이며 최소이진힙을 힙을 우선순위에 맞게 정렬할 것임

```jsx
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element.priority >= parent.priority) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1,
        rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
}

let ER = new PriorityQueue();
ER.enqueue('common cold', 5);
ER.enqueue('gunshot wound', 1);
ER.enqueue('high fever', 4);
ER.enqueue('broken arm', 2);
ER.enqueue('glass in foot', 3);
ER.dequeue(); // gunshot wound
ER.dequeue(); // broken arm
/*
우선순위큐의 삽입과 제거는 O(LogN)을 따르게 됨(트리잖여)
*/
```

### 이진 힙의 Big O

이진힙은 삽입과 삭제 성능 좋음 ㅎㅅㅎ

이진 힙 구조를 생각해보면 레벨을 내려갈때마다 2배의 노드가 생기는 것임

이진힙은 왼쪽부터 모든 걸 채우고 다 채워야 다음레벨로 넘어감.

정렬 시 각 레벨의 부모노드와만 값을 비교하기 때문에 레벨만큼만 비교하게 되는 것임

삽입과 제거만 하는 것은 O(1)을 가지게 되고 나머지는 정렬이니 O(LogN)이 되는 것

그래서 정확히 2를 밑으로 가지는 Log가 되는 것.

이진 탐색트리와 비교 시 이진탐색트리는 수틀리면 단일연결리스트와 같은 모양이 나올 수도 있게 되어 worst케이스로 모두 비교해야하는 경우가 생기지만 이진 힙은 어쨌든 왼쪽부터 다 채워야하므로 그런 경우가 생길 수 없음.

탐색의 경우 각 형제노드들 끼리 우선순위가 없기에 확실히 찾을 때 전체를 다 봐야할 수도 있음.

- Insertion: O(LogN)
- Removal: O(LogN)
- Search: O(N)

# Hash(해시)

- 해시테이블은 키-값 의 쌍을 저장하는 데 사용 됨
- 해시테이블의 키는 따로 인덱스를 가지지 않음(순서가 없다는 것임)
- 배열과 다르게 값찾기, 추가, 제거가 모두 배열보다 빠름!!

## Hash function

- 해시함수는 수천,수백만 자든 임의의 크기를 가지는 데이터를 입력하면 정해진 크기의 데이터를 출력하는 함수임 (입력값을 측량해서 정해진 수만큼의 데이터를 반환)

### Good Hash functions condition

- 빨라야함(상수시간이면 더 좋음)
- 배열내에 일관된 방식으로 분배를 해서 다른 것들과 겹치지 않게 해야함
- 결정론적이어야함(Always same input and same output)

## 해시함수 만들어보기

- 문자열만 고려해서 문제임
- 다른 값을 넣어도 같은 값이 나올 수도 있는게 문제임(pink,10), (blue,10);
  - 랜덤성이 생김 이러면 같은 값 나온게 배열에 똑같이 들어가버리니까 겹쳐지므로 ..
- 상수시간이 아님 ( 문자열 다 순회 하므로 O(N)이 됨)

```jsx
const hash = (key, arrayLen) => {
  let total = 0;
  for (let char of key) {
    //알파벳 순서 만들기
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
};
```

### 해시 함수 문제점 개선해보기

- 상수시간 개선을 위해 Math.min을 이용해서 100글자가 넘는 글자에서도 걍 100글자로 고정을 시켜버림(상수시간 가능)
- 해시 함수는 대부분 소수를 사용함
  - 가능한 데이터를 펼쳐놓고 다시 빨리 가져오고 싶어서 소수를 사용해서 최대한 펼치는 것이라고 함..
    - 소수는 자기자신과 그 수 말고는 안나눠지니 충돌 확률이 적다나 뭐래나 그렇다함

```jsx
const hash = (key, arrayLen) => {
  let total = 0;
  let WEIRD_PRIME = 31;
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
};
```

### 충돌문제를 해결해보자

- Seperate chaining(개별 체이닝)
  - 같은 장소에 여러 데이터를 저장할때 배열이나 연결리스트 같은 다른 자료구조를 얹어서 데이터 전체를 저장할 배열의 해당 인덱스에 배열을 만들어 내부 배열에 여러가지를 공동저장을 시키는 것임
    - 내부 배열에 값이 많으면 시간이 더 걸리게 됨
    - 테이블(저장하려는 배열)의 길이보다 더 많이 저장할 수 있게 됨
- Linear probing(직선 탐색법)
  - 각 위치에 데이터하나만 저장한다는 규칙을 지키기 위해 저장하려는 배열의 인덱스에 값이 있으면 다음으로 비어있는 인덱스를 찾아 저장하는 방법
    - 저장하려는 배열의 크기가 늘어나야하는 경우가 발생함.

## Hash table Class

- set
  - 키랑 값을 받음
  - 키를 해싱 함
  - separate chaining 을 통해 해시테이블 배열에 키랑 값을 저장함
- get
  - 키를 받음
  - 키를 해싱 함
  - 해싱한 키 값을 통해 해당하는 배열의 인덱스로 가서 값을 가져옴
    - 하나 이상이 저장되어 있는 인덱스면 해당 인덱스의 중첩 배열에 저장되어있는 것을 회문돌면서 찾아옴
- Keys
  - 테이블에 있는 모든 키를 포함한 목록을 출력함
- Values
  - 테이블에 있는 모든 값을 포함한 목록을 출력함
    - 겹치는 값들을 어떻게 보여줄것인지가 관건

```jsx
class HashTable {
  constructor(size = 17) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(100, key.length); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key);
    //do seprate chaining
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    //대부분의 언어라면 같은 키를 가지는 경우 추후에 들어온 데이터로 업데이트가 되는 로직이 되어야함
    //현재는 처음 들어온 값을 그대로 유지하고 중첩 배열에 동일 키값의 다른 값을 가진 배열을 넣어줌
    //get을 사용시 처음 들어온 데이터만을 계속 반환하고 있게 됨
    //나중에 필요하면 로직 변경해도 될듯
    this.keyMap[index].push([key, value]);
  }

  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
}
```

### Big O Of Hash Tables

Average Case

- Insert: O(1)
- Deletion: O(1)
- Access: O(1)

Worst Case

해시함수가 쓰레기라서 배열에 하나의 인덱스에만 값이 계속 들어가는 경우가 해당될 수 있음.

그러면 삽입 제거 접근 모두에서 하나의 인덱스에 모든 데이터를 회문해야 하는 상황이 생겨 O(N)이 될 수도 있음.

- Insert: O(N)
- Deletion: O(N)
- Access: O(N)

# 그래프(Graph)

- 유한하고 변할 수 있는 꼭지점이나 노드나 점들의 집합으로 구성된 데이터 구조
- 쉽게 생각하면 Nodes(노드) + Connections(연결)을 모은 것을 그래프라고 보면 됨

## 그래프 사용 처

- 거의 대부분
  - Social Networks
  - 위치/ 지도
  - 라우팅 알고리즘
  - 길찾기
  - 제품 추천
  - 파일시스템 최적화 등 ..

## 용어

- Vertex: 정점 === 노드
- Edge : 노드(정점)사이의 연결
  - 트리는 하나의 노드에서 다른 노드로 갈려면 하나의 경로만 존재해야 함
- Weighted/ Unweighted: 시각적으로 정점사이에 거리가 기재되어 있는 경우의 여부
  - Edge에 가중치가 있는 경우라고 생각하면 됨
- Directed/ Undirected: 정점사이에 방향이 할당되어 있는 경우의 여부
  - Undirected: 양극/음극이 없음(양방향 연결인 경우 B→A 가능, A→B 가능)
    - 페북 팔로우 요청을 생각해보면 됨(수락하면 서로의 페이지 보기 가능)
  - Directed: A→B 가능 B→A불가능과 같이 양방향 연결이 아닌 경우(간선에 방향이 부여됨)
    - 인스타그램 팔로우를 생각해보면 보고 싶은 사람만 팔로우해서 보게 됨

## 그래프 모델링

실제 정점(Vertex)들과 연결(Edge)을 저장한다는 것이 중요하다는 생각을 가져보자

### 1. 인접 행렬 방법(Adgacency Matrix)

- 연결된 부분들은 1로 연결안된 부분들을 0으로 간단하게 생각하자(boolean등으로 표현해도 됨)
- 이차원 행렬 생각하면 됨

```jsx
/*A B C D E F*/
/*A*/ [
  [0, 1, 0, 0, 0, 1],
  /*B*/ [1, 0, 1, 0, 0, 0],
  /*C*/ [0, 1, 0, 1, 0, 0],
  /*D*/ [0, 0, 1, 0, 1, 0],
  /*E*/ [0, 0, 0, 1, 0, 1],
  /*F*/ [1, 0, 0, 0, 1, 0],
];
```

### 2. 인접 리스트 방식(Adgacency List)

- 이차원 배열을 써서 각 인덱스가 각 노드의 값을 의미하고
  - 해당 노드가 연결되어있는 노드의 인덱스를 중첩 배열로 넣어주는 방식

```jsx
[
  [1, 5],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 0],
];
```

- 숫자가 아닌 자의적인(이름 문자열 등)인 정점 값을 가진 경우 해시테이블을 사용해서 Key, Value 데이터구조로 가면 됨
  ```jsx
  {
  	A: ["B", "F"],
  	B: ["A", "C"],
  	C: ["B","D"],
  	D: ["C","E"],
  	E: ["D", "F"],
  	F: ["E", "A"]
  }
  ```

### 두가지 방식의 차이점 & BIG O

차이점

| 비고      | Adgacency Matrix                            | Adgacency List                                  |
| --------- | ------------------------------------------- | ----------------------------------------------- |
| 메모리    | 더 많은 공간을 사용함(퍼져 있는 그래프에서) | 비교적 적은 공간을 사용함(퍼져 있는 그래프에서) |
| 간선순회  | 모든 간선을 순회하는 것이 비교적 느림       | 모든 간선을 순회 하는 것이 비교적 빠름          |
| 간선 찾기 | 특정간선을 찾는 것이 비교적 빠름            | 특정 간선을 찾아내는 것이 비교적 느림           |

Big O

- V: 정점 개수(절대값)
- E: 간선 개수(절대값)

| Operation                | Adgacency Matrix | Adgacency List |
| ------------------------ | ---------------- | -------------- |
| Add Vertex(정점 추가)    | O(V^2)           | O(1)           |
| Add Edge(간선 추가)      | O(1)             | O(1)           |
| Remove Vertex(정점 제거) | O(V^2)           | O(V+E)         |
| Remove Edge(간선 제거)   | O(1)             | O(E)           |
| Query                    | O(1)             | O(V+E)         |
| Storage                  | O(V^2)           | O(V+E)         |

차지하는 공간 때문에 인접리스트를 사용하는 케이스가 많을 것.

대부분의 실제 데이터들이 노드의 개수 정점의 개수는 많지만 서로 다 연결되어 있지 않은경우가 더 많음.

그래서 Matrix방식으로 만들면 연결되지 않은것도 중첩배열로 보여주기에 너무 쓸데 없이 많은공간을 사용할 수도 있게 됨.

만약 데이터가 집약적이고 대부분 연결되어 있다면 Matrix방식이 좋을 것.

## Graph Class

## Skeleton

무방향(양방향) 그래프 + 인접리스트 방식을 사용할 것임.

```jsx
class Graph {
  constructor() {
    this.adjacencyList = {};
  }
}
```

## Add Vertex method

- 정점의 이름을 인자로 받고
- 이 이름을 정점의 이름으로 정하고 인접리스트의 키로 입력하게 됨
  - 값은 빈 배열로 정하면 됨.

```jsx
addVertex(vertex) {
	if(this.adjacencyList[vertex]) return "Existing Vertex"
	this.adjacencyList[vertex] = [];
}
```

## Add Edge method

- 두개의 인수를 받을 것임(Vertex1, Vertex2)
- adjacencyList에서 vertex1의 키를 찾아서 vertex2를 그 배열에 넣어주고
  - vertex2의 키를 찾아서 값에 vertex1의 키를 찾아 넣어주면 됨

```jsx
addEdge(v1, v2) {
	if(!this.adjacencyList[v1] || !this.adjacencyList[v2]){
		 return "There is no Vertex";
	};
	if(this.adjacencyList[v1].includes(v2)) return "Already Connect";
	this.adjacencyList[v1].push(v2);
	this.adjacencyList[v2].push(v1);
}
```

## Remove Edge Method

- 두개의 인수를 받을 것임(Vertex1, Vertex2)
- V1에서는 V2를 제외한 배열들을 다시 부여하고 V2도 똑같이 함
- 에러핸들링은 건너뛴다고 함

```jsx
removeEdge(vertex1, vertex2) {
	if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]){
		 return "There is no Vertex";
	};
	this.adjacencyList[vertex1] = 	this.adjacencyList.filter((v) => v !== vertex2);
	this.adjacencyList[vertex2] = 	this.adjacencyList.filter((v) => v !== vertex1);
}
```

## Remove Vertex

- 지우고 싶은 Vertex 이름 인자로 받음
- 회문돌면서 다른 Vertex의 배열에서 모두 이 이름을 다 지워주면 됨
  - removeEdge 함수를 활용할 것임
  - 마지막으로 adjacencyList에서 해당 Vertex키를 삭제해주면 됨

```jsx
removeEdge(vertex){
	if(!this.adjacencyList[vertex]){
		 return "There is no Vertex";
	};

	while(this.adjacencyList[vertex].length) {
		//무방향(양방향) 그래프라 이렇게 가능
		const adjacentVertex = this.adjacencyList[vertex].pop();
		this.removeEdge(vertex, adjacentVertex);
		delete this.adjacencyList[vertex];
	}
}
```

## 그래프 순회(Graph Travesal)

- 루트가 존재하는 트리와는 다르게 그래프에서는 순회를 시작하는 지점을 임의로 정해줘야 함.

## 그래프 순회 사용처

- 토렌토 같은 웹사이트(Peer to Peer networking), 웹 크롤러, 가장 가까운것 찾기 또는 추천
- 최소거리 길 찾기
  - GPS, 미로찾기, AI

## DFS

- “Backtracking”을 하기 전까지 최대한 아래로 내려가며 탐색하는 것.
- 전위, 후위, 정위가 이진트리탐색시 에는 있었음.
- 형제를 먼저 탐색하는게 아니라 자식노드를 먼저 탐색함
- 루트는 그리기에 따라 보기 순회를 확인하기 힘들 수도 있지만 처음시작점(루트)에서 멀어지는 방식으로 이해하면 편함
  - 인접점을 따라가고 따라가서 길이막힐때 까지 가는것임
    - 막혀있으면 그 전으로 돌아와 방문하지 않은 것을 다시 방문

예시

```jsx
{
	"A": ["B","C"],
	"B": ["A","D"],
	"C": ["A","E"],
	"D": ["B","E","F"],
	"E": ["C","D","F"],
	"F": ["D","E"],
}
//[A,B,D,E,C,F]
```

알파벳 순으로 방문한다고 가정해보자

A먼저 방문했다고 치고 → 인접점은 C, B가 있음 →B먼저 방문 → B의 인접점은 A,D가 있음 → A는 이미 방문했으므로 D로 방문 → D는 B,E,F의 인접점을 가지는데 B는 이미 방문했으므로 E로 감 → E는 C,D,F의 인접점이 있고 D는 이미 방문했으므로 C로 방문 → **C의 인접점은 모두 방문 → E로 다시 돌아와서 → E에서 미방문한 F로 방문**

### Recursive DFS pseudo

```jsx
DFS(vertex):
		if vertex is empty
			return (this is base case)
		add vertex to results list
		mark vertex as visited
		for each neighbor in vertex's neigbor:
		if neighbor is not visited:
			recursively call DFS on neighbor
```

- 시작점의 노드를 인자로 받음
- 빈 리스트, 배열을 만들어 최종결과를 저장 그리고 마지막에 뱐환
- 정점을 저장할 수 있는 방문객체를 만듦(방문확인)
- 정점(vertex)를 입력하는 DFS함수(helper function)를 만듦
  - 정점이 비어있으면 걍 리턴시킴(끝냄)
  - 입력한 정점을 방문객체에 넣어 방문표시를 해주고 결과 배열에 방문한 정점을 넣어줌
  - 해당 정점의 모든 방문하지 않은 인접점에 대해 DFS함수(helper function)를 이용해 재귀를 돌림
- DFS함수를 실행함(helper function)
- 결과 배열 or 리스트를 반환함

### Recursive DFS

```jsx
depthFirstRecursive(start) {
	const result = [];
	const visited = {};
	const adjacencyList = this.adjacencyList;

	const dfs = (vertex) => {
		if(!vertex) return null;
		//방문처리
		visited[vertex] = true;
		//방문결과 배열에 담음
		result.push(vertex);
		//해당 정점과 연결된 정점들에 방문하지 않은 것들은
		//재귀를 통해 방문처리를 하게 만듦
		adjacencyList[vertex].forEach((neighbor)=>{
			if(!visited[neighbor]) return dfs(neighbor);
		})
	}

	//재귀 시작
	dfs(start);
	//결과 반환
	return result;
}
{
	"A": ["B","C"],
	"B": ["A","D"],
	"C": ["A","E"],
	"D": ["B","E","F"],
	"E": ["C","D","F"],
	"F": ["D","E"],
}

//  A
// /  \
//B    C
//|    |
//D -- E
// \  /
//   F

//result = [A,B,D,E,C,F]
```

### Iterative DFS

```jsx
DFS-Iterative(start):
	let S be a stack //
	S.push(start)
	while S is not empty
		vertex = s.pop();
		if vertex is not labled as discovered:
			visit vertex(add to result list);
			label vertex as discovered
			for each of vertex's neighbors, N do
				S.push(N);
```

- 시작점의 노드를 인자로 받음
- 빈 리스트, 배열을(stack) 만들어 최종결과를 저장 그리고 마지막에 뱐환
- 정점을 저장할 수 있는 방문객체를 만듦(방문확인)
- start 정점을 stack에 넣고 방문처리함
- 스택이 빌때까지 while 루프를 돌림
  - stack에서 다음 정점(vertex)을 pop함
  - 정점이 방문처리 되어있지 않으면
    - 방문처리하고
    - 결과를 반환할 배열에 넣어주고
    - 그 이웃들(연결된 정점들)을 stack에 다 넣어줌
- 결과 배열(result)를 반환함

```jsx
depthFirstIterative(start) {
	const visited = {};
	const result = [];
	//시작점 넣고 방문처리
	const stack = [start];
	visited[start] = true;
	let currentVertex;

	while(stack.length) {
		currentVertex = stack.pop();
		result.push(currentVertex);
		this.adjacencyList[currentVertex].forEach((neighbor)=>{
			if(!visited[neighbor]){
				visitied[neighbor] = true;
				stack.push(neighbor);
			}
		})
	}
	return result;
}
//순환형
//["A","C","E","F","D","B"]
//재귀형
//[A,B,D,E,C,F]
//순서가 다른 이유는 작동방식이 다르기 때문 그러나 DFS를 실행한것은 똑같음
/*
Iterative 방식에서는 stack을 사용하여 push한 뒤
pop을 하기 때문에 재귀 방식과 다르게 인접 정점의
순서가 뒤집히기 때문에 다르게 됨
*/
```

## BFS

- 아래로 내려가거나 인접점의 인접점을 보게 되는 탐색
- 트리처럼 쉽게 수직 수평을 나누지는 못하지만 레벨이 존재함 → height라고 부름
- BFS는 다음 높이의 인접점을 방문하기 전에 동일 레벨의 인접점을 다 방문한다고 생각하면 됨.
- DFS의 스택 대신 BFS는 큐를 사용함

### BFS pseudo code

- start 정점을 받음
- 큐를 만들어서 start정점을 넣어줌(배열써서 메서드만 바꿔서 큐 처럼 사용)
- result배열에 넣어줌
- 정점이 방문한것을 체크할 Obj를 만들어 체크해줌
- 큐가 빌 때 까지 while돌림
- queue에서 첫번째 정점 하나 빼온 뒤 방문한 배열에 넣어줌
- 해당 정점에 있는 각 인접점(인접리스트)에 있는 모든 인접점에 대해 루핑을 돌리며 방문하지 않은 경우 방문처리 하고 결과 배열에 넣어 줌
  - 거의 dfs랑 비슷한데 queue를 쓰는걸 유의하면 될 듯.
- 맨 마지막에 result배열을 반환해줌

### BFS

```jsx
breadthFirst(start) {
	const queue = [start];
	const result =[];
	const visited = {};
	let currentVertex;
	visited[start] = true;

	while(queue.length){
		currentVertex = queue.shift();
		result.push(currentVertex);

		this.adjacencyList[currentVertex].forEach((neighbor)=> {
			if(!visited[neighbor]){
				visited[neighbor] = true;
				queue.push(neighbor);
			}
		})
	}
	return result;
}
/*
{
	"A": ["B","C"],
	"B": ["A","D"],
	"C": ["A","E"],
	"D": ["B","E","F"],
	"E": ["C","D","F"],
	"F": ["D","E"],
}
*/
//  A
// /  \
//B    C
//|    |
//D -- E
// \  /
//   F
//[A,B,C,D,E,F]
```

# 다익스트라 알고리즘

- 다익스트라 최단경로 알고리즘의 줄임말이고 되게 유명함
- 젤 유명한 최단경로 알고리즘 중 하나임.
- 그래프를 가로지르며 탐색을 하게 됨
- 우선순위 큐를 사용하게 됨(이진 힙을 이용한 우선순위 큐를 사용하면 됨 ㅎㅅㅎ)
- 한 슬라이드에 pseudo코드를 넣을만큼 단순하지가 못 함.
- **두 정점사이에 존재하는 최단경로를 찾는 것**

## 사용처

- GPS - 구식 최단경로 찾기(요즘은 날씨나 실제 트래픽 등등 매개변수가 훨씬 많음)
- Network Routing - 네트워크에서 데이터 가져오기 위한 최단경로
- 생물학 - 사람에게 퍼져있는 전염병 분포도 등..
- 비행 티켓 - 가장 싼 가격으로 경유해서 가는 법 등..
- 등등..

## 가중치 그래프 작성

```jsx
class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
}

const graph = new WeightedGraph();

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addEdge('A', 'B', 9);
graph.addEdge('A', 'C', 5);
graph.addEdge('B', 'C', 7);
console.log(graph.adjacencyList);
```

### 접근법

A → E로 가는 것이 요구사항이라 생각해보자

- 그래프의 각 시작점에서 각 정점마다 최단경로를 저장할 배열이 하나 필요함
- previeous Obj를 하나 만들어 최단경로로 도착할 수 있는 거쳐갈 노드를 저장할 객체가 필요함
- 방문한 순서대로 정점을 저장할 배열이 필요함

1. A에서 가장 작은 거리값을 가진 노드를 골라서 먼저 방문할 것임.
2. 그 노드로 이동한 다음 인접점을 보면서 A에서 해당 인접점까지 거리의 합을 구하고 이미 알고있는 거리값보다 더 작은경우가 있으면 더 작은값으로 업데이트 해줌

## Naive Prioirty Queue

우선순위 큐에 정점을 넣을때 마다 우선순위에 맞춰 자동정렬을 시킨 뒤

제일 작은 우선순위를 가져와서 최단경로를 보고 싶을때 deque를 이용하여 쉽게 가져오기 위해 다익스트라 알고리즘에서 사용함.

```jsx
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  //O(N*logN)
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
```

### 다익스트라 수도코드

- 시작과 끝의 정점을 인자로 받음
- distances라는 이름으로 객체를 만들고 모든 정점을 키로 두며 인접된 리스트의 값들은 Infinity로 세팅하고 시작점은 0으로 세팅함.
- distances obj를 세팅한 뒤 우선순위 큐에 각 정점을 넣어줌(이러면 dequeue시에 시작점이 제일 먼저 나옴)
- previous라는 obj를 만들고 모든 정점을 키로 가지며 값은 null로 세팅함
- 우선순위 큐가 빌때까지 루프를 돌림
  - 우선순위 큐에서 정점을 뺌
  - 뺀 정점이 인자로 받은 끝 정점과 같으면 루프 종료
  - 그렇지 않으면 우선순위 큐에서 뺀 정점의 인접점들을 계속 루프 돌림
    - 시작점부터 해당 정점까지의 거리를 계산
    - distances obj에 있는 값보다 계산된 거리가 작으면
      - 더 작은값으로 거리를 업데이트해주고
      - previous obj의 해당 정점의 key에 해당하는 value를 업데이트 해주고
      - 업데이트된 값으로 만든 정점을 enqueue 해줌

### Naive Priority Queue Solution

```jsx
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  //O(N*logN)
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end;
    let smallest;

    //초기 null값 및 Infinity 세팅
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // 우선순위 큐가 빌 때까지(방문할것이 존재하는 한 계속)
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //인접 노드(정점) 찾기
          let nextNode = this.adjacencyList[smallest][neighbor];

          //인접 노드를 포함한 새로운 거리 값 계산
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smalles distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

//Find A -> E shortest path
graph.Dijkstra('A', 'E');
//['A', 'C', 'D', 'F', 'E']
```

### Upgrade Priority Queue Solution

```jsx
class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element.priority >= parent.priority) break;

      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];

    while (true) {
      let leftChildIdx = 2 * idx + 1,
        rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }
      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }

  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return min;
  }
}

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }
  Dijkstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; //to return at end;
    let smallest;

    //초기 null값 및 Infinity 세팅
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }
    // 우선순위 큐가 빌 때까지(방문할것이 존재하는 한 계속)
    while (nodes.values.length) {
      smallest = nodes.dequeue().val;
      if (smallest === finish) {
        //WE ARE DONE
        //BUILD UP PATH TO RETURN AT END
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neighbor in this.adjacencyList[smallest]) {
          //인접 노드(정점) 찾기
          let nextNode = this.adjacencyList[smallest][neighbor];

          //인접 노드를 포함한 새로운 거리 값 계산
          let candidate = distances[smallest] + nextNode.weight;
          let nextNeighbor = nextNode.node;
          if (candidate < distances[nextNeighbor]) {
            //updating new smalles distance to neighbor
            distances[nextNeighbor] = candidate;
            //updating previous - How we got to neighbor
            previous[nextNeighbor] = smallest;
            //enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

const graph = new WeightedGraph();
graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

graph.addEdge('A', 'B', 4);
graph.addEdge('A', 'C', 2);
graph.addEdge('B', 'E', 3);
graph.addEdge('C', 'D', 2);
graph.addEdge('C', 'F', 4);
graph.addEdge('D', 'E', 3);
graph.addEdge('D', 'F', 1);
graph.addEdge('E', 'F', 1);

//Find A -> E shortest path
graph.Dijkstra('A', 'E');
//['A', 'C', 'D', 'F', 'E']
```

# 동적 프로그래밍 (Dynamic Programming)

- 재귀에 대해 잘 이해하고 어떤방식으로 호출되는지 정확히 이해해야 함
- **반복되는 하위문제(Overlapping subproblems)**, **최적 부분구조(Optimal Substructure)** 이 두가지를 잘 이해해야함
- 동적프로그래밍은 복잡한 문제를 더 간단한 하위 문제의 모음으로 쪼개서 각 하위 문제들을 풀어서 그 답을 저장하는 방식으로 문제를 해결해 나가는 방식임.
  - 몇몇 문제가 해당되는데 이를 적용하고 말고의 성능차이가 크며 Divide and conquere 와 비슷함

## 반복되는 하위 문제(Overlapping subsproblems)

- 동적 프로그래밍을 적용하기 위해서는 어떤방식으로 중첩되는 하위문제들이 존재해야 함
  - 한 문제를 더 작은 문제들로 나눌 수 있고, 그 조각들 중 일부는 재사용이 가능해야 함
    - Ex) 피보나치 수열 ⇒ fb(n) = fb(n-1) + fb(n-2) & n > 3
    - 합병 정렬의 경우도 작은 문제들로 나누어 지지만 숫자가 배열내에서 중복이되는 경우를 제외하고는 재사용이 불가능한 경우임 → 이런 경우 분할점령(divide and conquere)로 해결을 하게 됨.

## 최적 부분 구조(Optimal Substructure)

- 하위문제의 최적 해답을 통해서 더 큰 범주의 문제의 최적 해답을 구성할 수 있는 경우를 말한다.
- 단방향 가중 그래프에서 최소 경로를 구한다면
  - A→ D로 가는 최소 경로
  - A→ C로 가는 최소 경로
    - … 이걸 계속 생각해보면 최단경로가 A→B→E→C→D라고 가정할 때
      - C까지 가는 최소경로는 A→B→E→C로 생각해볼 수 있음
- Longest simple path
  - 양방향 그래프일 때 중복 방문 없이 최소거리로 도착하는 방법을 말함
  - A→C의 최소경로가 A→B→C라고 가정하고
    - C→D가 C→B→D 라면
    - A→D가 A → B → C → B → D라고 생각할 수 있음
      - 그런데 A→B→D임 양방향 그래프이기에 최적부분구조를 만들 수 없게 되는 현상이 발생 됨.
- 비행기 표를 예매할때 대구 → 서울로 가는 최저가 경로가 부산을 경유하는 표라고 가정하자.
  - 그런데 대구 → 부산으로 가는 표의 최저가는 대구 → 경산 → 부산인 표인 경우 최적 부분구조가 아니게 되는 것이다… 뭐 그렇다.

## 재귀적 예제(피보나치 수열)

반복하위문제와 최적 부분구조를 모두 가지고 있음.

아래는 재귀적 솔루션임.

```jsx
/*
Fib(n) = Fib(n-1) + Fib(n-2)

Fib(2) = 1

Fib(1) = 1
*/

function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
```

### 재귀적 예제의 Big O

숫자 하나 커질때마다 재귀 트리 개수가 2의 배수만큼 늘어나버리게 됨

Avergae: Big O (2 ^ N)

## 재귀적 솔루션 개선해보기

- 진행한 작업을 계속 진행하게 됨(fib3가 계산되어도 또 계산하기 때문…)
  - 계산했던 값을 저장하여 다시 사용한다면 개선이 될 듯.
- 다시 푼 subProblems 저장하여 다시 사용하며 계산을 하지 않게 만드는 방법을 사용할 것 임
- **예전의 값을 기억했다가 어떻게든 저장을 해서 각 하위문제를 풀 때 다시 확인을 하면 어떤가** 의 컨셉 → **메모이제이션**

## 메모이제이션

객체나 배열에 계산한 값을 저장해서 다른 계산 시 이미 해당 계산 값이 들어있나 확인하여 존재하면 가져다 쓰며 동일 계산을 다시 진행하지 않는 방법.

```jsx
function fib(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];
  if (n <= 2) return 1;

  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;

  return res;
}
```

차라리 Memo에 base케이스를 담아서 한줄을 줄일 수도 있음.

```jsx
function fib(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];

  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;
  return res;
}
```

### 메모이제이션 예제의 Big O

숫자 하나 커질때마다 재귀 트리 개수가 2의 배수만큼 늘어나버리게 되는걸 메모이제이션을 통해 재 계산을 하지 않고 값을 곧바로 반환 받을 수 있음.

이미 계산된걸 반환하는건 상수시간 임.

따라서 아래와 같음.

- Only Recursive: Big O (2 ^ N)
- **With Memoization: Big O (N)**

## 타뷸레이션

- 위 메모이제이션은 하향식으로 생각하면 됨
- 다른 방식으로 상향식도 있음. 걍 방향만 반대임 이걸 타뷸레이션이라고 함.
- 메모이제이션과 타뷸레이션이 DP에서 전략이라고 보면 됨.
- 타뷸레이션은 보통 루프와 같이 순환을 통해서 작업하게 됨.
  - 무엇이든 바닥부터 시작하면 됨.(가장 작은 하위문제를 풀고 테이블에 저장하면 됨)
- JS에서는 콜스택이 여유가 없어서 메모이제이션 방식은 스택오버플로우 문제가 발생할 가능성이 내재되어있음.
- 타뷸레이션의 경우 이 문제로부터는 자유로워짐.
  - 얘도 Big O 는 O(N)

```jsx
function fib(n) {
  //Base Case
  if (n <= 2) return 1;
  //여기 데이터 저장
  const fibNums = [0, 1, 1];
  //각 fibNums에 해당하는 값을 저장하는 것.
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }
  return fibNums[n];
}
```

# 참고강의

- [Udemy - 【한글자막】 JavaScript 알고리즘 & 자료구조 마스터클래스](https://www.udemy.com/course/best-javascript-data-structures/)

# 참고하기 좋은 사이트

- [https://visualgo.net/](https://visualgo.net/)
