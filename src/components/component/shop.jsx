// pages/shop.js

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Shop() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <Link href="/cart" legacyBehavior>
        <a className="absolute top-4 right-4 bg-primary text-white py-2 px-4 rounded">Carrinho</a>
      </Link>
      <main className="flex-1 flex flex-col items-center justify-center pt-16">
        <section className="bg-muted py-12 md:py-20 w-full">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">Discover the Latest Streetwear Trends</h1>
              <p className="text-lg text-muted-foreground">
                Explore our curated collection of the hottest streetwear fashion.
              </p>
              <div className="flex gap-4">
                <Button>Shop Now</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="/images/nocnike.jpg" width={300} height={400} alt="Product 1" className="rounded-lg object-cover" />
              <img src="/images/nocnike.jpg" width={300} height={400} alt="Product 2" className="rounded-lg object-cover" />
              <img src="/images/nocnike.jpg" width={300} height={400} alt="Product 3" className="rounded-lg object-cover" />
              <img src="/images/nocnike.jpg" width={300} height={400} alt="Product 4" className="rounded-lg object-cover" />
            </div>
          </div>
        </section>
        <section className="container mx-auto py-12 md:py-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-white">Shop by Category</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/tshirt" legacyBehavior>
              <a className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
                <img src="/images/nocnike.jpg" width={80} height={80} alt="T-Shirts" className="rounded-full" />
                <span className="text-lg font-medium text-white">T-Shirts</span>
              </a>
            </Link>
            <Link href="/hoodies" legacyBehavior>
              <a className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
                <img src="/images/nocjaq.webp" width={80} height={80} alt="Hoodies" className="rounded-full" />
                <span className="text-lg font-medium text-white">Hoodies</span>
              </a>
            </Link>
            <Link href="/pants" legacyBehavior>
              <a className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
                <img src="/images/calcanoc.webp" width={80} height={80} alt="Pants" className="rounded-full" />
                <span className="text-lg font-medium text-white">Pants</span>
              </a>
            </Link>
            <Link href="#" legacyBehavior>
              <a className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow">
                <img src="/images/bonenoc.webp" width={80} height={80} alt="Accessories" className="rounded-full" />
                <span className="text-lg font-medium text-white">Accessories</span>
              </a>
            </Link>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 w-full">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">New Arrivals</h2>
              <Link href="#" legacyBehavior>
                <a className="text-primary hover:underline">View All</a>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#" legacyBehavior>
                  <a className="block">
                    <img
                      src="/placeholder.svg"
                      width={400}
                      height={500}
                      alt="Product 1"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold">Streetwear Hoodie</h3>
                      <p className="text-muted-foreground">$59.99</p>
                    </div>
                  </a>
                </Link>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#" legacyBehavior>
                  <a className="block">
                    <img
                      src="/placeholder.svg"
                      width={400}
                      height={500}
                      alt="Product 2"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold">Graphic Tee</h3>
                      <p className="text-muted-foreground">$29.99</p>
                    </div>
                  </a>
                </Link>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#" legacyBehavior>
                  <a className="block">
                    <img
                      src="/placeholder.svg"
                      width={400}
                      height={500}
                      alt="Product 3"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold">Cargo Pants</h3>
                      <p className="text-muted-foreground">$49.99</p>
                    </div>
                  </a>
                </Link>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#" legacyBehavior>
                  <a className="block">
                    <img
                      src="/placeholder.svg"
                      width={400}
                      height={500}
                      alt="Product 4"
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-bold">Snapback Cap</h3>
                      <p className="text-muted-foreground">$19.99</p>
                    </div>
                  </a>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
