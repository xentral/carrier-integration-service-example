This is an example project that implements the bare minimum API endpoints for the Carrier Integration Service in NextJS. It implements the following routes:

- The setup request at `GET /carriers`
- The label request at `POST /shipments`

You can try it out yourself by connecting your Xentral instance to this service, or deploy the service yourself.

## Development
First run:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```


Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the setup and label routes at: `app/carriers/route.ts` & `app/shipments/route.ts`. The routes auto update as you edit the files.

## Learn More

To learn more about the Carrier Integration Service check out the [official documentation](https://docs.xentral.com/developer-documentation/carrier-integration-service/).

- [Guide](https://developer.xentral.com/docs/carrier-integration-service) - A step-by-step guide for implementing the Carrier Integration Service.
- [API Spec](https://developer.xentral.com/reference/xentralcarrierintegrationserviceliveness) - OpenAPI specification of the Carrier Integration Service.


## Testing

This project is deployed at: [carrier-integration-service-example.xentral.com](https://carrier-integration-service-example.xentral.com)

You can connect your Xentral instance to this service deployment by following the [documentation](https://developer.xentral.com/docs/cisc-example-service#https://developer.xentral.com/v25.33/docs/cis-shipping-method-end-user#connecting-xentral-to-the-example-carrier-integration-service).

## Attribution
Based on a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

