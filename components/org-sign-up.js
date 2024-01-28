import FrameWithText from "./frame-with-text";
import SocialIconsFrame from "./social-icons-frame";

const OrgSignUp = () => {
  return (
    <form className="m-0 bg-neutral-0 w-[1440px] overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[228px] box-border gap-[48px] tracking-[normal] h-auto hover:bg-neutral-0 hover:flex hover:w-[1440px] hover:h-auto hover:flex-col hover:gap-[48px] hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-[228px] hover:box-border hover:tracking-[normal] mq450:gap-[24px]">
      <main className="w-[1360px] flex flex-row items-end justify-start py-0 pr-5 pl-0 box-border gap-[67px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[1360px] hover:h-auto hover:flex-row hover:gap-[67px] hover:items-end hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-5 hover:pl-0 hover:box-border hover:max-w-full mq450:gap-[33px] mq750:flex-wrap mq1275:gap-[17px]">
        <div className="flex-1 flex flex-col items-start justify-start min-w-[450] min-h-[1075] max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:flex-1 hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:min-w-[450] hover:min-h-[1075] hover:max-w-full mq450:min-w-full mq750:min-h-[auto]">
          <img
            className="self-stretch relative max-w-full overflow-hidden h-[1024px] shrink-0 object-cover"
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
