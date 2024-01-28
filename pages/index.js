import FrameComponent from "../components/frame-component";

const OrgLogin = () => {
  return (
    <div className="relative bg-neutral-0 w-[1440px] overflow-hidden flex flex-row items-center justify-start gap-[67px] tracking-[normal] h-auto hover:bg-neutral-0 hover:flex hover:w-[1440px] hover:h-auto hover:flex-row hover:gap-[67px] hover:items-center hover:justify-start hover:tracking-[normal] mq450:gap-[17px] mq750:gap-[33px] mq1275:flex-wrap">
      <img
        className="relative max-h-full w-[693px] object-cover max-w-full flex hover:flex hover:w-[693px] hover:max-w-full mq1275:flex-1"
        loading="eager"
        alt=""
        src="/unsplashkszd9odvqk@2x.png"
      />
      <FrameComponent
        inputFrame="/vector.svg"
        iconRight1="/iconright.svg"
        socialIcons="/social-icons.svg"
      />
    </div>
  );
};

export default OrgLogin;
