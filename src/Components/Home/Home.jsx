import React from 'react';
import {useSelector } from 'react-redux';

export default function Home() {

let ac = useSelector(x => x.todos)
console.log(ac);

  return (
    <div> 
    </div>
  )
}
