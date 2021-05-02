import React from 'react';
type BulmaSubmitProps = {} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;
export const BulmaSubmit: React.FC<BulmaSubmitProps> = (props) => {
  return (
    <div className="field">
      <div className="control">
        <button type={'submit'} className={'button is-primary'} {...props}>
          Submit
        </button>
      </div>
    </div>
  );
};
