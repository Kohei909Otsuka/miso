import type { NextPage } from 'next'
import { CarFieldFragment } from "graphql/generated"
import { getSdk } from "graphql/ssr.generated";
import buildSSRGrahpqlClient from "src/ssrGraphqlClient";

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid2 from '@mui/material/Unstable_Grid2';

import SpecGraph from "components/SpecGraph"
import SpecTable from "components/SpecTable"

type CarPageProps = {
  car: CarFieldFragment
}

const CarPage: NextPage<CarPageProps> = (props) => {
  const { car } = props
  if (!car) {
    return null
  }

  return (
    <Container>
      <Box sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>

        <Typography variant="h5" sx={{mt: 4, mb: 4}}>
          {car.name}
        </Typography>

        <Box sx={{display: "flex", mb: 4}}>
          <img
              src={car.imageUrl ? car.imageUrl : "https://tomo-iki.jp/wp-content/uploads/2019/06/noimage.png"}
              height={300}
          />
          <Box sx={{height: 300, width: 400}}>
            <SpecGraph />
          </Box>
        </Box>

        <SpecTable />
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
  const slug = context.params.slug
  const { car } = await sdk.Car({slug})
  return {
    props: {
      car,
    },
    revalidate: 60 * 30, // 30minsのcache
  }
}

export default CarPage
