import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface RewardStep {
  title: string;
  description: string;
  icon: IconDefinition | string;
  href: string;
}