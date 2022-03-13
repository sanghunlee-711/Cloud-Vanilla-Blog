---
slug: react-business-logic-2
title: 리액트에서 비즈니스 로직을 나눠보자[2 - Hooks 를 테스트 해보자]
author: Sanghun lee
date: 2022-01-18 11:33:00 +0800
categories: [FE, React]
tags: [Architecture]
math: true
mermaid: true
image:
  src: https://layer.team/wp-content/uploads/2020/04/layer-app-spot-26-best-field-data-software-revit-addin-manage.png
  width: 850
  height: 585
---

# 테스트 코드 작성해보기

이제 비즈니스로직을 모두 나누었으니 해당 비즈니스 로직에 대해서만 테스트를 진행해보자

여러 테크기업들의 블로그를 뒤적이다. [리디의 블로그](https://ridicorp.com/story/how-to-use-redux-in-ridi/)글을 가장 많이 참고하였다.

그리하여 redux-mockstore와 testing-library/react-hooks 를 이용하여 테스트를 진행했다.

우선 간단한 설명은 아래와 같다.

1. `mock-store`를 통해 실제 액션을 리듀서까지 전달하여 업데이트하는 것이 아닌 어떤 액션이 dispatching되는지 확인한다.
2. `hooks` `mocking render` 하여 필요한 메서드들을 빼와서 act 시킨 다음의 호출되는 액션을 mocking store를 통해 확인한다.
3. localState의 경우 jest mock fn을 통해 처리한다.

# Business Logic

1편에서 보았던 비즈니스 로직은 아래와 같고 `onApply` 테스트해보자.

```ts
const usePersonnelManagementComponents = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { authPhase, mainPopup, companyInfoData } = useRootState(
    (state) => state.global
  );
  const storageToken = localStorage.getItem('access_token');


  const {
    address: addressPopup,
    certificate: certificatePopup,
    personnelManagement,
  } = MAIN_POPUP;
  const { basicInfoTitle, check, origin, path } = personnelManagement;

  const onApply = (phase:phaseType, token:string) => {
    if (phase === 'logout' && !token) {
      return dispatch(setIsLoginModalVisible(true));
    }

  //When Logged In
    dispatch(
      checkBasicCompanyInfoAction({
        check: check as (keyof ICompanyInfo)[],
        domain: origin,
        path,
      }),
    );
  };

  useEffect(() => {
    if (localStorage.getItem('isPaused') === 'true') {
      localStorage.removeItem('isPaused');
      actions.onApply();
    }
  }, []);

  return {
    state: {
      mainPopup,
      storageToken,
      ...
    },
    actions: {
      onApply,
      ...
    },
  };
};

export default usePersonnelManagementComponents;
```

onApply의 구조는 간단한데 들어온 인자들에 대해서 특정조건에 따라 dispatching하는 액션이 달라지게 된다.

그래서 두가지 케이스에서 테스트를 진행할 수 있게 되고 아래와 같이 진행했다.

```tsx
describe('usePersonnel', () => {
  const setup = () => {
    const store = createMockStore();

    const { result, waitForNextUpdate } = renderHook(() => usePersonnel(), {
      wrapper: ({ children }: { children: React.ReactNode }) => (
        <Provider store={store}>{children}</Provider>
      ),
    });

    return { store, result, waitForNextUpdate };
  };

  describe('onApply', () => {
    it('토큰이 존재하고 phase가 logout인 경우 로그아웃 요청을 위한 action 호출', () => {
      const { result, store } = setup();
      const MOCK_PHASE = phaseType.logout; //enum
      const MOCK_TOKEN = 'MOCK_TOKEN';
      act(() => {
        result.current.actions.onApply(MOCK_PHASE, MOCK_TOKEN);
      });

      expect(store.getActions()).toEqual([setIsLoginModalVisible(true)]);
    });
  });
});
```

- 위와 같은 방식으로 해당 hooks를 라이브러리에 존재하는 renderHook 메서드를 활용해서 불러주고 mockStore를 만들어 action을 가져올 수 있게 하였다.
- 그리고 렌더 후 필요한 actions와 state를 가져오기 위해 `setup()` 메서드를 호출해와서 필요한 액션을 불러오고 그 결과에 알맞는 결과값이 도출되는지 확인한다.

위 예시로는 굉장히 간단해보이지만 만약 조건이 많고 복잡한 로직이 컴포넌트 내부에 내재되어있는 상황이라면 충분히 유용하게 이러한 hooks를 통한 테스트를 활용할 수 있을 것 같다.

하지만 해당테스트 샘플을 자세히 보면 문제가 있다고 생각이 들 것이다.

장단점을 나열하며 생각해보자.

### 장점과 단점

- 장점

  - 간단한 비즈니스로직이라도 휴먼에러는 언제나 존재하니 이런식으로 재빠르게 테스트를 진행하고 개발을 한다면 안정성이 증가 될 것 같다.
  - 분리를 하면 할 수록 내 코드가 얼마나 난장판인지 알 수 있게 된다.
  - 사이드이펙트를 의도적으로 줄이고 순수함수를 지향하게 된다.
    - hooks를 통한 테스트에서는 내부 state를 변경하는 바보같은 짓(계속 시도했었음 ㅎㅅㅎ..)을 하기 위한 것이 아닌 해당 메서드가 요청하는 인자를 넘겼을 때 원하는 값이 나오도록 하는것을 보장하는것이 주된 목적이다.
    - 그래서 함수의 `side effect를 발생시키기 위해 인자에 넣지 않고(리팩토링의 시간)` 곧바로 함수에서 state를 참조해서 변경해주는 것을 `지양`하게 된다.
    - **_위의 onApply도 check, origin, path를 인자로 받는 것이 제대로된 테스트가 되겠다._**

- 단점
  - 파일의 수와 테스트코드의 수가 늘어나게 된다.
    - 불필요하다고 판단되는 로직마저 아무생각없이 테스트하고 있는 자신을 발견한다.
  - 리팩토링 시 파일 열기가 귀찮다
  - 사실 단점은 거의 없는 것 같다.

끝!

## 참고

- [How to Create a Three-Layer Application with React Hooks](https://medium.com/dailyjs/how-to-create-a-three-layer-application-with-react-hooks-2efba9ba345f)
- [RIDI-리덕스 잘 쓰고 계시나요?](https://ridicorp.com/story/how-to-use-redux-in-ridi/)
- [testing-library / react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library)
- [npm-redux-mock-store](https://www.npmjs.com/package/redux-mock-store)
