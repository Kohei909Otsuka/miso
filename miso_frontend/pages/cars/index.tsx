import type { NextPage } from 'next'
import { getSdk } from "graphql/ssr.generated";
import {CarListFieldFragment} from "graphql/generated"
import buildSSRGrahpqlClient from "src/ssrGraphqlClient";

type CarsPageProps = {
  cars: CarListFieldFragment[]
}
const CarsPage: NextPage<CarsPageProps> = (props) => {
  const { cars } = props
  return (
    <div>
      <h1>cars</h1>
      <ul>
        {cars.map(car => (
          <li key={car.id}>{car.name}</li>
        ))}
      </ul>
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
