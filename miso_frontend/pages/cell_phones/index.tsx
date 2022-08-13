import type { NextPage } from 'next'
import { getSdk } from "graphql/ssr.generated";
import {CellPhoneListFieldFragment, CellPhoneStatFieldFragment} from "graphql/generated"
import buildSSRGrahpqlClient from "src/ssrGraphqlClient";
import Grid2 from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

import CarCard from "components/CarCard";

type CellPhonesPageProps = {
  cellPhones: CellPhoneListFieldFragment[]
  cellPhoneStat: CellPhoneStatFieldFragment
}

const CellPhonesPage: NextPage<CellPhonesPageProps> = (props) => {
  const {
    cellPhones,
  } = props

  return (
    <div>
      <Container>
        <h1>cars</h1>
        <Grid2 container spacing={2}>
          <Grid2 xs={3}>
          </Grid2>
          <Grid2 xs={9}>
            <Grid2 container spacing={2}>
              {cellPhones.map(cellPhone => (
                <Grid2 key={cellPhone.id} xs={6} md={4}>
                  <CarCard
                    key={cellPhone.id}
                    name={cellPhone.name}
                    slug={cellPhone.slug}
                    imageUrl={cellPhone.imageUrl}
                    score={cellPhone.score}
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
  const { cellPhones, cellPhoneStat } = await sdk.CellPhones({})
  return {
    props: {
      cellPhones,
      cellPhoneStat,
    }
  }
}

export default CellPhonesPage
