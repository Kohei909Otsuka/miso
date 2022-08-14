import type { NextPage } from 'next'
import { getSdk } from "graphql/ssr.generated";
import {CellPhoneListFieldFragment, CellPhoneStatFieldFragment} from "graphql/generated"
import {CellPhoneFilterParams} from "components/CellPhoneFilter"
import buildSSRGrahpqlClient from "src/ssrGraphqlClient";
import Grid2 from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';

// TODO: ObjectCardにrenameするか、分ける
import CarCard from "components/CarCard";
import CellPhoneFilter from "components/CellPhoneFilter"

type CellPhonesPageProps = {
  cellPhones: CellPhoneListFieldFragment[]
  cellPhoneStat: CellPhoneStatFieldFragment
  params: CellPhoneFilterParams
}

const CellPhonesPage: NextPage<CellPhonesPageProps> = (props) => {
  const {
    cellPhones,
    cellPhoneStat,
    params,
  } = props

  return (
    <div>
      <Container>
        <h1>CellPhones</h1>
        <Grid2 container spacing={2}>
          <Grid2 xs={3}>
            <CellPhoneFilter stat={cellPhoneStat} params={params} />
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

function queryToParams(context: any) {
  const weightMin = context.query.weightMin ? Number(context.query.weightMin) : null
  const weightMax = context.query.weightMax ? Number(context.query.weightMax) : null

  const thicknessMin = context.query.thicknessMin ? Number(context.query.thicknessMin) : null
  const thicknessMax = context.query.thicknessMax ? Number(context.query.thicknessMax) : null

  const widthMin = context.query.widthMin ? Number(context.query.widthMin) : null
  const widthMax = context.query.widthMax ? Number(context.query.widthMax) : null

  const heightMin = context.query.heightMin ? Number(context.query.heightMin) : null
  const heightMax = context.query.heightMax ? Number(context.query.heightMax) : null

  const screenSizeMin = context.query.screenSizeMin ? Number(context.query.screenSizeMin) : null
  const screenSizeMax = context.query.screenSizeMax ? Number(context.query.screenSizeMax) : null

  const refreshRateMin = context.query.refreshRateMin ? Number(context.query.refreshRateMin) : null
  const refreshRateMax = context.query.refreshRateMax ? Number(context.query.refreshRateMax) : null

  const memoryMin = context.query.memoryMin ? Number(context.query.memoryMin) : null
  const memoryMax = context.query.memoryMax ? Number(context.query.memoryMax) : null

  const diskMin = context.query.diskMin ? Number(context.query.diskMin) : null
  const diskMax = context.query.diskMax ? Number(context.query.diskMax) : null

  const isMultiSim = context.query.isMultiSim ? true : null

  return {
    weightMin,
    weightMax,
    thicknessMin,
    thicknessMax,
    widthMin,
    widthMax,
    heightMin,
    heightMax,
    screenSizeMin,
    screenSizeMax,
    refreshRateMin,
    refreshRateMax,
    memoryMin,
    memoryMax,
    diskMin,
    diskMax,
    isMultiSim,
  }
}

export async function getServerSideProps(context: any) {
  const client = buildSSRGrahpqlClient(context);
  const sdk = getSdk(client);
  const params = queryToParams(context)
  const { cellPhones, cellPhoneStat } = await sdk.CellPhones(params)
  return {
    props: {
      cellPhones,
      cellPhoneStat,
      params,
    }
  }
}

export default CellPhonesPage
