"use client";

import { FormattedMessage } from "react-intl";

import FooterContainer from "./FooterContainer";

function Footer({ locale }: { locale: string }) {
  return (
    <FooterContainer locale={locale}>
      <div>
        <FormattedMessage tagName="p" id="common.footer" />
      </div>
    </FooterContainer>
  );
}

export default Footer;
