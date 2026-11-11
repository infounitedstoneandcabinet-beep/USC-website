import { fixtureDetailRoute } from "@/components/fixture-detail-page";

const route = fixtureDetailRoute("faucets");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
