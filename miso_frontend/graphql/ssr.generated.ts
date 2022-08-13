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


export type QueryCellPhoneArgs = {
  id: Scalars['ID'];
};

export type CarStatFieldFragment = { __typename?: 'CarStat', widthMin: number, widthMax: number, heightMin: number, heightMax: number, lengthMin: number, lengthMax: number, luggageSizeMin: number, luggageSizeMax: number, zeroToHundredMin: number, zeroToHundredMax: number, maxSpeedMin: number, maxSpeedMax: number, maxTorqueMin: number, maxTorqueMax: number, fuelConsumptionMin: number, fuelConsumptionMax: number };

export type CarListFieldFragment = { __typename?: 'Car', id: string, name: string, slug: string, score: number, imageUrl?: string | null };

export type CarsQueryVariables = Exact<{ [key: string]: never; }>;


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
    query Cars {
  cars {
    ...CarListField
  }
  carStat {
    ...CarStatField
  }
}
    ${CarListFieldFragmentDoc}
${CarStatFieldFragmentDoc}`;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    Cars(variables?: CarsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CarsQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<CarsQuery>(CarsDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'Cars', 'query');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;