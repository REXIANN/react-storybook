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

스토리북의 Controls 패널에 있는 Description의 정보는 기본적으로 PropTypes에서 가져온다. 
TS를 사용하는경우 스토리북은 TS의 타입정보를 가져다가 사용할 수도 있을 정도로 똑똑함.
 
