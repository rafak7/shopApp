import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Shop() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex flex-col items-center justify-center">
        <section className="bg-muted py-12 md:py-20 w-full">
          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Discover the Latest Streetwear Trends</h1>
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
            <h2 className="text-3xl font-bold">Shop by Category</h2>
            <Link href="#" className="text-primary hover:underline" prefetch={false}>
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="#"
              className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
              prefetch={false}
            >
              <img src="/images/nocnike.jpg" width={80} height={80} alt="T-Shirts" className="rounded-full" />
              <span className="text-lg font-medium">T-Shirts</span>
            </Link>
            <Link
              href="#"
              className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
              prefetch={false}
            >
              <img src="/images/nocjaq.webp" width={80} height={80} alt="Hoodies" className="rounded-full" />
              <span className="text-lg font-medium">Hoodies</span>
            </Link>
            <Link
              href="#"
              className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
              prefetch={false}
            >
              <img src="/images/calcanoc.webp" width={80} height={80} alt="Pants" className="rounded-full" />
              <span className="text-lg font-medium">Pants</span>
            </Link>
            <Link
              href="#"
              className="bg-background rounded-lg p-4 flex flex-col items-center gap-2 hover:shadow-lg transition-shadow"
              prefetch={false}
            >
              <img src="/images/bonenoc.webp" width={80} height={80} alt="Accessories" className="rounded-full" />
              <span className="text-lg font-medium">Accessories</span>
            </Link>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 w-full">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">New Arrivals</h2>
              <Link href="#" className="text-primary hover:underline" prefetch={false}>
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#" className="block" prefetch={false}>
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
                </Link>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#" className="block" prefetch={false}>
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
                </Link>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#" className="block" prefetch={false}>
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
                </Link>
              </Card>
              <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <Link href="#" className="block" prefetch={false}>
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
                </Link>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
      />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
