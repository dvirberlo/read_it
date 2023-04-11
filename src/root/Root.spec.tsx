import { router } from "@/root/routes";
import { render } from "@testing-library/react";
import { Root } from "./Root";
import { displayName } from "@/../package.json";

describe("Root", () => {
  it("renders the element and includes app name text", () => {
    const { getAllByText, unmount } = render(<Root router={router} />);
    expect(getAllByText(displayName).length).toBeGreaterThan(0);
    unmount();
  });
});
