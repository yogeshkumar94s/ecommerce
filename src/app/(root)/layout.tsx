const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex flex-col justify-center items-center h-screen w-full'>
      {children}
    </div>
  );
};

export default RootLayout;
