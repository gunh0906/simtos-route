# SIMTOS Route Webapp

SIMTOS 부스 경로 플래너를 단일 HTML 파일에서 관리하기 쉬운 웹앱 구조로 옮긴 프로젝트입니다.

## 실행

```bash
npm install
npm run sync:legacy
npm run dev
```

## 구조

- `scripts/sync-legacy.mjs`
  - 기존 단일 HTML에서 `body`, `style`, `script`를 추출해 `public/legacy`로 복사합니다.
- `src/app.js`
  - 앱 셸을 만들고, 추출된 레거시 레이아웃과 스크립트를 붙입니다.
- `public/legacy`
  - 현재 동작 중인 플래너의 실제 레이아웃, 스타일, 로직이 들어갑니다.

## 다음 단계

1. `public/legacy/planner.js`에서 검색, 저장업체, 경로, 지도 렌더를 모듈별 파일로 분리
2. 지도 이미지와 데이터셋을 별도 파일로 분리
3. GitHub Pages 또는 Netlify 배포 설정 추가
