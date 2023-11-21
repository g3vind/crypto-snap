import { useNavigate } from "react-router-dom";
import { LogoIcon } from "../icons/icons";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-800 text-white h-10 flex items-center  bottom-0 w-full">
      <div className="wrapper-container w-full">
        <div
          className="flex items-center justify-center gap-1 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <LogoIcon />
          <p className="font-semibold text-center">
            <span className="text-yellow-500">C</span>ypto
            <span className="text-yellow-500"> S</span>nap
            <span className="text-sm font-extralight">
              {" "}
              All Copyright Rights Reserved &#169;
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
