import {Injectable} from "@angular/core";

export let Sleep: (ms: number) => Promise<unknown>;
Sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms))
};
