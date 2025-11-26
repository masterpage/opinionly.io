import { SerializedStyles } from "@emotion/react";
import { FC } from "react";

interface VersionProps {
  css?: SerializedStyles;
}

export const Version: FC<VersionProps> = (props) => {
  const version = `v${process.env.NEXT_PUBLIC_APP_VERSION}`;

  return <span {...props}>{version}</span>;
};
