import FrameComponent1 from "../components/frame-component1";
import AlreadyUserFrame from "../components/already-user-frame";

const RetailSignUp = () => {
  return (
    <div className="relative bg-neutral-0 w-[1440px] overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-[110px] box-border gap-[42px] tracking-[normal] h-auto hover:bg-neutral-0 hover:flex hover:w-[1440px] hover:h-auto hover:flex-col hover:gap-[42px] hover:items-start hover:justify-start hover:pt-0 hover:px-0 hover:pb-[110px] hover:box-border hover:tracking-[normal] mq450:gap-[21px]">
      <main className="w-[1360px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[67px] max-w-full h-auto [transform:rotate(0deg)] hover:flex hover:w-[1360px] hover:h-auto hover:flex-row hover:gap-[67px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:py-0 hover:pr-5 hover:pl-0 hover:box-border hover:max-w-full lg:flex-wrap mq450:gap-[33px] mq750:gap-[17px]">
        <img
          className="flex-1 relative max-w-full overflow-hidden h-[1024px] object-cover min-w-[450] flex hover:flex hover:flex-1 hover:h-[1024px] hover:min-w-[450] hover:max-w-full mq450:min-w-full"
          loading="eager"
          alt=""
          src="/unsplashkszd9odvqk@2x.png"
        />
        <div className="w-[580px] flex flex-col items-start justify-start pt-[147px] px-0 pb-0 box-border min-w-[580] max-w-full h-auto gap-[0px] [transform:rotate(0deg)] hover:flex hover:w-[580px] hover:h-auto hover:flex-col hover:gap-[0px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:pt-[147px] hover:px-0 hover:pb-0 hover:box-border hover:min-w-[580] hover:max-w-full lg:flex-1 lg:pt-24 lg:box-border mq450:pt-[62px] mq450:box-border mq450:min-w-full">
          <FrameComponent1 />
        </div>
      </main>
      <AlreadyUserFrame />
    </div>
  );
};

export default RetailSignUp;
