import Link from "next/link";
import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './tshirt.module.css'; // Importando o CSS personalizado

export default function TShirts() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const addToCart = (item) => {
    const updatedCart = [...cart, item];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`${item.name} foi adicionado ao carrinho`);
  };

  const items = [
    { id: 1, name: "Graphic Tee", price: "$29.99", image: "/placeholder.svg" },
    { id: 2, name: "Striped Tee", price: "$24.99", image: "/placeholder.svg" },
    { id: 3, name: "Oversized Tee", price: "$34.99", image: "/placeholder.svg" },
    { id: 4, name: "Vintage Tee", price: "$19.99", image: "/placeholder.svg" },
    { id: 5, name: "Vintage Tee", price: "$19.99", image: "/placeholder.svg" },
    { id: 6, name: "Vintage Tee", price: "$19.99", image: "/placeholder.svg" }
  ];

  // Dividir os itens em grupos de 3 para o carrossel
  const chunkedItems = [];
  for (let i = 0; i < items.length; i += 3) {
    chunkedItems.push(items.slice(i, i + 3));
  }

  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <section className="container py-12 md:py-20">
        <div className="w-full flex flex-col items-center justify-between mb-8">
          <Link href="/shop" legacyBehavior>
            <a className="text-primary hover:underline text-white mb-4 self-start">
              &larr; Voltar para a loja
            </a>
          </Link>
          <h2 className="text-3xl font-bold text-white text-center">T-Shirts</h2>
        </div>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}  // Intervalo ajustado para 3 segundos
          showStatus={false}
          showIndicators={true}  // Mostrar indicadores (bolinhas)
          className={styles.carousel}
        >
          {chunkedItems.map((chunk, index) => (
            <div key={index} className="flex justify-center p-4 gap-4">
              {chunk.map((item) => (
                <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-1/3" key={item.name}>
                  <Link href={`/products/${item.id}`} legacyBehavior>
                    <a>
                      <img src={item.image} width={400} height={500} alt={item.name} className="w-full h-64 object-cover" />
                    </a>
                  </Link>
                  <div className="p-4">
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p className="text-muted-foreground">{item.price}</p>
                    <button onClick={() => addToCart(item)} className="mt-4 bg-primary text-white py-2 px-4 rounded">
                      Adicionar ao Carrinho
                    </button>
                  </div>
                </Card>
              ))}
            </div>
          ))}
        </Carousel>
      </section>
      <section className="container py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div className="text-center" key={item.id}>
              <Link href={`/products/${item.id}`} legacyBehavior>
                <a>
                  <img src={item.image} alt={item.name} className="mx-auto mb-4" />
                </a>
              </Link>
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-lg text-white">{item.price}</p>
              <button onClick={() => addToCart(item)} className="mt-4 bg-primary text-white py-2 px-4 rounded">
                Adicionar ao Carrinho
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
