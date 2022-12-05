import React from 'react'
import Plot from 'react-plotly.js'

export default function UnstructuredDataGraph() {

  const z1 = [
    [8.83,8.89,8.81,8.87,8.9,8.87],
    [8.89,8.94,8.85,8.94,8.96,8.92],
    [8.84,8.9,8.82,8.92,8.93,8.91],
    [8.79,8.85,8.79,8.9,8.94,8.92],
    [8.79,8.88,8.81,8.9,8.95,8.92],
    [8.8,8.82,8.78,8.91,8.94,8.92],
    [8.75,8.78,8.77,8.91,8.95,8.92],
    [8.8,8.8,8.77,8.91,8.95,8.94],
    [8.74,8.81,8.76,8.93,8.98,8.99],
    [8.89,8.99,8.92,9.1,9.13,9.11],
    [8.97,8.97,8.91,9.09,9.11,9.11],
    [9.04,9.08,9.05,9.25,9.28,9.27],
    [9,9.01,9,9.2,9.23,9.2],
    [8.99,8.99,8.98,9.18,9.2,9.19],
    [8.93,8.97,8.97,9.18,9.2,9.18]
  ];

  let z2 = [];
  for (let i=0;i<z1.length;i++ ) { 
    let z2_row = [];
      for(let j=0;j<z1[i].length;j++) { 
        z2_row.push(z1[i][j]+1);
      }
      z2.push(z2_row);
  }

  let z3 = []
  for (let i=0;i<z1.length;i++ ) { 
    let z3_row = [];
      for(let j=0;j<z1[i].length;j++) { 
        z3_row.push(z1[i][j]-1);
      }
      z3.push(z3_row);
  }

  const data_z1 = {z: z1, type: 'surface'};
  const data_z2 = {z: z2, showscale: false, opacity:0.9, type: 'surface'};
  const data_z3 = {z: z3, showscale: false, opacity:0.9, type: 'surface'};

  const layout = {
    title: 'Multiple 3D surface plots',
    scene: {camera: {eye: {x: 1.87, y: 0.88, z: -0.64}}},
    autosize: false,
    width: 900,
    height: 900,
    margin: {
      l: 65,
      r: 50,
      b: 65,
      t: 90,
    }
  };

  const pointExplored = (e) => {
    console.log(e.points[0].x, e.points[0].y, e.points[0].z);
  }

  return (
    <>
        <Plot
            data = {[data_z1, data_z2, data_z3]}
            layout = {layout}
            onClick={pointExplored}
        />
    </>
  )
}
