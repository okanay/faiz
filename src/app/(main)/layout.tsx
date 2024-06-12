export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header></header>
      {children}
      <footer></footer>
    </>
  );
}
