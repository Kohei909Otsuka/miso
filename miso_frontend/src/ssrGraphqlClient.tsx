import { GraphQLClient } from "graphql-request";
// https://github.com/prisma-labs/graphql-request

function buildSSRGrahpqlClient(context: any) {
  // TODO: proxyを使うとgraphql-request上で例外になってしまうのでいったんproxy使わず直接(認証いれるにはproxyが必要)
  // return new GraphQLClient(`${process.env.NEXT_PUBLIC_FRONTEND_API_BASE_URL}/api/graphql_proxy`, {
  return new GraphQLClient(`${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/graphql`, {
    headers: {
      cookie: context.req.headers.cookie,
    },
  });
}

export default buildSSRGrahpqlClient;
