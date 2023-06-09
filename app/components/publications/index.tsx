import { Link } from "@remix-run/react"
import { publications } from "~/data/publications"
import type { PublicationType } from "~/types"
import Clock from "../../../assets/imgs/clock.svg"
import { Button } from "../commons/button"
import { json } from "@remix-run/node";

export const loader = async () => {
    return json({ publication: publications });
};


export default function PublicationComponent() {
    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div className="bg-white">
            <div className="pt-[7rem]">
                <div className="container mx-auto">
                    <div className="flex flex-row">
                        <div className="w-full md:w-3/4">
                            <p className="text-secondary mt-2 text-lg md:text-xl">Nos Récentes</p>
                            <h1 className="text-primary mt-1 text-2xl md:text-5xl">Publications</h1>
                            <p className="mt-2 text-sm md:mt-5 md:text-[1rem] leading-[1.7rem] md:w-[40rem]">Ultrices vitae integer et neque, est
                                egestas.
                                Diam non donec mi
                                purus at quis et.
                                Faucibus tincidunt
                                consequat blandit sed metus in. Lectus venenatis eget senectus ornare.</p>
                        </div>
                        <div className="xl:flex  hidden  w-1/4">
                            <div className="absolute left-[81.88%] right-[4.62%] w-[194px] h-[200px]">
                                {/* <img src="~/assets/imgs/vect-second.png" alt="" /> */}
                            </div>
                            <div className="absolute left-[83.56%] right-[3.1%] w-[190px] h-[110px] mt-[4%]">
                                {/* <img src="~/assets/imgs/vect-prim.png" alt="" /> */}
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-2 md:grid-cols-4 -mx-1 lg:-mx-4 container pt-10">
                        {
                            publications.map((item: PublicationType, index) => {
                                return (
                                    <div className="my-1 px-1 lg:my-4 lg:px-4" key={index}>
                                        <article className="rounded-lg mb-4 md:mb-0">
                                            <div className="w-full h-[10rem] bg-gray-300"></div>
                                            <div className="p-2 md:p-4 mt-9">
                                                <div className="flex items-center my-auto">
                                                    <img src={Clock} className="w-[1.2rem] h-[1.2rem]" alt="" />
                                                    <p className="pl-2 text-[.8rem] leading-[170%]">
                                                        {item.date}
                                                    </p>
                                                </div>
                                                <a href={`publication/${item.slug}`} className="text-primary py-3 text-[1rem] leading-[155%] font-semibold cursor-pointer hover:underline hover:underline-offset-4">
                                                    {item.title}
                                                </a>
                                                {/* <p className="pt-[.6rem] text-[.8rem] leading-[170%] text-[#505A62] truncate">
                                                    {item.content}
                                                </p> */}
                                            </div>
                                        </article>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="w-[17rem] mx-auto py-[4rem] md:py-[7rem]">
                <Button name="Voir plus de publications" />
            </div>
        </div >
    )
}