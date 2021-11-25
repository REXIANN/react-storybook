# React with Storybook

> init 커밋에서 스토리북 실행을 위한 사전준비를 먼저 해놓고 시작함

## initialize
```shell
npx sb init
```

.storybook 폴더가 생성되고 main.js, preview.js 두 파일이 생성됨을 볼 수 있다.
main.js: 설정(configuration)에 관련된 파일
preview.js: 글로벌에 따라 다른 설정을 할 수 있게 해주는 파일

stories 폴더가 생성되며 스토리북을 실행하기 위한 다양한 테스트파일이 작성되었음을 볼 수 있다.

## 실행
```shell
npm run storybook
```

기본적으로 stories 폴더 안에 있는 것들을 전부 실행시킨다. 다른 폴더도 실행하게 할 수 있지만 그렇게 하지 않는 것을 권장한다고 한다.

## Storybook
스토리북은 기본적으로 *.stories.@(js|jsx|ts|tsx) 형태의 파일이 되어야 한다.
하나의 스토리북 파일은 기본적으로 하나의 오브젝트를 반환해야 하는데(`export default {}`)이 오브젝트가 실제 스토리가 된다.
보통은 title, component 등의 인자를 가진다.

그 밑에 `export const` 키워드를 통해 세부적인 스토리를 만들 수 있다.
작성되는 스토리는 예시를 참조할 때 기본적으로 Button 컴포넌트에 대한 스토리이며 그 안에 Red 라는 이름을 가지는 항목을 가지는 것으로 볼 수 있다.
```javascript
import Button from '@/components/Button'

export default {
  title: "Button",
  component: Button,
}

export const Red = () => <Button backgroundColor="red" />
```


스토리북의 Controls 패널에 있는 Description 의 정보는 기본적으로 PropTypes 에서 가져온다. 
TS를 사용하는경우 스토리북은 TS의 타입정보를 가져다가 사용할 수도 있을 정도로 똑똑함.
 
## Template
다른 모든 스토리들이 참조할 Template 이라는 base function 을 만든다.
Template 함수는 인자를 받아서 해당 인자를 가지는 컴포넌트를 반환한다.
```javascript
const Template = args => <Button {...args} />
```

이후에 Template 을 기반으로 하는 모든 스토리들은 .bind를 활용해서 인자를 엮어주면 된다.
```javascript
export const Red = Template.bind({})

Red.args = {
  backgroundColor: "red",
  label: "Press Me",
  size: "md"
}
```

이렇게 설정을 해 주었다면 스토리북의 Controls 패널에서 Control 컬럼을 이용해 각 args 를 조정할 수 있음을 볼 수 있다.
또한 버튼을 클릭할 경우 Actions 패널에서 onClick 에 해당하는 이벤트가 발생함을 볼 수 있다.

이제 Template 에 기반한 다양한 스토리를 만들 수 있다.
Controls 패널에서 Name 의 오른쪽에 있는 버튼을 누르면 초기값으로 리셋되니 부담없이 값을 변경해 볼 수 있다.

### argTypes
하지만 Button.js에 Props 로 넘어오는 onClick 을 handleClick 으로 바꾼다면 스토리북은 해당 함수가 어떤 것인지 알지 못한다. 
이를 위해 반환되는 스토리 오브젝트에 argTypes 를 다음과 같이 추가해주어야 한다.
```javascript
export default {
  title: "Button",
  component: Button,
  argTypes: { handleClick: { action: "handleClick" } }
}
```

저 말은 handleClick 이 실행되면 action 패널에 handleClick 이라는 이름으로 해당 이벤트를 표시해라 라는 의미이다.
