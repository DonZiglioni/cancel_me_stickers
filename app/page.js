import Image from "next/image";
import Link from "next/link";
import HeroBanner from "./components/HeroBanner";
import { fetchProducts } from "@/lib/actions";
import ProductCard from "./components/ProductCard";
import LoadMore from "./components/LoadMore";

export default async function Home() {

  const data = await fetchProducts()

  return (
    <div>
      <main className="flex flex-col items-center justify-center">
        <HeroBanner />
        <div className=" w-full">
          <h1 className="font-bold text-4xl text-white text-center py-4 mb-8">
            ALL STICKERS
          </h1>
        </div>
        <div className=" w-full xl:max-w-[85%] 2xl:max-w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-2">
          {data?.data.map((e) => {
            return <ProductCard key={e.id} product={e}></ProductCard>
          })}
        </div>
        <LoadMore />
      </main>
    </div>
  );
}
