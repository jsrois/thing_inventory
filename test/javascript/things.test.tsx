import * as React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, wait, cleanup } from "@testing-library/react";
import axios from "axios";
import ThingsList from "../../app/javascript/components/ThingsList";

const axiosStub = axios as jest.Mocked<typeof axios>;

jest.mock("axios");

describe("Things", () => {
  it("are retrieved and displayed", async () => {
    afterEach(cleanup);
    axiosStub.get.mockResolvedValueOnce({
      data: {
        things: [
          { name: "Camiseta", price: "12.30" },
          { name: "Octaveta", price: "0" }
        ]
      }
    });

    const { getByText } = render(<ThingsList />);

    await wait(() => {
      expect(getByText(/Camiseta/)).toBeInTheDocument();
      expect(getByText(/Octaveta/)).toBeInTheDocument();
    });
  });
});
