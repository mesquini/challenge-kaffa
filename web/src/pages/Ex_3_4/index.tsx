import React, { useCallback, useState } from 'react';
import Draggable from 'react-draggable';
import Header from '../../components/Header';

import { Container, Rectangle } from './styles';

const Ex_3_4: React.FC = () => {
  const [overlap, SetOverlap] = useState(0);

  const handleDrag = useCallback(() => {
    var rectangle = document.getElementsByClassName('rectangle');

    const rectangle0 = rectangle.item(0)?.getBoundingClientRect();
    const rectangle1 = rectangle.item(1)?.getBoundingClientRect();

    if (rectangle0 && rectangle1) {
      var r0 = rectangle0,
        r1 = rectangle1,
        r1x = r0.left,
        r1y = r0.top,
        r1xMax = r0.left + rectangle0.width,
        r1yMax = r0.top + rectangle1.height,
        r2x = r1.left,
        r2y = r1.top,
        r2xMax = r1.left + r1.width,
        r2yMax = r1.top + r1.height,
        x_overlap = Math.max(0, Math.min(r1xMax, r2xMax) - Math.max(r1x, r2x)),
        y_overlap = Math.max(0, Math.min(r1yMax, r2yMax) - Math.max(r1y, r2y));

      SetOverlap(x_overlap * y_overlap);
    }
  }, []);

  return (
    <>
      <Header>Compute area of intersection between two rectangles</Header>
      <Container>
        <h3>Total overlap (px²): {overlap}</h3>
        <Draggable
          axis="both"
          handle=".rectangle"
          defaultPosition={{ x: 0, y: 0 }}
          grid={[10, 10]}
          scale={1}
          onDrag={handleDrag}
        >
          <Rectangle
            className="rectangle"
            style={{ borderColor: overlap > 0 ? '#ff9000' : '#000' }}
          />
        </Draggable>
        <Draggable
          axis="both"
          handle=".rectangle"
          defaultPosition={{ x: 0, y: 0 }}
          grid={[1, 1]}
          scale={1}
          onDrag={handleDrag}
        >
          <Rectangle
            className="rectangle"
            style={{ borderColor: overlap > 0 ? '#f90000' : '#000' }}
          />
        </Draggable>
      </Container>
    </>
  );
};

export default Ex_3_4;
