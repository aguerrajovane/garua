import { getIntl } from "../../lib/intl";

type HomeProps = {
  params: { locale: string };
};

export default async function Home({ params: { locale } }: HomeProps) {
  const intl = await getIntl(locale);

  return (
    <>
      <main className="">
        <h1 className="">{intl.formatMessage({ id: "page.home.title" })}</h1>
      </main>
    </>
  );
}
