const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full min-h-full dark:bg-[#1F1F1F] bg-gray-100">
      {children}
    </div>
  );
};

export default AuthLayout;
