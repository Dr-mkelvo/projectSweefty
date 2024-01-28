const AlreadyUserFrame = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[677px] box-border max-w-full w-auto h-auto gap-[0px] [transform:rotate(0deg)] text-left text-sm text-neutral-40 font-paragraph-large-medium hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[0px] hover:items-start hover:justify-center hover:[transform:rotate(0deg)] hover:py-0 hover:pr-5 hover:pl-[677px] hover:box-border hover:max-w-full lg:pl-[338px] lg:box-border mq450:pl-[169px] mq450:box-border mq750:pl-5 mq750:box-border">
      <div className="w-[395px] flex flex-col items-center justify-start gap-[34px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[395px] hover:h-auto hover:flex-col hover:gap-[34px] hover:items-center hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq750:gap-[17px]">
        <div className="flex flex-row items-start justify-start py-0 pr-[17px] pl-0">
          <div className="relative leading-[145%] font-medium">OR</div>
        </div>
        <button className="cursor-pointer py-4 px-5 bg-darkslategray self-stretch rounded-lg box-border flex flex-row items-center justify-center gap-[8px] whitespace-nowrap w-auto h-auto border-[1px] border-solid border-neutral-base hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-row hover:gap-[8px] hover:items-center hover:justify-center hover:rounded-lg hover:py-4 hover:px-5 hover:box-border hover:whitespace-nowrap hover:border-[1px] hover:border-solid hover:border-neutral-base1 active:bg-darkslategray active:box-border active:border-[1px] active:border-solid active:border-neutral-base">
          <img
            className="relative w-6 h-6 overflow-hidden shrink-0 min-h-[24px]"
            alt=""
            src="/social-icons.svg"
          />
          <div className="relative text-base leading-[140%] font-medium font-paragraph-large-medium text-neutral-base1 text-left">
            Sign Up with Google
          </div>
        </button>
        <div className="flex flex-row items-start justify-start py-0 pr-1.5 pl-0 text-base text-gray font-paragraph-large-regular">
          <div className="relative">
            <span>
              <span className="leading-[120%]">Already a user?</span>
              <span className="leading-[140%] font-medium font-paragraph-large-medium">{` `}</span>
            </span>
            <span className="leading-[120%] font-semibold text-primary-buttons">
              Log In
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlreadyUserFrame;
