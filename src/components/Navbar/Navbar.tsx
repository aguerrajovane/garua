import Link from "next/link";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { buttonVariants } from "../ui/button";
import { i18n } from "../../../i18n-config";

//import { ArrowRight } from 'lucide-react'

//import MobileNav from './MobileNav'

const Navbar = async () => {
  const { locales, defaultLocale } = i18n;

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            <span>Garúa</span>
          </Link>
          <div className="hidden items-center space-x-4 sm:flex">
            <Link
              href="/contacto"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              Contacto
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
