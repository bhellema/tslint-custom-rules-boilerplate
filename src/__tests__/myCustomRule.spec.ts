import { getFixedResult, helper } from "../lintRunner";
import { Rule } from "../no-omegaevent";

const rule = "my-custom";

describe("disallows OmegaEvents]", () => {
  it(`testing failure example`, () => {
    const src = `import { OmegaEvent } from "@aep/omega-react-spectrum";`;
    const result = helper({ src, rule });
    expect(result.errorCount).toBe(1);
  });

  it(`testing not failure example`, () => {
    const src = `import { Button } from "@react/react-spectrum/Button";`;
    const result = helper({ src, rule });
    expect(result.errorCount).toBe(0);
  });

  it(`testing failure message example`, () => {
    const src = `import { OmegaEvent } from "@aep/omega-react-spectrum";`;
    const failure = helper({ src, rule }).failures[0];

    expect(failure.getFailure()).toBe(Rule.FAILURE_STRING);
  });
});
