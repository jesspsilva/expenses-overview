import { generateColorClasses } from "./colors";

const hashString = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return Math.abs(hash);
};

export const createBadgeColorsMap = (values: string[]) => {
  const badgeColors = generateColorClasses(values.length, 0);
  const usedColorIndices = new Set<number>();
  
  return values.reduce((acc, value) => {
    let colorIndex = hashString(value) % badgeColors.length;
    
    while (usedColorIndices.has(colorIndex)) {
      colorIndex = (colorIndex + 1) % badgeColors.length;
    }
    
    usedColorIndices.add(colorIndex);
    
    return {
      ...acc,
      [value]: `bg-${badgeColors[colorIndex]}`,
    };
  }, {});
};
