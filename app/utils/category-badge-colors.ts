export const badgeColors = [
  { className: "bg-slate-100 text-slate-800" },
  { className: "bg-gray-100 text-gray-800" },
  { className: "bg-zinc-100 text-zinc-800" },
  { className: "bg-neutral-100 text-neutral-800" },
  { className: "bg-stone-100 text-stone-800" },
  { className: "bg-red-100 text-red-800" },
  { className: "bg-orange-100 text-orange-800" },
  { className: "bg-amber-100 text-amber-800" },
  { className: "bg-yellow-100 text-yellow-800" },
  { className: "bg-lime-100 text-lime-800" },
  { className: "bg-green-100 text-green-800" },
  { className: "bg-emerald-100 text-emerald-800" },
  { className: "bg-teal-100 text-teal-800" },
  { className: "bg-cyan-100 text-cyan-800" },
  { className: "bg-sky-100 text-sky-800" },
  { className: "bg-blue-100 text-blue-800" },
  { className: "bg-indigo-100 text-indigo-800" },
  { className: "bg-violet-100 text-violet-800" },
  { className: "bg-purple-100 text-purple-800" },
  { className: "bg-fuchsia-100 text-fuchsia-800" },
  { className: "bg-pink-100 text-pink-800" },
  { className: "bg-slate-200 text-slate-800" },
  { className: "bg-gray-200 text-gray-800" },
  { className: "bg-zinc-200 text-zinc-800" },
  { className: "bg-neutral-200 text-neutral-800" },
  { className: "bg-stone-200 text-stone-800" },
  { className: "bg-red-200 text-red-800" },
  { className: "bg-orange-200 text-orange-800" },
  { className: "bg-amber-200 text-amber-800" },
  { className: "bg-yellow-200 text-yellow-800" },
  { className: "bg-lime-200 text-lime-800" },
  { className: "bg-green-200 text-green-800" },
  { className: "bg-emerald-200 text-emerald-800" },
  { className: "bg-teal-200 text-teal-800" },
  { className: "bg-cyan-200 text-cyan-800" },
  { className: "bg-sky-200 text-sky-800" },
  { className: "bg-blue-200 text-blue-800" },
  { className: "bg-indigo-200 text-indigo-800" },
  { className: "bg-violet-200 text-violet-800" },
  { className: "bg-purple-200 text-purple-800" },
  { className: "bg-fuchsia-200 text-fuchsia-800" },
  { className: "bg-pink-200 text-pink-800" },
];

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
  return categories.reduce(
    (acc, category) => ({
      ...acc,
      [category]: badgeColors[hashString(category) % badgeColors.length],
    }),
    {} as Record<string, (typeof badgeColors)[number]>,
  );
};

export type BadgeStyle = (typeof badgeColors)[number];
export type CategoryColorMap = Record<string, BadgeStyle>;
