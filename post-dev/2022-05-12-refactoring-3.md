---
title: 리액트에서 비즈니스 로직을 나눠보자[3 - ContextAPI마저 활용해보자]
author: Sanghun lee
date: 2022-05-12 11:33:00 +0800
categories: [FE, React]
tags: [Architecture]
math: true
mermaid: true
image:
  src: https://layer.team/wp-content/uploads/2020/04/layer-app-spot-26-best-field-data-software-revit-addin-manage.png
  width: 850
  height: 585
---

# Props Drilling을 피해보기

2편의 hooks의 방식으로 state(상태)를 로컬에서 계속 가져가기를 바라면 대부분 페이지의 최상단에서 하단의 매칭된 컴포넌트까지 Props Drilling이 생기게 된다.

아래 예제를 한번 봐보자.

# 무엇이 문제였는가?

일단 공용으로 사용되는 컴포넌트를 한번 봐보자.

아래는 기간을 정할 수 있기 위해 사용하는 컴포넌트로 날짜와 시간을 정할 수 있는 컴포넌트이다.

```tsx
interface IPeriodSelectorProps {
  withTimes: boolean;
  labelText?: string;
  date: [Date, Date];
  selectTime: string[];
  handleStartDate: (date: Date) => void;
  handleEndDate: (date: Date) => void;
}

const PeriodSelector: React.FC<IPeriodSelectorProps> = ({
  withTimes,
  labelText,
  date,
  selectTime,
  handleStartDate,
  handleEndDate,
}): JSX.Element => {
  return (
    <WrapperDate>
      <span>{labelText || "기간 선택"}</span>
      <div>
        <div>
          <Calendar
            date={date[0] || new Date()}
            handleDate={handleStartDate || (() => null)}
          />
          {withTimes && handleTime && selectTime && (
            <input
              type="time"
              value={selectTime && selectTime[0]}
              name="startTime"
              onChange={handleTime}
            />
          )}
        </div>
        <span>~</span>
        <div>
          <Calendar
            date={date[1] || new Date()}
            handleDate={handleEndDate || (() => null)}
          />
          {withTimes && handleTime && selectTime && (
            <input
              type="time"
              value={selectTime && selectTime[1]}
              name="endTime"
              onChange={handleTime}
            />
          )}
        </div>
      </div>
    </WrapperDate>
  );
};

const areEqual = (
  prevProps: Readonly<PropsWithChildren<IPeriodSelectorProps>>,
  nextProps: Readonly<PropsWithChildren<IPeriodSelectorProps>>
) => {
  return (
    prevProps.date === nextProps.date ||
    prevProps.selectTime === nextProps.selectTime ||
    prevProps.labelText === nextProps.labelText
  );
};

export default React.memo(PeriodSelector, areEqual);
```

그래도 렌더링 최적화를 애쓰려고 memoizing을 해놓은것이 참..

일단 해당컴포넌트만을 바라보았을때는 Props 개수가 다소 많지만 그래도 용인할 수 있는 수준인 것 같다고 생각하며

개발을 계속 진행할 수 있다.

하지만 이 컴포넌트를 사용하는 입장의 각 페이지별 index페이지를 보면 이야기가 달라진다.

```tsx
...생략
import usePeriodSelector from 'hooks/usePeriodSelector';
...생략

export const BannerList: React.FC = (): JSX.Element => {
  ...생략

  const {
    state: { date },
    actions: { handleEndDate, handleStartDate, initializeDate },
  } = usePeriodSelector();

  ...생략

  return (
    <>
      <BannerListPageSelectors
        checkArr={checkArr}
        date={date}
        title={title}
        register={register}
        bannerType={bannerType}
        isSearching={isSearching}
        onSearch={onSearch}
        onCancelSearch={initializeSearchData}
        handleStatus={handleStatus}
        handleInput={handleInput}
        handleSelect={handleSelect}
        handleEndDate={handleEndDate}
        handleStartDate={handleStartDate}
      />
      <BannerListTableList
        data={listData || []}
        total={totalDataCount || 0}
        doRefetch={doRefetch}
      />
    </>
  );
};

```

해당 코드는 배너목록을 보여주며 검색을 위한 검색창이 상단에 있고 아래는 테이블이 있는 UI를 가진 페이지의 index파일이다.

일부 코드만을 가져왔음에도 불구하고 `BannerListPageSelectors`컴포넌트의 Props갯수를 보면 숨이 막힌다.

그럼 `BannerListPageSelectors`의 코드를 보자.

```tsx
...생략

interface IBannerListPageSelectorsProps {
  ...생략
  date: [Date, Date];
  handleEndDate: (endDate: Date) => void;
  handleStartDate: (startDate: Date) => void;
  ...생략
}

export const BannerListPageSelectors: React.FC<
  IBannerListPageSelectorsProps
> = ({
  ...생략
  date,
  handleEndDate,
  handleStartDate,
  ...생략
}): JSX.Element => {

  ...생략
  ...생략

  return (
    <BasicSelectorContainer
      onSearch={onSearch}
      isSearching={isSearching}
      onCancelSearch={onCancelSearch}
    >
      <PageSelectWrapper>
        <DefaultPageSelect
          label="배너 유형"
          selectOptions={bannerListData}
          selectValue={bannerType.value}
          onSelect={handleSelect}
          selectWidth="470px"
          selectHeight="45px"
          fontSize="16px"
          placeHolder="배너 유형을 선택해주세요."
          name="bannerType"
        />
        <PeriodSelector
          startDate={date[0]}
          endDate={date[1]}
          withTimes={false}
          handleEndDate={handleEndDate}
          handleStartDate={handleStartDate}
        />
        ...생략
      </PageSelectWrapper>
    </BasicSelectorContainer>
  );
};

```

Props의 전달만을 위한 Props전달이 보이는 코드인데 `BannerListPageSelectors`는

`usePeriodSelector` 라는 훅에서 보내준 메서드와 상태 그 어느것도 사용하지 않는 것을 알 수 있으며

오직 PeriodSelector라는 컴포넌트에 이것들을 넘기기 위해서만 값을 Props를 받고 있다.

위 예제는 아주 단적인 예시인데 특정페이지에서는 의도치 않게 이것보다 뎁스가 깊어지는 경우도 있었다.

모든 개발을 위와같은 특정 UI Component + hooks를 통해 로직의 재활용성을 높이는 방식으로 진행했기에 이와 같은 Props Drilling 현상은 개발을 하기에 여간 귀찮은것이 아니었다.

그럼 마지막으로 PeriodSelector를 위한 로직이 구성된 별도의 훅까지 살펴보고 이를 어떻게 개선했는지를 살펴보자.

```tsx
import { PREV_MONTH, TODAY } from "constant/dateConstants";
import React, { useEffect, useState } from "react";
import { dateAndTimeAssemble } from "utils/formatting";

const usePeriodSelector = () => {
  const [date, setDate] = useState<[Date, Date]>([PREV_MONTH, TODAY]);
  const [selectTime, setSelectTime] = useState(["00:00", "00:00"]);
  const [assembleDate, setAssembleDate] = useState<[Date, Date]>([
    new Date(),
    new Date(),
  ]);

  const handleStartDate = (startDate: Date) => {
    setDate([startDate, date[1]]);
  };

  const handleEndDate = (endDate: Date) => {
    setDate([date[0], endDate]);
  };

  const handleTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    if (name === "startTime") {
      setSelectTime([value, selectTime[1]]);
    }
    if (name === "endTime") {
      setSelectTime([selectTime[0], value]);
    }
  };

  const initializeDate = () => {
    setDate([PREV_MONTH, TODAY]);
    setSelectTime(["00:00", "00:00"]);
  };

  useEffect(() => {
    const { startModifed, endModified } = dateAndTimeAssemble({
      startDate: date[0],
      startTime: selectTime[0],
      endDate: date[1],
      endTime: selectTime[1],
    });

    setAssembleDate([startModifed, endModified]);
  }, [date, selectTime]);
  return {
    state: {
      date,
      assembleDate,
      selectTime,
    },
    actions: {
      setDate,
      setSelectTime,
      initializeDate,
      handleStartDate,
      handleEndDate,
      handleTime,
    },
  };
};

export default usePeriodSelector;
```

위와 같은 코드를 특정컴포넌트에 실행한 뒤 state와 actions를 빼와서 필요한용도로 사용할 수 있게 된다.

이렇게 중복된 로직을 계속 활용해나가는 방식을 차용했다.

그럼 이제 이 지옥같은 PropsDrilling을 ContextAPI와 함께 조금 더 우아하게 풀어보자.

# Context API를 적용하자

## 1. hooks에 컨텍스트를 추가해보자

```tsx
import { PREV_MONTH, TODAY } from 'constant/dateConstants';
import React, { createContext, useEffect, useState } from 'react';
import { dateAndTimeAssemble } from 'utils/formatting';

interface IPeriodContext {
  ...생략
} //추가

export const PeriodContext = createContext<IPeriodContext | undefined>(
  undefined,
); //추가

const usePeriodSelector = () => {
  const [date, setDate] = useState<[Date, Date]>([PREV_MONTH, TODAY]);
  const [selectTime, setSelectTime] = useState(['00:00', '00:00']);

  ...생략

  const state = {
    ...생략
    date,
  };

  const actions = {
    ...생략
    handleStartDate,
    handleEndDate,
    handleTime,
  };

  const periodContextValue = { state, actions }; //추가

  return {
    state,
    actions,
    periodContextValue,
  };
};

export default usePeriodSelector;

```

우선 createContext를 통해 PeriodContext를 만들어주고 해당하는 타입도 미리 만들어준다

나는 위 코드와 같이 state와 actions을 그냥 한무더기에 모아 contextValue로 사용할 것이라는 네이밍을 한뒤 hooks의 리턴값에 하나 추가해주었다.

이렇게 하면 추가된 부분은 총 3파트 정도된다

## 2. 컨텍스트 Provider를 만들어주자

```tsx
...
import usePeriodSelector, { PeriodContext } from 'hooks/usePeriodSelector';
...

export const BannerList: React.FC = (): JSX.Element => {
  ...

  const {
    ...
    periodContextValue,
  } = usePeriodSelector();

  ...

  return (
    <>
    <PeriodContext.Provider value={periodContextValue}>
      <BannerListPageSelectors
        checkArr={checkArr}
        // date={date}
        title={title}
        register={register}
        bannerType={bannerType}
        isSearching={isSearching}
        onSearch={onSearch}
        onCancelSearch={initializeSearchData}
        handleStatus={handleStatus}
        handleInput={handleInput}
        handleSelect={handleSelect}
        // handleEndDate={handleEndDate}
        // handleStartDate={handleStartDate}
      />
      </PeriodContext.Provider>
      <BannerListTableList
        data={listData || []}
        total={totalDataCount || 0}
        doRefetch={doRefetch}
      />
    </>
  );
};

```

프로바이더를 만들어준 뒤 hooks에서 컨텍스트가 필요한 값을 빼와서 넣어준 것이다.
사실 더 낮은단위에서 제공해줘도 되지만 usePeriodSelector에서 나온 state값을 검색을위한 API호출에도 별도로 사용해야 하므로 위와 같은 구조가 만들어져 있다.

그리고 이제 어떻게 `BannerListPageSelectors`에서 기존에 있던 Props를 뺐는지 다른 변경된 코드도 한번 봐보자

## 3. Hooks와 한쌍이었던 컴포넌트에 Context를 미리 심어놓자

```tsx
import Calendar from "components/calendar";
import { PeriodContext } from "hooks/usePeriodSelector";
import React, { useContext } from "react";
import { WrapperDate } from "./styles";

interface IPeriodSelectorProps {
  withTimes: boolean;
  labelText?: string;
}

const PeriodSelector: React.FC<IPeriodSelectorProps> = ({
  withTimes,
  labelText,
}): JSX.Element => {
  const periodContext = useContext(PeriodContext); //여기
  if (!periodContext?.state || !periodContext?.actions)
    throw new Error("Period Context를 주입해주세요");

  const {
    state: { date, selectTime },
    actions: { handleStartDate, handleEndDate, handleTime },
  } = periodContext; //여기

  return (
    <WrapperDate>
      <span>{labelText || "기간 선택"}</span>
      <div>
        <div>
          <Calendar
            date={date[0] || new Date()}
            handleDate={handleStartDate || (() => null)}
          />
          {withTimes && handleTime && selectTime && (
            <input
              type="time"
              value={selectTime && selectTime[0]}
              name="startTime"
              onChange={handleTime}
            />
          )}
        </div>
        ...
      </div>
    </WrapperDate>
  );
};

export default PeriodSelector;
```

이제 위와 같은 방식으로 Hooks파일에 선언해놓았던 Context를 불러와 에러핸들링을 한번해주고
나머지 값들을 편안하게 사용할 수 있다.

Props의 개수가 확연히 준것을 알 수 있다. 사실 여기까지는 문제가 되지 않았다.

# 문제점

렌더링에 대한 문제가 생긴다.
ContextAPI는 Sugar Syntax와 비슷하게 실제로 코드상에서는 PropsDrilling을 하지 않지만 사실상 그와 같은 행위를 하고 있어 하나의 컨텍스트만 바뀌어도
해당 컨텍스트를 참조하고 있는 모든 부분에서 리렌더링이 일어난다. 이는 아래와 같이 해결할 수 있다.

## Memoizing을 위한 컨테이너 만들기

```tsx
import { PeriodContext } from "hooks/usePeriodSelector";
import { useContext, useMemo } from "react";

interface IMemoizePeriodSelectorContainerProps {
  children: React.ReactNode;
}

const MemoizePeriodSelectorContainer: React.FC<
  IMemoizePeriodSelectorContainerProps
> = ({ children }) => {
  const periodContext = useContext(PeriodContext);
  return useMemo(() => {
    return <>{children}</>;
  }, [
    periodContext?.state.date[0],
    periodContext?.state.date[1],
    periodContext?.state.selectTime[0],
    periodContext?.state.selectTime[1],
  ]);
};

export default MemoizePeriodSelectorContainer;
```

원시값까지 가야하므로... 의존배열에 값이 좀 많다.

이렇게 useMemo를 활용해서 컴포넌트를 메모이징 하여 해당 스테이트가 변경될때만 리렌더 시키는 방식으로 활용할 수도 있다.

이것을 아래와같이 해당 컴포넌트에 적용시켜주면 된다.

이렇게하면 return부분에 들어가는 캘린더와 같은부분은 리렌더가 되지 않아 렌더링 최적화를 어느정도 적용할 수 있다.

다만 주의해야하는 점은 memoize된 방식의 사용을 위해서 useMemo를 적용할 때,

위에서 만든것과 유사한 MemoizeContainer를 사용하는 경우 useContext를 통해 실제로 불러와 값을 넣어주는 부분 이하의 뎁스에서 이를 감싸줘야한다는 것이다

```tsx
import Calendar from "components/calendar";
import MemoizePeriodSelectorContainer from "components/common/MemoizePeriodSelectorContainer";
import { PeriodContext } from "hooks/usePeriodSelector";
import React, { useContext } from "react";
import { WrapperDate } from "./styles";

interface IPeriodSelectorProps {
  withTimes: boolean;
  labelText?: string;
}

const PeriodSelector: React.FC<IPeriodSelectorProps> = ({
  withTimes,
  labelText,
}): JSX.Element => {
  const periodContext = useContext(PeriodContext);
  if (!periodContext?.state || !periodContext?.actions)
    throw new Error("Period Context를 주입해주세요");

  const {
    state: { date, selectTime },
    actions: { handleStartDate, handleEndDate, handleTime },
  } = periodContext;

  return (
    //periodContext를 사용하는 해당 컴포넌트의 리턴부분 또는 그 아래의 Calendar컴포넌트
    <MemoizePeriodSelectorContainer>
      <WrapperDate>
      <span>{labelText || '기간 선택'}</span>
        <div>
          <div>
            <Calendar
              date={date[0] || new Date()}
              handleDate={handleStartDate || (() => null)}
            />
            {withTimes && handleTime && selectTime && (
              <input
                type="time"
                value={selectTime && selectTime[0]}
                name="startTime"
                onChange={handleTime}
              />
            )}
          </div>
            ...
          </div>
        </div>
      </WrapperDate>
    </MemoizePeriodSelectorContainer>
  );
};

export default React.memo(PeriodSelector);
```

이렇게 해서 마침내 hooks를 통해 분리했던 로직을 PropsDrilling없이, 그리고 스코프를 정해서 사용하는것이 가능해졌다.

## 왜 이렇게 까지해서 ContextAPI를 쓰는걸까?

Redux-Toolkit, Recoil, Atomic등 전역상태관리를 도와주는 아주 좋은 라이브러리들이 많다.

이 라이브러리들은 객체 세부사항에 필요한 값만 가져온다면 해당 값이 변할때만 리렌더링을 최적화 시켜서 해주기도하고 포트폴리오에 스킬셋을 하나라도 더 적을 수 있으니 아주 좋은선택이다.

그런데 내가 ContextAPI를 굳이 사용한 이유는 다른의미로 있다.

크게 웹을 본다면 대부분은 대개 비슷한 구조를 아래와 같이 가져갈 것이다.

```md
- src
  - Page
    - Home
    - About
      - components
        Component.tsx
        ...
      - style
        styleA.tsx
        styleB.tsx
        ...
      - hooks
        useSomeHookA.ts
        ...
      - constants
        constantA.ts
        ...
    - Post
  - components
    common
    CommonA.tsx
    ...
```

개인적으로는 페이지별로 사용하는 스타일, 상수, 유틸, hooks등을 페이지 아래에 폴더로 구성하여 필요한 곳에 가져다 쓰고

중복이 되어 공용으로 사용이 되는 경우 src 바로 하단에 있는 폴더에 넣어 적절한 네이밍을 통해 공통으로 사용하는 방식을 취하고 있다.

이 때, 위 예제와 같은 `usePeriodSelectors` 는 공용 hook이 될 것인데, 이를 사용하는 `페이지` 는 `해당 컴포넌트(PeriodSelector.tsx)`를 사용하는 페이지 일 것이다.

그렇다면 hook + component의 조합으로 중복된 코드를 작성하지 않고 필요한곳에 import하여 로직과 뷰를 계속 재활용하며 사용할 수 있으므로 생산성이 상당히 높아진다.

그런데 여기서 usePeriodSelectors라는 관련 state를 PropsDrilling을 피하고자 하는 이유로만 전역 store에 저장하고 있다고 가정하면 해당 컴포넌트를 사용하지 않는 페이지에서도 이 state에 대한 접근이 가능하게 된다.

이는 해당 Hooks가 가진 서비스로직의 범주를 벗어나는 곳에서 사용(접근)이 되는 것이기 때문에 공동작업인 경우 자칫 의도하지 않는 역할이 시행될 수도 있다고 판단했다.

(물론 그럴일은 절대 없겠지만 각 파일의 롤을 명확히 하고 싶은마음이 제일 컸다.)

추가로 리액트가 함수지향적으로 개발이 되는것이 현재이나, 객체지향의 SOLID의 일부처럼 단일 책임(SRP)을 가지는 것이 중요하다고 판단하고 있는 개인적의견이 있다.

때문에 해당 뷰에 해당하는 로직만 가지는것이 중요하다고 생각하고 있어 전역 저장소(Global Store)에 이를 저장하는것은 접근성의 문제로 의미가 맞지 않다고 판단되었다.

그래서 해당 컴포넌트를 쓰는곳은 해당 컨텍스트 프로바이더를 통해 state를 주입받고 해당 컴포넌트는 항상 이 컨텍스트의 값만 쓰도록 설계를 한다면,

적어도 반복되어 사용되는 컴포넌트는 해당 state만을 관리하므로 의미가 맞다고 생각한다.

# 장점과 단점

## - 장점

- Props Drilling을 피하며 깔끔한 코드상태를 유지할 수 있다.
- Nest.js의 컨셉과 유사한 느낌(OOP)으로 필요한 로직이 있다면 Service를 주입하는 것과 같은 느낌의 개발이 가능하다.

## - 단점

- 렌더링 최적화 하는 것에 손이 더욱 더 간다. (제발 memo의 콜백함수로 Context도 인지가 되는 날이 왔으면 좋겠다.)
- 자칫남용하면 return구문에서 여러개의 Provider를 동시에 만나게되므로 심미적으로 좋지 않다.

# 참고

- [Github - facebook/react #15156 Preventing rerenders with React.memo and useContext hook](https://github.com/facebook/react/issues/15156)
- [Kent C. Dodds - How to use React Context effectively](https://kentcdodds.com/blog/how-to-use-react-context-effectively)
- [useMemo inside Context API - React - The Mindless](https://blog.agney.dev/useMemo-inside-context/)
