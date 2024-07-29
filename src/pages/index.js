import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-md w-full px-6 py-8 bg-background rounded-lg shadow-lg">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-foreground">Bem-vindo ao nosso site</h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Login
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Registrar
            </Link>
          </div>
          <p className="text-muted-foreground">
            Junte-se à nossa comunidade e aproveite todos os benefícios que temos a oferecer.
          </p>
        </div>
      </div>
    </div>
  );
}
