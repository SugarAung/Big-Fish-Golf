import AdminNav from "@/components/admin/AdminNav";

export default function AdminShellLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-dark">
      <AdminNav />
      <main className="ml-56 min-h-screen">
        {children}
      </main>
    </div>
  );
}
