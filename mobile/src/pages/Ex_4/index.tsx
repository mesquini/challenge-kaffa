import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {PanResponder, Animated} from 'react-native';

import Header from '../../components/Header';
import {Container, Rectangle} from './styles';

const Ex_4: React.FC = () => {
  const [view0, setView0] = useState();

  const rectangle = new Animated.ValueXY({x: 0, y: 0});

  const rectangle2 = new Animated.ValueXY({x: 0, y: 0});

  const handler = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderGrant: () => {
      rectangle.setOffset({
        x: rectangle.x._value,
        y: rectangle.y._value,
      });

      rectangle.setValue({x: 0, y: 0});
    },

    onPanResponderMove: (e, gestureState) => {
      rectangle.setValue({
        x: gestureState.dx,
        y: gestureState.dy,
      });

      return Animated.event(
        [
          null,
          {
            dx: rectangle.x,
            dy: rectangle.y,
          },
        ],
        {
          useNativeDriver: true,
        },
      );
    },

    onPanResponderRelease: () => {
      rectangle.flattenOffset();
    },
  });

  const handler2 = PanResponder.create({
    onMoveShouldSetPanResponder: () => true,

    onPanResponderGrant: () => {
      rectangle2.setOffset({
        x: rectangle2.x._value,
        y: rectangle2.y._value,
      });

      rectangle2.setValue({x: 0, y: 0});
    },

    onPanResponderMove: (e, gestureState) => {
      rectangle2.setValue({
        x: gestureState.dx,
        y: gestureState.dy,
      });
      console.log(e.nativeEvent);
      // view0.measure((fx, fy, width, height, px, py) => {
      //   console.log('Component width is: ' + width);
      //   console.log('Component height is: ' + height);
      //   console.log('X offset to frame: ' + fx);
      //   console.log('Y offset to frame: ' + fy);
      //   console.log('X offset to page: ' + px);
      //   console.log('Y offset to page: ' + py);
      // })

      return Animated.event(
        [
          null,
          {
            dx: rectangle2.x,
            dy: rectangle2.y,
          },
        ],
        {
          useNativeDriver: true,
        },
      );
    },

    onPanResponderRelease: () => {
      rectangle2.flattenOffset();
    },
  });

  function computeArea(K, L, M, N, P, Q, R, S) {
    let areaA = Number((M - K) * (N - L));
    let areaB = Number((R - P) * (S - Q));
    var xIntersection = 0;
    var yIntersection = 0;
    var areaIntersection = 0;

    if (Math.min(M, R) - Math.max(K, P) > 0) {
      xIntersection = Number(Math.min(M, R) - Math.max(K, P));
    }

    if (Math.min(N, S) - Math.max(L, Q) > 0) {
      yIntersection = Number(Math.min(N, S) - Math.max(L, Q));
    }

    if (xIntersection == 0 || yIntersection == 0) {
      areaIntersection = 0;
    } else {
      areaIntersection = Number(xIntersection * yIntersection);
    }

    return areaA + areaB - areaIntersection;
  }

  return (
    <Container>
      <Header>Compute area of intersection between two rectangles</Header>

      <Rectangle
        ref={(view0) => setView0(view0)}
        onLayout={(event) => {
          const layout = event.nativeEvent.layout;
          console.log('height:', layout.height);
          console.log('width:', layout.width);
          console.log('x:', layout.x);
          console.log('y:', layout.y);
        }}
        {...handler.panHandlers}
        style={{
          transform: [{translateX: rectangle.x}, {translateY: rectangle.y}],
        }}
      />
      <Rectangle
        {...handler2.panHandlers}
        onLayout={(event) => {
          const layout = event.nativeEvent.layout;
          console.log('height:', layout.height);
          console.log('width:', layout.width);
          console.log('x:', layout.x);
          console.log('y:', layout.y);
        }}
        style={{
          transform: [{translateX: rectangle2.x}, {translateY: rectangle2.y}],
        }}
      />
    </Container>
  );
};

export default Ex_4;
