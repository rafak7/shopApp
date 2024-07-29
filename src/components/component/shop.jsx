import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Shop() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <main className="flex-1 flex flex-col items-center justify-center">
        <section className="bg-muted py-12 md:py-20 w-full">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white">Discover the Latest Streetwear Trends</h1>
              <p className="text-lg text-gray-300">
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
            <Link href="#" className="text-primary hover:underline" prefetch={false}>
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/tshirt"
              className="bg-gray-700 rounded-lg p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
              prefetch={false}
            >
              <img src="/images/nocnike.jpg" width={80} height={80} alt="T-Shirts" className="rounded-full" />
              <span className="text-lg font-medium text-white">T-Shirts</span>
            </Link>
            <Link
              href="#"
              className="bg-gray-700 rounded-lg p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
              prefetch={false}
            >
              <img src="/images/nocjaq.webp" width={80} height={80} alt="Hoodies" className="rounded-full" />
              <span className="text-lg font-medium text-white">Hoodies</span>
            </Link>
            <Link
              href="#"
              className="bg-gray-700 rounded-lg p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
              prefetch={false}
            >
              <img src="/images/calcanoc.webp" width={80} height={80} alt="Pants" className="rounded-full" />
              <span className="text-lg font-medium text-white">Pants</span>
            </Link>
            <Link
              href="#"
              className="bg-gray-700 rounded-lg p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
              prefetch={false}
            >
              <img src="/images/bonenoc.webp" width={80} height={80} alt="Accessories" className="rounded-full" />
              <span className="text-lg font-medium text-white">Accessories</span>
            </Link>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 w-full">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-white">New Arrivals</h2>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#" className="block" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={500}
                    alt="Product 1"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">Streetwear Hoodie</h3>
                    <p className="text-gray-300">$59.99</p>
                  </div>
                </Link>
              </Card>
              <Card className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#" className="block" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={500}
                    alt="Product 2"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">Graphic Tee</h3>
                    <p className="text-gray-300">$29.99</p>
                  </div>
                </Link>
              </Card>
              <Card className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#" className="block" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={500}
                    alt="Product 3"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">Cargo Pants</h3>
                    <p className="text-gray-300">$49.99</p>
                  </div>
                </Link>
              </Card>
              <Card className="bg-gray-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#" className="block" prefetch={false}>
                  <img
                    src="/placeholder.svg"
                    width={400}
                    height={500}
                    alt="Product 4"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold text-white">Snapback Cap</h3>
                    <p className="text-gray-300">$19.99</p>
                  </div>
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
