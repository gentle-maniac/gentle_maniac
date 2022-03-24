import React from "react";
import { useTrail, animated } from "react-spring";

export const Trail = ({ open, children, delay = 0 }) => {
  const items = React.Children.toArray(children);

  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20 },
    delay,
  });

  return (
    <div>
      {trail.map(({ ...style }, index) => (
        <animated.div key={index} style={style}>
          <animated.div>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  );
};
