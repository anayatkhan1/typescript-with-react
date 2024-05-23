import React from 'react'

type ButtonProps<T> = {
    countValue: T;
    countHistory: T[];
};

const ButtonGenerics<T> = ({ countValue, countHistory, }: ButtonProps<T>) => {
  return (
    <div>ButtonGenerics</div>
  )
}

export default ButtonGenerics;