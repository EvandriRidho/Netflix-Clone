import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const languageAtom = atomWithStorage("language", "id")
export const idMoviesAtom = atom(null)
export const isOpenModalAtom = atom(false)
export const SearchMoviesAtom = atom(null)
export const isFetchingAtom = atom(false)