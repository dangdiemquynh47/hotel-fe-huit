const Welcome = () => {
  return (
    // <div className="flex items-center bg-[url('/images/welcome-1.webp')] relative bg-fixed bg-center bg-cover h-[80vh] min-w-screen"></div>
    <div className="flex">
      <div className="w-1/2 ">
        <div className="relative w-full h-[100vh]">
          <div className="absolute inset-0 bg-[url('/images/welcome-1.webp')] bg-fixed bg-center bg-cover"></div>
        </div>
      </div>
      <div className="w-1/2">
        <div className="relative w-full h-[100vh]">
          {/* <div className="absolute inset-0 bg-[url('/images/welcome-2.webp')] bg-fixed bg-center bg-cover"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Welcome;
