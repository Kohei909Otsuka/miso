import type { NextPage } from 'next'
import { getSdk } from "graphql/ssr.generated";
import {CarListFieldFragment, CarStatFieldFragment} from "graphql/generated"
import buildSSRGrahpqlClient from "src/ssrGraphqlClient";
import Grid2 from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import CarCard from "components/CarCard";
import CarFilter from "components/CarFilter"

type CarsPageProps = {
  cars: CarListFieldFragment[]
  carStat: CarStatFieldFragment
}
const CarsPage: NextPage<CarsPageProps> = (props) => {
  const { cars, carStat} = props
  return (
    <div>
      <Container>
        <h1>cars</h1>
        <Grid2 container spacing={2}>
          <Grid2 xs={3}>
            <CarFilter {...carStat} />
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

export async function getServerSideProps(context: any) {
  const client = buildSSRGrahpqlClient(context);
  const sdk = getSdk(client);
  const { cars, carStat} = await sdk.Cars({})
  return {
    props: {
      cars,
      carStat,
    },
  }
}

export default CarsPage
