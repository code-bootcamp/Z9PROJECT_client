import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_PRODUCT } from "../../../../src/components/units/product/edit/edit.queries";
import RegisterContainer from "../../../../src/components/units/product/register/register.container";

export default function ProductEditPage() {
  const router = useRouter();
  const { data } = useQuery(FETCH_PRODUCT, {
    variables: {
      productId: String(router.query.useditemId),
    },
  });

  return <RegisterContainer edit={true} fetchProduct={data} />;
}
