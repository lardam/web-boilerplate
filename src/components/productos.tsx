import Image from "next/image";

export default function Productos(){
    return(
        <div className="productos-wrapper">
            <h2 className="section-title">Menú</h2>
            <div className="productos-grid">
                {/* Mostrar destacados o carousel de todo */}
                <div className="product-card">
                    <div className="image-cont">
                        <Image className="product-img" src="/claim-foto.jpg" alt="producto" sizes="80vw" fill /> 
                    </div>
                    <div className="product-info">
                        <h3 className="product-name">Hamburguesa clásica</h3>
                        <p className="product-details">Pan, carne, queso, cebolla picada, ketchup, mostaza.</p>
                        <p className="product-price">€6,99</p>
                    </div>
                </div>
                <div className="product-card">
                    <div className="image-cont">
                        <Image className="product-img" src="/claim-foto.jpg" alt="producto" sizes="80vw" fill /> 
                    </div>
                    <div className="product-info">
                        <h3 className="product-name">Hamburguesa doble</h3>
                        <p className="product-details">Pan, carne, queso, cebolla picada, ketchup, mostaza.</p>
                        <p className="product-price">€6,99</p>
                    </div>
                </div>
                <div className="product-card">
                    <div className="image-cont">
                        <Image className="product-img" src="/claim-foto.jpg" alt="producto" sizes="80vw" fill /> 
                    </div>
                    <div className="product-info">
                        <h3 className="product-name">Hamburguesa catalana</h3>
                        <p className="product-details">Pan, carne, queso, cebolla picada, ketchup, mostaza.</p>
                        <p className="product-price">€6,99</p>
                    </div>
                </div>
            </div>
            <button className="button primary-btn" type="button">
                ver más
            </button>
        </div>
    )
}