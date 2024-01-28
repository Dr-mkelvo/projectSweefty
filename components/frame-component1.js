import Input from "./input";
import TermsAgreementText from "./terms-agreement-text";

const FrameComponent1 = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full w-auto h-auto [transform:rotate(0deg)] text-left text-11xl text-neutral-40 font-paragraph-large-medium hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[40px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:max-w-full mq450:gap-[20px]">
      <div className="h-[43px] flex flex-row items-end justify-start py-0 pr-px pl-0 box-border gap-[6px] text-primary-buttons font-impact">
        <img
          className="relative w-[44.3px] h-[38px]"
          loading="eager"
          alt=""
          src="/vector.svg"
        />
        <h1 className="m-0 relative text-inherit font-normal font-inherit mq750:text-lg mq1275:text-5xl">
          sweeftly
        </h1>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[17px] text-13xl text-neutral-base1">
        <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit mq750:text-lgi mq750:leading-[23px] mq1275:text-7xl mq1275:leading-[31px]">{`Sign Up `}</h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full w-auto h-auto text-sm hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[24px] hover:items-start hover:justify-start hover:max-w-full">
        <Input
          label="Active Business Email"
          leftContentPlaceholder="abc@gmail.com"
          propDisplay="inline-block"
          propWidth="100%"
          propHeight="20px"
          propWidth1="20px"
        />
        <Input
          label="Password"
          leftContentPlaceholder="**************"
          iconRight="/iconright.svg"
          iconRight1
          propDisplay="inline-block"
          propWidth="unset"
          propHeight="unset"
          propWidth1="unset"
          propOverflow="unset"
        />
        <Input
          label="Confirm Password"
          leftContentPlaceholder="**************"
          iconRight="/iconright.svg"
          iconRight1
          propDisplay="inline-block"
          propWidth="unset"
          propHeight="unset"
          propWidth1="unset"
          propOverflow="unset"
        />
        <Input
          label="Business Name"
          leftContentPlaceholder="abc@gmail.com"
          propDisplay="inline-block"
          propWidth="unset"
          propHeight="20px"
          propWidth1="20px"
        />
        <Input
          label="Address"
          leftContentPlaceholder="abc@gmail.com"
          propDisplay="inline-block"
          propWidth="unset"
          propHeight="20px"
          propWidth1="20px"
        />
        <Input
          label="State"
          leftContentPlaceholder="abc@gmail.com"
          propDisplay="inline-block"
          propWidth="unset"
          propHeight="20px"
          propWidth1="20px"
        />
        <Input
          label="LGA"
          leftContentPlaceholder="abc@gmail.com"
          propDisplay="inline-block"
          propWidth="unset"
          propHeight="20px"
          propWidth1="20px"
        />
      </div>
      <TermsAgreementText propDisplay="inline-block" />
    </div>
  );
};

export default FrameComponent1;
