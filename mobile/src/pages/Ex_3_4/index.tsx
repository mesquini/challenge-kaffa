import React, {useCallback, useMemo, useState, useRef, useEffect} from 'react';
import {
  PanResponder,
  Animated,
  UIManager,
  findNodeHandle,
  ToastAndroid,
} from 'react-native';

import Header from '../../components/Header';
import {Container, OverLap, Rectangle} from './styles';

interface IRect {
  x: number;
  y: number;
}

const HEIGHT = 78.18181610107422;
const WIDTH = 157.09091186523438;

const measureInWindow = (handler: number) =>
  new Promise((resolve) => {
    UIManager.measureInWindow(handler, (x, y) => {
      resolve({x, y});
    });
  });

const Ex_3_4: React.FC = () => {
  const rectangle = new Animated.ValueXY();
  const view0 = useRef(null);

  const rectangle2 = new Animated.ValueXY();
  const view1 = useRef(null);

  const onMove = useCallback(async () => {
    const result = await intersectingRect();
    // setOverlap(result);
    ToastAndroid.showWithGravity(
      `Total overlap (px²): ${result.toFixed(3)}`,
      1500,
      ToastAndroid.CENTER,
    );
  }, []);

  const handler = useMemo(() => {
    return PanResponder.create({
      onStartShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        rectangle.setOffset({
          x: rectangle.x._value,
          y: rectangle.y._value,
        });

        rectangle.setValue({x: 0, y: 0});
      },

      onPanResponderMove: async (e, gestureState) => {
        Animated.event(
          [
            null,
            {
              dx: rectangle.x,
              dy: rectangle.y,
            },
          ],
          {
            useNativeDriver: false,
            listener: async () => await onMove(),
          },
        )(e, gestureState);
      },

      onPanResponderRelease: () => {
        rectangle.flattenOffset();
      },
    });
  }, []);

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

      onPanResponderMove: async (e, gestureState) => {
        Animated.event(
          [
            null,
            {
              dx: rectangle2.x,
              dy: rectangle2.y,
            },
          ],
          {
            useNativeDriver: false,
            listener: async () => await onMove(),
          },
        )(e, gestureState);
      },

      onPanResponderRelease: () => {
        rectangle2.flattenOffset();
      },
    });
  }, [rectangle2]);

  const intersectingRect = useCallback(async () => {
    const {A, B} = await measure();

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

  const measure = useCallback(async () => {
    var A: IRect = {x: 0, y: 0};
    var B: IRect = {x: 0, y: 0};

    const handle0 = findNodeHandle(view0.current);

    if (handle0 === null) return {A, B};

    A = (await measureInWindow(handle0)) as IRect;

    const handle1 = findNodeHandle(view1.current);

    if (handle1 === null) return {A, B};

    B = (await measureInWindow(handle1)) as IRect;

    return {A, B};
  }, []);

  return (
    <Container>
      <Header>Compute area of intersection between two rectangles</Header>

      {/* <OverLap>asdasd {overlap}</OverLap> */}

      <Rectangle
        ref={view0}
        style={{
          transform: [{translateX: rectangle.x}, {translateY: rectangle.y}],
        }}
        {...handler.panHandlers}
      />
      <Rectangle
        ref={view1}
        {...handler2.panHandlers}
        style={{
          transform: [{translateX: rectangle2.x}, {translateY: rectangle2.y}],
        }}
      />
    </Container>
  );
};

export default Ex_3_4;
