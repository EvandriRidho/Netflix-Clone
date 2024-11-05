import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const languageAtom = atomWithStorage("language", "id")
export const tokenAtom = atomWithStorage("token", null)
export const emailStorageAtom = atomWithStorage("email", null)

export const idMoviesAtom = atom(null)
export const isOpenModalAtom = atom(false)
export const SearchMoviesAtom = atom(null)
export const isFetchingAtom = atom(false)
export const emailAtom = atom(null)