import React, {useState} from 'react';
import Plot from 'react-plotly.js';

export default function Graph() {
    const annotations = []

    const [detail, setDetail] = useState("");

    const televisionTrace = {
        showlegend : true,
        x : [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        y : [74, 82, 80, 74, 73, 72, 74, 70, 70, 66, 66, 69],
        type: 'scatter',
        mode: 'lines',
        line: {color: 'orange'},
        name : "Television",
        // result : result()
    }
    console.log(1);
    
    const newspaperTrace = {
        showlegend : true,
        x : [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        y : [45, 42, 50, 46, 36, 36, 34, 35, 32, 31, 31, 28],
        type: 'scatter',
        mode: 'lines+markers',
        line: {color: 'blue'},
        name : "Newspaper",
    }
    
    const radioTrace = {
        x : [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        y : [13, 14, 20, 24, 20, 24, 24, 40, 35, 41, 43, 50],
        type: 'scatter',
        mode: 'lines+markers',
        line: {color: 'black'},
        name : "Radio"
    }
    
    const internetTrace = {
        showlegend : true,
        x : [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012],
        y : [18, 21, 18, 21, 16, 14, 13, 18, 17, 16, 19, 23],
        type: 'scatter',
        mode: 'lines+markers',
        line: {color: 'green'},
        name : "Internet",
    }
    // debugger;
    
    const televisionTraceEndPoints = {
        showlegend : false,
        x : [televisionTrace.x[0], televisionTrace.x[televisionTrace.x.length - 1]],
        y : [televisionTrace.y[0], televisionTrace.y[televisionTrace.y.length - 1]],
        text : [`Television ${televisionTrace.y[0]}%`, `${televisionTrace.y[televisionTrace.y.length - 1]}%`],
        mode : "markers",
        marker : {color : televisionTrace.line.color}
    }

    const pointDetail = (e) =>{
        setDetail(`In the year ${e.points[0].x}, ${e.points[0].data.name} was used as the ${e.points[0].y}% of main sources of news`);
    }

    setTimeout(() => {
        setDetail("")
    },10000);

  return (
    <React.Fragment>
        <h3 style={{margin : "0px"}}>Click on any button to know its detail</h3>
        <Plot
            data={[televisionTrace, newspaperTrace, radioTrace, internetTrace, televisionTraceEndPoints]}
            labels = {['Television', 'Newspaper', 'Internet', 'Radio']}
            scrollZoom = {true}
            layout={
                {
                    showlegend : true,
                    width : "1000",
                    height: "700", 
                    title : 'Variation of Main sources of News over the years', 
                    scale : 1,
                    yaxis : {showgrid: true, zeroline: false, showline: false, showticklabels: true, title : "percentage"},
                    xaxis : {showgrid: false, zeroline: false, showline: false, showticklabels: true, title : "year"},
                }
            }
            onClick={pointDetail}
            annotations={annotations}           
        />
        {detail && <p>{detail}</p>}
    </React.Fragment>
  )
}
