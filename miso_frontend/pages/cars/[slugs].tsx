import type { NextPage } from 'next'
import { CarFieldFragment } from "graphql/generated"
import { getSdk } from "graphql/ssr.generated";
import buildSSRGrahpqlClient from "src/ssrGraphqlClient";

import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Grid2 from '@mui/material/Unstable_Grid2';

import CarCard from "components/CarCard"
import SpecGraph from "components/SpecGraph"
import SpecTable from "components/SpecTable"

type CarPageProps = {
  cars: CarFieldFragment[]
}

const CarPage: NextPage<CarPageProps> = (props) => {
  const { cars } = props

  if (!cars) {
    return null
  }

  return (
    <Container>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>

        <Stack
          sx={{mt: 4}}
          direction="row"
          divider={<Divider orientation="vertical" flexItem />}
          spacing={2}
        >
          {cars.map(car => (
            <CarCard
              key={car.id}
              name={car.name}
              slug={car.slug}
              imageUrl={car.imageUrl}
              score={car.score}
            />
          ))}
        </Stack>

        <Box sx={{height: 500, width: 400, mt: 4}}>
          <SpecGraph cars={cars}/>
        </Box>

        <Box sx={{mt: 4}}>
          <SpecTable cars={cars}/>
        </Box>
      </Box>
    </Container>
  )
}

export async function getStaticPaths() {
  return {
    paths: [], // /に表示されるものはbuild時にpre render
    fallback: true, // buildされていないページにリクエストがあれば、buildする
  }
}

export async function getStaticProps(context: any) {
  const client = buildSSRGrahpqlClient(context);
  const sdk = getSdk(client);
  const commaSparatedSlugs = context.params.slugs
  const { cars } = await sdk.CarsBySlugs({slugs: commaSparatedSlugs.split(",")})
  return {
    props: {
      cars,
    },
    revalidate: 60 * 30, // 30minsのcache
  }
}

export default CarPage
