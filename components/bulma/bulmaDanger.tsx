import React from 'react';

type BulmaDanger = {
  msg: string;
};
export const BulmaDanger: React.FC<BulmaDanger> = (props) => {
  const { msg } = props;
  return (
    <div className='notification is-danger'>
      <p>{msg}</p>
    </div>
  );
};
