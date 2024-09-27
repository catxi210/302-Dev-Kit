import Image from "next/image";

import { useDomain } from "@/hooks/global/use-domain";

type Props = {
  type?: string;
  className?: string;
  width?: number;
  height?: number;
};

const AppLogo = ({ type, className, width = 150, height = 42 }: Props) => {
  const domain = useDomain();
  return (
    <div className={className}>
      {type === "mini" ? (
        <a
          href={domain}
          target="_blank"
          className="flex space-x-1 p-1 no-underline"
        >
          <Image
            className=""
            width={width}
            height={height}
            src="/images/global/logo-mini.png"
            alt=""
          />
        </a>
      ) : (
        <a
          href={domain}
          target="_blank"
          className="flex space-x-1 p-1 no-underline"
        >
          <Image
            className="hidden dark:block"
            width={width}
            height={height}
            src="/images/global/logo-dark.png"
            alt=""
          />
          <Image
            className="dark:hidden"
            width={width}
            height={height}
            src="/images/global/logo-light.png"
            alt=""
          />
        </a>
      )}
    </div>
  );
};

export default AppLogo;
