import React from 'react'

export default function D3info() {
  return (
    <React.Fragment>
        <h1>D3 or d3.csv</h1>
        D3 is an open source JS library
        <p><span style={{backgroundColor : "rgba(53, 121, 203, 0.4)"}}>D3 provides built-in support for parsing comma-separated values (.csv  files), tab-separated values and arbitrary delimiter-separated values. These tabular formats are popular with spreadsheet programs such as Microsoft Excel.</span> Tabular formats are often more space-efficient than JSON, which can improve loading times for large datasets.</p>
        <a rel="noreferrer" href="https://d3-wiki.readthedocs.io/zh_CN/master/CSV/" target="_blank">Read more</a>
        <ul type="none">
            <li>Parsing data in d3</li>
            <li>continuing with rows and columns</li>
            <li>estimating data size</li>
            <li>constructing & displaying text with d3 and css</li>
            <li>using d3.csv, csvParse and csvFormat</li>
        </ul>
        <strong>use <u>npm install --save react-d3-library</u> and then <u>import rd3 from 'react-d3-library'</u> to use d3 library</strong>
    </React.Fragment>
  )
}
