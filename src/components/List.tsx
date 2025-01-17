import { FC } from "react";

type ListProps = {
  className?: string;
  array: string[];
};

const List: FC<ListProps> = ({ className, array }) => {
  return (
    <ul className={className}>
      {array.map((element, index: number) => {
        return <li key={index}>{element}</li>;
      })}
    </ul>
  );
};

export default List;
