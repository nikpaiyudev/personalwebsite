import PrimaryButton from "./Buttons/PrimaryButton";
import BeakerIcon from "@heroicons/react/24/solid/SunIcon";

const Header = () => {
  const HeaderLink = ({ text }: { text: string }) => {
    return (
      <li className="box-content">
        <span className="cursor-pointer hover:font-medium">{text}</span>
      </li>
    );
  };

  return (
    <div className="flex items-center mt-6 gap-4">
      <div className="h-14 w-full px-6 border justify-between border-headerBorderColor rounded-lg flex items-center">
        <div className="flex flex-row gap-8">
          <span className="font-bold text-base border-r-[1px] border-black pr-8">
            .NikhilRadhakrishnan.
          </span>
          <div className="flex mobile:hidden">
            <ul className="flex flex-row gap-8 box-border">
              <HeaderLink text="Me" />
              <HeaderLink text="Work" />
              <HeaderLink text="Experience" />
            </ul>
          </div>
        </div>
        <div className="flex text-black">
          <BeakerIcon className="h-6 w-6 text-black cursor-pointer" />
        </div>
      </div>
      <PrimaryButton
        className="h-14 w-52 mobile:hidden hover:bg-bgDark hover:text-white bg-white  text-fontTextDark hover:border-1 hover:border-black  shadow-none border border-headerBorderColor hover:shadow-none"
        onClick={() => {}}
      >
        <span>Connect Wallet</span>
      </PrimaryButton>
    </div>
  );
};

export default Header;
