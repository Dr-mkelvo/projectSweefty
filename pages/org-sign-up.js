import FrameWithText from "./frame-with-text";
import SocialIconsFrame from "./social-icons-frame";

const OrgSignUp = () => {
  return (
    <form className="m-0 w-[1440px] bg-neutral-0 overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[228px] box-border gap-[48px] tracking-[normal] mq750:gap-[24px]">
      <main className="w-[1360px] flex flex-row items-end justify-start py-0 pr-5 pl-0 box-border gap-[67px] max-w-full mq750:gap-[33px] mq1100:flex-wrap mq450:gap-[17px]">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[450px] min-h-[1075px] max-w-full mq750:min-w-full mq1100:min-h-[auto]">
          <img
            className="self-stretch h-[1024px] relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="eager"
            alt=""
            src="/unsplashkszd9odvqk@2x.png"
          />
        </div>
        <FrameWithText />
      </main>
      <SocialIconsFrame />
    </form>
  );
};

export default OrgSignUp;