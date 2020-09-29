import React, {useCallback, useMemo, useState} from 'react';
import {PanResponder, Animated, ToastAndroid} from 'react-native';

import Header from '../../components/Header';
import {Container, OverLap, Rectangle} from './styles';

interface IRect {
  x: number;
  y: number;
}

const HEIGHT = 78.18181610107422;
const WIDTH = 157.09091186523438;

const Ex_3_4: React.FC = () => {
  const rectangle = new Animated.ValueXY({x: 0, y: 0});
  const [r1, setR1] = useState<IRect>();

  const rectangle2 = new Animated.ValueXY({x: 0, y: 0});
  const [r2, setR2] = useState<IRect>();

  var overlapResult = 0;

  const handler = useMemo(() => {
    return PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        rectangle.setOffset({
          x: rectangle.x._value,
          y: rectangle.y._value,
        });

        rectangle.setValue({x: 0, y: 0});
      },

      onPanResponderMove: (e, gestureState) => {
        const layout = e.nativeEvent;

        rectangle.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });

        if (r2) {
          overlapResult = intersectingRect(
            {
              x: layout.pageX,
              y: layout.pageY,
            },
            {
              x: r2.x,
              y: r2.y,
            },
          );
        }

        console.log(overlapResult);

        ToastAndroid.showWithGravity(
          `Total overlap (px²): ${overlapResult.toFixed(3)}`,
          1500,
          ToastAndroid.CENTER,
        );

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
  }, [rectangle, r2]);

  const handler2 = useMemo(() => {
    return PanResponder.create({
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        rectangle2.setOffset({
          x: rectangle2.x._value,
          y: rectangle2.y._value,
        });

        rectangle2.setValue({x: 0, y: 0});
      },

      onPanResponderMove: (e, gestureState) => {
        const layout = e.nativeEvent;

        // console.log(e.nativeEvent);
        if (r1) {
          overlapResult = intersectingRect(
            {
              x: r1.x,
              y: r1.y,
            },
            {
              x: layout.pageX,
              y: layout.pageY,
            },
          );
        }

        rectangle2.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });

        console.log(overlapResult);

        ToastAndroid.showWithGravity(
          `Total overlap (px²): ${overlapResult.toFixed(3)}`,
          1500,
          ToastAndroid.CENTER,
        );

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
  }, [r1, rectangle2]);

  const intersectingRect = useCallback((A: IRect, B: IRect) => {
    var d1x = A.x;
    var d1y = A.y;
    var d1xMax = A.x + WIDTH;
    var d1yMax = A.y + HEIGHT;

    var d2x = B.x;
    var d2y = B.y;
    var d2xMax = B.x + WIDTH;
    var d2yMax = B.y + HEIGHT;

    var x_overlap = Math.max(0, Math.min(d1xMax, d2xMax) - Math.max(d1x, d2x));
    var y_overlap = Math.max(0, Math.min(d1yMax, d2yMax) - Math.max(d1y, d2y));

    return x_overlap * y_overlap;
  }, []);

  return (
    <Container>
      <Header>Compute area of intersection between two rectangles</Header>

      <Rectangle
        {...handler.panHandlers}
        style={{
          transform: [{translateX: rectangle.x}, {translateY: rectangle.y}],
        }}
        onLayout={(event) => {
          const {x, y} = event.nativeEvent.layout;
          setR1({x, y});
        }}
      />
      <Rectangle
        {...handler2.panHandlers}
        style={{
          transform: [{translateX: rectangle2.x}, {translateY: rectangle2.y}],
        }}
        onLayout={(event) => {
          const {x, y} = event.nativeEvent.layout;
          setR2({x, y});
        }}
      />
    </Container>
  );
};

export default Ex_3_4;
