# 💬 react-chat-app

리액트로 이루어진 1:1 채팅 어플리케이션 입니다. 실제로 DB가 구현되어지지 않았고 각종 응답값들은 더미값으로 대체하였습니다.

## 프로젝트 세팅하는 법

- 이 레포지터리를 클론받으시고 먼저 `yarn install` 을 통하여 필요한 패키지들을 다 설치하여 주세요.
- 그 다음 프로젝트를 실행하기 위해 `yarn start` 를 실행시켜 주시면 됩니다.
- 테스팅을 동작시키시려면 `yarn test` 를 실행시켜 주시면 됩니다.

## 📕 주요스택

- 테스트([react-testing-library](https://testing-library.com/docs/react-testing-library/intro/))
- API mocking([msw](https://github.com/mswjs/msw))
- 데이터 페칭([react-query](https://react-query.tanstack.com/))

## 😢 아쉬운 점

- 실제로 DB를 구축하여서 query 문으로 데이터를 불러오는 구조가 아니라 단순한 API mocking밖에 하지 못해 기능구현을 제대로 하지 못한게 아쉬움

## 🚎 나중에 해야할 것들

**백엔드**

- Express를 통해서 직접 서버구현
- MongoDB 혹은 MySQL을 통하여 DB까지 구축

**Styling**

- 디자인을 제대로 짜서 제대로 된 반응형을 구축해보고 싶음
- Tailwind 걷어내기(오히려 시간을 더 잡아먹는 듯)

## 🧐 느낀 점

- 더미 데이터를 [mswjs/data](https://github.com/mswjs/data) 에서 제공하는 가짜 db 같은 것을 셋업하여 진행하려고 했는데 이게 토끼굴로 들어가는 일이 되었음. 일의 우선순위를 잘 파악할 필요가 있을 듯
- CSS를 우겨넣기는 쉽지만 잘 짜기는 정말 어려운 듯
- 일의 우선순위를 파악하는 능력을 기를 필요가 있을 듯
- [Enough is enough](https://twitter.com/KentBeck/status/1537446582760509442) 를 새겨듣자..

## 📩 연락처

k3hppk@gmail.com
