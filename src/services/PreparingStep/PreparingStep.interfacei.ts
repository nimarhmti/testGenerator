import React from "react";
export interface submitOrderModel {
  type: string;
  level: string;
  max_scoure: number | string;
  time?: number | string;
  lectures: string[];
  topic_id: number | string;
}
