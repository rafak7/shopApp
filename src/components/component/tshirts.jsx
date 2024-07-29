import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from './tshirt.module.css';

export default function TShirts() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <section className="container py-12 md:py-20">
        <div className="flex flex-col items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">T-Shirts</h2>
        </div>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={2000}
          showStatus={false}
          showIndicators={true}
          className={styles.carousel}
        >
          <div className="flex justify-center p-4 gap-4">
            <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-1/3">
              <Link href="#" className="block" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={500}
                  alt="T-Shirt 1"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Graphic Tee</h3>
                  <p className="text-muted-foreground">$29.99</p>
                </div>
              </Link>
            </Card>
            <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-1/3">
              <Link href="#" className="block" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={500}
                  alt="T-Shirt 2"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Striped Tee</h3>
                  <p className="text-muted-foreground">$24.99</p>
                </div>
              </Link>
            </Card>
            <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-1/3">
              <Link href="#" className="block" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={500}
                  alt="T-Shirt 3"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Oversized Tee</h3>
                  <p className="text-muted-foreground">$34.99</p>
                </div>
              </Link>
            </Card>
          </div>
          <div className="flex justify-center p-4 gap-4">
            <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-1/3">
              <Link href="#" className="block" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={500}
                  alt="T-Shirt 4"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Vintage Tee</h3>
                  <p className="text-muted-foreground">$19.99</p>
                </div>
              </Link>
            </Card>
            <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-1/3">
              <Link href="#" className="block" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={500}
                  alt="T-Shirt 5"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Vintage Tee</h3>
                  <p className="text-muted-foreground">$19.99</p>
                </div>
              </Link>
            </Card>
            <Card className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-1/3">
              <Link href="#" className="block" prefetch={false}>
                <img
                  src="/placeholder.svg"
                  width={400}
                  height={500}
                  alt="T-Shirt 6"
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold">Vintage Tee</h3>
                  <p className="text-muted-foreground">$19.99</p>
                </div>
              </Link>
            </Card>
          </div>
        </Carousel>
      </section>
      <section className="container py-12 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="TRICOT SUFGANG YING YANG WHITE"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">TRICOT SUFGANG YING YANG WHITE</h3>
            <p className="text-lg text-white">R$ 349,90</p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="TRICOT SUFGANG YING YANG BLACK"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">TRICOT SUFGANG YING YANG BLACK</h3>
            <p className="text-lg text-white">R$ 349,90</p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="TEE SUFGANG STUNT MASTER GREY"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">TEE SUFGANG STUNT MASTER GREY</h3>
            <p className="text-lg text-white">R$ 189,90</p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="TEE SUFGANG STUNT MASTER GREY"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">TEE SUFGANG STUNT MASTER GREY</h3>
            <p className="text-lg text-white">R$ 189,90</p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="TEE SUFGANG STUNT MASTER GREY"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">TEE SUFGANG STUNT MASTER GREY</h3>
            <p className="text-lg text-white">R$ 189,90</p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="TEE SUFGANG STUNT MASTER GREY"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">TEE SUFGANG STUNT MASTER GREY</h3>
            <p className="text-lg text-white">R$ 189,90</p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="TEE SUFGANG STUNT MASTER GREY"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">TEE SUFGANG STUNT MASTER GREY</h3>
            <p className="text-lg text-white">R$ 189,90</p>
          </div>
          <div className="text-center">
            <img
              src="/placeholder.svg"
              alt="TEE SUFGANG STUNT MASTER BLUE"
              className="mx-auto mb-4"
            />
            <h3 className="text-xl font-bold">TEE SUFGANG STUNT MASTER BLUE</h3>
            <p className="text-lg text-white">R$ 189,90</p>
          </div>
        </div>
      </section>
    </main>
  );
}
