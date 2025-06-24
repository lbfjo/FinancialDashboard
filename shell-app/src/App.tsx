import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 border-b">
      <div className="flex gap-4">
        <Link to="/accounts" className="font-semibold">Accounts</Link>
        <Link to="/transactions" className="font-semibold">Transactions</Link>
        <Link to="/investments" className="font-semibold">Investments</Link>
        <Link to="/budget" className="font-semibold">Budget</Link>
      </div>
      <Button>Login</Button>
    </nav>
  );
}

function Placeholder({ title }: { title: string }) {
  return <div className="p-8 text-2xl font-bold">{title} (Microfrontend Placeholder)</div>;
}

function App() {
  return (
    <Router>
      <Navbar />
      <main className="max-w-4xl mx-auto py-8">
        <Routes>
          <Route path="/accounts" element={<Placeholder title="Accounts Overview" />} />
          <Route path="/transactions" element={<Placeholder title="Transactions" />} />
          <Route path="/investments" element={<Placeholder title="Investments" />} />
          <Route path="/budget" element={<Placeholder title="Budget" />} />
          <Route path="*" element={<Placeholder title="Welcome to the Financial Dashboard" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
