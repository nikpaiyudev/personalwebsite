import PrimaryButton from "./Buttons/PrimaryButton";
import SunIcon from "@heroicons/react/24/solid/SunIcon";
import MoonIcon from "@heroicons/react/24/solid/MoonIcon";
import { useTheme } from "next-themes";
import RenderIf from "./RenderIf";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const Header = () => {
  const { theme, setTheme } = useTheme();
  const HeaderLink = ({ text }: { text: string }) => {
    return (
      <li className="box-content">
        <span className="cursor-pointer hover:font-medium">{text}</span>
      </li>
    );
  };

  return (
    <div className="flex items-center mt-10 gap-4 text-black dark:text-white">
      <div className="h-14 w-[85%] px-6 border justify-between bg-white dark:bg-headerBgDark dark:border-0 border-headerBorderColor rounded-lg flex items-center">
        <div className="flex flex-row gap-8">
          <span className="font-bold text-base border-r-[1px] border-black dark:border-white pr-8">
            .NikhilRadhakrishnan.
          </span>
          <div className="flex mobile:hidden">
            <ul className="flex flex-row gap-8 box-border">
              <HeaderLink text="Home" />
              <HeaderLink text="Work" />
            </ul>
          </div>
        </div>
        <div className="flex text-black">
          <RenderIf isTrue={theme === "light"}>
            <SunIcon
              className="h-6 w-6 text-headerBgDark cursor-pointer"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            />
          </RenderIf>
          <RenderIf isTrue={theme === "dark"}>
            <MoonIcon
              className="h-6 w-6 text-white cursor-pointer"
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
              }}
            />
          </RenderIf>
        </div>
      </div>
      <PrimaryButton
        className="h-14 w-[15%]  mobile:hidden flex justify-center gap-3 items-center  animate-none  bg-[#FB2576] text-white     shadow-none  hover:shadow-none"
        onClick={() => {}}
      >
        <span className="whitespace-nowrap">Download Resume</span>
      </PrimaryButton>
      {/* <div className="w-[15%] mobile:hidden tablet:hidden">
        <ConnectButton label="Connect Wallet" />
      </div> */}
    </div>
  );
};

export default Header;
