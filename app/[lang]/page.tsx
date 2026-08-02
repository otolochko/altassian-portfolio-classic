import { notFound } from "next/navigation";
import PortfolioPage from "../components/PortfolioPage";
import { content, isLocale } from "../content";

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  return <PortfolioPage locale={lang} content={content[lang]} />;
}
