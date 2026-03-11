import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"

import App from "./App"

describe("landing responsive rendering", () => {
  it("renders benchmark tabs from the benchmark data", () => {
    render(<App />)

    expect(screen.getByRole("button", { name: "Alibaba" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Netflix" })).toBeInTheDocument()
    expect(screen.getByRole("button", { name: "Jobs" })).toBeInTheDocument()
  })

  it("renders install modes for all supported environments", () => {
    render(<App />)

    expect(screen.getAllByRole("button", { name: "Claude Code" }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole("button", { name: "Codex CLI" }).length).toBeGreaterThan(0)
    expect(screen.getAllByRole("button", { name: "项目级安装" }).length).toBeGreaterThan(0)
  })

  it("renders a dedicated mobile excuses comparison view", () => {
    render(<App />)

    expect(screen.getByTestId("excuses-mobile")).toBeInTheDocument()
  })

  it("renders both desktop and mobile scenario comparison containers", () => {
    render(<App />)

    expect(screen.getByTestId("scenarios-desktop")).toBeInTheDocument()
    expect(screen.getByTestId("scenarios-mobile")).toBeInTheDocument()
  })
})
