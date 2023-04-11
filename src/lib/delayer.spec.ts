import { createDelayer } from "./delayer";

describe("createDelayer", () => {
  it("should delay the function execution", async () => {
    const mockFn = vi.fn();
    const delay = 1000; // in milliseconds
    const delayer = createDelayer(delay);

    delayer(mockFn);
    expect(mockFn).not.toBeCalled();

    // Wait for the delay to finish
    await new Promise((resolve) => setTimeout(resolve, delay));

    expect(mockFn).toBeCalled();
  });
});
