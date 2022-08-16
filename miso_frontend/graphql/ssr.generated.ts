import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Car = {
  __typename?: 'Car';
  costScore: Scalars['Int'];
  designScore: Scalars['Int'];
  engineScore: Scalars['Int'];
  fuelConsumption?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Float']>;
  luggageSize?: Maybe<Scalars['Int']>;
  luxuryScore: Scalars['Int'];
  maxSpeed?: Maybe<Scalars['Int']>;
  maxTorque?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  score: Scalars['Int'];
  slug: Scalars['String'];
  utilityScore: Scalars['Int'];
  width?: Maybe<Scalars['Float']>;
  zeroToHundred?: Maybe<Scalars['Float']>;
};

export type CarStat = {
  __typename?: 'CarStat';
  fuelConsumptionMax: Scalars['Float'];
  fuelConsumptionMin: Scalars['Float'];
  heightMax: Scalars['Float'];
  heightMin: Scalars['Float'];
  lengthMax: Scalars['Float'];
  lengthMin: Scalars['Float'];
  luggageSizeMax: Scalars['Int'];
  luggageSizeMin: Scalars['Int'];
  maxSpeedMax: Scalars['Int'];
  maxSpeedMin: Scalars['Int'];
  maxTorqueMax: Scalars['Int'];
  maxTorqueMin: Scalars['Int'];
  widthMax: Scalars['Float'];
  widthMin: Scalars['Float'];
  zeroToHundredMax: Scalars['Float'];
  zeroToHundredMin: Scalars['Float'];
};

export type CellPhone = {
  __typename?: 'CellPhone';
  cpu?: Maybe<Scalars['String']>;
  disk?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  isMultiSim?: Maybe<Scalars['Boolean']>;
  memory?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  refreshRate?: Maybe<Scalars['Int']>;
  score: Scalars['Int'];
  screenKind?: Maybe<Scalars['String']>;
  screenSize?: Maybe<Scalars['Float']>;
  slug: Scalars['String'];
  thickness?: Maybe<Scalars['Float']>;
  weight?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type CellPhoneStat = {
  __typename?: 'CellPhoneStat';
  diskMax: Scalars['Int'];
  diskMin: Scalars['Int'];
  heightMax: Scalars['Float'];
  heightMin: Scalars['Float'];
  memoryMax: Scalars['Int'];
  memoryMin: Scalars['Int'];
  refreshRateMax: Scalars['Int'];
  refreshRateMin: Scalars['Int'];
  screenSizeMax: Scalars['Float'];
  screenSizeMin: Scalars['Float'];
  thicknessMax: Scalars['Float'];
  thicknessMin: Scalars['Float'];
  weightMax: Scalars['Float'];
  weightMin: Scalars['Float'];
  widthMax: Scalars['Float'];
  widthMin: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  car: Car;
  carStat: CarStat;
  cars: Array<Car>;
  cellPhone: CellPhone;
  cellPhoneStat: CellPhoneStat;
  cellPhones: Array<CellPhone>;
};


export type QueryCarArgs = {
  slug: Scalars['String'];
};


export type QueryCarsArgs = {
  fuelConsumptionMax?: InputMaybe<Scalars['Float']>;
  fuelConsumptionMin?: InputMaybe<Scalars['Float']>;
  heightMax?: InputMaybe<Scalars['Float']>;
  heightMin?: InputMaybe<Scalars['Float']>;
  lengthMax?: InputMaybe<Scalars['Float']>;
  lengthMin?: InputMaybe<Scalars['Float']>;
  luggageSizeMax?: InputMaybe<Scalars['Int']>;
  luggageSizeMin?: InputMaybe<Scalars['Int']>;
  maxSpeedMax?: InputMaybe<Scalars['Int']>;
  maxSpeedMin?: InputMaybe<Scalars['Int']>;
  maxTorqueMax?: InputMaybe<Scalars['Int']>;
  maxTorqueMin?: InputMaybe<Scalars['Int']>;
  slugs?: InputMaybe<Array<Scalars['String']>>;
  widthMax?: InputMaybe<Scalars['Float']>;
  widthMin?: InputMaybe<Scalars['Float']>;
  zeroToHundredMax?: InputMaybe<Scalars['Float']>;
  zeroToHundredMin?: InputMaybe<Scalars['Float']>;
};


export type QueryCellPhoneArgs = {
  id: Scalars['ID'];
};


export type QueryCellPhonesArgs = {
  diskMax?: InputMaybe<Scalars['Int']>;
  diskMin?: InputMaybe<Scalars['Int']>;
  heightMax?: InputMaybe<Scalars['Float']>;
  heightMin?: InputMaybe<Scalars['Float']>;
  isMultiSim?: InputMaybe<Scalars['Boolean']>;
  memoryMax?: InputMaybe<Scalars['Int']>;
  memoryMin?: InputMaybe<Scalars['Int']>;
  refreshRateMax?: InputMaybe<Scalars['Int']>;
  refreshRateMin?: InputMaybe<Scalars['Int']>;
  screenKinds?: InputMaybe<Array<Scalars['String']>>;
  screenSizeMax?: InputMaybe<Scalars['Float']>;
  screenSizeMin?: InputMaybe<Scalars['Float']>;
  thicknessMax?: InputMaybe<Scalars['Float']>;
  thicknessMin?: InputMaybe<Scalars['Float']>;
  weightMax?: InputMaybe<Scalars['Float']>;
  weightMin?: InputMaybe<Scalars['Float']>;
  widthMax?: InputMaybe<Scalars['Float']>;
  widthMin?: InputMaybe<Scalars['Float']>;
};

export type CarFieldFragment = { __typename?: 'Car', id: string, slug: string, name: string, imageUrl?: string | null, score: number, designScore: number, utilityScore: number, luxuryScore: number, engineScore: number, costScore: number, height?: number | null, width?: number | null, length?: number | null, luggageSize?: number | null, zeroToHundred?: number | null, maxSpeed?: number | null, maxTorque?: number | null, fuelConsumption?: number | null };

export type CarStatFieldFragment = { __typename?: 'CarStat', widthMin: number, widthMax: number, heightMin: number, heightMax: number, lengthMin: number, lengthMax: number, luggageSizeMin: number, luggageSizeMax: number, zeroToHundredMin: number, zeroToHundredMax: number, maxSpeedMin: number, maxSpeedMax: number, maxTorqueMin: number, maxTorqueMax: number, fuelConsumptionMin: number, fuelConsumptionMax: number };

export type CarListFieldFragment = { __typename?: 'Car', id: string, name: string, slug: string, score: number, imageUrl?: string | null };

export type CellPhoneStatFieldFragment = { __typename?: 'CellPhoneStat', weightMin: number, weightMax: number, thicknessMin: number, thicknessMax: number, widthMin: number, widthMax: number, heightMin: number, heightMax: number, screenSizeMin: number, screenSizeMax: number, refreshRateMin: number, refreshRateMax: number, memoryMin: number, memoryMax: number, diskMin: number, diskMax: number };

export type CellPhoneListFieldFragment = { __typename?: 'CellPhone', id: string, name: string, slug: string, score: number, imageUrl?: string | null };

export type CarQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type CarQuery = { __typename?: 'Query', car: { __typename?: 'Car', id: string, slug: string, name: string, imageUrl?: string | null, score: number, designScore: number, utilityScore: number, luxuryScore: number, engineScore: number, costScore: number, height?: number | null, width?: number | null, length?: number | null, luggageSize?: number | null, zeroToHundred?: number | null, maxSpeed?: number | null, maxTorque?: number | null, fuelConsumption?: number | null } };

export type CarsQueryVariables = Exact<{
  heightMin?: InputMaybe<Scalars['Float']>;
  heightMax?: InputMaybe<Scalars['Float']>;
  widthMin?: InputMaybe<Scalars['Float']>;
  widthMax?: InputMaybe<Scalars['Float']>;
  lengthMin?: InputMaybe<Scalars['Float']>;
  lengthMax?: InputMaybe<Scalars['Float']>;
  luggageSizeMin?: InputMaybe<Scalars['Int']>;
  luggageSizeMax?: InputMaybe<Scalars['Int']>;
  zeroToHundredMin?: InputMaybe<Scalars['Float']>;
  zeroToHundredMax?: InputMaybe<Scalars['Float']>;
  maxSpeedMin?: InputMaybe<Scalars['Int']>;
  maxSpeedMax?: InputMaybe<Scalars['Int']>;
  maxTorqueMin?: InputMaybe<Scalars['Int']>;
  maxTorqueMax?: InputMaybe<Scalars['Int']>;
  fuelConsumptionMin?: InputMaybe<Scalars['Float']>;
  fuelConsumptionMax?: InputMaybe<Scalars['Float']>;
}>;


export type CarsQuery = { __typename?: 'Query', cars: Array<{ __typename?: 'Car', id: string, name: string, slug: string, score: number, imageUrl?: string | null }>, carStat: { __typename?: 'CarStat', widthMin: number, widthMax: number, heightMin: number, heightMax: number, lengthMin: number, lengthMax: number, luggageSizeMin: number, luggageSizeMax: number, zeroToHundredMin: number, zeroToHundredMax: number, maxSpeedMin: number, maxSpeedMax: number, maxTorqueMin: number, maxTorqueMax: number, fuelConsumptionMin: number, fuelConsumptionMax: number } };

export type CarsBySlugsQueryVariables = Exact<{
  slugs?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type CarsBySlugsQuery = { __typename?: 'Query', cars: Array<{ __typename?: 'Car', id: string, slug: string, name: string, imageUrl?: string | null, score: number, designScore: number, utilityScore: number, luxuryScore: number, engineScore: number, costScore: number, height?: number | null, width?: number | null, length?: number | null, luggageSize?: number | null, zeroToHundred?: number | null, maxSpeed?: number | null, maxTorque?: number | null, fuelConsumption?: number | null }> };

export type CellPhonesQueryVariables = Exact<{
  weightMin?: InputMaybe<Scalars['Float']>;
  weightMax?: InputMaybe<Scalars['Float']>;
  thicknessMin?: InputMaybe<Scalars['Float']>;
  thicknessMax?: InputMaybe<Scalars['Float']>;
  widthMin?: InputMaybe<Scalars['Float']>;
  widthMax?: InputMaybe<Scalars['Float']>;
  heightMin?: InputMaybe<Scalars['Float']>;
  heightMax?: InputMaybe<Scalars['Float']>;
  screenSizeMin?: InputMaybe<Scalars['Float']>;
  screenSizeMax?: InputMaybe<Scalars['Float']>;
  refreshRateMin?: InputMaybe<Scalars['Int']>;
  refreshRateMax?: InputMaybe<Scalars['Int']>;
  memoryMin?: InputMaybe<Scalars['Int']>;
  memoryMax?: InputMaybe<Scalars['Int']>;
  diskMin?: InputMaybe<Scalars['Int']>;
  diskMax?: InputMaybe<Scalars['Int']>;
  screenKinds?: InputMaybe<Array<Scalars['String']> | Scalars['String']>;
  isMultiSim?: InputMaybe<Scalars['Boolean']>;
}>;


export type CellPhonesQuery = { __typename?: 'Query', cellPhones: Array<{ __typename?: 'CellPhone', id: string, name: string, slug: string, score: number, imageUrl?: string | null }>, cellPhoneStat: { __typename?: 'CellPhoneStat', weightMin: number, weightMax: number, thicknessMin: number, thicknessMax: number, widthMin: number, widthMax: number, heightMin: number, heightMax: number, screenSizeMin: number, screenSizeMax: number, refreshRateMin: number, refreshRateMax: number, memoryMin: number, memoryMax: number, diskMin: number, diskMax: number } };

export const CarFieldFragmentDoc = gql`
    fragment CarField on Car {
  id
  slug
  name
  imageUrl
  score
  designScore
  utilityScore
  luxuryScore
  engineScore
  costScore
  height
  width
  length
  luggageSize
  zeroToHundred
  maxSpeed
  maxTorque
  fuelConsumption
}
    `;
export const CarStatFieldFragmentDoc = gql`
    fragment CarStatField on CarStat {
  widthMin
  widthMax
  heightMin
  heightMax
  lengthMin
  lengthMax
  luggageSizeMin
  luggageSizeMax
  zeroToHundredMin
  zeroToHundredMax
  maxSpeedMin
  maxSpeedMax
  maxTorqueMin
  maxTorqueMax
  fuelConsumptionMin
  fuelConsumptionMax
}
    `;
export const CarListFieldFragmentDoc = gql`
    fragment CarListField on Car {
  id
  name
  slug
  score
  imageUrl
}
    `;
export const CellPhoneStatFieldFragmentDoc = gql`
    fragment CellPhoneStatField on CellPhoneStat {
  weightMin
  weightMax
  thicknessMin
  thicknessMax
  widthMin
  widthMax
  heightMin
  heightMax
  screenSizeMin
  screenSizeMax
  refreshRateMin
  refreshRateMax
  memoryMin
  memoryMax
  diskMin
  diskMax
}
    `;
export const CellPhoneListFieldFragmentDoc = gql`
    fragment CellPhoneListField on CellPhone {
  id
  name
  slug
  score
  imageUrl
}
    `;
export const CarDocument = gql`
    query Car($slug: String!) {
  car(slug: $slug) {
    ...CarField
  }
}
    ${CarFieldFragmentDoc}`;
export const CarsDocument = gql`
    query Cars($heightMin: Float, $heightMax: Float, $widthMin: Float, $widthMax: Float, $lengthMin: Float, $lengthMax: Float, $luggageSizeMin: Int, $luggageSizeMax: Int, $zeroToHundredMin: Float, $zeroToHundredMax: Float, $maxSpeedMin: Int, $maxSpeedMax: Int, $maxTorqueMin: Int, $maxTorqueMax: Int, $fuelConsumptionMin: Float, $fuelConsumptionMax: Float) {
  cars(
    heightMin: $heightMin
    heightMax: $heightMax
    widthMin: $widthMin
    widthMax: $widthMax
    lengthMin: $lengthMin
    lengthMax: $lengthMax
    luggageSizeMin: $luggageSizeMin
    luggageSizeMax: $luggageSizeMax
    zeroToHundredMin: $zeroToHundredMin
    zeroToHundredMax: $zeroToHundredMax
    maxSpeedMin: $maxSpeedMin
    maxSpeedMax: $maxSpeedMax
    maxTorqueMin: $maxTorqueMin
    maxTorqueMax: $maxTorqueMax
    fuelConsumptionMin: $fuelConsumptionMin
    fuelConsumptionMax: $fuelConsumptionMax
  ) {
    ...CarListField
  }
  carStat {
    ...CarStatField
  }
}
    ${CarListFieldFragmentDoc}
${CarStatFieldFragmentDoc}`;
export const CarsBySlugsDocument = gql`
    query CarsBySlugs($slugs: [String!]) {
  cars(slugs: $slugs) {
    ...CarField
  }
}
    ${CarFieldFragmentDoc}`;
export const CellPhonesDocument = gql`
    query CellPhones($weightMin: Float, $weightMax: Float, $thicknessMin: Float, $thicknessMax: Float, $widthMin: Float, $widthMax: Float, $heightMin: Float, $heightMax: Float, $screenSizeMin: Float, $screenSizeMax: Float, $refreshRateMin: Int, $refreshRateMax: Int, $memoryMin: Int, $memoryMax: Int, $diskMin: Int, $diskMax: Int, $screenKinds: [String!], $isMultiSim: Boolean) {
  cellPhones(
    weightMin: $weightMin
    weightMax: $weightMax
    thicknessMin: $thicknessMin
    thicknessMax: $thicknessMax
    widthMin: $widthMin
    widthMax: $widthMax
    heightMin: $heightMin
    heightMax: $heightMax
    screenSizeMin: $screenSizeMin
    screenSizeMax: $screenSizeMax
    refreshRateMin: $refreshRateMin
    refreshRateMax: $refreshRateMax
    memoryMin: $memoryMin
    memoryMax: $memoryMax
    diskMin: $diskMin
    diskMax: $diskMax
    screenKinds: $screenKinds
    isMultiSim: $isMultiSim
  ) {
    ...CellPhoneListField
  }
  cellPhoneStat {
    ...CellPhoneStatField
  }
}
    ${CellPhoneListFieldFragmentDoc}
${CellPhoneStatFieldFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Car(variables: CarQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CarQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CarQuery>(CarDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Car', 'query');
    },
    Cars(variables?: CarsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CarsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CarsQuery>(CarsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Cars', 'query');
    },
    CarsBySlugs(variables?: CarsBySlugsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CarsBySlugsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CarsBySlugsQuery>(CarsBySlugsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CarsBySlugs', 'query');
    },
    CellPhones(variables?: CellPhonesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CellPhonesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CellPhonesQuery>(CellPhonesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'CellPhones', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;