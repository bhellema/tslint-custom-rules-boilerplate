import * as Lint from "tslint";
import * as ts from "typescript";

export class Rule extends Lint.Rules.AbstractRule {
  public static FAILURE_STRING = "Use of OmegaEvent is forbidden.";

  public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
    return this.applyWithWalker(new NoOmegaEvent(sourceFile, this.getOptions()));
  }
}

class NoOmegaEvent extends Lint.RuleWalker {
  public visitIdentifier(node: ts.Identifier) {
    if (node.getText() === "OmegaEvent") {
      this.addFailure(this.createFailure(node.getStart(), node.getWidth(), Rule.FAILURE_STRING));
    }
  }
}
