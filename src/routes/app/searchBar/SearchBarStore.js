import { writable } from "svelte/store";

export let IsSearching = writable(false);

export let SearchingValue = writable("");

export let selectedIndex = writable(0);