import Input from "./input";
import TermsAgreementText from "./terms-agreement-text";

const FrameWithText = () => {
  return (
    <div className="w-[580px] flex flex-col items-start justify-start gap-[40px] min-w-[580] max-w-full h-auto [transform:rotate(0deg)] text-left text-11xl text-primary-buttons font-impact hover:flex hover:w-[580px] hover:h-auto hover:flex-col hover:gap-[40px] hover:items-start hover:justify-start hover:[transform:rotate(0deg)] hover:min-w-[580] hover:max-w-full mq450:gap-[20px] mq450:min-w-full mq750:flex-1">
      <div className="h-[43px] flex flex-row items-end justify-start py-0 pr-px pl-0 box-border gap-[6px]">
        <img
          className="relative w-[44.3px] h-[38px]"
          loading="eager"
          alt=""
          src="/vector.svg"
        />
        <h1 className="m-0 relative text-inherit font-normal font-inherit mq1275:text-lg">
          sweeftly
        </h1>
      </div>
      <div className="flex flex-row items-start justify-start pt-0 px-0 pb-[17px] text-13xl text-neutral-base1 font-paragraph-large-medium">
        <h1 className="m-0 relative text-inherit leading-[120%] font-medium font-inherit mq1275:text-lgi mq1275:leading-[23px]">{`Sign Up `}</h1>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full w-auto h-auto hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[24px] hover:items-start hover:justify-start hover:max-w-full">
        <Input
          label="First Name"
          leftContentPlaceholder="abc@gmail.com"
          propDisplay="inline-block"
          propWidth="unset"
          propHeight="20px"
          propWidth1="20px"
        />
        <Input
          label="Last Name"
          leftContentPlaceholder="abc@gmail.com"
          propDisplay="inline-block"
          propWidth="unset"
          propHeight="20px"
          propWidth1="20px"
        />
        <Input
          label="Role"
          leftContentPlaceholder="abc@gmail.com"
          propDisplay="inline-block"
          propWidth="unset"
          propHeight="20px"
          propWidth1="20px"
        />
        <Input
          label="Active Org Email"
          leftContentPlaceholder="abc@gmail.com"
          propDisplay="inline-block"
          propWidth="unset"
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
      </div>
      <TermsAgreementText propDisplay="inline-block" />
    </div>
  );
};

export default FrameWithText;
