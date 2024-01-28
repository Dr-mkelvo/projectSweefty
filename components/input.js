import { useState, useMemo } from "react";

const Input = ({
  label,
  leftContentPlaceholder,
  iconRight,
  iconRight1,
  propDisplay,
  propWidth,
  propHeight,
  propWidth1,
  propOverflow,
}) => {
  const [leftContentValue, setLeftContentValue] = useState("");
  const labelStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const leftContentStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rightContentStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth1,
    };
  }, [propHeight, propWidth1]);

  const iconRightStyle = useMemo(() => {
    return {
      overflow: propOverflow,
    };
  }, [propOverflow]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start max-w-full w-auto h-auto gap-[8px] text-left text-sm text-neutral-40 font-paragraph-large-medium hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:max-w-full">
      <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[4px] hover:items-start hover:justify-start hover:max-w-full">
        <div
          className="self-stretch relative leading-[145%] font-medium"
          style={labelStyle}
        >
          {label}
        </div>
        <div className="self-stretch rounded-md bg-neutral-0 box-border overflow-hidden flex flex-row items-center justify-start py-4 pr-[17px] pl-[15px] gap-[12px] min-h-[56] max-w-full w-auto h-auto border-[1px] border-solid border-neutral-10 hover:bg-neutral-0 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[12px] hover:items-center hover:justify-start hover:rounded-md hover:py-4 hover:pr-[17px] hover:pl-[15px] hover:box-border hover:min-h-[56] hover:max-w-full hover:border-[1px] hover:border-solid hover:border-neutral-10 mq450:flex-wrap">
          <input
            className="[border:none] [outline:none] bg-[transparent] flex-1 h-5 flex flex-row items-center justify-start font-paragraph-large-regular text-sm text-darkgray min-w-[300] max-w-full gap-[8px] hover:flex hover:flex-1 hover:h-5 hover:flex-row hover:gap-[8px] hover:items-center hover:justify-start hover:min-w-[300] hover:max-w-full"
            placeholder={leftContentPlaceholder}
            type="text"
            value={leftContentValue}
            onChange={(event) => setLeftContentValue(event.target.value)}
            style={leftContentStyle}
          />
          <div
            className="w-5 h-5 flex flex-row items-center justify-start"
            style={rightContentStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
