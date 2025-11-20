<<<<<<< HEAD
# heartbeat
=======
# Heartbeat - 소개팅 앱 💕

React + TypeScript + Tailwind CSS로 구축된 PWA 소개팅 애플리케이션

## 🎨 디자인 시스템

### 메인 색상
- **Primary**: `#3ED4BE` (민트 그린) - 메인 브랜드 컬러
- **Secondary**: `#FFFFFF` (화이트) - 배경 및 보조 색상
- **Accent**: `#FF6B9D` (핑크) - 강조 및 포인트 색상

### 추가 색상
- **Primary Dark**: `#2AB5A0`
- **Primary Light**: `#6FE5D1`
- **Gray Scale**: 50 ~ 900

## 📁 프로젝트 구조

```
src/
├── components/          # 재사용 가능한 컴포넌트
│   ├── common/         # 공통 컴포넌트 (Button, Input, Card 등)
│   ├── layout/         # 레이아웃 컴포넌트 (Header, Footer, Navigation 등)
│   └── features/       # 기능별 컴포넌트 (ProfileCard, ChatBubble 등)
├── pages/              # 페이지 컴포넌트
│   ├── Home.tsx
│   ├── Profile.tsx
│   ├── Match.tsx
│   └── Chat.tsx
├── hooks/              # 커스텀 훅
│   └── index.ts        # useLocalStorage, useDebounce, useWindowSize 등
├── utils/              # 유틸리티 함수
│   ├── api.ts         # API 클라이언트
│   └── helpers.ts     # 헬퍼 함수
├── types/              # TypeScript 타입 정의
│   └── index.ts
├── assets/             # 정적 파일 (이미지, 아이콘 등)
├── styles/             # 전역 스타일 (필요시)
├── App.tsx            # 메인 앱 컴포넌트
└── main.tsx           # 진입점
```

## 📝 파일 및 네이밍 컨벤션

### 파일 네이밍
- **컴포넌트**: PascalCase (예: `ProfileCard.tsx`, `ChatList.tsx`)
- **유틸리티/훅**: camelCase (예: `useAuth.ts`, `formatDate.ts`)
- **타입 파일**: camelCase (예: `user.types.ts`, `index.ts`)
- **상수 파일**: UPPER_CASE (예: `API_CONSTANTS.ts`)

### 컴포넌트 구조
```typescript
// 1. Import 섹션
import { useState } from 'react';
import { SomeType } from '@/types';

// 2. 타입 정의
interface ComponentProps {
  prop1: string;
  prop2?: number;
}

// 3. 컴포넌트 정의
export const ComponentName = ({ prop1, prop2 }: ComponentProps) => {
  // 4. 상태 및 훅
  const [state, setState] = useState('');

  // 5. 핸들러 함수
  const handleClick = () => {
    // ...
  };

  // 6. JSX 반환
  return (
    <div className="container">
      {/* 컨텐츠 */}
    </div>
  );
};
```

### CSS 클래스 네이밍
- Tailwind CSS 유틸리티 클래스 우선 사용
- 커스텀 클래스는 kebab-case (예: `profile-card`, `chat-bubble`)
- 상태 클래스는 `is-` 또는 `has-` 접두사 (예: `is-active`, `has-error`)

### Git 커밋 컨벤션
```
feat: 새로운 기능 추가
fix: 버그 수정
docs: 문서 수정
style: 코드 포맷팅, 세미콜론 누락 등
refactor: 코드 리팩토링
test: 테스트 코드 추가
chore: 빌드 업무 수정, 패키지 매니저 수정
```

## 🚀 시작하기

### 필수 요구사항
- Node.js 18+
- Yarn

### 설치
```bash
yarn install
```

### 개발 서버 실행
```bash
yarn dev
```

### 빌드
```bash
yarn build
```

### 빌드 미리보기
```bash
yarn preview
```

## 🔧 개발 환경 설정

### Path Alias
Vite 설정에서 다음 경로 별칭을 사용할 수 있습니다:
- `@` → `/src`
- `@components` → `/src/components`
- `@pages` → `/src/pages`
- `@hooks` → `/src/hooks`
- `@utils` → `/src/utils`
- `@types` → `/src/types`
- `@assets` → `/src/assets`
- `@styles` → `/src/styles`

### Tailwind CSS 커스텀 클래스
```css
/* 버튼 */
.btn-primary      /* 메인 버튼 */
.btn-secondary    /* 보조 버튼 */
.btn-accent       /* 강조 버튼 */

/* 카드 */
.card             /* 기본 카드 */
.profile-card     /* 프로필 카드 */

/* 입력 */
.input-field      /* 기본 입력 필드 */

/* 그라데이션 */
.gradient-primary /* 민트 그라데이션 */
.gradient-accent  /* 핑크 그라데이션 */
.text-gradient    /* 텍스트 그라데이션 */
```

## 📱 PWA 기능

이 앱은 Progressive Web App으로 다음 기능을 지원합니다:
- ✅ 오프라인 지원
- ✅ 홈 화면에 추가 가능
- ✅ 푸시 알림 (구현 예정)
- ✅ 백그라운드 동기화
- ✅ 자동 업데이트

## 🚢 배포

### Vercel 배포
1. GitHub에 코드 푸시
2. Vercel에서 프로젝트 Import
3. 자동 배포 설정 완료

또는 CLI 사용:
```bash
npm i -g vercel
vercel
```

## 🎯 개발 시 주의사항

### 성능 최적화
- 이미지는 WebP 포맷 사용 권장
- 컴포넌트는 `React.memo`로 불필요한 리렌더링 방지
- 무거운 계산은 `useMemo`, `useCallback` 사용

### 접근성
- 모든 인터랙티브 요소에 적절한 aria-label 추가
- 키보드 네비게이션 지원
- 색상 대비 비율 WCAG AA 기준 준수

### 모바일 최적화
- Touch 제스처 지원
- Safe Area 고려 (iOS notch 등)
- 반응형 디자인 (모바일 우선)

## 📚 주요 라이브러리

- **React 19** - UI 라이브러리
- **TypeScript** - 타입 안정성
- **Vite** - 빌드 도구
- **Tailwind CSS** - 유틸리티 CSS 프레임워크
- **React Router** - 라우팅
- **Vite PWA Plugin** - PWA 지원

## 🤝 기여 가이드

1. Feature 브랜치 생성 (`git checkout -b feature/AmazingFeature`)
2. 변경사항 커밋 (`git commit -m 'feat: Add some AmazingFeature'`)
3. 브랜치에 푸시 (`git push origin feature/AmazingFeature`)
4. Pull Request 생성

## 📄 라이선스

This project is licensed under the MIT License.

---

**Made with ❤️ for better connections**

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
>>>>>>> f165bbf (init: heartbeat 프로젝트 최초 커밋)
