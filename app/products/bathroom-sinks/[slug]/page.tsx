import { fixtureDetailRoute } from "@/components/fixture-detail-page";

const route = fixtureDetailRoute("bathroom-sinks");

export const dynamicParams = false;
export const generateStaticParams = route.generateStaticParams;
export const generateMetadata = route.generateMetadata;
export default route.Page;
