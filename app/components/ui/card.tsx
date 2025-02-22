interface ICardProps {
  title: string;
  value: string | number;
}

export const Card = ({ title, value }: ICardProps) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-sm border border-gray-200">
      <h2 className="text-md font-semibold">{title}</h2>
      <p>{value}</p>
    </div>
  );
};
