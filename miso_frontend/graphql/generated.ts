import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
  fuelConsumption?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  imageUrl?: Maybe<Scalars['String']>;
  length?: Maybe<Scalars['Float']>;
  luggageSize?: Maybe<Scalars['Int']>;
  maxSpeed?: Maybe<Scalars['Int']>;
  maxTorque?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  score: Scalars['Int'];
  slug: Scalars['String'];
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
  cellPhones: Array<CellPhone>;
};


export type QueryCarArgs = {
  id: Scalars['ID'];
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
  widthMax?: InputMaybe<Scalars['Float']>;
  widthMin?: InputMaybe<Scalars['Float']>;
  zeroToHundredMax?: InputMaybe<Scalars['Float']>;
  zeroToHundredMin?: InputMaybe<Scalars['Float']>;
};


export type QueryCellPhoneArgs = {
  id: Scalars['ID'];
};

export type CarStatFieldFragment = { __typename?: 'CarStat', widthMin: number, widthMax: number, heightMin: number, heightMax: number, lengthMin: number, lengthMax: number, luggageSizeMin: number, luggageSizeMax: number, zeroToHundredMin: number, zeroToHundredMax: number, maxSpeedMin: number, maxSpeedMax: number, maxTorqueMin: number, maxTorqueMax: number, fuelConsumptionMin: number, fuelConsumptionMax: number };

export type CarListFieldFragment = { __typename?: 'Car', id: string, name: string, slug: string, score: number, imageUrl?: string | null };

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

export function useCarsQuery(options?: Omit<Urql.UseQueryArgs<CarsQueryVariables>, 'query'>) {
  return Urql.useQuery<CarsQuery, CarsQueryVariables>({ query: CarsDocument, ...options });
};