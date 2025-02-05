import Image from "next/image";

// TODO: Put the image into a separate component
export default function Home() {
    return (
        <div className="relative w-full max-w-4xl mx-auto bg-green-300 rounded-lg shadow-lg p-4">
            <div className="card bg-base-100 w-26 shadow-sm">
                <figure>
                    <Image
                        src="/images/shirts/shirt_8.webp"
                        alt="Chelsea"
                        width={66}
                        height={66}
                    />
                </figure>
                <div className="card-body p-0 items-center">
                    <h2 className="card-title">Palmer</h2>
                    <p>14</p>
                </div>
            </div>
        </div>
    );
}
