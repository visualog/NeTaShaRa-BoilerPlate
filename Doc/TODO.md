# 작업 계획 (TODO)

이 문서는 프로젝트 진행에 필요한 작업들을 추적하고 관리하기 위한 것입니다.

## 1. 디자인 시스템 구축

`디자인시스템-구축.md` 계획에 기반한 실행 항목입니다.

### 1단계: 토큰 시스템 기반 마련

- [x] `app` 디렉토리 내에 `design-system` 폴더 구조 생성
- [x] 기존 색상 정의(`radix-brand.css`, `radix-gray.css`)를 `design-system/tokens/colors.ts`로 통합 및 이전
- [x] `design-system/tokens/typography.ts` 파일 생성 및 타이포그래피 토큰 정의
- [x] `design-system/tokens/spacing.ts` 파일 생성 및 간격 토큰 정의
- [x] `tailwind.config.ts`가 새로운 디자인 토큰을 사용하도록 설정 업데이트

### 2단계: 테마 및 전역 스타일 적용

- [x] `design-system/foundations/theme.css`를 생성하여 Radix 스타일을 가져오고, 라이트/다크 모드 CSS 변수 정의
- [x] `app/globals.css`가 새로운 `theme.css`를 가져오도록 업데이트
- [x] Radix `Theme` 컴포넌트를 사용하는 `ThemeProvider` 컴포넌트 생성 및 `app/layout.tsx`에 적용

### 3단계: 컴포넌트 리팩토링

- [x] 기존 shadcn/ui 컴포넌트(`Button`, `Alert` 등)가 새로운 Radix 기반 토큰을 사용하도록 `variants` 수정

### 4단계: 문서화 및 워크플로우

- [ ] Storybook 설정 및 연동
- [ ] 디자인 토큰 문서를 자동 생성하는 스크립트(`scripts/generate-token-docs.ts`) 작성

---

## 2. 사이드바 개선

- [x] `lib/menu-config.ts` 파일 생성하여 사이드바 메뉴 데이터 분리
- [x] `components/ui/sidebar.tsx` 컴포넌트가 하드코딩된 데이터를 사용하는 대신 `lib/menu-config.ts`에서 메뉴를 가져오도록 리팩토링

