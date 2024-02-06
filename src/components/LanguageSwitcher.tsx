import * as React from "react";
import Link from "next/link";
import { i18n } from "../../i18n-config";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SelectScrollable() {
  const { locales, defaultLocale } = i18n;

  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={defaultLocale} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="es">
            <Link href="/es">Español</Link>
          </SelectItem>
          <SelectItem value="en">
            <Link href="/en">English</Link>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
