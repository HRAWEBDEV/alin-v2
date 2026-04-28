export default function AuthAside() {
  return (
    <div className='bg-[url("/images/login/login-aside.png")] bg-cover grow relative'>
      <div
        className="absolute z-2 w-120 inset-s-1/2 top-1/2 -translate-x-1/2 translate-y-[calc(-50%-7.5rem)]"
        style={{ direction: "ltr" }}
      >
        <img
          src="/images/logo/alincloud-dark.png"
          className="w-full"
          draggable={false}
        />
      </div>
    </div>
  );
}
