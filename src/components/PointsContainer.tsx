import React, { useState } from 'react'
import { type PointType } from '../types';
import Point from './Point';

const PointsContainer = () => {
  const [points, setPoints] = useState<Array<PointType>>([]);
  const [popped, setPopped] = useState<Array<PointType>>([]);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    setPoints([...points, {
      id: crypto.randomUUID(),
      x: clientX,
      y: clientY
    }])
  }

  const undo = () => {
    const newPoints = [...points]
    const poppedPoint = newPoints.pop();
    setPoints(newPoints);
    poppedPoint && setPopped([...popped, poppedPoint]);
  }

  const redo = () => {
    const lastPopped = popped.pop();
    lastPopped && setPoints([...points, lastPopped]);
  }

  return (
    <>
      <button onClick={undo}>Atrás</button>
      <button onClick={redo}>Adelante</button>
      <div className='container' onClick={handleClick}>
        {points.map((point) => <Point key={point.id} point={point} />)}
      </div>
    </>
  )
}

export default PointsContainer