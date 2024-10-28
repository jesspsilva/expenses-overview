export const tailwindColors = [
  "gray",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
];

export const intensities = [100, 200, 300, 400, 500, 600, 700, 800, 900];

export function generateColorClasses(
  numberOfColors: number,
  baseIntensityIndex: number,
): string[] {
  const colors: string[] = [];
  let currentIntensityIndex = baseIntensityIndex;

  for (let i = 0; i < numberOfColors; i++) {
    // If we've used all colors, reset color index and increase intensity
    if (i >= tailwindColors.length) {
      const cycleNumber = Math.floor(i / tailwindColors.length);
      // Only increase intensity if we're not at the last intensity (900)
      currentIntensityIndex =
        baseIntensityIndex === intensities.length - 1
          ? baseIntensityIndex
          : Math.min(baseIntensityIndex + cycleNumber, intensities.length - 1);
    }

    const colorIndex = i % tailwindColors.length;
    colors.push(
      `${tailwindColors[colorIndex]}-${intensities[currentIntensityIndex]}`,
    );
  }

  return colors;
}
