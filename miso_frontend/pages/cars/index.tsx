import type { NextPage } from 'next'
import { getSdk } from "graphql/ssr.generated";
import {CarListFieldFragment, CarStatFieldFragment} from "graphql/generated"
import { CarFilterParams } from "components/CarFilter"
import buildSSRGrahpqlClient from "src/ssrGraphqlClient";
import Grid2 from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import CarCard from "components/CarCard";
import CarFilter from "components/CarFilter"

type CarsPageProps = {
  cars: CarListFieldFragment[]
  carStat: CarStatFieldFragment
  params: CarFilterParams
}
const CarsPage: NextPage<CarsPageProps> = (props) => {
  const { cars, carStat, params} = props
  return (
    <div>
      <Container>
        <h1>cars</h1>
        <Grid2 container spacing={2}>
          <Grid2 xs={3}>
            <CarFilter stat={carStat} params={params}/>
          </Grid2>
          <Grid2 xs={9}>
            <Grid2 container spacing={2}>
              {cars.map(car => (
                <Grid2 key={car.id} xs={6} md={4}>
                  <CarCard
                    key={car.id}
                    name={car.name}
                    slug={car.slug}
                    imageUrl={car.imageUrl}
                    score={car.score}
                  />
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  )
}

function queryToParams(context: any) {
  const heightMin = context.query.heightMin ? Number(context.query.heightMin) : null
  const heightMax = context.query.heightMax ? Number(context.query.heightMax) : null

  const widthMin = context.query.widthMin ? Number(context.query.widthMin) : null
  const widthMax = context.query.widthMax ? Number(context.query.widthMax) : null

  const lengthMin = context.query.lengthMin ? Number(context.query.lengthMin) : null
  const lengthMax = context.query.lengthMax ? Number(context.query.lengthMax) : null

  const luggageSizeMin = context.query.luggageSizeMin ? Number(context.query.luggageSizeMin) : null
  const luggageSizeMax = context.query.luggageSizeMax ? Number(context.query.luggageSizeMax) : null

  const zeroToHundredMin = context.query.zeroToHundredMin ? Number(context.query.zeroToHundredMin) : null
  const zeroToHundredMax = context.query.zeroToHundredMax ? Number(context.query.zeroToHundredMax) : null

  const maxSpeedMin = context.query.maxSpeedMin ? Number(context.query.maxSpeedMin) : null
  const maxSpeedMax = context.query.maxSpeedMax ? Number(context.query.maxSpeedMax) : null

  const maxTorqueMin = context.query.maxTorqueMin ? Number(context.query.maxTorqueMin) : null
  const maxTorqueMax = context.query.maxTorqueMax ? Number(context.query.maxTorqueMax) : null

  const fuelConsumptionMin = context.query.fuelConsumptionMin ? Number(context.query.fuelConsumptionMin) : null
  const fuelConsumptionMax = context.query.fuelConsumptionMax ? Number(context.query.fuelConsumptionMax) : null


  return {
    heightMin,
    heightMax,
    widthMin,
    widthMax,
    luggageSizeMin,
    luggageSizeMax,
    zeroToHundredMin,
    zeroToHundredMax,
    maxSpeedMin,
    maxSpeedMax,
    maxTorqueMin,
    maxTorqueMax,
    fuelConsumptionMin,
    fuelConsumptionMax,
  }
}

export async function getServerSideProps(context: any) {
  const client = buildSSRGrahpqlClient(context);
  const sdk = getSdk(client);
  const params = queryToParams(context)
  const { cars, carStat} = await sdk.Cars(params)
  return {
    props: {
      cars,
      carStat,
      params,
    },
  }
}

export default CarsPage
