import { UserButton } from "@clerk/nextjs";

const HomePage = () => {
  return (
    <div className=''>
      HomePage
      <div>
        {" "}
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
};

export default HomePage;
