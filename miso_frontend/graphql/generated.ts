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

export type CarListFieldFragment = { __typename?: 'Car', id: string, name: string, slug: string, score: number, imageUrl?: string | null };

export type CarsQueryVariables = Exact<{ [key: string]: never; }>;


export type CarsQuery = { __typename?: 'Query', cars: Array<{ __typename?: 'Car', id: string, name: string, slug: string, score: number, imageUrl?: string | null }> };

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
}
    ${CarListFieldFragmentDoc}`;

export function useCarsQuery(options?: Omit<Urql.UseQueryArgs<CarsQueryVariables>, 'query'>) {
  return Urql.useQuery<CarsQuery, CarsQueryVariables>({ query: CarsDocument, ...options });
};