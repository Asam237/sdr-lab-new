import {PosteType} from "~/types";
import {cleanText} from "~/utils/helpers";
import React from "react";

export default function Realisations({slug, date, context, open, role, name, title, description}: PosteType) {
    return (
        <a href={`realisations/${slug}`}
           className={`my-1 lg:my-4 border hover:shadow-xl cursor-pointer`}>
            <article className="rounded-lg mb-4 md:mb-0">
                <div className="p-4">
                    <div className={'flex justify-between items-center py-3'}>
                        <p
                            className="text-primary text-sm leading-[155%] font-semibold">
                            {cleanText(name, 60)}
                        </p>
                        <div
                            className={`rounded-full text-xs text-white px-4 py-2 ${open === true ? 'bg-green-500 w-[90px]' : 'bg-red-500 w-16'} h-6 flex justify-center items-center`}>
                            {open === true ? 'en cours' : 'achevée'}
                        </div>
                    </div>
                    <p
                        className="text-primary text-lg leading-[155%] font-semibold">
                        {cleanText(title, 60)}
                    </p>
                </div>
                <hr/>
                <div className={"p-4"}>
                    <div className="flex items-center my-auto mt-2">
                        <p className="text-[.8rem] leading-[170%] underline outline-offset-4">
                            Date de realisation:
                        </p>
                        <p className="pl-2 text-[.8rem] leading-[170%]">
                            {date}
                        </p>
                    </div>
                    <p className="mt-4 text-[.8rem] leading-[170%]">
                        {cleanText(
                            context,
                            200
                        )}
                    </p>
                </div>
            </article>
        </a>
    )
}
//
