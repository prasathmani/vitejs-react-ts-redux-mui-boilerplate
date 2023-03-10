/**
 * @file 色の定数定義
 * @copyright 2023 NEOJAPAN Inc. All rights reserved.
 * @version v1.0.0
 */
export default {
  // 追加する際は下記を参考に追加してください。
  // 各定義の説明について
  // https://developer.mozilla.org/ja/docs/Web/HTTP/Status
  // 追記の際のフォーマットについて
  // https://github.com/adaltas/node-http-status/blob/master/lib/index.js
  OK: 200,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  INTERNAL_SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
} as const;
