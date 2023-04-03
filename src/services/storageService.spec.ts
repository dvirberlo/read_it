import {
  loadFromLocalStorage,
  setLocalStorage,
  StorageEntry,
} from "@/services/storageService";
import { describe, expect, test, vi } from "vitest";

describe("Storage Service", () => {
  test("Should return initial value when local storage is not available", () => {
    const value = loadFromLocalStorage("test", 123);
    expect(value).toEqual(123);
  });

  test("Should set value to local storage", () => {
    setLocalStorage("test", 123);
    const value = window.localStorage.getItem("test");
    expect(value).toEqual(JSON.stringify(123));
    window.localStorage.removeItem("test");
  });

  test("Should get value from local storage", () => {
    window.localStorage.setItem("test", JSON.stringify(123));
    const value = loadFromLocalStorage("test", 0);
    expect(value).toEqual(123);
    window.localStorage.removeItem("test");
  });

  test("Should handle errors while getting from local storage", () => {
    const getItem = vi
      .spyOn(window.localStorage, "getItem")
      .mockImplementation(() => {
        throw new Error();
      });

    const value = loadFromLocalStorage("test", 123);

    expect(value).toEqual(123);
    // expect(getItem).toHaveBeenCalledWith("test");
    getItem.mockRestore();
  });
});

describe("Storage Entry", () => {
  test("Should get the initial value when local storage is not available", () => {
    const entry = new StorageEntry<number>("test", 123);
    const value = entry.get();
    expect(value).toEqual(123);
  });

  test("Should set the value to local storage", () => {
    const entry = new StorageEntry<number>("test", 123);
    entry.set(456);
    const value = window.localStorage.getItem("test");
    expect(value).toEqual(JSON.stringify(456));
    window.localStorage.removeItem("test");
  });

  test("Should get the value from local storage", () => {
    window.localStorage.setItem("test", JSON.stringify(123));
    const entry = new StorageEntry<number>("test", 0);
    const value = entry.get();
    expect(value).toEqual(123);
    window.localStorage.removeItem("test");
  });

  test("Should handle errors while getting from local storage", () => {
    const getItem = vi
      .spyOn(window.localStorage, "getItem")
      .mockImplementation(() => {
        throw new Error();
      });

    const entry = new StorageEntry<number>("test", 123);
    const value = entry.get();

    expect(value).toEqual(123);
    // expect(getItem).toHaveBeenCalledWith("test");
    getItem.mockRestore();
  });
});
