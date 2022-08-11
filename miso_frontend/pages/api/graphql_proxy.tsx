import type { NextApiRequest, NextApiResponse } from "next";
// import { COOKIE_KEY } from "lib/auth";

// 認証のために、このようなちょっとトリッキーな仕組みが必要
// cookieを引き継いで、それをrailsに対してHTTP Authorization headerに入れて通信するためにこんなことしてる

// SSRだと    : client => next js server => proxy(nextjsで提供するAPIここでtoken取得) => api server
// Clientだと : client => proxy(nextjsで提供するAPIここでtoken取得) => api server

export default async function graphqlProxy(req: NextApiRequest, res: NextApiResponse) {
  const apiRes = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_BASE_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Authorization: req.cookies[COOKIE_KEY],
    },
    body: JSON.stringify(req.body),
  });
  res.status(200).json(apiRes.body);
}
