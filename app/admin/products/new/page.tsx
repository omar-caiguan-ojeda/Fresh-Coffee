import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Heading from "@/components/ui/Heading";


export default function CreateProductPage() {
  return (
    <>
      <Heading>Crear Producto</Heading>

      <AddProductForm>
        <ProductForm />
      </AddProductForm>
    </>
  )
}
