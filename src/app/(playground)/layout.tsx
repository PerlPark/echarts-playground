import Sidebar from '@/components/Sidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-72 shrink-0 bg-slate-100 border-r border-slate-200 p-6 overflow-auto">
        <h1 className="text-2xl font-semibold mb-3 w">ECHATS PLAYGROUND</h1>
        <Sidebar />
      </div>
      <main className="flex justify-center flex-grow p-16 min-h-screen md:min-h-0">
        {children}
      </main>
    </div>
  );
}
