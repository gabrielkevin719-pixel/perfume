import Image from "next/image";

export function Header() {
  return (
    <header className="bg-background py-4">
      <div className="container mx-auto px-4 flex justify-center">
        <Image
          src="https://cdn.rockty.com.br/cdn-cgi/image/quality=80,width=163,format=webp/tenants/UENhtV2BkVNeOEFrXxQ/images/WeAY1wNglEy7ux8Djx2xgQ.jpeg"
          alt="Importadora Megacy Logo"
          width={163}
          height={78}
          className="h-auto w-36 md:w-40"
          priority
        />
      </div>
    </header>
  );
}
