'use client';

import { Theme } from '@radix-ui/themes';
import { ReactNode } from 'react';

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <Theme
      appearance="light" // TODO: 다크 모드 토글 기능 구현 필요
      accentColor="blue"
      grayColor="slate"
      panelBackground="solid"
      scaling="100%"
      radius="medium"
    >
      {children}
    </Theme>
  );
}
