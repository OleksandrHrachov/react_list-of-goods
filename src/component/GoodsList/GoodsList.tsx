import React from 'react';

type Props = {
  goods: string[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => {
  return (
    <ul>
      {goods.map(el => (
        <li key={el}>
          {el}
        </li>
      ))}
    </ul>
  );
};