import { useMemo } from "react";

const TermsAgreementText = ({
  vuesaxlinearminusCirlce,
  heart,
  arrowRight,
  vuesaxlinearminusCirlce1,
  propDisplay,
}) => {
  const byClickingSignContainerStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className="self-stretch flex flex-col items-center justify-start gap-[32px] max-w-full w-auto h-auto [transform:rotate(0deg)] text-left text-base text-neutral-40 font-paragraph-large-regular hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[32px] hover:items-center hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq450:gap-[16px]">
      <div
        className="self-stretch relative"
        style={byClickingSignContainerStyle}
      >
        <span className="leading-[120%]">
          <span>By clicking Sign Up, you agree to Sweeftly’s</span>
          <span className="text-neutral-base1">{` `}</span>
        </span>
        <span className="leading-[140%] font-medium font-paragraph-large-medium text-primary-buttons">{`Terms of Privacy & Policy`}</span>
      </div>
      <button className="cursor-pointer [border:none] p-4 bg-primary-buttons w-full rounded-lg flex flex-row items-center justify-center box-border max-w-[398px] mq750:max-w-full">
        <div className="flex-1 flex flex-row items-center justify-center py-0 px-1 box-border max-w-full h-auto gap-[8px] hover:flex hover:flex-1 hover:h-auto hover:flex-row hover:gap-[8px] hover:items-center hover:justify-center hover:py-0 hover:px-1 hover:box-border hover:max-w-full">
          <div className="relative text-lg leading-[24px] font-medium font-paragraph-large-medium text-neutral-0 text-center flex whitespace-nowrap hover:font-medium hover:font-paragraph-large-medium hover:text-lg hover:leading-[24px] hover:text-center hover:text-neutral-0 hover:flex hover:whitespace-nowrap">
            Sign Up
          </div>
        </div>
      </button>
    </div>
  );
};

export default TermsAgreementText;
