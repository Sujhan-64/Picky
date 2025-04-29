import CategoryMenu from "./categoryMenu"
import ProductShow from "./productShow"
import ResultName from "./resultName"
import PriceSlider from "./priceSlider"
import { getCollection } from "@/lib/db"
const ProductsPage = async() => {
  const collection = await getCollection("products");
  const products = await collection.find().toArray();

  return (
    <div className="flex m-8">
      <div>
        <CategoryMenu/>
        <PriceSlider/>
      </div>
      <div>
        <ResultName/>
        <ProductShow/>
      </div>
      <div>
        <p>{products}</p>
      </div>
    </div>
  )
}

export default ProductsPage
