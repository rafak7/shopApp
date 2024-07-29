import { useRouter } from "next/router";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Login() {
  const router = useRouter();

  const handleLogin = (event) => {
    event.preventDefault();
    // Adicione aqui a lógica de autenticação
    // Se a autenticação for bem-sucedida, redirecione para a página de shop
    router.push("/shop");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-primary to-secondary">
      <Card className="w-full max-w-md px-6 py-8 bg-background rounded-lg shadow-lg">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-bold">Login</CardTitle>
          <CardDescription>Faça login na sua conta para continuar.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form onSubmit={handleLogin}>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="seu@email.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <Link href="#" className="text-sm text-muted-foreground" prefetch={false}>
                  Esqueceu a senha?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <CardFooter className="flex flex-col gap-2">
              <Button type="submit" className="w-full">Entrar</Button>
              <div className="text-center text-sm text-muted-foreground">
                Não tem uma conta?{" "}
                <Link href="/register" className="underline" prefetch={false}>
                  Registre-se
                </Link>
              </div>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
