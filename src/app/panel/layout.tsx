import './db.scss';
import Link from 'next/link';
import { EdgeStoreProvider } from '@/libs/edgestore';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <EdgeStoreProvider>
      <main className="db-wrapper">
        <header className="db-panel-header">
            <Link className="db-link" href="/panel"><p>Panel de control</p></Link>
            <nav className="db-nav">
                <ul className="db-navlist">
                    <li className="db-navitem">
                        <Link className="db-navlink" href="/panel/productos">Productos</Link>
                    </li>
                    <li className="db-navitem">
                        <Link className="db-navlink" href="/panel/contenido">Contenido</Link>
                    </li>
                    <li className="db-navitem">
                        <Link className="db-navlink" href="/panel/contacto">Contacto</Link>
                    </li>
                </ul>
            </nav>
        </header>
        {children}
      </main>
    </EdgeStoreProvider>
  );
}
