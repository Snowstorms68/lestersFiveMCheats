import Commerce from "@chec/commerce.js";
export const commerce = new Commerce(
  /*  process.env.NEXT_PUBLIC_COMMERCE_JS_API_KEY_TEST, */
  process.env.NEXT_PUBLIC_COMMERCE_JS_API_KEY,
  true
);
