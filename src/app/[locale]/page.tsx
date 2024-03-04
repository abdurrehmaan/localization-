import Buttons from "@/Buttons";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("LandingPage");
  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-3xl ">{t("title")}</h1>
        <Buttons />
      </div>
      <p className="font-bold text-xl mt-10 text-center">{t("description")}</p>
    </>
  );
}
