import type { NextPage } from 'next'
import { getSdk } from "graphql/ssr.generated";
import {CarListFieldFragment} from "graphql/generated"
import buildSSRGrahpqlClient from "src/ssrGraphqlClient";
import CarCard from "components/CarCard";
import Grid2 from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

type CarsPageProps = {
  cars: CarListFieldFragment[]
}
const CarsPage: NextPage<CarsPageProps> = (props) => {
  const { cars } = props
  return (
    <div>
      <Container>
        <h1>cars</h1>
        <Grid2 container spacing={2}>
          {cars.map(car => (
            <Grid2 item xs={6} md={4}>
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
      </Container>
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const client = buildSSRGrahpqlClient(context);
  const sdk = getSdk(client);
  const { cars } = await sdk.Cars({})
  return {
    props: {
      cars
    },
  }
}

export default CarsPage
