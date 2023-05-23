import { DG, ESC, RISD, WB } from "~/data/images";

export default function ConfianceComponent() {
    return (
        <div className="bg-white">
            <div className="py-[7rem]">
                <div className="mx-auto">
                    <p className="text-[##0E3758] mt-2 text-center text-lg mx-auto md:text-xl">Ils nous font confiance</p>
                </div>
                <div className="container mx-auto">
                    <div className="scroolpub grid sm:grid-cols-2 md:grid-cols-4 -mx-1 lg:-mx-4 container py-10">
                        <div className="my-1 px-1 lg:my-4 lg:px-4">
                            <div className="w-full h-[10rem]">
                                <img src={DG} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="my-1 px-1 lg:my-4 lg:px-4">
                            <div className="w-full h-[10rem]">
                                <img src={ESC} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="my-1 px-1 lg:my-4 lg:px-4">
                            <div className="w-full h-[10rem]">
                                <img src={WB} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="my-1 px-1 lg:my-4 lg:px-4">
                            <div className="w-full h-[10rem]">
                                <img src={RISD} alt="" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}