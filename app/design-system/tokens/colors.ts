import * as RadixColors from "@radix-ui/colors";

export const designTokens = {
  // 브랜드 컬러 매핑
  brand: {
    primary: RadixColors.blue, // blue1~blue12
    secondary: RadixColors.slate, // slate1~slate12
    accent: RadixColors.violet, // violet1~violet12
  },

  // 의미론적 컬러 매핑
  semantic: {
    success: RadixColors.green, // green1~green12
    warning: RadixColors.amber, // amber1~amber12
    error: RadixColors.red, // red1~red12
    info: RadixColors.blue, // blue1~blue12
  },

  // 중립 컬러 (그레이 스케일)
  neutral: {
    gray: RadixColors.gray, // 순수 그레이
    slate: RadixColors.slate, // 약간 푸른빛
    mauve: RadixColors.mauve, // 약간 보라빛
  },
};
