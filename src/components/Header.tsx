import PrimaryButton from "./Buttons/PrimaryButton";
import SunIcon from "@heroicons/react/24/solid/SunIcon";
import MoonIcon from "@heroicons/react/24/solid/MoonIcon";
import DownloadIcon from "@heroicons/react/24/solid/ArrowDownTrayIcon";
import { useTheme } from "next-themes";
import RenderIf from "./RenderIf";

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
    <div className="flex items-center justify-between mt-10 gap-4 text-black px-5 dark:text-white border-b border-t border-black dark:border-white">
      <div className="h-14 justify-between bg-white dark:bg-headerBgDark  rounded-lg flex items-center">
        <div className="flex flex-row gap-8">
          <span className="font-bold text-base border-r-[1px] border-black dark:border-white pr-8">
            Nikhil Radhakrishnan
          </span>
          <div className="flex mobile:hidden">
            <ul className="flex flex-row gap-8 box-border">
              <HeaderLink text="Home" />
              <HeaderLink text="Work" />
              <HeaderLink text="Timeline" />
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center cursor-pointer gap-2">
          <DownloadIcon className="h-6 w-6 text-headerBgDark dark:text-white" />
          <label className="hover:underline cursor-pointer">Download Resume</label>
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
    </div>
  );
};

export default Header;
