import {DefaultLayout} from "~/layouts/default";
import {Link, useMatches} from "@remix-run/react";
import {header} from "~/data/header";
import type {HeaderType} from "~/types";
import React, {useState} from "react";
import Logo from "../../../assets/imgs/srd-lab-logo.svg";
import LogoColor from "../../../assets/imgs/logo.png";
import {TEAM} from "~/data/images";
import {useForm, ValidationError} from "@formspree/react";

const Candidature = () => {
    const [navbar, setNavbar] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const path = useMatches();
    const idPath = path[1].pathname;
    const [state, handleSubmit] = useForm("xwkdvdbl");

    if (state.succeeded) {
        return <p>Candidature envoyee avec success !!!</p>
    }

    return (
        <>
            <DefaultLayout>
                <header>
                    <div className={`fixed right-0 top-0 left-0 z-40 bg-primary`}>
                        <div
                            className="myheader container-other hover:rounded-xl my-4"
                            onMouseLeave={() => setIsShow(false)}
                            onMouseEnter={() => setIsShow(true)}
                        >
                            <div className="py-2 container mx-auto">
                                <nav>
                                    <div className="flex items-center justify-between">
                                        <Link to="/">
                                            {isShow ? (
                                                <div>
                                                    <img
                                                        className={`logopng w-[13rem] h-[4.4rem] logocolor`}
                                                        src={LogoColor}
                                                        alt=""
                                                    />
                                                </div>
                                            ) : (
                                                <div>
                                                    <img
                                                        className="logosvg w-[13rem] h-[4.4rem] logowhite"
                                                        src={Logo}
                                                        alt=""
                                                    />
                                                </div>
                                            )}
                                        </Link>
                                        <div
                                            className="xl:hidden"
                                            onClick={() => setNavbar(!navbar)}
                                        >
                                            <button>
                                                <svg
                                                    className="h-8 w-8 fill-current text-white"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="hidden xl:block">
                                            <ul className="flex space-x-8 text-sm font-sans">
                                                {header.map((item: HeaderType, index) => {
                                                    return (
                                                        <li key={index}>
                                                            <Link
                                                                to={`${item.link}`}
                                                                className={`${
                                                                    item.link === idPath
                                                                        ? "font-extrabold border rounded-full px-6 py-2 border-[#faaf42]"
                                                                        : "font-normal"
                                                                } text-sm ${
                                                                    item.link === "#travailleravecnous" ? "" : ""
                                                                }`}
                                                            >
                                                                {item.name}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                    <div
                                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                                            navbar ? "block" : "hidden"
                                        }`}
                                    >
                                        <ul className="flex flex-col items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 lg:hidden text-white">
                                            {header.map((item: HeaderType, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Link
                                                            className="text-gray-800 font-medium text-sm mt-4"
                                                            to={`${item.link}`}
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                );
                                            })}
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>
                <div className="py-10 md:py-20">
                    <div className="container mx-auto">
                        <div className="flex flex-row space-x-8">
                            <div className="w-full md:w-3/4">
                                <p className="text-secondary mt-2 text-lg md:text-xl">
                                    Rejoignez notre
                                </p>
                                <h1 className="text-primary mt-1 text-2xl md:text-5xl">
                                    Equipe
                                </h1>
                                <p className="mt-2 text-sm md:mt-5 md:text-[1rem] text-justify leading-[1.7rem] md:w-[40rem]">
                                    Nous sommes à la recherche de personnes compétentes et
                                    engagées qui peuvent évoluer avec nous et nous aider à
                                    satisfaire et même à dépasser les attentes de nos clients. SRD
                                    Lab est reconnu comme un employeur ouvert qui se différencie
                                    par de vraies valeurs et considère ses employés comme son
                                    atout le plus important. SRD Lab est un employeur qui respecte
                                    l'égalité des chances et ne pratique aucune discrimination
                                    fondée sur l'âge, la race, la religion, la nationalité, le
                                    sexe, ou toute autre forme de discrimination.
                                </p>
                                <p className="mt-2 text-sm md:mt-5 md:text-[1rem] font-bold text-justify leading-[1.7rem] md:w-[40rem]">
                                    Merci de compléter les plages ci-dessous. Vos informations
                                    seront traitées avec la plus stricte confidentialité et
                                    serviront exclusivement à évaluer votre candidature.
                                </p>
                                <form onSubmit={handleSubmit} className={"mt-6"}>
                                    <input
                                        className={`rounded-lg border w-full md:w-3/5 border-gray-300 p-4 mt-6`}
                                        placeholder={"Nom"}
                                        name={"lastName"}
                                        id="lastName"
                                    />
                                    <input
                                        className={`rounded-lg border w-full md:w-3/5 border-gray-300 p-4 mt-6`}
                                        placeholder={"Prenom"}
                                        name={"firstName"}
                                        id="firstName"
                                    />
                                    <input
                                        className={`rounded-lg border w-full md:w-3/5 border-gray-300 p-4 mt-6`}
                                        name={"address"}
                                        placeholder={"Adresse"}
                                        id="address"
                                    />
                                    <input
                                        className={`rounded-lg border w-full md:w-3/5 border-gray-300 p-4 mt-6 hidden`}
                                        placeholder={"Email"}
                                        id="email"
                                        value="christelletchoupe@yahoo.fr"
                                        disabled
                                    />
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                    <input
                                        className={`rounded-lg border w-full md:w-3/5 border-gray-300 p-4 mt-6`}
                                        placeholder={"Phone"}
                                    />
                                    <textarea
                                        cols={6}
                                        rows={6}
                                        placeholder={"Message"}
                                        id="message"
                                        name={"message"}
                                        className={`rounded-lg border w-full md:w-3/5 border-gray-300 p-4 mt-6`}
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                    <div className="w-full md:w-3/5 mt-8">
                                        <button
                                            aria-label="search"
                                            disabled={state.submitting}
                                            className="bg-orange rounded-full text-[.9rem] text-primary px-[30px] py-[10px] md:py-[16px] md:px-[48px] w-full font-semibold"
                                        >
                                            Envoyez un message
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className={"row hidden md:flex md:w-1/2"}>
                                <div className={"rounded-md h-1/2 w-full"}>
                                    <img
                                        src={TEAM}
                                        loading={"lazy"}
                                        alt="pic"
                                        className={"h-full rounded-lg object-cover"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        </>
    )
}

export default Candidature;