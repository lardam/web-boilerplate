import Breadcrumb from "@/components/db/breadcrumb";
import ProductsPage from "@/components/db/products-page";
import { ProductosProvider } from "@/context/producto-c";

// Cambiar provider

export default function Page(){
    return(
        <ProductosProvider>
            <section className="db-content">
                <Breadcrumb>
                    <p className="crumb">Contenido</p>
                </Breadcrumb>
                {/* <ProductsPage /> */}
            </section>
        </ProductosProvider>
    )
}