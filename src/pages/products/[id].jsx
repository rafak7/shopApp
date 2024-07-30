import { useRouter } from 'next/router';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Graphic Tee", price: "$29.99", image: "/placeholder.svg", description: "A cool graphic tee." },
  { id: 2, name: "Striped Tee", price: "$24.99", image: "/placeholder.svg", description: "A stylish striped tee." },
  { id: 3, name: "Oversized Tee", price: "$34.99", image: "/placeholder.svg", description: "A comfortable oversized tee." },
  { id: 4, name: "Vintage Tee", price: "$19.99", image: "/placeholder.svg", description: "A vintage style tee." },
  { id: 5, name: "Vintage Tee", price: "$19.99", image: "/placeholder.svg", description: "A vintage style tee." },
  { id: 6, name: "Vintage Tee", price: "$19.99", image: "/placeholder.svg", description: "A vintage style tee." }
];

const ProductDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
    }
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div className="product-details-container">
      <div className="flex-1">
        <img
          src={product.image}
          alt="Product Image"
          width={600}
          height={600}
          className="product-details-image"
        />
      </div>
      <div className="product-details-info">
        <div>
          <h1>{product.name}</h1>
          <p className="price">{product.price}</p>
        </div>
        <div className="grid gap-4">
          <p>{product.description}</p>
          <div className="rating">
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-primary" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            <span className="text-muted-foreground">(3.5)</span>
          </div>
        </div>
        <div className="options">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="size">Size</Label>
              <Select id="size" defaultValue="m">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="s">Small</SelectItem>
                  <SelectItem value="m">Medium</SelectItem>
                  <SelectItem value="l">Large</SelectItem>
                  <SelectItem value="xl">X-Large</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
            </div>
          </div>
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Select id="quantity" defaultValue="1">
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="actions">
          <Button size="lg" className="add-to-cart">Add to Cart</Button>
          <Button variant="outline" size="lg" className="add-to-wishlist">
            <HeartIcon className="w-4 h-4 mr-2" />
            Add to Wishlist
          </Button>
        </div>
      </div>
    </div>
  );
};

function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export default ProductDetails;
