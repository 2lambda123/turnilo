/*
 * Copyright 2015-2016 Imply Data, Inc.
 * Copyright 2017-2019 Allegro.pl
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { expect } from "chai";
import React from "react";
import * as ReactDOM from "react-dom";
import * as TestUtils from "react-dom/test-utils";
import * as sinon from "sinon";
import { findDOMNode, renderIntoDocument } from "../../utils/test-utils";
import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("adds the correct class", () => {
    const renderedComponent = renderIntoDocument(
      <Checkbox
        selected={true}
      />
    );

    expect(TestUtils.isCompositeComponent(renderedComponent), "should be composite").to.equal(true);
    expect((ReactDOM.findDOMNode(renderedComponent) as Element).className, "should contain class").to.contain("checkbox");
  });

  it("not checked + check", () => {
    const onClick = sinon.spy();

    const renderedComponent = renderIntoDocument(
      <Checkbox selected={false} onClick={onClick} />
    );

    const svgs = TestUtils.scryRenderedDOMComponentsWithTag(renderedComponent as React.Component, "svg");
    expect(svgs.length).to.equal(0);

    expect(onClick.callCount).to.equal(0);
    TestUtils.Simulate.click(findDOMNode(renderedComponent));
    expect(onClick.callCount).to.equal(1);
  });
});
