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

export const createCategoryColorMap = (categories: string[]) => {
  const badgeColors = generateColorClasses(categories.length, 0);
  
  return categories.reduce(
    (acc, category) => ({
      ...acc,
      [category]: `bg-${badgeColors[hashString(category) % badgeColors.length]}`,
    }),
    {},
  );
};
