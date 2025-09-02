# NeTaShaRa 디자인 시스템 UX/UI 개선 계획서

## 목차
1. [현재 상황 분석](#현재-상황-분석)
2. [UX/UI 개선 우선순위](#uxui-개선-우선순위)
3. [사이드바 검색 기능 개선](#사이드바-검색-기능-개선)
4. [반응형 브레이크포인트 전략](#반응형-브레이크포인트-전략)
5. [메인 콘텐츠 그리드 시스템](#메인-콘텐츠-그리드-시스템)
6. [보더 & 라디우스 시스템 개선](#보더--라디우스-시스템-개선)
7. [실행 계획](#실행-계획)
8. [기술적 구현 세부사항](#기술적-구현-세부사항)

---

## 현재 상황 분석

### 프로젝트 구조
- **프레임워크**: Next.js 15.5.2 + React 19.1.0
- **스타일링**: Tailwind CSS v4 + Radix UI
- **언어**: TypeScript
- **타겟**: 디자인 시스템 문서 및 컴포넌트 라이브러리

### 현재 문제점
1. **메인 페이지**: 단조로운 텍스트만 있는 기본 구조
2. **사이드바**: 검색 기능 부재, 단순한 네비게이션
3. **색상 페이지**: 정보 과다, 시각적 압박감
4. **반응형**: 모바일 환경 최적화 부족
5. **그리드 시스템**: 일관성 없는 레이아웃
6. **보더 & 라디우스**: 불완전한 스케일, 사용 가이드 부족

---

## UX/UI 개선 우선순위

### High Priority (즉시 실행)
1. **메인 페이지 히어로 섹션 개선**
2. **사이드바 검색 기능 추가**
3. **색상 페이지 탭 레이아웃 적용**

### Medium Priority (1주 내)
1. **보더 & 라디우스 시스템 완성**
2. **반응형 브레이크포인트 최적화**
3. **그리드 시스템 표준화**

### Low Priority (2주 내)
1. **애니메이션 및 마이크로 인터랙션**
2. **다크모드 지원**
3. **접근성 개선**

---

## 사이드바 검색 기능 개선

### 현재 사이드바 구조
```
┌─────────────────────────────────────┐
│ MDS (로고/제목)                     │
├─────────────────────────────────────┤
│ Foundation ▼                        │
│ ├─ Colors                          │
│ ├─ Typography                      │
│ ├─ Spacing                         │
│ ├─ Borders & Radius                │
│ ├─ Shadows                         │
│ ├─ Iconography                     │
│ ├─ Layout & Grid                   │
│ └─ Motion                          │
├─────────────────────────────────────┤
│ Components ▼                        │
│ ├─ Button                          │
│ ├─ Alert                           │
│ └─ Accordion                       │
└─────────────────────────────────────┘
```

### 개선된 사이드바 구조
```
┌─────────────────────────────────────┐
│ MDS (로고/제목)                     │
├─────────────────────────────────────┤
│ [🔍 검색...]                        │
├─────────────────────────────────────┤
│ Foundation ▼                        │
│ ├─ Colors                          │
│ ├─ Typography                      │
│ ├─ Spacing                         │
│ ├─ Borders & Radius                │
│ ├─ Shadows                         │
│ ├─ Iconography                     │
│ ├─ Layout & Grid                   │
│ └─ Motion                          │
├─────────────────────────────────────┤
│ Components ▼                        │
│ ├─ Button                          │
│ ├─ Alert                           │
│ └─ Accordion                       │
├─────────────────────────────────────┤
│ 즐겨찾기 ★                          │
│ ├─ Button                          │
│ └─ Colors                          │
└─────────────────────────────────────┘
```

### 주요 개선사항
1. **검색 기능**: 실시간 필터링으로 메뉴 항목 검색
2. **즐겨찾기**: 자주 사용하는 항목 북마크
3. **현재 위치 표시**: 현재 페이지 하이라이트
4. **키보드 네비게이션**: Tab, Arrow 키 지원

---

## 반응형 브레이크포인트 전략

### 표준 브레이크포인트 정의
```css
:root {
  /* 반응형 브레이크포인트 */
  --breakpoint-xs: 480px;   /* 초소형 모바일 */
  --breakpoint-sm: 640px;   /* 소형 모바일 */
  --breakpoint-md: 768px;   /* 태블릿 (세로) */
  --breakpoint-lg: 1024px;  /* 태블릿 (가로) */
  --breakpoint-xl: 1280px;  /* 데스크톱 */
  --breakpoint-2xl: 1536px; /* 대형 데스크톱 */
}
```

### 반응형 레이아웃 전략
1. **모바일 우선 (Mobile First)**: 기본 스타일을 모바일에 맞춤
2. **점진적 향상**: 큰 화면에서 추가 기능 제공
3. **터치 친화적**: 모바일에서 터치 영역 최적화

### 사이드바 반응형 동작
- **모바일 (< 768px)**: 오버레이로 표시, 햄버거 메뉴
- **태블릿 (768px - 1024px)**: 축소된 사이드바, 아이콘만 표시
- **데스크톱 (> 1024px)**: 전체 사이드바 표시

---

## 메인 콘텐츠 그리드 시스템

### 통합 그리드 컨테이너 구조
```tsx
// app/layout.tsx 개선
<div className="flex min-h-screen">
  <Sidebar className="hidden md:flex" />
  <main className="flex-1 min-w-0">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {children}
    </div>
  </main>
</div>
```

### 그리드 시스템 규칙
1. **최대 너비**: `max-w-7xl` (1280px)로 콘텐츠 가독성 최적화
2. **여백**: `px-4 sm:px-6 lg:px-8`로 반응형 여백 적용
3. **중앙 정렬**: `mx-auto`로 콘텐츠 중앙 배치

### 콘텐츠 타입별 그리드
- **카드 레이아웃**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- **목록 레이아웃**: `space-y-6` 세로 스택
- **테이블 레이아웃**: `overflow-x-auto` 가로 스크롤

---

## 보더 & 라디우스 시스템 개선

### 완전한 라디우스 스케일 시스템
```tsx
const borderRadiusScale = [
  { 
    name: "radius-none", 
    radius: "0px", 
    className: "rounded-none",
    description: "모서리 없음, 각진 형태",
    useCase: "카드, 버튼의 기본 상태"
  },
  { 
    name: "radius-xs", 
    radius: "0.125rem", 
    className: "rounded-xs",
    description: "매우 작은 모서리",
    useCase: "작은 버튼, 태그, 배지"
  },
  { 
    name: "radius-sm", 
    radius: "0.25rem", 
    className: "rounded-sm",
    description: "작은 모서리",
    useCase: "입력 필드, 작은 카드"
  },
  { 
    name: "radius-md", 
    radius: "0.375rem", 
    className: "rounded-md",
    description: "중간 모서리",
    useCase: "일반적인 버튼, 카드"
  },
  { 
    name: "radius-lg", 
    radius: "0.5rem", 
    className: "rounded-lg",
    description: "큰 모서리",
    useCase: "큰 카드, 패널, 모달"
  },
  { 
    name: "radius-xl", 
    radius: "0.75rem", 
    className: "rounded-xl",
    description: "매우 큰 모서리",
    useCase: "히어로 섹션, 대형 컨테이너"
  },
  { 
    name: "radius-2xl", 
    radius: "1rem", 
    className: "rounded-2xl",
    description: "극대 모서리",
    useCase: "페이지 컨테이너, 대형 섹션"
  },
  { 
    name: "radius-full", 
    radius: "9999px", 
    className: "rounded-full",
    description: "완전한 원형",
    useCase: "아바타, 원형 버튼"
  }
];
```

### 계층별 굴곡률 가이드라인
```tsx
const borderRadiusHierarchy = [
  {
    level: "Container",
    description: "페이지, 섹션, 대형 카드",
    radius: "radius-xl (0.75rem)",
    examples: ["페이지 컨테이너", "히어로 섹션", "대형 정보 카드"]
  },
  {
    level: "Card",
    description: "일반적인 카드, 패널",
    radius: "radius-lg (0.5rem)",
    examples: ["제품 카드", "정보 패널", "설정 카드"]
  },
  {
    level: "Button",
    description: "버튼, 입력 필드",
    radius: "radius-md (0.375rem)",
    examples: ["주요 버튼", "입력 필드", "탭"]
  },
  {
    level: "Small Element",
    description: "태그, 배지, 작은 요소",
    radius: "radius-sm (0.25rem)",
    examples: ["태그", "배지", "작은 아이콘"]
  }
];
```

### 내부 여백 기반 굴곡률 계산 시스템
```tsx
const paddingRadiusRelationship = [
  {
    padding: "xs (0.5rem - 8px)",
    description: "매우 작은 여백",
    containerRadius: "radius-sm (0.25rem)",
    innerElementRadius: "radius-xs (0.125rem)",
    useCase: "컴팩트한 레이아웃, 태그, 작은 배지"
  },
  {
    padding: "sm (0.75rem - 12px)",
    description: "작은 여백",
    containerRadius: "radius-md (0.375rem)",
    innerElementRadius: "radius-sm (0.25rem)",
    useCase: "일반적인 카드, 버튼 그룹"
  },
  {
    padding: "md (1rem - 16px)",
    description: "중간 여백",
    containerRadius: "radius-lg (0.5rem)",
    innerElementRadius: "radius-md (0.375rem)",
    useCase: "정보 카드, 폼 섹션"
  },
  {
    padding: "lg (1.5rem - 24px)",
    description: "큰 여백",
    containerRadius: "radius-xl (0.75rem)",
    innerElementRadius: "radius-lg (0.5rem)",
    useCase: "히어로 섹션, 대형 패널"
  },
  {
    padding: "xl (2rem - 32px)",
    description: "매우 큰 여백",
    containerRadius: "radius-2xl (1rem)",
    innerElementRadius: "radius-xl (0.75rem)",
    useCase: "페이지 컨테이너, 대형 섹션"
  }
];
```

### 실제 사용 예시
```tsx
// 카드 안에 버튼이 들어가는 경우
<div className="p-6 rounded-lg bg-white shadow-md">
  <h3 className="text-lg font-semibold mb-4">카드 제목</h3>
  <p className="text-gray-600 mb-4">카드 내용 설명...</p>
  <button className="px-4 py-2 rounded-md bg-blue-500 text-white">
    액션 버튼
  </button>
</div>

// 여백: p-6 (1.5rem), 카드: rounded-lg (0.5rem), 버튼: rounded-md (0.375rem)
// 여백이 클 때는 굴곡률도 비례하여 증가
```

---

## 실행 계획

### Phase 1: 즉시 실행 가능한 핵심 개선 (1-2일)

#### 1.1 메인 페이지 히어로 섹션 개선
- **파일 수정**: `app/page.tsx`
- **구현 내용**: 
  - 현재 단조로운 텍스트를 카드 기반 레이아웃으로 변경
  - 디자인 시스템의 주요 특징을 시각적으로 표현
  - 빠른 시작을 위한 주요 컴포넌트 링크 제공

#### 1.2 사이드바 검색 기능 추가
- **파일 수정**: `components/ui/sidebar.tsx`
- **구현 내용**:
  - 사이드바 상단에 검색 입력 필드 추가
  - 실시간 필터링으로 메뉴 항목 검색
  - 검색 결과 하이라이트

#### 1.3 색상 페이지 탭 레이아웃 적용
- **파일 수정**: `app/foundation/colors/page.tsx`
- **구현 내용**:
  - 현재 세로로 나열된 색상 그룹을 탭으로 구분
  - 각 탭별로 관련 색상들을 그룹핑
  - 색상 복사 기능 추가

#### 1.4 보더 & 라디우스 시스템 완성
- **파일 수정**: `app/foundation/borders-radius/page.tsx`
- **구현 내용**:
  - 완전한 라디우스 스케일 시스템 구현
  - 계층별 굴곡률 가이드라인 추가
  - 내부 여백 기반 굴곡률 계산 시스템

### Phase 2: 반응형 및 그리드 시스템 개선 (3-5일)

#### 2.1 반응형 브레이크포인트 최적화
- **파일 수정**: `app/globals.css`, `app/layout.tsx`
- **구현 내용**:
  - 커스텀 브레이크포인트 변수 정의
  - 사이드바 반응형 동작 구현
  - 모바일 햄버거 메뉴 추가

#### 2.2 그리드 시스템 표준화
- **파일 수정**: `app/layout.tsx`, 각 페이지 컴포넌트
- **구현 내용**:
  - 통합 그리드 컨테이너 구조 적용
  - 콘텐츠 타입별 그리드 규칙 정의
  - 일관된 여백과 간격 시스템

### Phase 3: 고급 기능 및 최적화 (6-10일)

#### 3.1 애니메이션 및 마이크로 인터랙션
- **구현 내용**:
  - 사이드바 열기/닫기 애니메이션
  - 검색 결과 하이라이트 애니메이션
  - 호버 효과 및 전환 애니메이션

#### 3.2 접근성 개선
- **구현 내용**:
  - 키보드 네비게이션 지원
  - 스크린 리더 최적화
  - 고대비 모드 지원

---

## 기술적 구현 세부사항

### 1. 검색 기능 구현
```tsx
// components/ui/sidebar.tsx
const [searchQuery, setSearchQuery] = useState("");
const [filteredItems, setFilteredItems] = useState(menuItems);

useEffect(() => {
  if (!searchQuery) {
    setFilteredItems(menuItems);
    return;
  }
  
  const filtered = menuItems.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  setFilteredItems(filtered);
}, [searchQuery, menuItems]);
```

### 2. 반응형 사이드바 구현
```tsx
// components/ui/sidebar.tsx
const [isMobileOpen, setIsMobileOpen] = useState(false);

// 모바일에서 사이드바 토글
const toggleMobileSidebar = () => setIsMobileOpen(!isMobileOpen);

// 반응형 클래스 적용
<aside className={`
  ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
  md:translate-x-0
  fixed md:relative
  z-50 md:z-auto
  w-64 h-full
  bg-white shadow-lg
  transition-transform duration-300 ease-in-out
`}>
```

### 3. 그리드 시스템 유틸리티
```tsx
// lib/grid-utils.ts
export const getGridCols = (itemCount: number, breakpoint: 'sm' | 'md' | 'lg' = 'lg') => {
  const breakpointCols = {
    sm: Math.min(itemCount, 2),
    md: Math.min(itemCount, 3),
    lg: Math.min(itemCount, 4)
  };
  
  return `grid-cols-1 sm:grid-cols-${breakpointCols.sm} md:grid-cols-${breakpointCols.md} lg:grid-cols-${breakpointCols.lg}`;
};

export const getContentMaxWidth = (contentType: 'narrow' | 'default' | 'wide') => {
  const maxWidths = {
    narrow: 'max-w-4xl',
    default: 'max-w-7xl',
    wide: 'max-w-full'
  };
  
  return maxWidths[contentType];
};
```

### 4. 색상 복사 기능
```tsx
// components/ui/color-swatch.tsx
const copyToClipboard = async (value: string, type: 'hex' | 'css' | 'tailwind') => {
  try {
    await navigator.clipboard.writeText(value);
    // 성공 토스트 표시
    toast.success(`${type.toUpperCase()} 값이 복사되었습니다.`);
  } catch (err) {
    // 실패 시 폴백
    const textArea = document.createElement('textarea');
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    toast.success(`${type.toUpperCase()} 값이 복사되었습니다.`);
  }
};
```

### 5. 성능 최적화
```tsx
// 검색 디바운싱
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

// 가상화된 긴 목록
import { FixedSizeList as List } from 'react-window';

const VirtualizedMenu = ({ items, height, itemSize }) => (
  <List
    height={height}
    itemCount={items.length}
    itemSize={itemSize}
    width="100%"
  >
    {({ index, style }) => (
      <div style={style}>
        <MenuItem item={items[index]} />
      </div>
    )}
  </List>
);
```

---

## 결론

이 UX/UI 개선 계획을 통해 NeTaShaRa 디자인 시스템은 다음과 같은 이점을 얻을 수 있습니다:

1. **사용성 향상**: 검색 기능과 직관적인 네비게이션으로 개발자 경험 개선
2. **일관성 확보**: 표준화된 그리드 시스템과 굴곡률 가이드라인으로 일관된 디자인
3. **반응형 최적화**: 모든 디바이스에서 최적의 사용자 경험 제공
4. **유지보수성**: 체계적인 구조와 명확한 가이드라인으로 개발 효율성 증대

각 단계별로 점진적으로 구현하여 사용자 피드백을 반영하고, 지속적으로 개선해 나가는 것이 중요합니다.
