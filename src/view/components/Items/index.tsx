interface ItemsProps {
  currentItems: number[];
}

export function Items({ currentItems }: ItemsProps) {
  return (
    <div className="trasi">
      {currentItems?.map((item) => (
        <div key={item}>
          <h3>#{item}</h3>
        </div>
      ))}
    </div>
  );
}
