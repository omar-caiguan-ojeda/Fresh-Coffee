import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className= "text-center">
            <Heading>Producto no encontrado</Heading>
            <Link 
                href="/admin/products"
                className="bg-amber-400 text-black px-10 py-3 text-xl text-center font-bold w-full lg:w-auto rounded-md cursor-pointer"
            >Volver a la lista de productos</Link>
        </div>
    )
}