import { IndustryData } from "@/types/industry";
import { agenciesData } from "./agencies";
import { homeServicesData } from "./home-services";
import { hvacData } from "./hvac";
import { plumbingData } from "./plumbing";
import { roofingData } from "./roofing";
import { dentalData } from "./dental";
import { medSpasData } from "./med-spas";
import { realEstateData } from "./real-estate";
import { lawFirmsData } from "./law-firms";
import { professionalServicesData } from "./professional-services";
import { saasData } from "./saas";
import { multiLocationData } from "./multi-location-businesses";

export const allIndustriesData: IndustryData[] = [
  agenciesData,
  homeServicesData,
  hvacData,
  plumbingData,
  roofingData,
  dentalData,
  medSpasData,
  realEstateData,
  lawFirmsData,
  professionalServicesData,
  saasData,
  multiLocationData,
];

export const industryMap: Record<string, IndustryData> = {
  agencies: agenciesData,
  "home-services": homeServicesData,
  hvac: hvacData,
  plumbing: plumbingData,
  roofing: roofingData,
  dental: dentalData,
  "med-spas": medSpasData,
  "real-estate": realEstateData,
  "law-firms": lawFirmsData,
  "professional-services": professionalServicesData,
  saas: saasData,
  "multi-location-businesses": multiLocationData,
};

export function getIndustryData(slug: string): IndustryData | undefined {
  return industryMap[slug];
}

export {
  agenciesData,
  homeServicesData,
  hvacData,
  plumbingData,
  roofingData,
  dentalData,
  medSpasData,
  realEstateData,
  lawFirmsData,
  professionalServicesData,
  saasData,
  multiLocationData,
};
