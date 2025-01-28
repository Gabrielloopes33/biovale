import "@/styles/globals.css";
export const metadata = {
  title: 'BIOVALE - Soluções Ambientais',
  description: 'BIOVALE - Soluções Ambientais',
  icons: {
    icon: '/isobio (1).svg',
  },
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
