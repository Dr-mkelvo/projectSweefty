import { useState } from "react";

const FrameComponent = ({
  inputFrame,
  iconRight,
  iconRight1,
  vuesaxlinearminusCirlce,
  heart,
  arrowRight,
  vuesaxlinearminusCirlce1,
  socialIcons,
}) => {
  const [leftContentValue, setLeftContentValue] = useState("");
  const [leftContent1Value, setLeftContent1Value] = useState("");
  return (
    <div className="w-[580px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border min-w-[580] max-w-full h-auto gap-[0px] [transform:rotate(0deg)] text-left text-11xl text-primary-buttons font-impact hover:flex hover:w-[580px] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-6 hover:px-0 hover:pb-0 hover:box-border hover:min-w-[580] hover:max-w-full mq750:min-w-full mq1275:flex-1">
      <div className="self-stretch flex flex-col items-start justify-start gap-[65px] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[65px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq450:gap-[16px] mq750:gap-[32px]">
        <div className="flex flex-row items-end justify-start py-0 pr-[21px] pl-0 gap-[6px]">
          <img
            className="self-stretch relative max-h-full w-[44.3px] min-h-[38px]"
            loading="eager"
            alt=""
            src={inputFrame}
          />
          <h1 className="m-0 relative text-inherit font-normal font-inherit mq450:text-lg mq750:text-5xl">
            sweeftly
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[79px] max-w-full w-auto h-auto [transform:rotate(0deg)] text-13xl text-neutral-base1 font-paragraph-large-medium hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[79px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq450:gap-[20px] mq750:gap-[39px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[45px] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[45px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq750:gap-[22px]">
            <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit flex pr-5 w-[105px] hover:font-medium hover:font-paragraph-large-medium hover:text-13xl hover:leading-[120%] hover:text-left hover:text-neutral-base1 hover:flex hover:w-[105px] hover:pr-5 mq450:text-lgi mq450:leading-[23px] mq750:text-7xl mq750:leading-[31px]">
              Login
            </h1>
            <div className="self-stretch flex flex-col items-center justify-start gap-[54px] max-w-full w-auto h-auto [transform:rotate(0deg)] text-sm text-neutral-40 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[54px] hover:items-center hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq750:gap-[27px]">
              <form className="m-0 self-stretch flex flex-col items-center justify-start gap-[32px] max-w-full w-auto h-auto [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[32px] hover:items-center hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq750:gap-[16px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[24px] hover:items-start hover:justify-start hover:max-w-full">
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full w-auto h-auto gap-[8px] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[4px] hover:items-start hover:justify-start hover:max-w-full">
                      <div className="self-stretch relative text-sm leading-[145%] font-medium font-paragraph-large-medium text-neutral-40 text-left">
                        Email Address
                      </div>
                      <div className="self-stretch rounded-md bg-neutral-0 box-border overflow-hidden flex flex-row items-center justify-start py-4 pr-[17px] pl-[15px] gap-[12px] min-h-[56] max-w-full w-auto h-auto border-[1px] border-solid border-neutral-10 hover:bg-neutral-0 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[12px] hover:items-center hover:justify-start hover:rounded-md hover:py-4 hover:pr-[17px] hover:pl-[15px] hover:box-border hover:min-h-[56] hover:max-w-full hover:border-[1px] hover:border-solid hover:border-neutral-10 mq450:flex-wrap">
                        <input
                          className="[border:none] [outline:none] bg-[transparent] flex-1 h-5 flex flex-row items-center justify-start font-paragraph-large-regular text-sm text-darkgray min-w-[300] max-w-full gap-[8px] hover:flex hover:flex-1 hover:h-5 hover:flex-row hover:gap-[8px] hover:items-center hover:justify-start hover:min-w-[300] hover:max-w-full"
                          placeholder="abc@gmail.com"
                          type="text"
                          value={leftContentValue}
                          onChange={(event) =>
                            setLeftContentValue(event.target.value)
                          }
                        />
                        <div className="w-5 h-5 flex flex-row items-center justify-start" />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full w-auto h-auto gap-[8px] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[8px] hover:items-start hover:justify-start hover:max-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[4px] max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[4px] hover:items-start hover:justify-start hover:max-w-full">
                      <div className="self-stretch relative text-sm leading-[145%] font-medium font-paragraph-large-medium text-neutral-40 text-left">
                        Password
                      </div>
                      <div className="self-stretch rounded-md bg-neutral-0 box-border overflow-hidden flex flex-row items-center justify-start py-4 pr-[17px] pl-[15px] gap-[12px] min-h-[56] max-w-full w-auto h-auto border-[1px] border-solid border-neutral-10 hover:bg-neutral-0 hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[12px] hover:items-center hover:justify-start hover:rounded-md hover:py-4 hover:pr-[17px] hover:pl-[15px] hover:box-border hover:min-h-[56] hover:max-w-full hover:border-[1px] hover:border-solid hover:border-neutral-10 mq450:flex-wrap">
                        <input
                          className="[border:none] [outline:none] bg-[transparent] flex-1 h-5 flex flex-row items-center justify-start font-paragraph-large-regular text-sm text-darkgray min-w-[300] max-w-full gap-[8px] hover:flex hover:flex-1 hover:h-5 hover:flex-row hover:gap-[8px] hover:items-center hover:justify-start hover:min-w-[300] hover:max-w-full"
                          placeholder="**************"
                          type="text"
                          value={leftContent1Value}
                          onChange={(event) =>
                            setLeftContent1Value(event.target.value)
                          }
                        />
                        <div className="flex flex-row items-center justify-start">
                          <img
                            className="relative w-5 h-5"
                            alt=""
                            src={iconRight1}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative text-base leading-[120%] font-paragraph-large-regular text-primary-buttons text-left">
                  Forgot Password
                </div>
                <button className="cursor-pointer [border:none] p-4 bg-primary-buttons w-full rounded-lg flex flex-row items-center justify-center box-border max-w-[398px] mq450:max-w-full mq450:w-[calc(100%_-_40px)]">
                  <div className="flex-1 flex flex-row items-center justify-center py-0 px-1 box-border max-w-full h-auto gap-[8px] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[8px] hover:items-center hover:justify-center hover:py-0 hover:px-1 hover:box-border hover:max-w-full">
                    <div className="relative text-lg leading-[24px] font-medium font-paragraph-large-medium text-neutral-0 text-center">
                      Login
                    </div>
                  </div>
                </button>
              </form>
              <div className="relative leading-[145%] font-medium flex pl-5 pr-5 w-[60px] hover:font-medium hover:font-paragraph-large-medium hover:text-sm hover:leading-[145%] hover:text-left hover:text-neutral-40 hover:flex hover:w-[60px] hover:pl-5 hover:pr-5">
                OR
              </div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[21px] box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:pr-5 hover:pl-[21px] hover:box-border hover:max-w-full">
              <button className="cursor-pointer py-4 px-5 bg-darkslategray rounded-lg box-border w-[395px] flex flex-row items-center justify-center gap-[7px] max-w-full whitespace-nowrap h-auto border-[1px] border-solid border-neutral-base hover:flex hover:w-[395px] hover:h-auto hover:flex-row hover:gap-[7px] hover:items-center hover:justify-center hover:rounded-lg hover:py-4 hover:px-5 hover:box-border hover:max-w-full hover:whitespace-nowrap hover:border-[1px] hover:border-solid hover:border-neutral-base1 active:bg-darkslategray active:box-border active:border-[1px] active:border-solid active:border-neutral-base">
                <img
                  className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
                  alt=""
                  src={socialIcons}
                />
                <div className="relative text-base leading-[140%] font-medium font-paragraph-large-medium text-neutral-base1 text-left">
                  Sign Up with Google
                </div>
              </button>
            </div>
          </div>
          <div className="relative text-base flex pr-5 w-[247px] text-gray font-paragraph-large-regular hover:text-base hover:text-left hover:flex hover:w-[247px] hover:pr-5">
            <span>
              <span className="leading-[120%]">Don’t have an account?</span>
              <span className="leading-[140%] font-medium font-paragraph-large-medium">{` `}</span>
            </span>
            <span className="leading-[120%] font-semibold text-primary-buttons">
              Sign Up
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
