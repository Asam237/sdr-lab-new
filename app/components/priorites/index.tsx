import { priorities } from "~/data/priority";
import type { PriorityType } from "~/types";

export default function PrioritesComponent() {
    return (
        <div className="bg-[#f6fafe]">
            <div className="py-16 md:py-44">
                <div className="container mx-auto">
                    <div className="flex flex-row">
                        <div className="w-full">
                            <p className="text-secondary mt-2 text-lg md:text-xl">Nos priorités</p>
                            <h1
                                className="text-primary mt-1 text-xl  md:leading-[120%] md:text-[2rem]  md:mr-8  md:w-[40rem] text-start">
                                un cabinet d’étude producteur de données et de formations pour l’aide aux décisions
                                économiques et socio-démographiques
                            </h1>
                            <div className="pt-[3rem]">
                                <div className="grid md:grid-cols-3 grid-cols-1">
                                    {
                                        priorities.map((item: PriorityType, index) => {
                                            return (
                                                <div key={index} className="pb-12 md:pb-0">
                                                    <div className="bg-[#d9d9d9] w-36 h-36"></div>
                                                    <h2
                                                        className="pt-7 pb-3 md:w-[14rem] xl:w-[18rem] text-[1.2rem] leading-[130%] text-primary">{item.title}</h2>
                                                    <p className="md:w-[14rem] xl:w-[18rem] text-[0.7rem] leading-[185%] pr-10 md:pr-0">{item.description}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}