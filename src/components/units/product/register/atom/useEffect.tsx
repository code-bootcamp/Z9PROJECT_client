import { useEffect } from "react";
import { IExportUseEffectProps } from "../register.types";

export default function ExportUseEffect({
  setValue,
  getValues,
  setOption,
  optionLength,
  fetchProduct,
  onChangeCategory,
}: IExportUseEffectProps) {
  useEffect(() => {
    setValue("name", fetchProduct?.fetchProduct.name);
    setValue("option1", fetchProduct?.fetchProduct.option1);
    setValue("option2", fetchProduct?.fetchProduct.option2);
    setValue("option3", fetchProduct?.fetchProduct.option3);
    setValue("option4", fetchProduct?.fetchProduct.option4);
    setValue("option5", fetchProduct?.fetchProduct.option5);
    setValue("validFrom", fetchProduct?.fetchProduct.validFrom);
    setValue("validUntil", fetchProduct?.fetchProduct.validUntil);
    setValue("originPrice", fetchProduct?.fetchProduct.originPrice);
    setValue("discountPrice", fetchProduct?.fetchProduct.discountPrice);
    setValue("originalQuantity", fetchProduct?.fetchProduct.originalQuantity);
    setValue("youtubeLink", fetchProduct?.fetchProduct.youtubeLink);
    setValue("content", fetchProduct?.fetchProduct.content);
    setValue("skin", String(fetchProduct?.fetchProduct.skin));
    setValue("info.type", fetchProduct?.fetchProduct.productDetail.type);
    setValue("info.option1", fetchProduct?.fetchProduct.productDetail.option1);
    setValue("info.option2", fetchProduct?.fetchProduct.productDetail.option2);
    setValue("info.option3", fetchProduct?.fetchProduct.productDetail.option3);
    setValue("info.option4", fetchProduct?.fetchProduct.productDetail.option4);
    setValue("info.option5", fetchProduct?.fetchProduct.productDetail.option5);
    setValue("info.option6", fetchProduct?.fetchProduct.productDetail.option6);
    setValue("info.option7", fetchProduct?.fetchProduct.productDetail.option7);
    setValue("info.option8", fetchProduct?.fetchProduct.productDetail.option8);
    setValue("info.option9", fetchProduct?.fetchProduct.productDetail.option9);
    setValue(
      "info.option10",
      fetchProduct?.fetchProduct.productDetail.option10
    );
    setValue(
      "info.option11",
      fetchProduct?.fetchProduct.productDetail.option11
    );
    setValue(
      "info.option12",
      fetchProduct?.fetchProduct.productDetail.option12
    );
    setValue(
      "info.option13",
      fetchProduct?.fetchProduct.productDetail.option13
    );
    setValue(
      "info.option14",
      fetchProduct?.fetchProduct.productDetail.option14
    );
    setValue("shopName", fetchProduct?.fetchProduct.shopName);
    setValue("ceo", fetchProduct?.fetchProduct.ceo);
    setValue("brn", fetchProduct?.fetchProduct.brn);
    setValue("mobn", fetchProduct?.fetchProduct.mobn);
    onChangeCategory(fetchProduct?.fetchProduct.productDetail.type);

    if (fetchProduct) {
      new Array(5)
        .fill(1)
        .map((el, i) =>
          getValues(`option${i + 1}`) !== null ? optionLength.push(el) : null
        );
      setOption(optionLength.length - 1);
    }
  }, [fetchProduct]);
}
