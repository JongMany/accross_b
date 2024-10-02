## 🔥어크로스비 인터뷰 사전과제 🔥

## 프로젝트 설명

- backend, frontend가 monorepo로 구성되어있습니다.
- 아래와 같이 맨 루트 폴더에서 yarn install을 실행하면 backend, frontend의 의존성을 모두 설치합니다.
- backend (9999), frontend (3000)는 각각 다른 포트에서 실행됩니다.
- backend는 NestJS로 구성되어있으며, frontend는 React로 구성되어있습니다.
- backend는 Hexagonal Architecture와 Nest.js의 기본 구조를 선택해서 사용할 수 있습니다.

## Dependency Install

```bash
yarn install
```

## Back-End 실행 방법 (선택)

### yarn 설치

```bash
npm install -g yarn
```

### 1. Nest(Nest Default)

```bash
# 1. 시드 데이터 추가하기
yarn workspace nest-default seed:run
# 2. 실행하기
yarn run backend:default:start
```

### 2. Nest(Hexagonal Architecture)

1. apps/\_backend_templates 폴더에 있는 파일들을 apps/backend 폴더로 복사합니다.
2. apps/backend/nest-default 폴더를 apps/\_backend_templates 폴더로 이동합니다.
3. yarn install을 통해 의존성을 설치합니다.

```bash
yarn run backend:hexagonal:start
```

## Front-End 실행 방법

```bash
yarn run frontend:start
```
