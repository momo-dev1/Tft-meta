const Container = ({ children }: any) => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 bg-[#222222] min-h-screen py-10 ">
      <main className="max-w-6xl mx-auto">{children}</main>
    </section>
  );
};

export default Container;
