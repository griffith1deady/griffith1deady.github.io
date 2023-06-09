import { ChakraProps, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React, { ReactElement } from "react";

export type AppNavBarLinkProps = {
  href: string;
  children: ReactElement | string;
  target?: string;
} & ChakraProps;

const AppNavBarLink = ({
  href,
  children,
  target,
  ...props
}: AppNavBarLinkProps) => {
  return (
    // @ts-ignore
      <NextLink href={href ?? ""} legacyBehavior passHref scroll={false} {...props}>
        <Link  target={target} as="a" {...props}>
          {children}
        </Link>
      </NextLink>
  );
};

export default AppNavBarLink;
