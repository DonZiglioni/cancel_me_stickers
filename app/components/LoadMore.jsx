"use client"
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/lib/actions";
import ProductCard from "./ProductCard";

let page = 6;

function LoadMore() {
    const { ref, inView, entry } = useInView();
    const [data, setData] = useState([]);
    const [endList, setEndList] = useState(false);

    useEffect(() => {
        if (inView) {
            fetchProducts(page).then((res) => {
                console.log(res);
                setData([...data, ...res.data])
                page += 6
            })
        }
    }, [inView, data])

    return (
        <>
            <div className=" w-full xl:max-w-[85%] 2xl:max-w-[75%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-2">
                {data.map((e) => {
                    return <ProductCard key={e.id} product={e}></ProductCard>
                })}
            </div>
            <section className="flex justify-center items-center w-full">
                <div ref={ref}>
                    {endList ? null :
                        <Image
                            src="./spinner.svg"
                            alt="spinner"
                            width={56}
                            height={56}
                            className="object-contain"
                        />
                    }
                </div>
            </section>
        </>
    );
}

export default LoadMore;
