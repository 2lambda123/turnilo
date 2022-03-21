/*
 * Copyright 2017-2018 Allegro.pl
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

import { Datum } from "plywood";
import React from "react";
import { Essence } from "../../../../../common/models/essence/essence";
import { formatSegment } from "../../../../../common/utils/formatter/formatter";
import { getNominalDimension, getNominalSplit, hasNominalSplit } from "../../utils/splits";
import "./label.scss";

interface LabelProps {
  essence: Essence;
  datum: Datum;
}

export const Label: React.FunctionComponent<LabelProps> = props => {
  const { essence, datum } = props;
  if (hasNominalSplit(essence)) {
    const nominalSplit = getNominalSplit(essence);
    const nominalDimension = getNominalDimension(essence);
    const splitValue = nominalSplit.selectValue(datum);
    return <div className="split-chart-label">
    <span className="split-chart-dimension-title">
      {nominalDimension.title}
    </span>
      <span className="split-chart-value">
      : {formatSegment(splitValue, essence.timezone)}
    </span>
    </div>;
  }
  return null;
};
