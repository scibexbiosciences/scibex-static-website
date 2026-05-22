import DivisionPage from "@/components/DivisionPage";
import { divisions } from "@/lib/site-data";

const division = divisions.find((d) => d.slug === "functional-beverages");

export const metadata = {
  title: division.name,
  description: division.positioning + " — " + division.summary,
};

export default function Page() {
  return <DivisionPage division={division} index={3} />;
}
