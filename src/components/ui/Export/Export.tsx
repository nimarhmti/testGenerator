import React from "react";
import {
  Page,
  Text,
  Image,
  Document,
  StyleSheet,
  View,
  Font,
} from "@react-pdf/renderer";
import { type } from "os";
// import LebronStretch from "../photos/lebron_transparent.png";
interface Pivot {
  order_id: number;
  question_id: number;
}
interface Date {
  id: number;
  lecture: number;
  level: string;
  pivot: Pivot;
  question: string;
  topic_id: number;
}
interface Props {
  data: Date[];
}
Font.register({
  family: "IRANSans",
  format: "truetype",
  fonts: [
    {
      src: "IRANSans",
      fontWeight: 400,
    },
  ],
});
const styles = StyleSheet.create({
  page: {
    fontFamily: "IRANSans",
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    display: "flex",
    justifyContent: "space-evenly",
    textAlign: "center",
    marginBottom: "60px",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
  },
  textQuestions: {
    display: "flex",
    flexDirection: "column",
    // alignItems: "center",
    gap: "30px",
  },

  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },

  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const title = {
  firstName: "نام",
  lastName: "نام خانوادگی",
  issue: "موضوع",
  time: "زمان",
};

const PDFFile = ({ data }: Props) => {
  return (
    <Document>
      <Page style={styles.body}>
        <View style={styles.header}>
          <Text>{title.firstName}:</Text>
          <Text>{title.lastName}:</Text>
          <Text>{title.issue}</Text>
          <Text>{title.time}</Text>
        </View>
        <View style={styles.textQuestions}>
          {data.map((item: Date) => (
            <Text key={item.id}>{item.question}(1نمره)</Text>
          ))}
        </View>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
