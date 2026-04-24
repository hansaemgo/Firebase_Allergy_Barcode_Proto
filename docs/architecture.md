<!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
# SafeBite Component Architecture & Structure Summary

이 문서는 프로토타이핑 단계에서 확립된 애플리케이션의 컴포넌트 트리와 렌더링 구조를 요약합니다.

## 🏗 Component Tree Visualization

```mermaid
graph TD
    %% Define Styles
    classDef layout fill:#e0f2fe,stroke:#0284c7,stroke-width:2px,color:#0f172a
    classDef page fill:#f0fdf4,stroke:#16a34a,stroke-width:2px,color:#0f172a
    classDef component fill:#fffbeb,stroke:#d97706,stroke-width:2px,color:#0f172a
    classDef ui fill:#f3f4f6,stroke:#4b5563,stroke-width:1px,color:#0f172a

    %% Root Level
    Root["Root Layout<br/>(src/app/layout.tsx)"]:::layout
    Toaster["Toaster Component<br/>(src/components/ui/toaster.tsx)"]:::ui

    Root --> Toaster

    %% App Pages
    subgraph AppPages ["App Pages"]
        Home["Home Page<br/>(src/app/page.tsx)"]:::page
        Scan["Scan Page<br/>(src/app/scan/page.tsx)"]:::page
        Result["Result Page<br/>(src/app/result/page.tsx)"]:::page
        Profiles["Profiles Page<br/>(src/app/profiles/page.tsx)"]:::page
        Alerts["Alerts Page<br/>(src/app/alerts/page.tsx)"]:::page
        Admin["Admin Page<br/>(src/app/admin/page.tsx)"]:::page
    end

    Root --> Home
    Root --> Scan
    Root --> Result
    Root --> Profiles
    Root --> Alerts
    Root --> Admin

    %% Shared Navigation
    AppNav["App Navigation<br/>(src/components/app-nav.tsx)"]:::component
    Home --> AppNav
    Scan --> AppNav
    Result --> AppNav
    Profiles --> AppNav
    Alerts --> AppNav
    Admin --> AppNav

    %% UI Components
    subgraph ShadcnUI ["UI Components (src/components/ui)"]
        UI_Card["Card (CVA Variants)"]:::ui
        UI_Button["Button"]:::ui
        UI_Dialog["Dialog"]:::ui
        UI_Badge["Badge"]:::ui
        UI_Others["...other primitives"]:::ui
    end

    %% Dependencies to UI
    AppNav -.-> UI_Button
    Home -.-> UI_Card
    Scan -.-> UI_Dialog
    Admin -.-> UI_Card
```

## 📊 Structure Summary

1. **Next.js App Router (페이지 레벨 라우팅)**:
   - 모든 화면은 `src/app/{route}/page.tsx` 형태로 독립적으로 분리되어 있습니다.
   - `layout.tsx`에서 글로벌 메타데이터와 폰트, Toaster(알림)를 공통으로 렌더링합니다.

2. **UI 레이어 분리 (Shadcn UI 기반)**:
   - 비즈니스 로직과 UI 컴포넌트의 결합도를 낮추기 위해 `src/components/ui` 에 35개의 독립적인 UI 프리미티브 컴포넌트를 배치했습니다.
   - 이를 통해 페이지 단위 파일에서는 UI를 다시 그리지 않고 조합하여 사용합니다.

3. **공통 컴포넌트 (`<AppNav />`)**:
   - 모바일 하단 내비게이션은 `layout.tsx`에 고정하지 않고 각 페이지 하단에서 렌더링하여 화면별로 내비게이션 숨김 처리를 용이하게 설계했습니다. (추후 `MobileLayout` 공통 래퍼 컴포넌트 도입 예정)
