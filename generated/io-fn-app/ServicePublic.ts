/**
 * Do not edit this file it is auto-generated by italia-utils / gen-api-models.
 * See https://github.com/teamdigitale/italia-utils
 */
/* tslint:disable */

import { NotificationChannel } from "./NotificationChannel";
import * as t from "io-ts";
import { enumType } from "italia-ts-commons/lib/types";
import { NonEmptyString } from "italia-ts-commons/lib/strings";
import { OrganizationFiscalCode as OrganizationFiscalCodeT } from "italia-ts-commons/lib/strings";

export enum ScopeEnum {
  "NATIONAL" = "NATIONAL",

  "LOCAL" = "LOCAL"
}

/**
 * A Service associated to an user's subscription.
 */

// required attributes
const ServicePublicService_metadataR = t.interface({
  scope: enumType<ScopeEnum>(ScopeEnum, "scope")
});

// optional attributes
const ServicePublicService_metadataO = t.partial({
  description: NonEmptyString,

  web_url: NonEmptyString,

  app_ios: NonEmptyString,

  app_android: NonEmptyString,

  tos_url: NonEmptyString,

  privacy_url: NonEmptyString,

  address: NonEmptyString,

  phone: NonEmptyString,

  email: NonEmptyString,

  pec: NonEmptyString
});

export const ServicePublicService_metadata = t.intersection(
  [ServicePublicService_metadataR, ServicePublicService_metadataO],
  "ServicePublicService_metadata"
);

export type ServicePublicService_metadata = t.TypeOf<
  typeof ServicePublicService_metadata
>;

// required attributes
const ServicePublicR = t.interface({
  service_id: NonEmptyString,

  service_name: NonEmptyString,

  organization_name: NonEmptyString,

  department_name: NonEmptyString,

  organization_fiscal_code: OrganizationFiscalCodeT,

  version: t.Integer
});

// optional attributes
const ServicePublicO = t.partial({
  available_notification_channels: t.readonlyArray(
    NotificationChannel,
    "array of NotificationChannel"
  ),

  service_metadata: ServicePublicService_metadata
});

export const ServicePublic = t.intersection(
  [ServicePublicR, ServicePublicO],
  "ServicePublic"
);

export type ServicePublic = t.TypeOf<typeof ServicePublic>;