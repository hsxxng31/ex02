import React from "react";
import "./MyTable.css";

function TimesTable() {
  let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // 구구단 테이블 생성
  let timesTable = num.map((a, index) => (
    <tr className="">
      {num.map((b) => (
        <td>
          {b} * {a} = {a * b}
        </td>
      ))}
    </tr>
  ));

  return (
    <table className="MyTable">
      <tbody>{timesTable}</tbody>
    </table>
  );
}

export default TimesTable;
