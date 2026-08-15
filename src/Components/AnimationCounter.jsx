import { useEffect, useRef } from "react";
import gsap from "gsap";
import { counterItems } from "../Constants";

const Counter = ({ value, suffix }) => {
  const counterRef = useRef(null);

  useEffect(() => {
    const count = { value: 0 };

    const animation = gsap.to(count, {
      value,
      duration: 1,

      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent =
            Math.floor(count.value) + suffix;
        }
      },
    });

    return () => animation.kill();
  }, [value, suffix]);

  return <span ref={counterRef}>0{suffix}</span>;
};

const AnimationCounter = () => {
  return (
    <div id="counter" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mx-auto grid-4-cols">
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="text-white text-5xl font-bold mb-2">
              <Counter
                value={item.value}
                suffix={item.suffix}
              />
            </div>

            <div className="text-white-50 text-lg">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimationCounter;