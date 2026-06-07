export default function SigninBanner() {
  return (
    <div>
      <img
        src="/images/logo/alincloud-light.png"
        className="w-full object-contain object-center dark:hidden"
        draggable={false}
      />
      <img
        src="/images/logo/alincloud-dark.png"
        className="w-full object-contain object-center hidden dark:block"
        draggable={false}
      />
    </div>
  );
}
