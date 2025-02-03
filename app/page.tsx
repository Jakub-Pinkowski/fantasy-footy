import Image from "next/image";

export default function Home() {
    return (
        <div className="relative w-full max-w-4xl mx-auto bg-green-300 rounded-lg shadow-lg p-4">
            <Image
                src="/images/shirts/shirt_8.webp"
                alt="Chelsea"
                width={66}
                height={66}
            />
        </div>
    );
}
