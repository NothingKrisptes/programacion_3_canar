import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import { Button } from "@/components/ui/button";


export default function TarjetaProducto() {
  return (
    <Card className="w-80">
      <CardHeader>
        <CardTitle>Laptop Lenovo</CardTitle>
      </CardHeader>


      <CardContent>
        <p>Procesador Intel Core i7</p>
        <p>16 GB RAM</p>
        <p>SSD 512 GB</p>
        <p className="font-bold text-lg">$980</p>
      </CardContent>


      <CardFooter>
        <Button className="w-full">
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
}
