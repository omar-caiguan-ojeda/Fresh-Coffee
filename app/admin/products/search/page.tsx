import ProductSearchForm from "@/components/products/ProductSearchForm";
import ProductsTable from "@/components/products/ProductsTable";
import Heading from "@/components/ui/Heading";
import { prisma } from "@/src/lib/prisma";
import Link from "next/link";

async function searchProducts(searchTerm: string) {
    const products = await prisma.product.findMany({
        where: {
            name: {
                contains: searchTerm,
                mode: 'insensitive'
            }
        },
        include: {
            category: true
        }
    })
    return products
}
    


export default async function SearchPage({ searchParams }: { searchParams: { search: string } }) {

    const products = await searchProducts(searchParams.search);

    return (
        <>
            <Heading>Resultados de la busqueda: "{searchParams.search}"</Heading>
            <div className="flex flex-col lg:flex-row lg:justify-end gap-5">
                <ProductSearchForm />
            </div>
            {products.length ? (
                <ProductsTable products={products} />
            ) : (
                <p className="text-center">No se encontraron resultados para la busqueda: "{searchParams.search}"</p>
            )}
        </>
    );
}