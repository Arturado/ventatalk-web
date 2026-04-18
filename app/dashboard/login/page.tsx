import LoginForm from "./LoginForm";

export const metadata = {
  title: "Iniciar sesión — VentaTalk",
  robots: "noindex, nofollow",
};

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-brand-bg flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-2xl font-bold text-brand-primary">VentaTalk</span>
          <p className="text-slate-500 text-sm mt-1">Panel de administración</p>
        </div>

        <div className="bg-white rounded-3xl shadow-sm border border-sky-100 p-8">
          <h1 className="text-xl font-bold text-brand-text mb-6">Iniciar sesión</h1>
          <LoginForm />
        </div>

        <p className="text-center text-xs text-slate-400 mt-6">
          La cuenta se bloquea por 15 minutos tras 5 intentos fallidos.
        </p>
      </div>
    </main>
  );
}
