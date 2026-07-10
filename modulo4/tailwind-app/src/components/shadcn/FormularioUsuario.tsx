import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


export default function FormularioUsuario() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Nuevo Usuario</Button>
      </DialogTrigger>


      <DialogContent>
        <DialogHeader>
          <DialogTitle>Registro de Usuario</DialogTitle>
        </DialogHeader>


        <div className="space-y-4">
          <Input placeholder="Nombre" />


          <Input
            type="email"
            placeholder="Correo electrónico"
          />


          <Input
            type="password"
            placeholder="Contraseña"
          />


          <Button className="w-full">
            Guardar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
